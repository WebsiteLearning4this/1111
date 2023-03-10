let displayValue = '';

function appendToDisplay(value) {
  displayValue += value;
  document.getElementById('result').value = displayValue;
}

function clearDisplay() {
  displayValue = '';
  document.getElementById('result').value = '';
}

function calculate() {
  const result = eval(displayValue);
  document.getElementById('result').value = result;
  displayValue = '';
}
