 
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
 

 function playGame(){
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
  

    return `${result} ,you picked ${playerSelection} ,computer picked ${computerSelection}.`
 }
 const  playerSelection  = prompt('Your choice' , '');
 const computerSelection = getComputerChoice();

 console.log(playRound(playerSelection ,computerSelection));
 }
// add a loop that iterates 5 times
 