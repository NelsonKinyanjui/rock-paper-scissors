 
function getComputerChoice(){
    let randomNumber = Math.random();
    if (randomNumber > 0 && randomNumber < 1 / 3){
            return 'rock';

        }
        else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3){
            return 'paper';

    }
    else if (randomNumber >= 2 / 3  && randomNumber < 1 ){
        return 'scissors';

}

}
 function playRound (playerSelection , computerSelection){
    let result = '';

    if (playerSelection === 'rock'){
        if(computerSelection === 'rock'){
            result = 'You tie.'
        }
        else if (computerSelection === 'paper'){
            result = 'You lose.'

        }
        else if (computerSelection === 'scissors'){
            result = 'You win.'
        }
    }
    else if (playerSelection === 'paper'){
        if(computerSelection === 'rock'){
            result = 'You win.'
        }
        else if (computerSelection === 'paper'){
            result = 'You tie.'

        }
        else if (computerSelection === 'scissors'){
            result = 'You lose.'
        }
    }
    else if (playerSelection === 'scissors'){
        if(computerSelection === 'rock'){
            result = 'You lose.'
        }
        else if (computerSelection === 'paper'){
            result = 'You win.'

        }
        else if (computerSelection === 'scissors'){
            result = 'You tie.'
        }
    }
    playerSelection.toLowerCase() = prompt('Your choice' , '');
    computerSelection = getComputerChoice();

    return `${result} ,you picked ${playerSelection} ,computer picked ${computerSelection}.`
 }

 console.log(playRound(playerSelection ,computerSelection));