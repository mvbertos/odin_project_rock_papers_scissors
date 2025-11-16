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

playGame();

function playGame() {
  for (let i = 0; i < 5; i++) {
    console.log("######################");
    console.log("Round:" + (i + 1));
    let computerChoice = getComputerChoice();
    let humanChoice = getHumanChoice();
    playRound(computerChoice, humanChoice);
  }
  console.log("######################");
  console.log("The Game Ends!!!");
  if (computerScore > humanScore) {
    console.log("Computer Wins");
  } else if (computerScore > humanScore) {
    console.log("Human Wins");
  } else {
    console.log("It is a Draw");
  }
}

// get the computer choice
function getComputerChoice() {
  let value = Math.floor(Math.random() * 3);
  return value;
}

// get user choice

function getHumanChoice() {
  return parseInt(
    prompt("Choose a option? \n0: Rock \n1: Paper \n2: Scissors")
  );
}

// get result based on computer and human inputs
// 0 losses to 1, 1 losses to 2 and 2 losses to 0
function playRound(c, h) {
  if ((c == 0 && h == 1) || (c == 1 && h == 2) || (c == 2 && h == 0)) {
    //human wins
    console.log("Result: Computer loses");
    console.log(
      choices[h].toUpperCase() + " beats " + choices[c].toUpperCase()
    );
    humanScore += 1;
  } else if ((h == 0 && c == 1) || (h == 1 && c == 2) || (h == 2 && c == 0)) {
    //computer wins
    console.log("Result: Human loses");
    console.log(
      choices[c].toUpperCase() + " beats " + choices[h].toUpperCase()
    );
    computerScore += 1;
  } else {
    console.log("Result: It's is a draw");
    console.log(
      choices[c].toUpperCase() + " draws with " + choices[h].toUpperCase()
    );
  }

  console.log("#### Score Board ####");
  console.log("Computer Score: " + computerScore);
  console.log("Human Score: " + humanScore);
}
