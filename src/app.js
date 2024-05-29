let quizzes = [
    {
        serialNo: 1,
        question: "What does HTML stand for?",
        options: [
            "Hyper Text Markup Language",
            "Home Tool Markup Language",
            "Hyperlinks and Text Markup Language",
            "Hyper Text Main Language"
        ],
        answer: "Hyper Text Markup Language"
    },
    {
        serialNo: 2,
        question: "Who is making the Web standards?",
        options: [
            "Mozilla",
            "Microsoft",
            "Google",
            "The World Wide Web Consortium"
        ],
        answer: "The World Wide Web Consortium"
    },
    {
        serialNo: 3,
        question: "Choose the correct HTML element for the largest heading:",
        options: [
            "<heading>",
            "<h6>",
            "<h1>",
            "<head>"
        ],
        answer: "<h1>"
    },
    {
        serialNo: 4,
        question: "What is the correct HTML element for inserting a line break?",
        options: [
            "<break>",
            "<br>",
            "<lb>",
            "<line>"
        ],
        answer: "<br>"
    },
    {
        serialNo: 5,
        question: "What is the correct HTML for adding a background color?",
        options: [
            "<background>yellow</background>",
            "<body bg=\"yellow\">",
            "<body style=\"background-color:yellow;\">",
            "<bg>yellow</bg>"
        ],
        answer: "<body style=\"background-color:yellow;\">"
    }
];
let question=document.getElementById("question");
let submit=document.getElementById("submit");
let container=document.getElementById("container");
let resultContainer=document.getElementById("resultContainer");
let title=document.getElementById("title");
let subtitle=document.getElementById("subtitle");
let index=0;
let answer=null;
let answers=[];
submit.addEventListener("click",()=>{ 
    answers.push(answer);
    clearRadioButtons()
    index++; 
    displayQuiz();
})
function clearRadioButtons() {
    const radios = document.querySelectorAll('input[name="option"]');
    radios.forEach((radio) => {
        radio.checked = false;
    });
}
function checkAnswer(event)
{
    answer=event.target.value;
}
function resultdisplay()
{
    let correct=0;
    let incorrect=0;
    for(let i=0;i<answers.length;i++)
    {
        if(answers[i]== quizzes[i].answer)
            {
               correct++;
            }
            else{
                incorrect++;
            }
    }
    container.classList.add("hidden");
    resultContainer.classList.remove("hidden");
    title.innerText=`Your Score: ${correct}/5 Correct Answers.`;
    subtitle.innerText="Congratulation for completing the Quiz.";
}
function displayQuiz()
{
    container.classList.remove("hidden");
    resultContainer.classList.add("hidden");
        let num=1;
        if(index<=4)
            {
        let quiz=quizzes[index];
        question.innerText=quiz.serialNo+"."+quiz.question;
        quiz.options.forEach((option)=>{
           document.getElementById(`option${num}`).value=option;
           document.getElementById(`answer${num}`).innerText=option;
           num++;
        }) 
        }
        else{
            resultdisplay();
        }
       
        
}
function reloadPage()
{
    location.reload();
}
displayQuiz();