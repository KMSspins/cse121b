/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */
function add (number1, number2) {
    return number1 + number2;
}

function addNumbers () {
   let addNumber1 = Number(document.getElementById("add1").value);
   let addNumber2 = Number(document.getElementById("add2").value);
   document.getElementById('sum').value = add(addNumber1, addNumber2);
}

document.getElementById('addNumbers').addEventListener('click', addNumbers); 

/* Function Expression - Subtract Numbers */

const subtract = function (number1, number2) {
    return number1 - number2;
}

const subtractNumbers = function () {
   let subtractNumber1 = Number(document.getElementById("subtract1").value);
   let subtractNumber2 = Number(document.getElementById("subtract2").value);
   document.getElementById("difference").value = subtract(subtractNumber1, subtractNumber2);
   
}

document.getElementById('subtractNumbers').addEventListener('click', subtractNumbers);


/* Arrow Function - Multiply Numbers */

const multiply = (number1, number2) => number1 * number2;

const multiplyNumbers = () => {
    let multiplyNumber1 = Number(document.getElementById("factor1").value);
    let multiplyNumber2 = Number(document.getElementById("factor2").value);
    document.getElementById("product").value = multiply(multiplyNumber1, multiplyNumber2);

}

document.getElementById("multiplyNumbers").addEventListener('click', multiplyNumbers);



/* Open Function Use - Divide Numbers */

const divide = (number1, number2) => number1 / number2;

const divideNumbers = () => {
    let divideNumber1 = Number(document.getElementById("dividend").value);
    let divideNumber2 = Number(document.getElementById("divisor").value);
    document.getElementById("quotient").value = divide(divideNumber1, divideNumber2);
}

document.getElementById("divideNumbers").addEventListener('click', divideNumbers);

/* Decision Structure */




/* ARRAY METHODS - Functional Programming */
/* Output Source Array */

/* Output Odds Only Array */

/* Output Evens Only Array */

/* Output Sum of Org. Array */

/* Output Multiplied by 2 Array */

/* Output Sum of Multiplied by 2 Array */
