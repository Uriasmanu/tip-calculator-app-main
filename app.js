const billInput = document.getElementById('bill');
const numberOfPeopleInput = document.getElementById('valor');
const tipButtons = document.querySelectorAll('.buttons button');
const customTipInput = document.getElementById('numero');
const personTipOutput = document.getElementById('person');
const totalTipOutput = document.getElementById('total');
const resetButton = document.getElementById('reset');
const errorMessage = document.getElementById('mensagem-erro');

let billValue = 0;
let numberOfPeopleValue = 1;
let tipPercentageValue = 0;

// atualiza os valores de entrada de gorjeta, quando um botão de gorjeta é clicado
function updateTipPercentage(event) {
  tipPercentageValue = Number(event.target.innerText.replace('%', ''));
  customTipInput.value = ''; // limpa o valor do campo de entrada personalizado
  calculateTip();
}

// atualiza o valor de gorjeta personalizado, quando o usuário insere um valor
function updateCustomTip(event) {
  tipPercentageValue = Number(event.target.value);
  calculateTip();
}

// atualiza o valor de entrada da conta quando o usuário insere um valor
function updateBillValue(event) {
  billValue = Number(event.target.value);
  calculateTip();
}

// atualiza o valor de entrada do número de pessoas, quando o usuário insere um valor
function updateNumberOfPeopleValue(event) {
  numberOfPeopleValue = Number(event.target.value);
  if (numberOfPeopleValue <= 0) {
    numberOfPeopleInput.classList.add('error');
    errorMessage.innerText = "Can't be zero";
    numberOfPeopleInput.style.borderColor = "red"; // define a cor da borda como vermelha

  } else {
    numberOfPeopleInput.classList.remove('error');
    numberOfPeopleInput.style.borderColor = ""; // define a cor da borda como vermelha
    errorMessage.innerText = "";
    calculateTip();
  }
}


// calcula e atualiza os valores de saída da gorjeta e da conta
function calculateTip() {
  if (numberOfPeopleValue === 0) {
    errorMessage.innerText = "Number of people can't be zero";
    personTipOutput.value = '0.00';
    totalTipOutput.value = '0.00';
    return;
  } else {
    errorMessage.innerText = "";
  }

  const tipAmount = (billValue * (tipPercentageValue / 100)) / numberOfPeopleValue;
  const totalAmount = (billValue / numberOfPeopleValue) + tipAmount;

  personTipOutput.value = tipAmount.toFixed(2);
  totalTipOutput.value = totalAmount.toFixed(2);
}

// redefine todos os valores
function resetValues() {
  billInput.value = '';
  numberOfPeopleInput.value = 1;
  customTipInput.value = '';
  tipPercentageValue = 0;
  billValue = 0;
  numberOfPeopleValue = 1;
  personTipOutput.value = '0.00';
  totalTipOutput.value = '0.00';
}

// adiciona ouvintes de evento a todos os elementos relevantes
tipButtons.forEach(button => {
  button.addEventListener('click', updateTipPercentage);
});

customTipInput.addEventListener('input', updateCustomTip);
billInput.addEventListener('input', updateBillValue);
numberOfPeopleInput.addEventListener('input', updateNumberOfPeopleValue);
resetButton.addEventListener('click', resetValues);

