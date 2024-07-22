let score =JSON.parse(localStorage.getItem('score')) || 
{
   wins:0,
   losses:0,
   tie:0
 } ;

 updateScore();
/* if(score===null)
{
 score={
   wins:0,
   losses:0,
   tie:0
 }
}*/

let computerMove = '';
let result = '';
let player = '';

document.body.addEventListener('keydown',(event)=>
  {
    if(event.key==='r')
    {
      playGame('rock');
    }
    else if(event.key==='p')
    {
      playGame('paper');
    }
    else if(event.key ==='s')
    {
      playGame('scissors');
    }

  })

function playGame(playerMove)
{
 player=playerMove;
 if(playerMove==='rock')
 {
      compDecision();
     
     if (computerMove === 'rock') {
       result = 'Tie.';
     } else if (computerMove === 'paper') {
       result = 'You lose.';
     } else if (computerMove === 'scissors') {
       result = 'You win.';
     }

     
 }
 else if(playerMove==='paper')
 {
       compDecision();

     if (computerMove === 'rock') {
       result = 'You win.';
     } else if (computerMove === 'paper') {
       result = 'Tie.';
     } else if (computerMove === 'scissors') {
       result = 'You lose.';
     }
 }
 else if(playerMove==='scissors')
 {
   compDecision();

   if (computerMove === 'rock') {
     result = 'You lose.';
   } else if (computerMove === 'paper') {
     result = 'You win.';
   } else if (computerMove === 'scissors') {
     result = 'Tie.';
   }
 }

 if(result==='You win.')
   score.wins++;
 else if(result==='You lose.')
   score.losses++;
 else if(result==='Tie.')
   score.tie++;

   localStorage.setItem('score',JSON.stringify(score));

   updateResult();
   updateMove();
   updateScore();
   


}

function compDecision()
{ 
 const randomNumber = Math.random();
 console.log(randomNumber);

 if (randomNumber >= 0 && randomNumber < 1 / 3)
 {
     computerMove = 'rock';
 } 
 else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) 
 {
     computerMove = 'paper';
 } 
 else if (randomNumber >= 2 / 3 && randomNumber < 1)
 {
     computerMove = 'scissors';
 }
}

function updateResult()
{
 document.querySelector('.js-result').innerHTML=result;
}
function updateMove()
{
 document.querySelector('.js-moves').innerHTML=`You <img class="img" src="img/${player}-emoji.png"> <img class="img" src="img/${computerMove}-emoji.png"> Computer`
}
function updateScore()
{
 
 document.querySelector('.js-score').innerHTML=`Wins: ${score.wins} , Losses: ${score.losses} , Tie: ${score.tie}`;
}

let isAutoplaying =false;
let intervalId;
function autoplay()
{
  if(!isAutoplaying)
  {
    
      intervalId=setInterval(function(){
        compDecision();
        const playerMove = computerMove;
        playGame(playerMove);
      },1000)
  
    isAutoplaying=true;
 }
  else{
    clearInterval(intervalId);
    isAutoplaying=false;
  }

}

