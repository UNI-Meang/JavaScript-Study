const christmasDate = '25 dec 2022';

function countdown(){
    const countDate = new Date(christmasDate);
    console.log(countDate);
    const currentDate = new Date();

    const totalSeconds = (countDate - currentDate) / 1000; 
    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const minutes = Math.floor(totalSeconds / 60) % 60;
    const seconds = Math.floor(totalSeconds) % 60;

    document.getElementById('days').innerText = formatTime(days);
    document.getElementById('hours').innerText = formatTime(hours);
    document.getElementById('minutes').innerText = formatTime(minutes);
    document.getElementById('seconds').innerText = formatTime(seconds);
}

function formatTime(time) {
    return time < 10 ? '0' + time : time;
}

setInterval(countdown, 1000);

// const nowDate = new Date().getFullYear();
// console.log(nowDate);