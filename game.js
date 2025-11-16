//UI
let humanChoice = -1;

//Get choice buttons and set the human choice value
//0 is rock, 1 is papper, 2 is scissors
const buttonsChoices = document.querySelectorAll("#game #choices button");

buttonsChoices.forEach((button) => {
  //when the button is clicked set humanChoice value
  //change the selected button color to blue
  //all other buttons se to default white
  button.addEventListener("click", () => {
    onChoiceSelected(button);
  });
});

function onChoiceSelected(button) {
  setChoicesColorToDefault();
  button.setAttribute("style", "background-color:blue");
  let id = button.id;
  if (id == "rock") {
    humanChoice = 0;
  } else if (id == "paper") {
    humanChoice = 1;
  } else {
    humanChoice = 2;
  }
}

//get all choices button and set their colors to white
function setChoicesColorToDefault() {
  buttonsChoices.forEach((button) => {
    button.setAttribute("style", "background-color:white");
  });
}

//Get the playRound button and make the play using the playRound function using the humanChoice from earlier
//update the result when the round is played
const buttonPlayRound = document.querySelector("#game #play");

buttonPlayRound.addEventListener("click", () => {
  if (humanChoice == -1) {
    alert("You must select a button before play a round.");
    return;
  } else {
    playRound(getComputerChoice(), humanChoice);
    updateScoreBoard(humanScore, computerScore);
    setChoicesColorToDefault();
    humanChoice = -1;
  }
});

//Updates the Human and computer score at the document
const pHumanScore = document.querySelector("#humanScore");
const pComputerScore = document.querySelector("#computerScore");

function updateScoreBoard(humanScore, computerScore) {
  pComputerScore.textContent = computerScore;
  pHumanScore.textContent = humanScore;
}

//GAME

// Begin a round
//it will be 5 rounds once the game starts

// Write a gethumanchoice function
// choose a option? 0:rock|1:paper|2:scissors
// it will get a int input from 0 to 2
// 0 is rock, 1 is paper and 2 is scissors
// print back the choosen option

// Write a getcomputerchoice function
// this function will randomly return 0,1 or 2
// 0 is rock, 1 is paper and 2 is scissors
// print back the function the computer selects

// check who wins
// 0 losses to 1, 1 losses to 2 and 2 losses to 0
// print back the result: example(Rock beats scissors)
// if computer wins one point to computer
// if human wins one point to human

// end the round if this is the 5th round already end the game

let choices = ["rock", "paper", "scissors"];
let computerScore = 0;
let humanScore = 0;

// playGame();

function playGame() {
  for (let i = 0; i < 5; i++) {
    console.log("######################");
    console.log("Round:" + (i + 1));
    let humanChoice = getHumanChoice();
    let computerChoice = getComputerChoice();
    playRound(computerChoice, humanChoice);
  }
  console.log("######################");
  console.log("The Game Ends!!!");
  if (computerScore > humanScore) {
    console.log("Computer Wins");
    console.log("The machines takes over the world!");
  } else if (computerScore > humanScore) {
    console.log("Human Wins");
    console.log("The humans takes over the world!");
  } else {
    console.log("It is a Draw");
    console.log("It's okay, Humans and Computers did a pact of peace :)");
  }
}

// get the computer choice
function getComputerChoice() {
  let value = Math.floor(Math.random() * 3);
  return value;
}

// get user choice
function getHumanChoice() {
  while (true) {
    let value = parseInt(
      prompt("Choose a option? \n0: Rock \n1: Paper \n2: Scissors")
    );
    if (value > choices.length || value < 0) {
      alert("The option is invalid");
    } else {
      return value;
    }
  }
}

// get result based on computer and human inputs
// 0 losses to 1, 1 losses to 2 and 2 losses to 0
const pResult = document.querySelector("#result");
function playRound(c, h) {
  pResult.textContent = "Human played: " + choices[h].toUpperCase()+'|';
  pResult.textContent += "Computer played: " + choices[c].toUpperCase()+'|';


  if ((c == 0 && h == 1) || (c == 1 && h == 2) || (c == 2 && h == 0)) {
    //human wins
    pResult.textContent +=
      "Computer loses " +
      choices[h].toUpperCase() +
      " beats " +
      choices[c].toUpperCase();
    humanScore += 1;
  } else if ((h == 0 && c == 1) || (h == 1 && c == 2) || (h == 2 && c == 0)) {
    //computer wins
    pResult.textContent +=
      " Human loses " +
      choices[c].toUpperCase() +
      " beats " +
      choices[h].toUpperCase();

    computerScore += 1;
  } else {
    pResult.textContent +=
      " It's is a draw " +
      choices[c].toUpperCase() +
      " draws with " +
      choices[h].toUpperCase();
  }

  console.log("#### Score Board ####");
  console.log("Computer Score: " + computerScore);
  console.log("Human Score: " + humanScore);
}
