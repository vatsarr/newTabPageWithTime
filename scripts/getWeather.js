const displayedTemperature = document.getElementById("temperature");

async function getWeather() {
    let key = "qfznHZTLclaDSB+sMkqcNA==OrncxbcLlMlXLVQd";
    let city = "Tallinn";
    let url = `https://api.api-ninjas.com/v1/weather?city=${city}`;

    let data = await fetch(url, {
        headers: {
            "X-Api-Key": key,
        },
    }).then((response) => {
        return response.json();
    });

    displayedTemperature.innerHTML = `${data.temp}&#xb0;`;
}

getWeather();
