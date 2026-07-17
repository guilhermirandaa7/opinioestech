<?php
// ============================================================
// Cadastro na newsletter — grava o e-mail na lista de assinantes.
// A lista fica FORA da public_html (../newsletter-dados/), então
// não é acessível pela web e sobrevive aos deploys do Git.
// ============================================================
header('Content-Type: application/json; charset=utf-8');

function resposta($ok, $msg) {
  echo json_encode(["ok" => $ok, "msg" => $msg], JSON_UNESCAPED_UNICODE);
  exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') resposta(false, 'Método inválido.');

$email = strtolower(trim($_POST['email'] ?? ''));
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) resposta(false, 'E-mail inválido.');

$dir = __DIR__ . '/../newsletter-dados';
if (!is_dir($dir)) { mkdir($dir, 0700, true); }

// chave secreta local (gerada uma única vez, nunca vai para o Git)
$chaveArq = $dir . '/chave.txt';
if (!file_exists($chaveArq)) {
  file_put_contents($chaveArq, bin2hex(random_bytes(32)));
  chmod($chaveArq, 0600);
}

$listaArq = $dir . '/assinantes.json';
$lista = file_exists($listaArq) ? json_decode(file_get_contents($listaArq), true) : [];
if (!is_array($lista)) $lista = [];

foreach ($lista as $item) {
  if ($item['email'] === $email && !empty($item['ativo'])) {
    resposta(true, 'Você já está inscrito! 👍');
  }
}

// remove registro inativo antigo do mesmo e-mail, se houver
$lista = array_values(array_filter($lista, fn($i) => $i['email'] !== $email));
$lista[] = ["email" => $email, "desde" => date('c'), "ativo" => true];

file_put_contents($listaArq, json_encode($lista, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE), LOCK_EX);
chmod($listaArq, 0600);

resposta(true, 'Inscrição confirmada! Você recebe as manchetes toda manhã. 🎉');
