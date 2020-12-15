 // var that contains the operation
 let firstNum = '';
 let operatorValue = '';
 let secondNum = '';
 let result = "";
 const display = document.querySelector('#display');
 const digit = document.querySelectorAll('.digit');
 const operators = document.querySelectorAll('.operator');
 const buttons = document.querySelectorAll('button');
 const decimal =  document.getElementById('decimal');
 let clickCount = 0;



//basic operation functions
function add(a, b) {
    return a + b;
};

function substract(a,b) {
    return a - b;
};

function multiply(a, b) {
    return a * b;
};

function divide(a,b) {
    return a / b;
};
 // function that operates the functions above
function operate(operator, num1, num2) {
    if (operator === '+') {
        return add(+num1, +num2)
    } else if (operator === '-') {
        return substract(num1, num2)
    } else if (operator === '*') {
        return multiply(num1, num2)
    } else if (operator === '/') {
        return divide(num1, num2)
    };
 };


function updateDisplay() {
    display.textContent = 0;
}

updateDisplay();


function firstNumber () {
    digit.forEach(digit => {
        digit.addEventListener('click', () => {
            if (operatorValue == '' && result == '') {
            firstNum += digit.innerHTML;
            display.textContent = firstNum;
            
            updateDisplay;
            } 
        })
    })
};

function secondNumber () {
        digit.forEach(digit =>{
            digit.addEventListener('click', () => {
                if (firstNum !== '' && operatorValue !== "") {
                secondNum += digit.innerHTML;
                display.textContent = secondNum;
                result = operate(operatorValue, firstNum, secondNum);
                updateDisplay;
                } else if (firstNum == result) {
                    secondNum = digit.innerHTML;
                display.textContent = secondNum;
                }
            })
        })
}


function operation () {
    operators.forEach(operators => {
        operators.addEventListener('click', () => {
            if (operators.id === 'equal') {
                display.textContent = result;
                firstNum = '';
                secondNum = '';
                operatorValue = '';
                result = "";
                decimal.disabled = false;
            } else if (operators.id === 'clear') {
                display.textContent = '0';
                firstNum = '';
                secondNum = '';
                operatorValue = '';
                result = "";
                decimal.disabled = false;
            } else if (result !== "") {
                display.textContent = result;
                firstNum = result;
                secondNum ="";
                operatorValue = operators.id;
            } else if (operators.id == 'd') {
                firstNum = firstNum.substr(0,firstNum.length -1);
                display.textContent = firstNum;
            }  else {
                operatorValue += operators.id;
                decimal.disabled = false;
            }
     });
    
    });
    
}

function limitDecimal () {
    decimal.addEventListener('click', () => {
        clickCount++;

        if(clickCount > 0) {
            decimal.disabled = true; 
        }
    })
}



firstNumber()
secondNumber()
operation()
limitDecimal()

