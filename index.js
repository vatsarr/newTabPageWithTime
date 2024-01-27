const currentTime = document.getElementById("time");
const greeting = document.getElementById("time-container");

function updateTime() {
    const date = new Date();

    const hours = date.getHours().toString().padStart(2, "0");
    const minutes = date.getMinutes().toString().padStart(2, "0");
    const seconds = date.getSeconds();
    const milliSeconds = date.getMilliseconds();

    const timeString = `${hours}:${minutes}`;

    currentTime.textContent = timeString;
}

setInterval(updateTime, 1000);

updateTime();
