let userScore = 0;
let computerScore = 0;
let userHand;
let computerHand;
let roundResult;

const USER_OUTPUT = document. getElementById("user-scored");
const COMPUTER_OUTPUT = document.getElementById("computer-scored");

const Head = document.getElementById("head");
const Tail = document. getElementById("tail");
const RESULT = document. getElementById("result");
const SCORE_BOARD = document. getElementById("score-board");

Head.addEventListener("click" ,function () {
    computerChoice();
    userHand = "Head";
    calculateResult();
    changeColor();
});

Tail.addEventListener("click" ,function () {
    computerChoice();
    userHand = "Tail";
    calculateResult();
    changeColor();
});


function computerChoice() {
    let randomNumber = Math.floor(Math.random() * 2);
    if (randomNumber == 0) {
        computerHand = "Head";
    } else if (randomNumber == 1) {
    computerHand = "Tail";
    } 
    
}


function calculateResult() {
    if (
        (userHand == "Head" && computerHand == "Tail") 
        ){
        userScore++;
        USER_OUTPUT.innerHTML = userScore;
        RESULT.innerHTML =
        userHand +
        "<sup>(user)</sup> Beats " +
        computerHand +
        "<sup>(computer)</sup>. You Win!";
        
        roundResult = "You Win";
        } else if(
        (computerHand =="Head" && userHand =="Tail") 
    ){
        computerScore++;
        COMPUTER_OUTPUT.innerHTML = computerScore;
        RESULT.innerHTML =
        computerHand +
        "<sup>(computer)</sup> Beats" +
        userHand +
        "<sup>(user)</fup>. You Lose!";
        roundResult = "You Lose";


    }
}

function changeColor(){
    if (roundResult == "You Win") {
        SCORE_BOARD.style.backgroundColor = "#4caf50";
    } else if (roundResult == "You Lose") {
        SCORE_BOARD.style.backgroundColor = "#f44336";
    }else {
        SCORE_BOARD.style.backgroundColor = "#2196f3";
    }

}