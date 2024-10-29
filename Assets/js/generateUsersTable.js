function generateTable(obj){
    const table = document.querySelector(".profiles");

    const rows = Math.ceil(obj.length / 30);

    for(let i =0; i < rows; i++){
        const trElement = document.createElement('tr');

        for(let j = 0; j <30; j++){
            const Index = i * 10 +j;

            if(Index >= obj.length) break;

            const img = document.createElement('img');
            img.classList.add('photoMini');
            img.src = `${obj[Index].picture}`;

            const profileBtn = document.createElement('button');
            profileBtn.classList.add('profileBtn');
            profileBtn.onclick = () => generateHtml(obj[Index]);

            profileBtn.appendChild(img);

            trElement.appendChild(profileBtn);
        }

        table.appendChild(trElement);
    }



}