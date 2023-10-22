let workTittle = document.getElementById('work');
let chillTittle = document.getElementById('chill');

let workTime = 15;
let chillTime = 5;

let seconds = "00";
let bananas = 0;

window.onload = () => {
    document.getElementById("min").innerHTML = workTime;
    document.getElementById('sec').innerHTML = seconds;

    workTittle.classList.add('active');
}

function start(){
    document.getElementById('start').style.display = "none";
    document.getElementById('reset').style.display = "block";

    seconds = 59;

    let workMinutes = workTime - 1;
    let chillMinute = chillTime - 1;

    breakCount = 0;

    let timeFunction = () => {
        document.getElementById('min').innerHTML = workMinutes;
        document.getElementById('sec').innerHTML = seconds;

        seconds = seconds - 1;

        if(seconds === 0){
            workMinutes = workMinutes - 1;
            if(workMinutes <= 0){
                if(breakCount % 2 === 0){
                    workMinutes = chillMinute;
                    workTittle.classList.remove('active');
                    chillTittle.classList.add('active');
                    document.getElementById('currentMissionBananas').innerHTML = ++bananas;
                }else{
                    workMinutes = workTime;
                    workTittle.classList.add('active');
                    chillTittle.classList.remove('active');
                }
                breakCount++;
            }
            seconds = 59
        }
    }
    setInterval(timeFunction, 1000);
}

document.getElementById('currentMissionBananas').innerHTML = bananas;




