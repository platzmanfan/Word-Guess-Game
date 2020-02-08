//--- initialize variables -------------------///

var wins = 0;

var losses = 0;

var currentWord = "";

var userGuess = "";

var guessRemaining = 12;

var lettersGuessed = [];

//--- getting the id from the html file //

var winsText = document.getElementById("wins");

var currentText = document.getElementById("current-word");

var computerWord = document.getElementById("computer-word");

var guessText = document.getElementById("guess");
var alreadyText = document.getElementById("already");

var exampleText = document.getElementById("example"); // should delete this

var listOfPlayers = ["JAMES", "BRYANT","HOWARD","ROSE", "PAUL","ANTHONY","PIERCE","HARDEN","WESTBROOK"];
var pcGuess = listOfPlayers[Math.floor(Math.random() * listOfPlayers.length)];


document.addEventListener("DOMContentLoaded", function(event) {
    
    var userGuess = event.key;
    var word ="";
    
    
    var pcGuess = listOfPlayers[Math.floor(Math.random() * listOfPlayers.length)];
    for (var i = 0; i < pcGuess.length; i++){
        var word = word + "___ ";
        for (var j =0; j < pcGuess[i].length; j++){
            var word1 = pcGuess[i];
            
            console.log(word1); // commented
           
        exampleText.textContent = word.toUpperCase(); 
        }
    }
       
    console.log(pcGuess);// this should be commented
    // computerWord.textContent = pcGuess.toUpperCase();  delete later
});
// --- creating event when a key is pressed //
var compare = function (word1, userGuess){
        if (word1 === userGuess){
            exampleText.textContent = userGuess.toUpperCase();
            exampleText.append (userGuess.toUpperCase());
        }
}

document.onkeyup = function(event){

   
    var userGuess = event.key;



    computerWord.textContent ="";
    //  console.log(computerGuess);     // this should delete later//


    console.log(userGuess); // this should delete later //

    // currentText.textContent = userGuess.toUpperCase();

    
    
    alreadyText.append("  " + userGuess.toUpperCase());
    
    guessRemaining--;
    guessText.textContent = guessRemaining;
    
    var word ="";
    
    
    // should create if guesses are less than 1 or p.textContent == b.textContent wins increment or reload new word and reset the guessRemainign
    //--- should be more code in this if to change the new word and reset wins and letters guessed------//
    if (guessRemaining <= 1){
       
        var pcGuess = listOfPlayers[Math.floor(Math.random() * listOfPlayers.length)];
        for (var i = 0; i < pcGuess.length; i++){
            
            var word = word + "_ ";
            exampleText.textContent = word.toUpperCase(); 
        }
        
        
        console.log(pcGuess);
       
        
       winsText.textContent = 0;
        return guessRemaining = 12;
        
    }
};
