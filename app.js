//Basic math functions
const add = function (num1, num2) {
  return num1 + num2;
};

const subtract = function (num1, num2) {
  return num1 - num2;
};

const multiply = function (num1, num2) {
  return num1 * num2;
};

const divide = function (num1, num2) {
  return num1 / num2;
};
//varibles
let num1 = 0;
let operator = "";
let num2 = 0;
// Operate function to call the math functions after checking the operator
function operate(num1, operator, num2) {
  if (operator === "+") {
    add(num1, num2);
  } else if (operator === "-") {
    subtract(num1, num2);
  } else if (operator === "*") {
    multiply(num1, num2);
  } else if (operator === "/") {
    divide(num1, num2);
  }
}
//   const power = function (int, power) {
//     let result = 1;
//     for (let i = 0; i < power; i++) {
//       result *= int;
//     }
//     return result;
//   };

// const sum = function (nums) {
//     let sumnums = 0;
//     for (let num of nums) {
//       sumnums = Number(num) + Number(sumnums);
//     }
//     return sumnums;
//   };
//   const factorial = function (num) {
//     let result = 1;

//     for (let i = 1; i <= num; i++) {
//       result *= i;
//     }
//     return result;
//   };
