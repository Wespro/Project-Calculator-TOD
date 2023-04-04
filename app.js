const add = function (num1, num2) {
  return num1 + num2;
};

const subtract = function (num1, num2) {
  return num1 - num2;
};

const multiply = function (nums) {
  let multinums = 1;
  for (let num of nums) {
    multinums *= Number(num);
  }
  return multinums;
};

const divide = function (nums) {
  let divnums = 1;
  for (let num of nums) {
    divnums /= Number(num);
  }
  return divnums;
};

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
