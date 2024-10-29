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
console.log("count:" + count);
console.log("Females:" + female);
console.log("Males:" + male);
}
