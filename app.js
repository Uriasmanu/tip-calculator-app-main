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

/*const valorInicial = document.getElementById("bill"); // obter a referência ao elemento input
let bill = ''; // inicializar a variável inputValue
valorInicial.addEventListener('keydown', function(event) {
  if (event.key === 'Enter') { // verificar se a tecla pressionada foi "Enter"
    bill = valorInicial.value; // acessar o valor inserido no input e armazená-lo em inputValue
    console.log(bill); // imprimir o valor inserido no console
  }
});*/

function InputDoValor(inputElement, onEnterPressed) {
  inputElement.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
      const value = inputElement.value;
      onEnterPressed(value);
    }
    
  });
}

  const valorInicial = document.getElementById("bill");
  InputDoValor(valorInicial, function(value) {
    console.log(value);
  })

  var desconto = document.querySelectorAll(".button");

  function valorDesconto (valor){
    valor.addEventListener("click", function(event){
      
    })
  }
  
  console.log(desconto)

  desconto.forEach( (elemento) => {
    elemento.addEventListener('click', (evento) => {

      
        
    })
})

