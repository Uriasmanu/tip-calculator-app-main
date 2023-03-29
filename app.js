var reset = document.querySelector("#reset");
var pessoas = document.querySelector("#valor");
var mensagemErro = document.querySelector("#mensagem-erro");

reset.addEventListener('click', (evento) => {
    if (input.value <= 0) {
        evento.preventDefault(); // impede o envio do formulário
        mensagemErro.textContent = 'O valor deve ser maior que 0.'; // exibe a mensagem de erro
      } else {
        mensagemErro.textContent = ''; // remove a mensagem de erro caso o valor seja válido
      }
    });


