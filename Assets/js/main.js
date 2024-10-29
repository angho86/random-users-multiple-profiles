

async function main(){

    const personsObj = await getAllApis();

    generateTable(personsObj);

   

    stats(personsObj);



    allProfiles.innerHTML = stats.count;
    female.innerHTML  = stats.female;
    male.innerHTML = stats.male;


}

main();