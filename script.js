let displayValue = '';

function appendToDisplay(value) {
  displayValue += value;
  document.getElementById('result').value = displayValue;
}

setTimeout(() => {
  if(displayValue !== 0 && appendToDisplay) {
    displayValue += appendToDisplay(value)
  }
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
