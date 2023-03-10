let displayValue = '';

function appendToDisplay(value) {
  displayValue += value;
  document.getElementById('result').value = displayValue;
}

function ez() {
  if(displayValue == 0 && appendToDisplay) {
    document.getElementById('result').innerHTML = 'sorry, need a text behind'
  } else if(displayValue !== 0 && appendToDisplay) {
    document.getElementById('result').value = displayValue;
  }
}

setTimeout(() => {
  ez()
}, 0);

function clearDisplay() {
  displayValue = '';
  document.getElementById('result').value = '';
}

function calculate() {
  const result = eval(displayValue);
  document.getElementById('result').value = result;
  displayValue = '';
}
