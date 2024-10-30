

async function main(){

    const personsObj = await getAllApis();

    const filteredPersons = filter(personsObj);
    // generateTable(filteredPersons);

    stats(personsObj);

    
}

main();