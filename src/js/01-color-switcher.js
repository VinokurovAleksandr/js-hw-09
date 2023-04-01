
const refs = {
    BtnStart: document.querySelector('button[data-start]'),
    BtnStop: document.querySelector('button[data-stop]'),
};

refs.BtnStart.addEventListener('click', onBtnStart);
refs.BtnStop.addEventListener('click', onBtnStop);

let timerId = null;
// refs.BtnStart.setAttribute('disabled', true);

function onBtnStart() {

    timerId = setInterval(() => {
        document.body.style.background = getRandomHexColor();
    }, 1000);
    console.log('start');  
    refs.BtnStart.disabled = true;
};

function onBtnStop() {
    clearInterval(timerId);
    console.log('stop');
    refs.BtnStart.disabled = false;
};




function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};