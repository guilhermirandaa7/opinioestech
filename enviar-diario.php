<?php
// ============================================================
// Envio diário do "Diário de Tecnologia" aos assinantes.
// Rodado pelo Cron Job da Hostinger toda manhã. Idempotente:
// não envia duas vezes no mesmo dia.
// Execução: via CLI (cron) ou via web com ?k=<chave>.
// ============================================================
$dir = __DIR__ . '/../newsletter-dados';
$chaveArq = $dir . '/chave.txt';
$listaArq = $dir . '/assinantes.json';
$estadoArq = $dir . '/ultimo-envio.txt';

date_default_timezone_set('America/Sao_Paulo');

function sair($msg) { echo $msg . "\n"; exit; }

// --- autorização ---
$viaCli = (php_sapi_name() === 'cli');
if (!$viaCli) {
  if (!file_exists($chaveArq)) sair('Sem chave.');
  $chave = trim(file_get_contents($chaveArq));
  if (!hash_equals($chave, $_GET['k'] ?? '')) { http_response_code(403); sair('Não autorizado.'); }
}

// --- trava de idempotência (1 envio por dia) ---
$hoje = date('Y-m-d');
if (file_exists($estadoArq) && trim(file_get_contents($estadoArq)) === $hoje && empty($_GET['forcar'])) {
  sair("Já enviado hoje ($hoje).");
}

// --- assinantes ativos ---
if (!file_exists($listaArq)) sair('Nenhum assinante ainda.');
$lista = json_decode(file_get_contents($listaArq), true) ?: [];
$ativos = array_values(array_filter($lista, fn($i) => !empty($i['ativo'])));
if (!$ativos) sair('Nenhum assinante ativo.');

// --- manchetes do dia ---
$noticias = json_decode(@file_get_contents(__DIR__ . '/noticias.json'), true);
$itens = $noticias['itens'] ?? [];
if (!$itens) sair('Sem manchetes disponíveis.');
$itens = array_slice($itens, 0, 12);

$chave = trim(file_get_contents($chaveArq));

// --- corpo do e-mail (HTML simples, alinhado ao tema do site) ---
function corpoEmail($itens, $linkCancelar) {
  $linhas = '';
  foreach ($itens as $it) {
    $t = htmlspecialchars($it['titulo'], ENT_QUOTES, 'UTF-8');
    $f = htmlspecialchars($it['fonte'], ENT_QUOTES, 'UTF-8');
    $l = htmlspecialchars($it['link'], ENT_QUOTES, 'UTF-8');
    $linhas .= "<tr><td style='padding:12px 0;border-bottom:1px solid #e6e6e6'>
      <div style='font-size:11px;letter-spacing:1px;text-transform:uppercase;color:#888;margin-bottom:4px'>$f</div>
      <a href='$l' style='color:#161616;font-size:15px;font-weight:600;text-decoration:none'>$t</a>
    </td></tr>";
  }
  $data = date('d/m/Y');
  return "<!DOCTYPE html><html><body style='margin:0;background:#f4f5fa;padding:24px 12px;font-family:Arial,Helvetica,sans-serif'>
  <table role='presentation' align='center' width='100%' style='max-width:560px;background:#fff;border:1px solid #e6e6e6;border-radius:12px'>
    <tr><td style='background:#161616;border-radius:12px 12px 0 0;padding:20px 28px'>
      <div style='color:#fff;font-size:18px;font-weight:700;letter-spacing:2px'>OPINIÕES <span style='color:#aaa'>TECH</span></div>
      <div style='color:#aaa;font-size:12px;letter-spacing:2px;text-transform:uppercase;margin-top:4px'>Diário de tecnologia · $data</div>
    </td></tr>
    <tr><td style='padding:8px 28px 20px'>
      <table role='presentation' width='100%'>$linhas</table>
      <p style='margin-top:22px'>
        <a href='https://opinioestech.com' style='display:inline-block;background:#161616;color:#fff;font-size:13px;font-weight:600;letter-spacing:1px;text-transform:uppercase;text-decoration:none;padding:12px 22px;border-radius:4px'>Ver análises no site</a>
      </p>
    </td></tr>
    <tr><td style='padding:16px 28px;border-top:1px solid #e6e6e6'>
      <p style='color:#888;font-size:11px;line-height:1.6;margin:0'>
        Você recebe este e-mail porque se inscreveu no Diário de Tecnologia da Opiniões Tech.<br>
        <a href='$linkCancelar' style='color:#888'>Cancelar inscrição</a> ·
        <a href='https://opinioestech.com' style='color:#888'>opinioestech.com</a>
      </p>
    </td></tr>
  </table></body></html>";
}

// --- envio ---
$assunto = "Diário de Tecnologia — " . date('d/m/Y');
$enviados = 0; $falhas = 0;
foreach ($ativos as $a) {
  $email = $a['email'];
  $token = hash_hmac('sha256', $email, $chave);
  $linkCancelar = "https://opinioestech.com/cancelar.php?e=" . urlencode($email) . "&t=$token";
  $corpo = corpoEmail($itens, $linkCancelar);
  $headers = "MIME-Version: 1.0\r\n" .
             "Content-Type: text/html; charset=UTF-8\r\n" .
             "From: Opiniões Tech <noticias@opinioestech.com>\r\n" .
             "List-Unsubscribe: <$linkCancelar>\r\n";
  if (mail($email, $assunto, $corpo, $headers)) $enviados++; else $falhas++;
}

file_put_contents($estadoArq, $hoje);
sair("Envio concluído: $enviados enviados, $falhas falhas, " . count($ativos) . " ativos.");
