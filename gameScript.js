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
button.classList.add("mb-5")
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


const questions = [
  {
    question: "What is the largest species of monkey?",
    answers: [
        { text: "Capuchin", correct: false },
        { text: "Mandrill", correct: true },
        { text: "Gorilla", correct: false },
        { text: "Chimpanzee", correct: false }
    ]
}
,
{
  question: "Which continent is home to the majority of monkey species?",
  answers: [
      { text: "Asia", correct: false },
      { text: "Africa", correct: true },
      { text: "South America", correct: false },
      { text: "Australia", correct: false }
  ]
}
,{
  question: "What is a group of monkeys called?",
  answers: [
      { text: "Flock", correct: false },
      { text: "Herd", correct: false },
      { text: "Troop", correct: true },
      { text: "Pod", correct: false }
  ]
},
{
  question: "Which monkey species is known for its colorful face and rear end?",
  answers: [
      { text: "Howler Monkey", correct: false },
      { text: "Rhesus Monkey", correct: false },
      { text: "Mandrill", correct: true },
      { text: "Tamarin", correct: false }
  ]
}
,{
  question: "How many species of monkeys are there approximately?",
  answers: [
      { text: "50", correct: false },
      { text: "150", correct: false },
      { text: "300", correct: true },
      { text: "500", correct: false }
  ]
}
,{
  question: "What type of tail do New World monkeys typically have?",
  answers: [
      { text: "Prehensile", correct: true },
      { text: "Short and fluffy", correct: false },
      { text: "Long and straight", correct: false },
      { text: "No tail", correct: false }
  ]
}
,{
  question: "Which monkey is known for its ability to use tools, such as using rocks to crack open nuts?",
  answers: [
      { text: "Squirrel Monkey", correct: false },
      { text: "Capuchin Monkey", correct: true },
      { text: "Gibbon", correct: false },
      { text: "Orangutan", correct: false }
  ]
}
,{
  question: "What is the main diet of a howler monkey?",
  answers: [
      { text: "Insects", correct: false },
      { text: "Leaves and fruits", correct: true },
      { text: "Fish", correct: false },
      { text: "Small mammals", correct: false }
  ]
}
,{
  question: "Which monkey species is often considered sacred in Hinduism and is associated with the god Hanuman?",
  answers: [
      { text: "Japanese Macaque", correct: false },
      { text: "Proboscis Monkey", correct: false },
      { text: "Langur", correct: true },
      { text: "Golden Lion Tamarin", correct: false }
  ]
}
,{
  question: "What is the gestation period of a female monkey, on average?",
  answers: [
      { text: "1 month", correct: false },
      { text: "3 months", correct: false },
      { text: "6 months", correct: false },
      { text: "9 months", correct: true }
  ]
}
];

let currentQuestionIndex = 0;

const questionContainer = document.getElementById("question-container");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-button");

function startQuiz() {
  currentQuestionIndex = 0;
  nextButton.classList.add("hide");
  showQuestion(questions[currentQuestionIndex]);
}

function showQuestion(question) {
  questionContainer.innerText = question.question;
  answerButtons.innerHTML = "";
  question.answers.forEach(answer => {
      const button = document.createElement("button");
      button.innerText = answer.text;
      button.classList.add("btn");
      button.addEventListener("click", () => selectAnswer(answer));
      answerButtons.appendChild(button);
  });
}

function selectAnswer(answer) {
  if (answer.correct) {
      // Handle correct answer
      alert("Correct")
      console.log("Correct!");
  } else {
      // Handle wrong answer
      alert("Wrong!")
      console.log("Wrong!");
  }

  if (currentQuestionIndex < questions.length - 1) {
      currentQuestionIndex++;
      showQuestion(questions[currentQuestionIndex]);
  } else {
      finishQuiz();
  }
}

function finishQuiz() {
  questionContainer.innerText = "Quiz Completed!";
  answerButtons.innerHTML = "";
  nextButton.classList.add("hide");
}

function nextQuestion() {
  if (currentQuestionIndex < questions.length - 1) {
      currentQuestionIndex++;
      showQuestion(questions[currentQuestionIndex]);
  } else {
      finishQuiz();
  }
}

startQuiz();



let currentStep = 1;

function nextStep() {
    const currentStepElement = document.getElementById(`step${currentStep}`);
    const nextStepElement = document.getElementById(`step${currentStep + 1}`);

    if (nextStepElement) {
        currentStepElement.classList.remove("active");
        nextStepElement.classList.add("active");
        currentStep++;
    }
}

function prevStep() {
    const currentStepElement = document.getElementById(`step${currentStep}`);
    const prevStepElement = document.getElementById(`step${currentStep - 1}`);

    if (prevStepElement) {
        currentStepElement.classList.remove("active");
        prevStepElement.classList.add("active");
        currentStep--;
    }
}

document.getElementById("multiStepForm").addEventListener("submit", function(event) {
    event.preventDefault();
    alert("Form submitted successfully!");
});




