const currentTime = document.getElementById("time");
const hoursDisplayed = document.getElementById("hours");
const minutesDisplayed = document.getElementById("minutes");
const year = document.getElementById("year");

function updateTime() {
    const date = new Date();

    const currentYear = date.getFullYear().toString();

    const hours = date.getHours().toString().padStart(2, "0");
    const minutes = date.getMinutes().toString().padStart(2, "0");

    const timeString = `${hours}:${minutes}`;

    hoursDisplayed.textContent = hours;
    minutesDisplayed.textContent = minutes;

    year.textContent = currentYear;
}

setInterval(updateTime, 50);

updateTime();
