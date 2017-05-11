
//variable array for possible computer choices
var choices = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm',
					'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
	//variables for stats
var stats = {
	wins: 0,
	losses: 0, 
	guessesLeft: 9,
	listOfGuesses: [],
};

//function to reset guesses left, guesses array, and create new computer choice
function resetFunction(newGuess) {
	stats.guessesLeft = 9;
	stats.listOfGuesses = [];
	computerChoice = choices[Math.floor(Math.random() * choices.length)];
};

//variable for random computer choice
var computerChoice = choices[Math.floor(Math.random() * choices.length)];

//initiate function on keyup
document.onkeyup = function(event) {

	//saves pressed key as userGuess
	var userGuess = event.key.toLowerCase();

	//add userGuess to listOfGuesses array if it is a new guess, and makes sure the key pressed is within the possible choices
	if (stats.listOfGuesses.indexOf(userGuess) < 0 && choices.indexOf(userGuess) >= 0) {
		stats.listOfGuesses[stats.listOfGuesses.length] = userGuess;
		stats.guessesLeft--;
	}

	//code for win
	if (computerChoice == userGuess) {
		stats.wins++;
		resetFunction();
	}
	//code for loss
	else if (stats.guessesLeft == 0) {
		stats.losses++;
		resetFunction();
	}

	//display progress to html
	var html = "<h1>Psychic Game</h1>" +
			   "<h3>Guess what letter I'm thinking of!</h3>" +
			   "<h4>Wins: " + stats.wins + "</h4>" +
			   "<h4>Losses: " + stats.losses + "</h4>" + 
			   "<h4>Guesses Left: " + stats.guessesLeft + "</h4>" +
			   "<h4>Your Guesses So Far: " + stats.listOfGuesses + "</h4>";

	document.querySelector("#game-div").innerHTML = html;
	
}