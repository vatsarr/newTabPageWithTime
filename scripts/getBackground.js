const timeContainer = document.getElementById("container");

async function getImage() {
    let myHeaders = new Headers();
    myHeaders.append(
        "client_id",
        "obpkGtqvH6i1g8r6C6n7-vxwXEs4WP6TElydelNhJnY"
    );

    let requestOptions = {
        method: "GET",
        headers: myHeaders,
        redirect: "follow",
    };

    let key = "obpkGtqvH6i1g8r6C6n7-vxwXEs4WP6TElydelNhJnY";
    let orientation = "landscape";
    let collections = "wallpapers";
    let query = "nature";
    let url = `https://api.unsplash.com/photos/random?orientation=${orientation}&collections=${collections}&query=${query}&client_id=${key}`;

    let data = await fetch(url, requestOptions).then((response) => {
        return response.json();
    });

    let imageURL = data.urls.raw + `&w=${window.innerWidth}`;

    timeContainer.style.background = `url(${imageURL})`;
}

getImage();
