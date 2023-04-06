const form = document.querySelector('form');
const reset = document.querySelector("#reset");
const mensagemErro = document.querySelector("#mensagem-erro");


let valorBill;
//Recebendo os valores enviado no input bill
const valorInicial = document.getElementById("bill"); 

InputDoValor(valorInicial, function(value) {
valorBill = value;
console.log(valorBill);
});

function InputDoValor(inputElement, onEnterPressed) { 
inputElement.addEventListener('keydown', function(event) {
if (event.key === 'Enter') {
const value = inputElement.value;
onEnterPressed(value); //recebe o valor do input apos o clique do enter
}
});
}

form.addEventListener('submit', function(event) {
event.preventDefault();
}); // impede o envio do formulário na hora que o enter é clicado

const pessoas = document.querySelector("#valor");

pessoas.addEventListener('input', function() {
if (!Number.isInteger(parseFloat(pessoas.value)) || pessoas.value < 0) {
mensagemErro.textContent = "Can't be zero"; // exibe a mensagem de erro
pessoas.reportValidity();
pessoas.style.borderColor = "red"; // define a cor da borda como vermelha
} else {
mensagemErro.textContent = ''; // remove a mensagem de erro caso o valor
pessoas.setCustomValidity("");
pessoas.style.borderColor = ""; // remove a cor da borda caso o valor seja válido
}
});

let quantidadePessoas;
const numeroPessoas = document.getElementById("valor");

InputDoValor(numeroPessoas, function(value) {
quantidadePessoas = value;
console.log(quantidadePessoas);
});

const numero = document.querySelector("#numero");

numero.addEventListener('input', function() {
if (!Number.isInteger(parseFloat(numero.value)) || numero.value < 0 || numero.value > 90) {
numero.setCustomValidity("Only integer numbers between 1 and 90 are allowed");
numero.reportValidity();
numero.style.borderColor = "red";
} else {
numero.setCustomValidity("");
numero.style.borderColor = "";
}
});

let valorCustomizado;
const descontoCustom = document.getElementById("numero");

InputDoValor(descontoCustom, function(valuedesconto) {
valorCustomizado = (valuedesconto/100);
console.log(valorCustomizado);
});

let botaoDesconto;
const buttons = document.querySelectorAll('.button');

buttons.forEach(button => {
button.addEventListener('click', () => {
const tipPercent = button.textContent.replace('%', ''); // remove o símbolo de porcentagem do texto do botão
botaoDesconto = (tipPercent/100)
console.log(botaoDesconto);
});
});

