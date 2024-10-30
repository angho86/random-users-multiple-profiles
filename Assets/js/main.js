

async function main(){

    const personsObj = await getAllApis();

    filter(personsObj);
    stats(personsObj);
}

main();