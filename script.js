console.log("Hello");

let cpChoose;
let humanChoose;
let cpScore = 0;
let humanScore = 0;

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
function getHumanChoice(){
    let inpNum = prompt("Put a number to choose an option: Rock [1] | Paper [2] | Scissors [3]", 1);
    console.log(+inpNum);
    switch (+inpNum){
        case 1:
            humanChoose = "Rock";
            break;
        case 2:
            humanChoose = "Paper";
            break;
        case 3:
            humanChoose = "Scissors";
            break;
        default:
            alert("Your number is not 1, 2 or 3 so we assign rock to you.");
            humanChoose = "Rock";
            break;
    }
    console.log(`Your option is : ${humanChoose}.`)
}

function playRound() {
    console.log('Lets go!!!')
    getHumanChoice();
    getComputerChoice();
    if (humanChoose === cpChoose){
        console.log('A tie!')
    } else if((humanChoose == "Rock" && cpChoose == "Scissors") || (humanChoose == "Paper" && cpChoose == "Rock") || (humanChoose == "Scissors" && cpChoose == "Paper")) {
        humanScore++;
        console.log(`You Win! your score is: ${humanScore}`);
    } else if((cpChoose == "Rock" && humanChoose == "Scissors") || (cpChoose == "Paper" && humanChoose == "Rock") || (cpChoose == "Scissors" && humanChoose == "Paper")) {
        cpScore++;
        console.log(`You Lose! computer score is: ${cpScore}`);
    }
  }

function playGame(){
    let rounds = +prompt("¿How many rounds do you want?");
    for (let i = 0; i < rounds; i++) {
        playRound();
    }
    if(humanScore > cpScore) {
        console.log(`You win with: ${humanScore} points`);
    } else if(humanScore === cpScore){
        console.log(`A tie with: ${humanScore} points`);
    } else {
        console.log(`Computer win with: ${cpScore} points`);
    }
    cpScore = 0;
    humanScore = 0;
}