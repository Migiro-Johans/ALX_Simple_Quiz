/ Arithmetic functions
function add(number1, number2) {
  return number1 + number2;
}
function subtract(number1, number2) {
  return number1 - number2;
}
function multiply(number1, number2) {
  return number1 * number2;
}
function divide(number1, number2) {
  return number2 === 0 ? '∞' : number1 / number2; // simple guard
}

// Helper to read inputs
function getInputs() {
  const n1 = parseFloat(document.getElementById('number1').value) || 0;
  const n2 = parseFloat(document.getElementById('number2').value) || 0;
  return { n1, n2 };
}

// Wire buttons
document.getElementById('add').addEventListener('click', function () {
  const { n1, n2 } = getInputs();
  document.getElementById('calculation-result').textContent = add(n1, n2);
});

document.getElementById('subtract').addEventListener('click', function () {
  const { n1, n2 } = getInputs();
  document.getElementById('calculation-result').textContent = subtract(n1, n2);
});

document.getElementById('multiply').addEventListener('click', function () {
  const { n1, n2 } = getInputs();
  document.getElementById('calculation-result').textContent = multiply(n1, n2);
});

document.getElementById('divide').addEventListener('click', function () {
  const { n1, n2 } = getInputs();
  document.getElementById('calculation-result').textContent = divide(n1, n2);
});
