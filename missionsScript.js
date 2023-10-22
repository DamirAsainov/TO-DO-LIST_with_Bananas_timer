//missions.html page
var inputBox = document.getElementById("input-box");
var listContainer = document.getElementById("list-container");

function addMission(){
    if(inputBox.value === ''){
        alert("Your input place is empty. To add mission need to decribe it!")
    } else {
        console.log("Da")
        let li = document.createElement("li");
        li.innerHTML = '<i class="fa-regular fa-circle"></i>' + inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        localStorage.setItem("mission", JSON.stringify([...JSON.parse(localStorage.getItem("mission") || "[]"), {mission: inputBox.value, completed: false}]))
    }
    inputBox.value = '';
}

listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
    }
}, false);



window.onload = loadMissions;

function loadMissions() {
    let missions = Array.from(JSON.parse(localStorage.getItem("mission")));

    missions.forEach(mission => {
        const li = document.createElement("li");
        li.innerHTML = '<i class="fa-regular fa-circle"></i>' + mission.mission;
        listContainer.insertBefore(li, listContainer[0]);
    })
}
