console.log("hello");

let humanChoice;
let computerChoice;

function getComputerChoice() {
    // let 0 = rock, 1 = paper, 2=scissors
    // math.random()*3 => returns nummber larger than 0 and smaller than 3 
    // math.floor(math.random()*3)=>remove the floating numbers 
    // assign a variable for the number 
    // if number =0, then, number =1 then, number =2 then 
    let randomNumber = Math.floor(Math.random()*3);
    console.log(randomNumber); 
    
    if (randomNumber==0) {
        computerChoice = "rock";
        console.log(computerChoice);
    }

    else if (randomNumber==1) {
        computerChoice = "paper";
        console.log(computerChoice);
    }

    else {
        computerChoice = "scissors";
        console.log(computerChoice);
    }
    return computerChoice;
}



function getHumanChoice () {
    
    humanChoice = prompt("rock,paper or scissors?");
    console.log(humanChoice);   
    return humanChoice;
}

   

function playGame () {
    let humanScore = 0;
    let computerScore = 0; 

    function playRound (humanChoice, computerChoice) {
    if (humanChoice == "rock") {
        if (computerChoice == "rock") {
            console.log ("it's a draw. You both played rock!");
        }
        else if (computerChoice == "paper") {
            console.log ("you lose! paper wins rock!")
            computerScore ++;
        } else {
            console.log ("you won! rock wins scissors");
            humanScore ++;
        }
    }

    else if (humanChoice == "paper") {
        if (computerChoice == "rock") {
            console.log ("you won, paper wins rock!")
            humanScore ++;
        }
        else if (computerChoice == "paper") {
            console.log ("it's a draw. You both played paper!")
        } else {
            console.log ("you lose! scissors wins paper!");
            computerScore ++;
        }
    } 
    else if (humanChoice == "scissors") {
        if (computerChoice == "rock") {
            console.log ("you lose! rock wins scissors!");
            computerScore ++;
        }
        else if (computerChoice == "paper") {
            console.log ("you win! scissors wins paper!");
            humanScore ++;

        } else {
            console.log("it's a draw, you both played scissors")
        }
    }
}
humanChoice=getHumanChoice();
computerChoice = getComputerChoice();
playRound (humanChoice,computerChoice);
console.log (humanScore,computerScore);

humanChoice=getHumanChoice();
computerChoice = getComputerChoice();
playRound (humanChoice,computerChoice);
console.log (humanScore,computerScore);

humanChoice=getHumanChoice();
computerChoice = getComputerChoice();
playRound (humanChoice,computerChoice);
console.log (humanScore,computerScore);

humanChoice=getHumanChoice();
computerChoice = getComputerChoice();
playRound (humanChoice,computerChoice);
console.log (humanScore,computerScore);

humanChoice=getHumanChoice();
computerChoice = getComputerChoice();
playRound (humanChoice,computerChoice);
console.log (humanScore,computerScore);


if (humanScore>computerScore){
    console.log ("you win!")
}

else if (humanScore < computerScore) {
    console.log ("you lose!")
} else {
    console.log ("it's a draw!")
}
}




playGame ();