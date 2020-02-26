//Caching The DOM
var userScore=0;
var computerScore=0;
const userScore_span=document.getElementById("user-score");
const computerScore_span=document.getElementById("computer-score");
const score_div=document.querySelector(".score-board");
const result_p=document.querySelector(".results>p")
const paper_div=document.getElementById("p");
const rock_div=document.getElementById("r");
const scissor_div=document.getElementById("s");

//Definining Functions Above

function getComputerChoice()
{
   choices=['r','p','s'];
   const choice=Math.floor(Math.random()*3);
   return choices[choice];
}

function convert(symbol)
{
    if(symbol === "r") return "Rock";
    if(symbol === "p") return "Paper";
    return "Scissors";
    
}



function win(user,computer)
{
    userScore++;
    
    userScore_span.innerHTML=userScore;
    
    result_p.innerHTML=convert(user)+" Beats "+convert(computer)+" YOU WIN!! ";
    document.getElementById(user).classList.add('green-glow');
    setTimeout(function(){
        document.getElementById(user).classList.remove('green-glow');
    },700)
}

function lose(user,computer)
{

    computerScore++;
    computerScore_span.innerHTML=computerScore;
    result_p.innerHTML=convert(computer)+" Beats "+convert(user)+" YOU LOSE :( ";
    document.getElementById(user).classList.add('red-glow');
    setTimeout(function(){
        document.getElementById(user).classList.remove('red-glow');
    },700)

}

function draw()
{


    result_p.innerHTML="Its A Draw :_:";
    document.getElementById(user).classList.add('gray-glow');
    setTimeout(function(){
        document.getElementById(user).classList.remove('gray-glow');
    },700)
}


function game(userChoice)
{
  const computerChoice=getComputerChoice();
  console.log("Hi I am  " + userChoice);
  console.log("Computer Choice was    "+ computerChoice);

  switch(userChoice+computerChoice)
  {
     case "rs":
     case "pr":
     case "sp":
        //    console.log("USER WINS");
           win(userChoice,computerChoice);
           break;
     case "rp":
     case "ps":
     case "sr":
          lose(userChoice,computerChoice);
           break;
          
    case "rr":
    case "ss":
    case "pp":
            draw();
            break;

 

  }



   
}
//Main Function
function main()
{     
    //Add Event Listeners to those buttons
    rock_div.addEventListener('click',function(){
        // console.log("I am a Rock");
         game("r");
    })
    
    
    paper_div.addEventListener('click',function(){
        // console.log("I am a Paper");
        game("p");
    })
    
    
    scissor_div.addEventListener('click',function(){
        // console.log("I am a Scissor");
        game("s");
    })
    
    } //END of Main

    main();//Calling main   

