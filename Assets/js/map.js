function map(lat, long){

    // zemelapio iniciacija
    const map = L.map('map').setView([lat, long], 5);// pradinis vaizdas


    // Pridedame žemėlapio sluoksnį (naudojame OpenStreetMap)
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {maxZoom: 30}).addTo(map);


    // Pridedame žymeklį pagal koordinates
    const marker = L.marker([lat, long]).addTo(map);

    

}