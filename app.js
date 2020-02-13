//3 images of a rock, paper, & scissors 
//once 1 picture is clicked (userChoice), images of fists flash 3 times
//left image shows the userChoice hand & right images is randomized image of 3 options
    //if userChoice is rock && comp is scissors
        //add 1 point to user score
    //if userChoice is paper && comp is rock
        //add 1 point to user score
    //if userChoice is scissors && comp is paper
        //add 1 point to user score
    //if userChoice == comp choice
        //tie - no points added
    //else
        //add 1 point to comp score 

//NEED TO FIGURE OUT RESETTING FUNCTION TO PLAY AGAIN
//GET HAND IMAGES INLINE        

const options = ['rock', 'paper', 'scissors'];
let userScore = 0;
let compScore = 0;
    
function submit(image){
    var userChoice =  image.value;
    console.log(userChoice)
    var compChoice = (options[Math.floor(Math.random() * options.length)]);
    console.log(compChoice)
    shoot();
    window.setTimeout(choices, 6050,userChoice, compChoice);
    window.setTimeout(winner, 6075,userChoice, compChoice);
    window.setTimeout(score, 6075,userScore);
}        

function winner(x, y){
    if(x == 'rock' && y=='scissors' || x == 'paper' && y=='rock' ||x == 'scissors' && y=='paper'){
        document.getElementById('outcome').innerHTML="WINNER!";
        console.log('user win')
        userScore++
    }
    else if(x == y){
        document.getElementById('outcome').innerHTML="TIE!";
        console.log('tie')
    }
    else{
        document.getElementById('outcome').innerHTML="LOSER!";
        console.log('comp win')
        compScore++
    } 
}

function shoot(){
    var img = document.getElementById('hands');

    var interval = window.setInterval(function(){
        if(img.style.visibility == 'hidden'){
            img.style.visibility = 'visible';
        }else{
            img.style.visibility = 'hidden';
        } 
    }, 900);
    setTimeout(function() {
        $('#hands').fadeOut('fast');
      }, 6000);  
} 

function choices(x, y){
    if(x == "rock"){
        document.getElementById('rockLeft').style.display='block';
    } 
      else if(x == "paper"){
        document.getElementById('paperLeft').style.display='block';
      }
      else {
        document.getElementById('scissorsLeft').style.display='block';
      }

    if(y == "rock"){
        document.getElementById('rockRight').style.display='block';
      } 
      else if(y == "paper"){
        document.getElementById('paperRight').style.display='block';
      }
      else{
        document.getElementById('scissorsRight').style.display='block';
      } 
}

function score(x){
    document.getElementById('score').innerHTML=x;
}