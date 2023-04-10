//Basic math functions
const add = function (num1, num2) {
  return Number(num1) + Number(num2);
};

const subtract = function (num1, num2) {
  return Number(num1) - Number(num2);
};

const multiply = function (num1, num2) {
  return Number(num1) * Number(num2);
};

const divide = function (num1, num2) {
  return Number(num1) / Number(num2);
};

//
// Operate function to call the math functions after checking the operator
function operate(num1, operator, num2) {
  if (operator === "+") {
    return add(num1, num2);
  } else if (operator === "-") {
    return subtract(num1, num2);
  } else if (operator === "*") {
    return multiply(num1, num2);
  } else if (operator === "/") {
    return divide(num1, num2);
  }
}
