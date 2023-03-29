var form = document.querySelector('form');
var reset = document.querySelector("#reset");
var pessoas = document.querySelector("#valor");
var mensagemErro = document.querySelector("#mensagem-erro");

reset.addEventListener('click', function(evento)  {
    if (pessoas.value <= 0 ) {
        evento.preventDefault(); // impede o envio do formulário
        mensagemErro.textContent = "Can't be zero"; // exibe a mensagem de erro
      } else {
        mensagemErro.textContent = ''; // remove a mensagem de erro caso o valor seja válido
      }
    });


