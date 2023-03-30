var form = document.querySelector('form');
var reset = document.querySelector("#reset");
var pessoas = document.querySelector("#valor");
var mensagemErro = document.querySelector("#mensagem-erro");

reset.addEventListener('click', function(evento)  {
    if (pessoas.value <= 0 ) {
      evento.preventDefault(); // impede o envio do formulário
      mensagemErro.textContent = "Can't be zero"; // exibe a mensagem de erro
      pessoas.style.borderColor = "red"; // define a cor da borda como vermelha
    } else {
      mensagemErro.textContent = ''; // remove a mensagem de erro caso o valor seja válido
      pessoas.style.borderColor = ""; // remove a cor da borda caso o valor seja válido
    }
  });

  pessoas.addEventListener('keydown', function(evento) {
    if (evento.key === 'Enter' && pessoas.value <= 0) {
      evento.preventDefault(); // impede o envio do formulário
      mensagemErro.textContent = "Can't be zero"; // exibe a mensagem de erro
      pessoas.style.borderColor = "red"; // define a cor da borda como vermelha
    } else {
      mensagemErro.textContent = ''; // remove a mensagem de erro caso o valor seja válido
      pessoas.style.borderColor = ""; // remove a cor da borda caso o valor seja válido
    }
  });

  var numero = document.querySelector("#numero");
numero.addEventListener('input', function() {
  if (!Number.isInteger(parseFloat(numero.value)) || numero.value < 0 || numero.value > 90) {
    numero.setCustomValidity("Only integer numbers between 1 and 90 are allowed");
    numero.reportValidity();
    numero.style.borderColor = "red"; // define a cor da borda como vermelha

  } else {
    numero.setCustomValidity("");
    numero.style.borderColor = ""; // remove a cor da borda caso o valor seja válido
  }
});

var valorInicial = document.getElementById("#bill");