// Letter choices that you can click and other variables set to 0

var keyboardChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var wins = 0;
var losses = 0;
var attemptsLeft = 9;
var guessedLetters = [];
// var lettersToAttempt = null;

function reset(){
    attemptsLeft = 9;
    guessedLetters = [];
    document.getElementById("guesses_so_far").innerHTML="Your Guesses so far: "+guessedLetters;
    document.getElementById("guesses_left").innerHTML="Guesses left: "+attemptsLeft; 
    //var computerGuess = keyboardChoices[Math.floor(Math.random() * keyboardChoices.length)]; 
   // console.log(computerGuess);
}
//var computerGuess = keyboardChoices[Math.floor(Math.random() * keyboardChoices.length)];
//console.log(computerGuess);
//Program will find random letter from keyboard

//Computer will generate a random letter as user presses a letter
document.onkeyup = function(event){
    var computerGuess = keyboardChoices[Math.floor(Math.random() * keyboardChoices.length)];
    console.log(computerGuess);
    var pressedKey = String.fromCharCode(event.keyCode).toLowerCase();
    console.log("MyKey "+pressedKey);
    guessedLetters.push(pressedKey);
    document.getElementById("guesses_so_far").innerHTML="Your Guesses so far: " + guessedLetters.join(", "); 
     //generate a random letter
    //console.log("comparación intentos restantes: "+attemptsLeft);
    if(attemptsLeft > 1){
        //console.log(computerGuess + " yyyy "+ pressedKey);
       
        if(computerGuess === pressedKey){
            //console.log("gano");
            wins ++; 
            document.getElementById("wins").innerHTML="Wins: "+wins;
            //Call function to reset variables
            
            reset();
        }else{
            //console.log("no coincidio");
            attemptsLeft --;
            document.getElementById("guesses_left").innerHTML="Guesses left: "+attemptsLeft;
            
        }

    }else{
        //console.log("salto");
        losses ++;
        document.getElementById("losses").innerHTML="Losses: "+losses;
        reset();

    }
}




