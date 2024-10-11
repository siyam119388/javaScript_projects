
let timerDisplay = document.querySelector('.timerDisplay');
let stopBtn = document.getElementById('stopBtn');
let startBtn = document.getElementById('startBtn');
let resetBtn = document.getElementById('resetBtn');

let msec = 00;
let secs = 00;
let mins = 00;

let timerId = null;

startBtn.addEventListener('click', function(){
    if(timerId !== null){
        clearInterval(timerId);
    }
    timerId = setInterval(startTimer, 10);
