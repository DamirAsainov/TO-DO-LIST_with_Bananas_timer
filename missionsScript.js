//missions.html page
var title = document.getElementById("title");
var decribe = document.getElementById("desc");
var level = document.getElementById("level");
var impt = document.getElementById("impt");

var listContainer = document.getElementById("list-container");

function addMission() {
    if (title.value === '') {
        alert("Your input place is empty. To add mission need to decribe it!")
    } else {
        console.log("Da")
        let li = document.createElement("li");
        li.innerHTML = '<i class="fa-regular fa-circle" onclick="missionComplete(this)" onmouseover="checkMouseOver(this)" onmouseout="checkMouseOut(this)" ></i><div class="card bg-dark text-white p-4" onclick="openTimer(this)"><h5 class="card-title" style="font-size:3rem">' + title.value + '</h5><h6 class="card-subtitle mb-2  text-white-50">' + decribe.value + '</h6><p class="card-text" style="font-size:1rem">Level: ' + level.value + '</p><p class="card-text" style="font-size:1rem">Level: ' + impt.value + '</p></div>';
        listContainer.appendChild(li);
        let span = document.createElement("span");
        localStorage.setItem("ms", JSON.stringify([...JSON.parse(localStorage.getItem("ms") || "[]"), { title: title.value, decribe: decribe.value, level: level.value, impt: impt.value, completed: false }]));
        // saveMissions();
    }
    title.value = '';
    decribe.value = '';
    level.value = "Underfined";
    impt.value = "Underfined";
}

function openTimer(div){
    window.open("index.html");
}



window.onload = loadMissions;

// function loadMissions() {
//     listContainer.innerHTML = localStorage.getItem("missions")
// }
function loadMissions() {

    let mis = Array.from(JSON.parse(localStorage.getItem("ms")));

    // Loop through the tasks and add them to the list
    mis.forEach(ms => {
        const li = document.createElement("li");
        li.innerHTML = '<div class="preCard"><i class="fa-regular fa-circle" onclick="missionComplete(this)" onmouseover="checkMouseOver(this)" onmouseout="checkMouseOut(this)" ></i></div><div class="card bg-dark text-white p-4" onclick="openTimer(this)"><h5 class="card-title" style="font-size:3rem">' + ms.title + '</h5><h6 class="card-subtitle mb-2 text-white-50">' + ms.decribe + '</h6><p class="card-text" style="font-size:1rem">Level: ' + ms.level + '</p><p class="card-text" style="font-size:1rem">Level: ' + ms.impt + '</p></div>';
        listContainer.insertBefore(li, listContainer.children[0]);
    });
}
function saveMissions() {
    localStorage.setItem("missions", listContainer.innerHTML)
}
function reset() {
    localStorage.clear();
    location.reload();
}

function missionComplete(object) {
    if (object.classList.contains('fa-circle-check')) {
        object.classList.remove("fa-circle-check");
        object.classList.add("fa-circle");
    } else {
        object.classList.remove("fa-circle");
        object.classList.add("fa-circle-check");
    }
    saveMissions();
}
function checkMouseOver(object) {
    object.classList.remove("fa-regural");
    object.classList.add("fa-solid");
}
function checkMouseOut(object) {
    object.classList.remove("fa-solid");
    object.classList.add("fa-regular");
}