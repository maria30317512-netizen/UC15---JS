let nome = prompt("Digite seu nome completo:");
let cargo = prompt("Digite seu cargo ou função:");
let empresa = prompt("Digite sua empresa ou escola:");
let email = prompt("Digite seu e-mail:");

nome = nome.toUpperCase();

console.log("==================================");
console.log("      CARTÃO DE VISITA");
console.log("==================================");
console.log("Nome: " + nome);
console.log("Cargo: " + cargo);
console.log("Empresa/Escola: " + empresa);
console.log("E-mail: " + email);

alert("Cartão de visita gerado com sucesso!");


let produto = prompt("Digite o nome do produto:");
let preco = parseFloat(prompt("Digite o preço do produto:"));
let percentual = parseFloat(prompt("Digite o percentual de desconto:"));

let valorDesconto = preco * percentual / 100;
let precoFinal = preco - valorDesconto;

console.log("----------------------------------");
console.log("CALCULADORA DE DESCONTO");
console.log("Produto: " + produto);
console.log("Preço Original: R$ " + preco.toFixed(2));
console.log("Valor do Desconto: R$ " + valorDesconto.toFixed(2));
console.log("Preço Final: R$ " + precoFinal.toFixed(2));

alert(
"Produto: " + produto +
"\nPreço Original: R$ " + preco.toFixed(2) +
"\nDesconto: R$ " + valorDesconto.toFixed(2) +
"\nPreço Final: R$ " + precoFinal.toFixed(2)
);



let senha = prompt("Digite uma senha:");

let tamanho = senha.length;

let temMaiuscula = /[A-Z]/.test(senha);
let temMinuscula = /[a-z]/.test(senha);

let classificacao;

if (tamanho >= 8 && temMaiuscula && temMinuscula) {
    classificacao = "Forte";
} else if (tamanho >= 6 && (temMaiuscula || temMinuscula)) {
    classificacao = "Média";
} else {
    classificacao = "Fraca";
}

console.log("----------------------------------");
console.log("VERIFICADOR DE SENHA");
console.log("Quantidade de caracteres: " + tamanho);
console.log("Classificação: " + classificacao);

alert("A força da senha é: " + classificacao);