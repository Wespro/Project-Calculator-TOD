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

//calculater event listener
//varibles
let num1 = "";
let num2 = "";
let result = "";
let operator = "";
let lastValue = "";
const Screen = document.querySelector(".screen");
const operators = document.querySelectorAll(".operator");
const Result = document.querySelector(".result");

window.addEventListener("click", getCalcValues);

function getCalcValues(e) {
  if (e.target.classList.contains("button")) {
    if (e.target.classList.contains("operator")) {
      toggleOperator(e);
      equalsIfOperator(e);
      lastValue = e.target.textContent;
    } else if (e.target.classList.contains("equals")) {
      equals(e);
      lastValue = result;
    } else if (e.target.classList.contains("clear")) {
      clear();
    } else if (e.target.classList.contains("digit")) {
      enterNum(e);
      if ((lastValue === "" && operator !== "") || lastValue === operator) {
        lastValue = e.target.textContent;
      } else {
        lastValue += e.target.textContent;
      }
    } else if (e.target.classList.contains("del")) {
      del(e);
    } else if (e.target.classList.contains("dot")) {
      lastValue = e.target.textContent;
      if (num2 !== "" && operator !== "") {
        Result.textContent += e.target.textContent;
        num2 += e.target.textContent;
      } else if (num2 === "") {
        Result.textContent += e.target.textContent;
        num1 = Result.innerText;
      }
    }
  }
}
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

function equalsIfOperator(e) {
  if (num2 !== "" && num1 !== "" && operator !== "" && result === "") {
    result = Math.round(operate(num1, operator, num2) * 100) / 100;
    num1 = "";
    num2 = "";
    Result.textContent = result;
    operator = e.target.textContent;
  } else if (result !== "" && num1 !== "" && num2 === "" && operator !== "") {
    result = Math.round(operate(result, operator, num1) * 100) / 100;
    num1 = "";
    Result.textContent = result;
    operator = e.target.textContent;
  } else {
    operator = e.target.textContent;
    Result.textContent = "";
  }
}

function equals(e) {
  if (num2 !== "" && num1 !== "" && operator !== "" && result === "") {
    result = Math.round(operate(num1, operator, num2) * 100) / 100;
    num1 = "";
    num2 = "";
    Result.textContent = result;
    operator = "";
  } else if (result !== "" && num1 !== "" && num2 === "" && operator !== "") {
    result = Math.round(operate(result, operator, num1) * 100) / 100;
    num1 = "";
    Result.textContent = result;
    operator = "";
  }
}
function clear() {
  Result.textContent = "0";
  num1 = "";
  num2 = "";
  operator = "";
  result = "";
  lastValue = "";
  operators.forEach((item) => {
    item.classList.remove("activeOpertator");
  });
}

function enterNum(e) {
  if (Result.textContent === "0" || (num1 === "" && result !== "")) {
    Result.textContent = e.target.textContent;
    num1 = e.target.textContent;
  } else {
    if (operator !== "" && num1 !== "") {
      if (num2 === "" && result === "") {
        Result.textContent = e.target.textContent;
        num2 = e.target.textContent;
      } else if (num2 !== "" && result !== "") {
        Result.textContent += e.target.textContent;
        num2 += e.target.textContent;
      } else if (num2 !== "" && result === "") {
        Result.textContent += e.target.textContent;
        num2 += e.target.textContent;
      } else {
        Result.textContent += e.target.textContent;
        num1 += e.target.textContent;
      }
    } else {
      if (num1 === "") {
        num1 = "";
      }
      Result.textContent += e.target.textContent;

      num1 += e.target.textContent;
    }
  }
}

function del(e) {
  if (lastValue === num1 && num2 === "") {
    Result.innerText = Result.innerText.slice(
      0,
      Result.innerText.length - 1,
      1
    );
    num1 = Result.innerText;
    lastValue = Result.innerText;
  } else if (lastValue === operator) {
    operator = "";
    lastValue = operator;
    operators.forEach((item) => {
      item.classList.remove("activeOpertator");
    });
  } else if (lastValue === result) {
    clear();
  } else {
    Result.innerText = Result.innerText.slice(0, Result.innerText.length - 1);
    num2 = Result.innerText;
    lastValue = Result.innerText;
  }
}

//hightliting the opertartor on UI
function toggleOperator(e) {
  operators.forEach((item) => {
    item.classList.remove("activeOpertator");
  });
  e.target.classList.toggle("activeOpertator");
}
