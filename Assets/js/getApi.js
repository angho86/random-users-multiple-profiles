
async function getAllApis(){
    

    const personPromise = await fetch("https://randomuser.me/api/");
    const personeResponse = await personPromise.json();

    const quotePromise = await fetch("https://api.adviceslip.com/advice");
    const quoteResponse = await quotePromise.json();

    return {person: personeResponse.results, quote: quoteResponse.slip.advice};

}


async function main(){
    const data = await getAllApis();

   console.log("Gauti duomenys: ", data);

   const name  = `${data.person[0].name.first} ${data.person[0].name.last}`;

   generateHtml(data);
}

main();