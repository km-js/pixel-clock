const hoursElement = document.getElementById("hours");
const minsElement = document.getElementById("minutes");
const secsElement = document.getElementById("seconds");

setInterval(()=>{
    let now = new Date();

    hoursElement.innerHTML = (now.getHours()<10?"0":"") + now.getHours();;
    minsElement.innerHTML = (now.getMinutes()<10?"0":"") + now.getMinutes();
    secsElement.innerHTML = (now.getSeconds()<10?"0":"") + now.getSeconds();
})

