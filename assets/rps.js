 
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
 
let score = {
    wins : 0,
    losses : 0,
    ties : 0
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

        if(result === 'You win.'){
            wins += 1;
        }
       else if(result === 'You lose.'){
        losses += 1;
        }
        else if(result === 'You tie.'){
            ties += 1;
    
        }
    
         
  

    return `${result} ,you picked ${playerSelection} ,computer picked ${computerSelection}.`
 }
 const  playerSelection  = prompt('Your choice' , '');
 const computerSelection = getComputerChoice();

 console.log(playRound(playerSelection ,computerSelection));
 }
// add a loop that iterates 5 times




 for(i = 1; i < 5; i++){
    
    playGame();

   
    

 }