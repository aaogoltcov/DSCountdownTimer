'use strict'

// creat time for alarm
let initialTimer = document.getElementById('timer');
let getTime = new Date('1970-01-01T' + initialTimer.textContent);
let getSeconds = getTime.getHours() * 3600 + getTime.getMinutes() * 60 + getTime.getSeconds();
let setTimeAlarm = Date.now() + getSeconds * 1000;

// timer
let timer = setInterval(function () {
    let timeRest = setTimeAlarm - Date.now();
    if (timeRest <= 0) {
        // timer finish
        clearInterval(timer);
        alert("Вы победили в конкурсе! Нажмите ОК для загрузки файла!");

        // file download
        let url = document.createElement('a');
        url.href = 'file.file';
        url.click();
    } else {
        // timer is going
        initialTimer.textContent = new Date(1970, 0, 0, 0, 0,  timeRest / 1000).toLocaleTimeString();
    }
}, 1000);
