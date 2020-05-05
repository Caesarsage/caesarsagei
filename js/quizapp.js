let questionBag = [
    {
        question : "CSS stands for ?",
        option1 :"Cascading style seet",
        option2: "Casanding style sheet",
        option3:"Cross styling sheet",
        option4:"Cascanding style sheet",
        correctOption: 4
    },
    {
        question : "HTML acronym stands for?",
        option1 :"Hypertext markup",
        option2: "Hypertext markup language",
        option3:"Higher text markup language",
        option4:"Higher text language",
        correctOption:2
    },
    {
        question : "What is the newest HTML version ?",
        option1 :"HTML3.2",
        option2: "HTML5",
        option3:"XHTML",
        option4:"HTML 4.01",
        correctOption:2
    },
    {
        question : "HTML is the structure of the webpage and CSS is the?",
        option1 :"Design",
        option2: "Verb",
        option3:"Responsive",
        option4:"stylesheet",
        correctOption:1
    },
    {
        question : "The first 'thing' we learn as a developer is ?",
        option1 :"Creating Calculator",
        option2: "Printing 'Hello world'",
        option3:"Creating a blog",
        option4:"Printing 'Variables'",
        correctOption:2
    },
]

var ul = document.getElementById("ul");
var nextButton = document.getElementById("nextButton");
const container = document.getElementById("quizContainer");
const questionEl = document.getElementById("question");
const opt1 = document.getElementById("opt1");
const opt2 = document.getElementById("opt2");
const opt3 = document.getElementById("opt3");
const opt4 = document.getElementById("opt4");
const resultCont = document.getElementById("result");
const progressText = document.getElementById("progressText");
const progressBarFull = document.getElementById("progressBarFull")
const scoreCounterText = document.getElementById("scoreCounter");
const options = Array.from(document.getElementsByTagName("input"));

//Variables condictoning
var questionCounter = 0;
var currentQuestion = 0;
var score = 0;
const totQuestions = questionBag.length;
var MAX_QUESTIONS = 5; 
var scoreCount = 0;


//LOADS QUESTION
function loadQuestion(questionIndex) {
    //var questionIndex =  Math.floor(Math.random() * totQuestions);
    questionCounter++
    progressText.innerText = `Answered ${questionCounter} /  ${MAX_QUESTIONS} `;
    scoreCounterText.innerHTML =`${scoreCount} Correctly Answered`;
    //update progress bar
    progressBarFull.style.width =`${(questionCounter / MAX_QUESTIONS) * 100}%`;
    progressBarFull.innerHTML = `${(questionCounter / MAX_QUESTIONS) * 100}%`;
    var q = questionBag[questionIndex];
    question.textContent = q.question;
    opt1.textContent = q.option1;
    opt2.textContent = q.option2;
    opt3.textContent = q.option3;
    opt4.textContent = q.option4;
};

//CLICKS CONDITION
options.forEach(option => {
    option.addEventListener("click", e => { 
        var seletedAnswer = option.value;
        var seletedOption = e.target;
        var classApply = "wrong";
        
        if(questionBag[currentQuestion].correctOption == seletedAnswer ) {
            classApply="correct";
               // seletedOption.parentElement.classList.add(classToApply);
        }
        if (classApply === "correct") {
            seletedOption.parentElement.classList.add(classApply);
            option.classList.add("pointer-fix");
        }else{
            seletedOption.parentElement.classList.add(classApply);

            if (questionBag[currentQuestion].correctOption === 1) {
                opt1.parentElement.classList.add("correct");
            }else if (questionBag[currentQuestion].correctOption === 2) {
                opt2.parentElement.classList.add("correct");
            }else if (questionBag[currentQuestion].correctOption === 3) {
                opt3.parentElement.classList.add("correct");
            }else if (questionBag[currentQuestion].correctOption === 4) {
                opt4.parentElement.classList.add("correct");
            }
        }
    
     
       console.log("click");

    });
});

//LOADS NEXT QUESTION
function loadNextQuestion() {
    options.forEach(option=>{
        var classApply = "wrong";
        option.parentElement.classList.remove(classApply);
        opt1.parentElement.classList.remove("correct");
        opt2.parentElement.classList.remove("correct");
        opt3.parentElement.classList.remove("correct");
        opt4.parentElement.classList.remove("correct");
    });
    var seletedOption = document.querySelector("input[type=radio]:checked");
    if(!seletedOption){
        alert("please select an answer");
        return;
    }  
    var correct = seletedOption.value;
    if (questionBag[currentQuestion].correctOption == correct ) {
        score +=10;
        scoreCount++
        console.log("correct");
    }
    seletedOption.checked = false;
    currentQuestion++;
    if (currentQuestion == totQuestions - 1) {
        nextButton.textContent = "Submit";
    }
    if (currentQuestion === MAX_QUESTIONS) {
        localStorage.setItem("newScore", score);
        return window.location.assign("last.html");
    }
    loadQuestion(currentQuestion);
};


loadQuestion(currentQuestion);