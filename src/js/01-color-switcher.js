function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const startBtn = document.querySelector('button[data-start]');
const stoptBtn = document.querySelector('button[data-stop]');
const body = document.querySelector('body');

let timerId;

stoptBtn.disabled = true;

startBtn.addEventListener('click', start);
stoptBtn.addEventListener('click', stop);

function start(event) {
    changeColor();
    timerId = setInterval(changeColor, 1000);
    startBtn.disabled = true;
    stoptBtn.disabled = false;
}

function stop(event) {
    clearInterval(timerId);
    startBtn.disabled = false;
    stoptBtn.disabled = true;
}

function changeColor() {
    body.style.backgroundColor = getRandomHexColor();
}