function generateHtml(obj){

    const infoHtml = document.querySelector(".infoBox");
    const profilePhoto =  document.querySelector(".photo");
    const profileName = document.getElementById("name");

    let fullName = `${obj.firstName} ${obj.lastName}`;
    profileName.innerText = fullName;
    profilePhoto.src=obj.picture;

    const dateString = obj.dateOfBirth;
    const date = new Date(dateString);
    const year = date.getFullYear();

    infoHtml.innerHTML = `<div class="info">
                <div>Gender: ${obj.gender}</div>
                <div>Age: ${obj.age}</div>
                <div>City: ${obj.city}</div>
                <div>Country: ${obj.country}</div>
                <div>Mobile Nr.: ${obj.phone}</div>
                <div>Registration: ${year}</div>
                </div>
                <div id="map"></div>`;

                map(obj.lat, obj.long);

    return infoHtml;
}

