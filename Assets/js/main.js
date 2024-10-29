

async function main(){

    const personsObj = await getAllApis();

    generateTable(personsObj);

    const allProfiles = document.querySelector(".all");
    const female = document.querySelector(".female");
    const male = document.querySelector(".male");

    const stats = stats(personsObj);

    

    allProfiles.innerHTML = stats.count;
    female.innerHTML  = stats.female;
    male.innerHTML = stats.male;


}

main();