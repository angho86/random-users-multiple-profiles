async function getAllApis(){
    

    const personPromise = await fetch("https://randomuser.me/api/?results=100");
    const personeResponse = await personPromise.json();

    const results = personeResponse.results;

    const parsedPeopleArray = results.map((personObj) => ({
        firstName: personObj.name.first,
        lastName: personObj.name.last,
        gender: personObj.gender,
        age: personObj.dob.age,
        city: personObj.location.city,
        dateOfBirth: personObj.dob.date,
        country: personObj.location.country,
        picture: personObj.picture.large,
        nat: personObj.nat,
        phone: personObj.phone,
        lat: personObj.location.coordinates.latitude,
        long: personObj.location.coordinates.longitude,
    }))

    console.log(parsedPeopleArray);

    return  parsedPeopleArray;

}

