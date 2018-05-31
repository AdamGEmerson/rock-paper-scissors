var playerPoints = 0;
var computerPoints = 0;

function computerChoice() {
	let choice = Math.random();
	console.log(choice)
	if (choice >= .66) {
		choice = "Rock";
	} else if (choice >= .33) {
		choice = "Paper";
	} else {
		choice = "Scissors";
	}
	return choice;
}

function playGame(player, computer) {
	if (player == computer) {
		printOutcome(player, computer, 't');
		return;
	} 
	if (player == "Rock" && computer == "Scissors") {
		printOutcome(player, computer, 'w');
		return;
	} else if (player == "Paper" && computer == "Rock") {
			printOutcome(player, computer, 'w');
			return;
	} else if (player == "Scissors" && computer == "Paper") {
			printOutcome(player, computer, 'w');
			return;
	} else {
		printOutcome(player, computer, 'l');
	}
}

function printOutcome(player, computer, outcome) {
	if (outcome == 'l') {
		updateScore("Computer");
		document.getElementById("comp-score").innerHTML = computerPoints;
		outcome = "You Lose!"
	} else if (outcome == 'w') {
		updateScore("Player");
		document.getElementById("player-score").innerHTML = playerPoints;
		outcome = "You Win!"
	} else {
		outcome = "It's a Draw!"
	}
	let message = "You chose " + player + "! I chose " + computer +". " + outcome;
	document.getElementById("outcome").innerHTML = message;

	if (playerPoints >= 5) {
		alert("You beat me at my own game!? What are you, some kind of Roshambo master?")
		resetGame();
	} else if (computerPoints >= 5) {
		alert("Ha. You suck at guessing! Better luck next time.")
		resetGame();
	}
}

function updateScore(whichScore) {
	if (whichScore == "Player") {
		playerPoints = playerPoints + 1;
		console.log(playerPoints);
	}
	if (whichScore == "Computer") {
		computerPoints += 1;
		console.log(computerPoints);
	}
}

function resetGame() {
	playerPoints = 0;
	computerPoints = 0;
	document.getElementById("comp-score").innerHTML = computerPoints;
	document.getElementById("player-score").innerHTML = playerPoints;
}

//Events for button clicks
document.getElementById("rockbtn").addEventListener("click", function() { playGame("Rock", computerChoice()); } );
document.getElementById("paperbtn").addEventListener("click", function() { playGame("Paper", computerChoice()); });
document.getElementById("scisbtn").addEventListener("click", function() { playGame("Scissors", computerChoice()); });

