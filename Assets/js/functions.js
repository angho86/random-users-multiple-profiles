function stats(obj){
    let count = 0;
    let female =0;
    let male = 0;
for(let i =0; i < obj.length; i++){
    count++;
    if(obj[i].gender === "female"){
        female +=1;
    } else {
        male +=1;
    }
}

    const allProfiles = document.querySelector(".all");
    const femaleStat = document.querySelector(".female");
    const maleStat = document.querySelector(".male");

    allProfiles.innerHTML = `All profile: ${count}`;
    femaleStat.innerHTML = `Female: ${female}`;
    maleStat.innerHTML = `Male: ${male}`;

}

function closeModal() {

    const profileWindow = document.querySelector(".profile");

    profileWindow.style.display = "none";

    console.log("veikiu");

}
