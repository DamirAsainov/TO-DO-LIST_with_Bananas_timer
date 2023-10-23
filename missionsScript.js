//missions.html page
var title = document.getElementById("title");
var decribe = document.getElementById("desc");
var level = document.getElementById("level");
var impt = document.getElementById("impt");

var listContainer = document.getElementById("list-container");
//append mission to listContainer and saved in localStorage
function addMission() {
    if (title.value === '') {
        alert("Your input place is empty. To add mission need to decribe it!")
    } else {
        console.log("Da")
        let li = document.createElement("li");
        li.innerHTML = '<i class="fa-regular fa-circle" onclick="missionComplete(this)" onmouseover="checkMouseOver(this)" onmouseout="checkMouseOut(this)" ></i><i class="fa-solid fa-trash-can" onmouseover="trashOver(this)" onmouseout="trashOut(this)" onclick="trashClick(this)"></i><div class="card bg-dark text-white p-4" onclick="openTimer(this)"><h5 class="card-title" style="font-size:3rem">' + title.value + '</h5><h6 class="card-subtitle mb-2  text-white-50">' + decribe.value + '</h6><p class="card-text" style="font-size:1rem">Level: ' + level.value + '</p><p class="card-text" style="font-size:1rem">Importance: ' + impt.value + '</p></div>';
        listContainer.appendChild(li);
        let span = document.createElement("span");
        localStorage.setItem("ms", JSON.stringify([...JSON.parse(localStorage.getItem("ms") || "[]"), { title: title.value, decribe: decribe.value, level: level.value, impt: impt.value, completed: false }]));
        // saveMissions();
    }
    //reload
    title.value = '';
    decribe.value = '';
    level.value = "Underfined";
    impt.value = "Underfined";
}

//opens timer in new tab
function openTimer(div) {
    window.open("index.html");
}



window.onload = loadMissions;

//load missions which was created in previos sessions
function loadMissions() {

    let mis = Array.from(JSON.parse(localStorage.getItem("ms")));

    // Loop through the tasks and add them to the list
    mis.forEach(ms => {
        const li = document.createElement("li");
        li.innerHTML = '<div class="preCard"><i class="fa-regular fa-circle" onclick="missionComplete(this)" onmouseover="checkMouseOver(this)" onmouseout="checkMouseOut(this)" ></i><i class="fa-solid fa-trash-can" onmouseover="trashOver(this)" onmouseout="trashOut(this)" onclick="trashClick(this)"></i></div><div class="card bg-dark text-white p-4" onclick="openTimer(this)"><h5 class="card-title" style="font-size:3rem">' + ms.title + '</h5><h6 class="card-subtitle mb-2 text-white-50">' + ms.decribe + '</h6><p class="card-text" style="font-size:1rem">Level: ' + ms.level + '</p><p class="card-text" style="font-size:1rem">Importance: ' + ms.impt + '</p></div>';
        listContainer.insertBefore(li, listContainer.children[0]);
    });
}
//save missions in localStorage
function saveMissions() {
    localStorage.setItem("missions", listContainer.innerHTML)
}
//clear local storage and reload page;
function reset() {
    localStorage.clear();
    location.reload();
}
//mark of check
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
//hover functions for check
function checkMouseOver(object) {
    object.classList.remove("fa-regural");
    object.classList.add("fa-solid");
}
function checkMouseOut(object) {
    object.classList.remove("fa-solid");
    object.classList.add("fa-regular");
}
// hover for trash
function trashOver(object) {
    object.classList.remove("fa-solid");
    object.classList.add("fa-regular");
}
function trashOut(object) {
    object.classList.remove("fa-regural");
    object.classList.add("fa-solid");
}

//event function onclick for trash
// delete mission
function trashClick(object) {
    let tasks = Array.from(JSON.parse(localStorage.getItem("ms")));
    tasks.forEach(ms => {
        if (ms.title === object.parentNode.parentNode.children[1].children[0].value) {
            // delete task
            tasks.splice(tasks.indexOf(ms), 1);
        }
    });
    localStorage.setItem("ms", JSON.stringify(tasks));
    object.parentElement.parentElement.children[1].remove();
    object.parentElement.parentElement.children[0].remove();
}