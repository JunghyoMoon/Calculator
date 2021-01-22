const container = document.querySelector("section"),
    display = container.querySelector(".js-display"),
    cBtn = container.querySelector(".js-cancel");
const numbers = container.querySelectorAll(".js-numberBtn"),
    equals = container.querySelector(".js-equalsBtn"),
    addBtn = container.querySelector("#add"),
    subBtn = container.querySelector("#sub"),
    mulBtn = container.querySelector("#mul"),
    divBtn = container.querySelector("#div");

let displayNum = "";
let result = "";

function add() {
    displayNum = "";
    display.innerText = displayNum;
    result = `${eval(result)}`;
    display.innerText = result
    result = result + addBtn.innerText;
}

function sub() {
    displayNum = "";
    display.innerText = displayNum;
    result = `${eval(result)}`;
    display.innerText = result
    result = result + subBtn.innerText;
    }

function mul() {
    displayNum = "";
    display.innerText = displayNum;
    result = `${eval(result)}`;
    display.innerText = result
    result = result + mulBtn.innerText;
    }

function div() {
    displayNum = "";
    display.innerText = displayNum;
    result = `${eval(result)}`;
    display.innerText = result
    result = result + divBtn.innerText;
}


function handleNumberClick(event) {
    const target = event.target;
    const num = target.innerText;
    displayNum = displayNum + num;
    result = result + num;
    display.innerText = displayNum;
}

function clearDisplay() {
    displayNum = "";
    result = "";
    display.innerText = displayNum;
}

function showResult() {
    result = eval(result);
    display.innerText = result;
    displayNum = "";
    result = "";
}

function init() {
    numbers.forEach(function(btn) {
        btn.addEventListener("click", handleNumberClick);
    });
    cBtn.addEventListener("click", clearDisplay);
    equals.addEventListener("click", showResult);
    addBtn.addEventListener("click", add);
    subBtn.addEventListener("click", sub);
    mulBtn.addEventListener("click", mul);
    divBtn.addEventListener("click", div);
}

if (container) {
    init();
}