const questions = [
    {
        question: "What does the HTML acronym stand for?",
        answers: [
            { text: "Hyper Text Markup Language", correct: true},
            { text: "High Tech Multimedia Language", correct: false},
            { text: "Hyperlink and Text Management Language", correct: false},
            { text: "Home Tool Markup Language", correct: false},
        ]
    },
    {
        question: "Which HTML tag is used to create a hyperlink?",
        answers: [
            { text: "link", correct: false},
            { text: "anchor", correct: false},
            { text: "a", correct: true},
            { text: "hyperlink", correct: false},
        ] 
    },
    {
        question: "In HTML, which attribute is used to define inline styles?",
        answers: [
            { text: "style", correct: true},
            { text: "class", correct: false},
            { text: "id", correct: false},
            { text: "format", correct: false},
        ]
    },
    {
        question: "Which HTML element is used to define the structure of an HTML document, including the head and body sections?",
        answers: [
            { text: "document", correct: false},
            { text: "structure", correct: false},
            { text: "html", correct: true},
            { text: "body", correct: false},
        ]
    },
    {
        question: "Which HTML tag is used to insert a line break?",
        answers: [
            { text: "br", correct: true},
            { text: "lb", correct: false},
            { text: "break", correct: false},
            { text: "newline", correct: false},
        ]
    },
    {
        question: "What is the purpose of the HTML <head> element?",
        answers: [
            { text: "It defines the main content of the HTML document.", correct: false},
            { text: "It contains metadata about the HTML document.", correct: true},
            { text: "It specifies the structure of the document.", correct: false},
            { text: "It is used for creating hyperlinks.", correct: false},
        ]
    },
    {
        question: "What does the acronym CSS stand for in web development?",
        answers: [
            { text: "Computer Style Sheets", correct: false},
            { text: "Colorful Style Sheets", correct: false},
            { text: "Cascading Style Sheets", correct: true},
            { text: "Creative Style Sheets", correct: false},
        ]
    },
    {
        question: "Which CSS property is used to control the text size of an element?",
        answers: [
            { text: "font-sizee", correct: true},
            { text: "text-sizes", correct: false},
            { text: "size", correct: false},
            { text: "font-text", correct: false},
        ]
    },
    {
        question: "How can you apply a style to every second row of a table using CSS?",
        answers: [
            { text: "tr:even", correct: false},
            { text: "tr:nth-child(even)", correct: true},
            { text: "tr:second", correct: false},
            { text: "tr:nth-child(2)", correct: false},
        ]
    },
    {
        question: "What does the `typeof` operator return for the type of `null`?",
        answers: [
            { text: "null", correct: false},
            { text: "undefined", correct: false},
            { text: "object", correct: true},
            { text: "number", correct: false},
        ]
    }

];
const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}
 function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btnq");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click",selectAnswer);
    });
 }

 function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
 }
 function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;

    });
    nextButton.style.display = "block";
 }
 function showScore(){
    resetState();
    questionElement.innerHTML = `you scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "play Again";
    nextButton.style.display = "block";
 }

 function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }else{
        showScore();
    }
 }

 nextButton.addEventListener("click", ()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }else{
        startQuiz();
    }
 });
 
 startQuiz();