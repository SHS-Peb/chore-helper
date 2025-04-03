const timeDisplay = document.querySelector(`#timeDisplay`);
const startBtn = document.querySelector('#startBtn');
const pauseBtn = document.querySelector('#pauseBtn');
const resetBtn = document.querySelector('#resetBtn');

let startTime = 0;
let elapsedTime = 0;
let currentTime = 0;
let paused = true;
let intervalid;
let hours = 0;
let mins = 0;
let secs = 0;

startBtn.addEventListener("click", () => {
    if(paused){
        paused = false;
        startTime = Date.now() - elapsedTime
        intervalid = setInterval(updateTime, 75)
    }
})
pauseBtn.addEventListener("click", () => {})
resetBtn.addEventListener("click", () => {})

function updateTime(){
    elapsedTime = Date.now() - startTime;
    secs = Math.floor ((elapsedTime / 1000) % 60)
    mins = Math.floor ((elapsedTime / (1000 * 60)) % 60)
    hrs = Math.floor ((elapsedTime / (1000 * 60 * 60)) % 60)
    timeDisplay.textContent = `${hrs}:${mins}:${secs}`;
}