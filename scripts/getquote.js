const myQuote = document.getElementById("quote");

async function getQuote() {
    let key = "qfznHZTLclaDSB+sMkqcNA==OrncxbcLlMlXLVQd";
    let category = "happiness";
    let url = `https://api.api-ninjas.com/v1/quotes?category=${category}`;

    let data = await fetch(url, {
        headers: {
            "X-Api-Key": key,
        },
    }).then((response) => {
        return response.json();
    });

    myQuote.textContent = data[0].quote;
}

getQuote();
