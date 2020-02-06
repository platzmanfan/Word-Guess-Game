var wins = 0;

var currentWord = "";

var guessRemaining = 12;

var lettersGuessed = "";


var winsText = document.getElementById("wins");

var currentText = document.getElementById("current-word");

var guessText = document.getElementById("guess");

var alreadyText = document.getElementById("already");

document.onkeyup = function(event){

    var userGuess = event.key;
    

    console.log(userGuess);

    currentText.textContent = userGuess.toUpperCase();
    





};