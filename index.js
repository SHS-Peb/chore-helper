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
pauseBtn.addEventListener("click", () => {
    if (!paused){
        paused = true;
        elapsedTime = Date.now() - startTime;
        clearInterval(intervalid)
    }
})
resetBtn.addEventListener("click", () => {
    paused = true;
    clearInterval(intervalid);
    startTime = 0;
    elapsedTime = 0;
    currentTime = 0;
    hours = 0;
    mins = 0;
    secs = 0;
    timeDisplay.textContent = "00:00:00"
    document.body.style.backgroundColor = "";
})

function updateTime(){
    elapsedTime = Date.now() - startTime;
    secs = Math.floor ((elapsedTime / 1000) % 60)
    mins = Math.floor ((elapsedTime / (1000 * 60)) % 60)
    hrs = Math.floor ((elapsedTime / (1000 * 60 * 60)) % 24)

    secs = pad(secs) 
    mins = pad(mins) 
    hrs = pad(hrs) 

    timeDisplay.textContent = `${hrs}:${mins}:${secs}`;

    function pad(unit){
    return (("0") + unit).length > 2 ? unit : "0" + unit
}

    if (elapsedTime / 1000 >= 15) {
        document.body.style.backgroundColor = "#fec8ff";
    } else if (elapsedTime / 1000 >= 5) {
        document.body.style.backgroundColor = "#8ac2b9";
    }
}