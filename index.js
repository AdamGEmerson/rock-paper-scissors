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
	let message = "Player chose " + player + ", computer chose " + computer +". Outcome is: " + outcome;
	document.getElementById("outcome").innerHTML = message;

	if (playerPoints >= 5) {
		alert("YOU WIN!")
		resetGame();
	} else if (computerPoints >= 5) {
		alert("COMPUTER WINS!")
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

function changeImage(image) {
	console.log("Firing function changeImage")
	if (image == 'rock') {
		document.getElementById("image").src = "https://proxy.duckduckgo.com/iu/?u=http%3A%2F%2Fg02.a.alicdn.com%2Fkf%2FHTB1L24.KFXXXXa0XpXXq6xXFXXXW%2FDC-0-300V-Blue-LED-Display-Digital-Voltmeter-DC-12V-24V-Voltage-Meter-Tester-Mini-Car.jpg&f=1"
	} else if (image == 'none') {
		document.getElementById("image").src = "https://www.noao.edu/image_gallery/images/d4/J1337-29_crop1-500.jpg"
	}
}

//Events for button clicks
document.getElementById("rockbtn").addEventListener("click", function() { playGame("Rock", computerChoice()); } );
document.getElementById("paperbtn").addEventListener("click", function() { playGame("Paper", computerChoice()); });
document.getElementById("scisbtn").addEventListener("click", function() { playGame("Scissors", computerChoice()); });

//Events for button hovers;
document.getElementById('rockbtn').addEventListener("mouseover", function() { changeImage("rock"); } );
document.getElementById('rockbtn').addEventListener("mouseout", function() { changeImage("none"); } );

