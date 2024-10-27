let start = document.getElementById("start");
let stop = document.getElementById("stop");
let reset = document.getElementById("reset");
let timeDisplay = document.getElementById("time");

let interval = null;
let etime = 0;
let run = false;

function updateTime() {
  let hr = Math.floor(etime / 3600000);
  let min = Math.floor((etime % 3600000) / 60000);
  let sec = Math.floor((etime % 60000)/1000);
  let milli=etime % 1000;

  timeDisplay.innerHTML = 
    (hr < 10 ? "0" + hr : hr) + ":" +
    (min < 10 ? "0" + min : min) + ":" +
    (sec < 10 ? "0" + sec : sec)+":"+
    (milli < 100 ? (milli < 10 ? "00" + milli : "0" + milli) : milli); 
}

function startWatch() {
  if (!run) {
    interval = setInterval(() => {
      etime += 10;
      updateTime();
    }, 10);
    run = true;
  }
}

function stopWatch() {
  clearInterval(interval);
  run = false;
}

function resetWatch() {
  clearInterval(interval);
  etime = 0;
  updateTime();
  run = false;
}

start.addEventListener("click", startWatch);
stop.addEventListener("click", stopWatch);
reset.addEventListener("click", resetWatch);

updateTime();
