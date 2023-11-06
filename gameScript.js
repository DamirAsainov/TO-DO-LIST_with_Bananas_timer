const blocks = document.querySelectorAll('.drag-block')
const bananaDiv = document.querySelector('#banana-div');
const monkeysDiv = document.querySelector('#monkey-div');
const button = document.createElement('button');
var loseAudio = document.getElementById("loseAudio");
var successAudio = document.getElementById("successAudio");



// window.onload = randomObjs;
// function randomObjs(){
//     for(var i = 0; i < 5; i++){
//         let randomNum = (Math.floor(Math.random() * 2) + 1);
//         let newImg = document.createElement("img");
//         newImg.src = 'img/' + randomNum + '.png';
//         // newImg.draggable = 'true';
//         newImg.classList.add('drag-block');
//         newImg.id = i + 10;
//         document.getElementById('start-div').appendChild(newImg);
//     }
// }


//create button
button.textContent = "Check Result!";
button.classList.add("col-4");
button.classList.add("offset-4");
button.classList.add("btn-success");
button.classList.add("btn");
button.classList.add("mt-3");
button.addEventListener('click', checkContents);
document.querySelector('.row').appendChild(button);

blocks.forEach(block => block.addEventListener('dragstart', drag));


function allowDrop(ev) {
  ev.preventDefault();
}

function drag(ev) {
  ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
  ev.preventDefault();
  var data = ev.dataTransfer.getData("text");
  ev.target.appendChild(document.getElementById(data));
}


function checkContents() {
  const bananaCount = bananaDiv.querySelectorAll('.drag-block').length;
  const monkeyCount = monkeysDiv.querySelectorAll('.drag-block').length;

  if (bananaCount === 4 && monkeyCount === 4) {
    alert('Bananas and Monkeys are in the right places!');
    successAudio.play();
  } else {
    alert('Bananas and Monkeys are not in the right places.');
    loseAudio.play();
  }
}

$(document).ready(function () {
  $("#flip").click(function () {
    $("#panel").slideToggle("slow");
  });
});
