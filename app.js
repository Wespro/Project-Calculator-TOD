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

//calculater   event listeners
//varibles
let num1 = "";
let num2 = "";
let result = "";
let operator = "";
let lastValue = "";
const Screen = document.querySelector(".screen");
const operators = document.querySelectorAll(".operator");
const Result = document.querySelector(".result");

//click
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
      if (!Result.textContent.includes(".")) {
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
}
//keyboard
window.addEventListener("keydown", (e) => {
  const key = document.querySelector(`button[data-key ="${e.key}"]`);
  if (key) {
    if (key.classList.contains("button")) {
      if (key.classList.contains("operator")) {
        toggleOperator(e, key);
        equalsIfOperator(e, key);
        lastValue = key.textContent;
      } else if (key.classList.contains("equals")) {
        equals(e);
        lastValue = result;
      } else if (key.classList.contains("clear")) {
        clear();
      } else if (key.classList.contains("digit")) {
        enterNum(e, key);
        if ((lastValue === "" && operator !== "") || lastValue === operator) {
          lastValue = key.textContent;
        } else {
          lastValue += key.textContent;
        }
      } else if (key.classList.contains("del")) {
        del(e);
      } else if (key.classList.contains("dot")) {
        lastValue = key.textContent;
        if (num2 !== "" && operator !== "") {
          Result.textContent += key.textContent;
          num2 += key.textContent;
        } else if (num2 === "") {
          Result.textContent += key.textContent;
          num1 = Result.innerText;
        }
      }
    }
  }
});
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

function equalsIfOperator(e, key) {
  if (num2 !== "" && num1 !== "" && operator !== "" && result === "") {
    result = Math.round(operate(num1, operator, num2) * 100) / 100;
    num1 = "";
    num2 = "";
    Result.textContent = result;
    operator = e.type === "click" ? e.target.textContent : key.textContent;
  } else if (result !== "" && num1 !== "" && num2 === "" && operator !== "") {
    result = Math.round(operate(result, operator, num1) * 100) / 100;
    num1 = "";
    Result.textContent = result;
    operator = e.type === "click" ? e.target.textContent : key.textContent;
  } else {
    operator = e.type === "click" ? e.target.textContent : key.textContent;
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

function enterNum(e, key) {
  if (Result.textContent === "0" || (num1 === "" && result !== "")) {
    Result.textContent =
      e.type === "click" ? e.target.textContent : key.textContent;
    num1 = e.type === "click" ? e.target.textContent : key.textContent;
  } else {
    if (operator !== "" && num1 !== "") {
      if (num2 === "" && result === "") {
        Result.textContent =
          e.type === "click" ? e.target.textContent : key.textContent;
        num2 = e.type === "click" ? e.target.textContent : key.textContent;
      } else if (num2 !== "" && result !== "") {
        Result.textContent +=
          e.type === "click" ? e.target.textContent : key.textContent;
        num2 += e.type === "click" ? e.target.textContent : key.textContent;
      } else if (num2 !== "" && result === "") {
        Result.textContent +=
          e.type === "click" ? e.target.textContent : key.textContent;
        num2 += e.type === "click" ? e.target.textContent : key.textContent;
      } else {
        Result.textContent +=
          e.type === "click" ? e.target.textContent : key.textContent;
        num1 += e.type === "click" ? e.target.textContent : key.textContent;
      }
    } else {
      if (num1 === "") {
        num1 = "";
      }
      Result.textContent +=
        e.type === "click" ? e.target.textContent : key.textContent;

      num1 += e.type === "click" ? e.target.textContent : key.textContent;
    }
  }
}

function del(e) {
  if (Result.innerText === num1 && num2 === "") {
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
function toggleOperator(e, key) {
  operators.forEach((item) => {
    item.classList.remove("activeOpertator");
  });
  e.type === "click"
    ? e.target.classList.toggle("activeOpertator")
    : key.classList.toggle("activeOpertator");
}

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// function equalsIfOperatorKeys(e, key) {
//   if (num2 !== "" && num1 !== "" && operator !== "" && result === "") {
//     result = Math.round(operate(num1, operator, num2) * 100) / 100;
//     num1 = "";
//     num2 = "";
//     Result.textContent = result;
//     operator = key.textContent;
//   } else if (result !== "" && num1 !== "" && num2 === "" && operator !== "") {
//     result = Math.round(operate(result, operator, num1) * 100) / 100;
//     num1 = "";
//     Result.textContent = result;
//     operator = key.textContent;
//   } else {
//     operator = key.textContent;
//     Result.textContent = "";
//   }
// }

// function enterNumKeys(e, key) {
//   if (Result.textContent === "0" || (num1 === "" && result !== "")) {
//     Result.textContent = key.textContent;
//     num1 = key.textContent;
//   } else {
//     if (operator !== "" && num1 !== "") {
//       if (num2 === "" && result === "") {
//         Result.textContent = key.textContent;
//         num2 = key.textContent;
//       } else if (num2 !== "" && result !== "") {
//         Result.textContent += key.textContent;
//         num2 += key.textContent;
//       } else if (num2 !== "" && result === "") {
//         Result.textContent += key.textContent;
//         num2 += key.textContent;
//       } else {
//         Result.textContent += key.textContent;
//         num1 += key.textContent;
//       }
//     } else {
//       if (num1 === "") {
//         num1 = "";
//       }
//       Result.textContent += key.textContent;

//       num1 += key.textContent;
//     }
//   }
// }

// function toggleOperatorKeys(e, key) {
//   operators.forEach((item) => {
//     item.classList.remove("activeOpertator");
//   });
//   key.classList.toggle("activeOpertator");
// }
