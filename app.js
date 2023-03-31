var form = document.querySelector('form');
var reset = document.querySelector("#reset");
var mensagemErro = document.querySelector("#mensagem-erro");

var pessoas = document.querySelector("#valor");

  pessoas.addEventListener('input', function() {
    if (!Number.isInteger(parseFloat(pessoas.value)) || pessoas.value < 0) {
      mensagemErro.textContent = "Can't be zero"; // exibe a mensagem de erro
      pessoas.reportValidity();
      pessoas.style.borderColor = "red"; // define a cor da borda como vermelha
  
    } else {
      mensagemErro.textContent = ''; // remove a mensagem de erro caso o valor seja válido
      pessoas.setCustomValidity("");
      pessoas.style.borderColor = ""; // remove a cor da borda caso o valor seja válido
    }
  });

  const numeroPessoas = document.getElementById("valor");
InputDoValor(numeroPessoas, function(value) {
  console.log(value);
})

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

const descontoCustom = document.getElementById("numero");
InputDoValor(descontoCustom, function(valuedesconto) {
  console.log(valuedesconto/100);
})


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
  
  const buttons = document.querySelectorAll('.button');

  buttons.forEach(button => {
    button.addEventListener('click', () => {
      const tipPercent = button.textContent.replace('%', ''); // remove o símbolo de porcentagem do texto do botão
      console.log(tipPercent/100); // imprime o valor da gorjeta selecionada no console
    });
  });
  
  form.addEventListener('submit', function(event) {
    event.preventDefault(); // impede o envio do formulário
  });

function ValorFinal (valor, descontar, dividir) {
    
  }

