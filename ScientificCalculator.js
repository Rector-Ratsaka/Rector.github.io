

let expression = '';
let outputElement = document.getElementById('OutPut');
let inputElement = document.getElementById('InPut');
let trigMode = 'rad'; // Default mode is radians

function toggleDarkLightMode() {
            var body = document.body;
            body.classList.toggle("dark-mode");
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
       // Check for specific cases
           switch (value) {
             case 'sin':
             case 'cos':
             case 'tan':
               expression += `Math.${value}(`; // For trigonometric functions
               break;
             case 'pi':
               expression += 'Math.PI';
               break;
             default:
               expression += value;
           }
     }
  updateDisplay();
}

function updateDisplay() {
  inputElement.innerText = expression;
}

function calculate() {
  try {
    const result = eval(expression);
    outputElement.innerText = result.toString();
    updateDisplay();
  } catch (error) {
    outputElement.innerText = 'Error';
    updateDisplay();
  }
}

function setTrigMode(mode) {
  trigMode = mode;
  // Remove 'active' class from all buttons
  document.getElementById('degButton').classList.remove('active');
  document.getElementById('radButton').classList.remove('active');
  // Add 'active' class to the selected button
  document.getElementById(`${mode}Button`).classList.add('active');

  updateDisplay();
}


// trigMode will be 'deg' or 'rad'
function trigFunctions(value) {
  if (trigMode === 'deg') {
    // Convert degrees to radians before calling trigonometric functions
    value = (value * Math.PI) / 180;
  }

  switch (expression) {
    case 'sin':
      expression = 'Math.sin(value)';
      break;
    case 'exp':
      expression = Math.exp(value);
      break;
    case 'cos':
      expression = Math.cos(value);
      break;
    case 'tan':
      expression = Math.tan(value);
      break;
  }
  updateDisplay();
}
