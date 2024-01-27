const currentTime = document.getElementById("time");
const year = document.getElementById("year");

function updateTime() {
    const date = new Date();

    const currentYear = date.getFullYear().toString();

    const hours = date.getHours().toString().padStart(2, "0");
    const minutes = date.getMinutes().toString().padStart(2, "0");

    const timeString = `${hours}:${minutes}`;

    currentTime.textContent = timeString;
    year.textContent = currentYear;
}

setInterval(updateTime, 50);

updateTime();
