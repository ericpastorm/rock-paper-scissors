console.log("Hello");

let cpChoose;
let humanChoose;
let cpScore = 0;
let humanScore = 0;

const mainDiv = document.querySelector(".mainDiv");
const pDesc = document.querySelector("p");

function constructUiGame(){
    const btnPlay = document.createElement("button");
    btnPlay.textContent = "Play!";
    btnPlay.classList.add("btn");
    btnPlay.classList.add("play");
    btnPlay.addEventListener("click", function (e) {
        playGame();
      });
    mainDiv.appendChild(btnPlay);
}
function playGame(){
    pDesc.textContent = "Pick one, good luck!";
    const btnRock = document.createElement("button");
    btnRock.textContent = "Rock";
    btnRock.classList.add("btn");
    btnRock.addEventListener("click", function (e) {
        humanChoose = "Rock";
        playRound();
      });
    mainDiv.appendChild(btnRock);

    const btnPaper = document.createElement("button");
    btnPaper.textContent = "Paper";
    btnPaper.classList.add("btn");
    btnPaper.addEventListener("click", function (e) {
        humanChoose = "Paper";
        playRound();
      });
    mainDiv.appendChild(btnPaper);

    const btnSciss = document.createElement("button");
    btnSciss.textContent = "Scissors";
    btnSciss.classList.add("btn");
    btnSciss.addEventListener("click", function (e) {
        humanChoose = "Scissors";
        playRound();
      });
    mainDiv.appendChild(btnSciss);
    const btnPlay = document.querySelector(".play");
    mainDiv.removeChild(btnPlay)
}

function getComputerChoice(){
    let randNum = Math.floor(Math.random() * (3 - 1 + 1) + 1);
    console.log(randNum);
    switch (randNum){
        case 1:
            cpChoose = "Rock";
            break;
        case 2:
            cpChoose = "Paper";
            break;
        case 3:
            cpChoose = "Scissors";
            break;
    }
    console.log(`Computer option is : ${cpChoose}.`)
}

function playRound() {
    getComputerChoice();
    if (humanChoose === cpChoose){
        pDesc.innerHTML = `Computer option was: ${cpChoose} <br> A tie!`;
    } else if((humanChoose == "Rock" && cpChoose == "Scissors") || (humanChoose == "Paper" && cpChoose == "Rock") || (humanChoose == "Scissors" && cpChoose == "Paper")) {
        humanScore++;
        pDesc.innerHTML = `Computer option was: ${cpChoose} <br> You Win! your score is: ${humanScore}`;
    } else if((cpChoose == "Rock" && humanChoose == "Scissors") || (cpChoose == "Paper" && humanChoose == "Rock") || (cpChoose == "Scissors" && humanChoose == "Paper")) {
        cpScore++;
        pDesc.innerHTML = `Computer option was: ${cpChoose} <br> You Lose! computer score is: ${cpScore}`;
    }
    checkGame();
  }

function checkGame(){
    if(humanScore >= 5 || cpScore >= 5){
        if(humanScore > cpScore) {
            pDesc.textContent = `You win with: ${humanScore} points`;
        } else if(humanScore === cpScore){
            pDesc.textContent = `A tie with: ${humanScore} points`;
        } else {
            pDesc.textContent = `Computer win with: ${cpScore} points`;
        }
        cpScore = 0;
        humanScore = 0;
        const buttons = mainDiv.querySelectorAll("button");
        buttons.forEach(button => button.remove());
        constructUiGame();
    }
}  

constructUiGame();