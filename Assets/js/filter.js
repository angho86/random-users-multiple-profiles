function filter(obj){
    const select = document.getElementById("gender");
 

    const options = ['all', 'female', 'male'];

    

    for(let i=0;i < options.length; i++){
        select.innerHTML += `<option id="${options[i]}">${options[i]}</option>`;
    }

    generateTable(obj);

    select.addEventListener("change", function() {
        const selected = select.value;

        let filtered;
        
        if(selected === "male"){

            filtered = obj.filter(user => user.gender === "male");
        }
        else if(selected === "female") {

             filtered = obj.filter(user => user.gender === "female");
        } else {

             filtered = obj;
        }

        generateTable(filtered);

    });

    
}