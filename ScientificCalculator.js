

let expression = '';
let outputElement = document.getElementById('OutPut');
let inputElement = document.getElementById('InPut');

function toggleDarkLightMode(mode) {
    var body = document.body;
    if (mode === 'light') {
        body.classList.remove("dark-mode");
        body.classList.add("light-mode");
        document.getElementById("lightM").classList.add("blue-button");
        document.getElementById("darkM").classList.remove("blue-button");
    } else if (mode === 'dark') {
        body.classList.remove("light-mode");
        body.classList.add("dark-mode");
        document.getElementById("darkM").classList.add("blue-button");
        document.getElementById("lightM").classList.remove("blue-button");
    }
}

document.addEventListener("keydown", function(event) {
        handleKeyPress(event.key);
    });

    function handleKeyPress(key) {
        // Check if the pressed key is a number or an operator
        if (!isNaN(key) || "+-*/.".includes(key)) {
            r(key); // Call the function to handle the input
        } else if (key === "Enter") {
            r('='); // Pressing Enter will act as "="
        } else if (key === "Backspace") {
            r('back'); // Pressing Backspace will act as backspace
        }
    }

function r(value) {
   if (value === '=') {
    calculate(); // Trigger calculation
 } else if (value === 'C') {
   expression = ''; // Clear the entire expression
   outputElement.innerText = 0;
 } else if (value === 'back') {
   expression = expression.slice(0, -1); // Remove the last character
 } else {
   const funcs = ['sin', 'cos', 'tan', 'sqrt','exp','log10'];
   if (funcs.includes(value)) {
     expression += `math.${value}(`;
   } else if (value === '%') {
     expression += '/100';
   } else if (value === 'pi') {
     expression += 'math.pi';
   }else if (value=='fact'){
     expression+='factorial(';
   }else if (value=='pow'){
     expression+='**';
   } else {
     expression += value;
   }
 }
  updateDisplay();
}

function updateDisplay() {
  inputElement.innerText = expression;
}

function isValidInput(expression) {
  const validInputRegex = /^[0-9+\-*/().\s]+$/;
  return validInputRegex.test(expression);
}


function calculate() {
  try {
    const result = math.evaluate(expression);
    outputElement.innerText = result.toString();
    updateDisplay();
  } catch (error) {
    outputElement.innerText = 'Error';
    updateDisplay();
  }
}

function factorial(n){
    if (n==0 || n==1){
        return 1;
    }else{ return n*factorial(n-1)}
}


