const myQuote = document.getElementById("quote");

async function getQuote() {
    let category = "happiness";
    let url = `https://api.api-ninjas.com/v1/quotes?category=${category}`;

    let data = await fetch(url, {
        headers: {
            "X-Api-Key": "qfznHZTLclaDSB+sMkqcNA==OrncxbcLlMlXLVQd",
        },
    }).then((response) => {
        return response.json();
    });

    console.log(data[0].quote);
    myQuote.textContent = data[0].quote;
}

getQuote();
