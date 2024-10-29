

async function main(){

    const personsObj = await getAllApis();

    generateTable(personsObj);

    stats(personsObj);
}

main();