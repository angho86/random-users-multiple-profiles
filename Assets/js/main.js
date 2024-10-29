

async function main(){

    const personsObj = await getAllApis();

    generateTable(personsObj);

    console.log(personsObj);


}

main();