function generateHtml(obj){

    const infoHtml = document.querySelector(".infoBox");
    const profilePhoto =  document.querySelector(".photo");
    const profileName = document.getElementById("name");
    const quote = document.getElementById("quote");

    let fullName = `${obj.person[0].name.first} ${obj.person[0].name.last}`;
    profileName.innerText = fullName
    profilePhoto.src=obj.person[0].picture.large;
    quote.innerText = `" ${obj.quote} "`;

    const dateString = obj.person[0].registered.date;
    const date = new Date(dateString); 

    const year = date.getUTCFullYear();

    const lat = obj.person[0].location.coordinates.latitude;
    const long = obj.person[0].location.coordinates.longitude;

  

    infoHtml.innerHTML = `<div class="info">
                <div>Gender: ${obj.person[0].gender}</div>
                <div>Age: ${obj.person[0].registered.age}</div>
                <div>City: ${obj.person[0].location.city}</div>
                <div>Country: ${obj.person[0].location.country}</div>
                <div>Email: ${obj.person[0].email}</div>
                <div>Mobile Nr.: ${obj.person[0].cell}</div>
                <div>Registration: ${year}</div>
                </div>
                <div id="map"></div>`;

                map(lat, long);

    return infoHtml;
}

