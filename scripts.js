const container = document.querySelector("section"),
    display = container.querySelector(".js-display"),
    cBtn = container.querySelector(".js-cancel");
const numbers = container.querySelectorAll(".js-numberBtn"),
    equals = container.querySelector(".js-equalsBtn");

let firstNum = "";

function handleNumberClick(event) {
    const target = event.target;
    const num = target.innerText;
    firstNum = firstNum + num;
    display.innerText = firstNum;
}

function clearDisplay() {
    firstNum = "";
    display.innerText = firstNum;
}

function showResult() {

}

function init() {
    numbers.forEach(function(btn) {
        btn.addEventListener("click", handleNumberClick);
    });
    cBtn.addEventListener("click", clearDisplay);
    equals.addEventListener("click", showResult);
}

if (container) {
    init();
}