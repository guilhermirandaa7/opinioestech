<?php
// ============================================================
// Descadastro da newsletter (link presente em todo e-mail).
// Valida o token HMAC para impedir remoções por terceiros.
// ============================================================
$dir = __DIR__ . '/../newsletter-dados';
$email = strtolower(trim($_GET['e'] ?? ''));
$token = $_GET['t'] ?? '';

$chaveArq = $dir . '/chave.txt';
$listaArq = $dir . '/assinantes.json';

function pagina($titulo, $texto) {
  header('Content-Type: text/html; charset=utf-8');
  echo "<!DOCTYPE html><html lang='pt-BR'><head><meta charset='utf-8'>
  <meta name='viewport' content='width=device-width, initial-scale=1'>
  <title>$titulo — Opiniões Tech</title>
  <style>body{font-family:system-ui,sans-serif;background:#f4f5fa;color:#161616;display:flex;align-items:center;justify-content:center;min-height:100vh;margin:0;padding:20px}
  .cartao{background:#fff;border:1px solid #e6e6e6;border-radius:12px;padding:40px;max-width:430px;text-align:center}
  h1{font-size:1.3rem;margin:0 0 10px} p{color:#636363;font-size:.95rem;line-height:1.6}
  a{color:#161616;font-weight:600}</style></head><body>
  <div class='cartao'><h1>$titulo</h1><p>$texto</p>
  <p><a href='https://opinioestech.com'>← Voltar ao site</a></p></div></body></html>";
  exit;
}

if (!$email || !$token || !file_exists($chaveArq) || !file_exists($listaArq)) {
  pagina('Link inválido', 'Este link de descadastro não é válido ou já expirou.');
}

$chave = trim(file_get_contents($chaveArq));
$esperado = hash_hmac('sha256', $email, $chave);
if (!hash_equals($esperado, $token)) {
  pagina('Link inválido', 'Este link de descadastro não é válido.');
}

$lista = json_decode(file_get_contents($listaArq), true) ?: [];
$mudou = false;
foreach ($lista as &$item) {
  if ($item['email'] === $email && !empty($item['ativo'])) {
    $item['ativo'] = false;
    $item['cancelado_em'] = date('c');
    $mudou = true;
  }
}
unset($item);

if ($mudou) {
  file_put_contents($listaArq, json_encode($lista, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE), LOCK_EX);
  pagina('Descadastro concluído', 'Você não vai mais receber o Diário de Tecnologia. Sentiremos sua falta!');
}
pagina('Tudo certo', 'Este e-mail já estava descadastrado.');
