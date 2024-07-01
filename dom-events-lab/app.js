/*-------------------------------- Constants --------------------------------*/

/*-------------------------------- Variables --------------------------------*/

/*------------------------ Cached Element References ------------------------*/

/*----------------------------- Event Listeners -----------------------------*/

/*-------------------------------- Functions --------------------------------*/
const display = document.querySelector('.display');


const buttons = document.querySelectorAll('.button');


let currentNumber = '';
let operator = '';
let previousNumber = '';


buttons.forEach((button) => {
  button.addEventListener('click', (event) => {
    const buttonText = event.target.innerText;


    if (button.classList.contains('number')) {
      currentNumber += buttonText;
      display.innerText = currentNumber;
    }


    else if (button.classList.contains('operator')) {
      operator = buttonText;
      previousNumber = currentNumber;
      currentNumber = '';
      display.innerText = '';
    }


    else if (button.classList.contains('equals')) {
      const result = calculate(previousNumber, operator, currentNumber);
      display.innerText = result;
      currentNumber = result;
      previousNumber = '';
      operator = '';
    }


    else if (button.classList.contains('operator') && buttonText === 'C') {
      currentNumber = '';
      previousNumber = '';
      operator = '';
      display.innerText = '';
    }
  });
});


function calculate(num1, operator, num2) {
  let result = 0;

  switch (operator) {
    case '+':
      result = parseFloat(num1) + parseFloat(num2);
      break;
    case '-':
      result = parseFloat(num1) - parseFloat(num2);
      break;
    case '*':
      result = parseFloat(num1) * parseFloat(num2);
      break;
    case '/':
      result = parseFloat(num1) / parseFloat(num2);
      break;
  }

  return result.toString();
}