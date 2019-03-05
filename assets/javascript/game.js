var win = 1;
var loss = 1;
var guessesLeft = 10;
var guessedLetters = [];

var alphabet =
    ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q"
    ,"r","s","t","u","v","w","x","y","z"];

var randomIndex = Math.floor(Math.random() * alphabet.length);
var computerChoice = alphabet[randomIndex];


document.onkeyup = function(event) {
  var playerChoice = event.key;
  var regexp = /[a-z]/gi;
    if (!regexp.test(playerChoice)) {
      alert("Please enter a letter.");
    }
    else {
    }

    if (guessesLeft <= 0) {
          
      document.getElementById("loss").innerHTML = loss++;
      alert("YOU'RE A LOSER!!!");
      
      guessesLeft = 10;
      guessedLetters = [];
      document.getElementById("guessedLetters").innerHTML = guessedLetters;
      document.getElementById("guessesLeft").innerHTML = 10;
      randomIndex = Math.floor(Math.random() * alphabet.length);
      computerChoice = alphabet[randomIndex];
    }

    if (computerChoice === playerChoice) {

      document.getElementById("win").innerHTML = win++;
      alert("YOU'RE A WINNER!!!");

      guessedLetters = [];
      document.getElementById("guessedLetters").innerHTML = guessedLetters;
      randomIndex = Math.floor(Math.random() * alphabet.length);
      computerChoice = alphabet[randomIndex];
      guessesLeft = 10;
      document.getElementById("guessesLeft").innerHTML = 10;

    } else {
      
      alert("Guess again!");
      document.getElementById("guessesLeft").innerHTML = guessesLeft--;
      guessedLetters.push(playerChoice);
      document.getElementById("guessedLetters").innerHTML = guessedLetters;
    }
}