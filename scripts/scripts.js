// creating a namespace to avoid clashing
const tictactoe = {
	playerOneColor: "playerOneColor",
	playerTwoColor: "playerTwoColor",
	playerOne: "Blue",
	playerTwo: "Yellow",
	msgAlreadyClicked: ", try a different square.",
	msgCurrentPlayer: " to play.", //for the "current player to play" message
	msgBegin: " Begin by clicking any square.",
	msgGameOver: "That was a tough game, Blue and Yellow! Play again? ",
	msgWinningMessage: " wins - Tell your friends! ",
};

tictactoe.grid = [];

tictactoe.moveCounter;
tictactoe.gameOver = false;
tictactoe.currentPlayer = "";
tictactoe.nextPlayer = "";
tictactoe.nextColor = "";
tictactoe.displayMessage = "";

//when a Square is clicked,
tictactoe.clickSquare = function () {
	//proceed only if the game is not over

	if (!tictactoe.gameOver) {
		//check if the square has already been clicked

		if (tictactoe.IsAlreadyClicked($(this).attr("class"))) {
			$(".txtMessage").text(
				tictactoe.currentPlayer + tictactoe.msgAlreadyClicked
			);
		}
		//add the player's color to the clicked square and switch players
		else {
			tictactoe.nextColor =
				tictactoe.nextColor === tictactoe.playerOneColor
					? tictactoe.playerTwoColor
					: tictactoe.playerOneColor;

			//paint color onto square
			$(this).addClass(tictactoe.nextColor);

			tictactoe.grid[this.getAttribute("data-x")][this.getAttribute("data-y")] =
				tictactoe.currentPlayer;

			if (!tictactoe.checkForWinningMove()) {
				tictactoe.swapPlayer();

				$(".txtMessage").text(
					tictactoe.currentPlayer + tictactoe.msgCurrentPlayer
				);

				//increment the counter after the move
				tictactoe.moveCounter += 1;

				if (tictactoe.moveCounter === 9) {
					tictactoe.gameOver = true;
					$(".txtMessage").text(tictactoe.msgGameOver);
					console.log(tictactoe.grid);
				}
			} else {
				$(".txtMessage").text(
					tictactoe.currentPlayer + tictactoe.msgWinningMessage
				);
			}
		}
	} else {
		//game over, do nothing
	}
};

//Reset score, Restore to default for replay
tictactoe.playAgain = function () {
	tictactoe.reset();
};

tictactoe.pickRandom = () => {
	console.log("random");
};

$(document).ready(function () {
	tictactoe.init();
});

//initialising everything
tictactoe.init = function () {
	tictactoe.eventListener();
	tictactoe.reset();
};

//setting up event listeners
tictactoe.eventListener = function () {
	$("#squareOne").on("click", tictactoe.clickSquare);
	$("#squareOne").on("keypress", tictactoe.clickSquare);
	$("#squareTwo").on("click", tictactoe.clickSquare);
	$("#squareTwo").on("keypress", tictactoe.clickSquare);
	$("#squareThree").on("click", tictactoe.clickSquare);
	$("#squareThree").on("keypress", tictactoe.clickSquare);
	$("#squareFour").on("click", tictactoe.clickSquare);
	$("#squareFour").on("keypress", tictactoe.clickSquare);
	$("#squareFive").on("click", tictactoe.clickSquare);
	$("#squareFive").on("keypress", tictactoe.clickSquare);
	$("#squareSix").on("click", tictactoe.clickSquare);
	$("#squareSix").on("keypress", tictactoe.clickSquare);
	$("#squareSeven").on("click", tictactoe.clickSquare);
	$("#squareSeven").on("keypress", tictactoe.clickSquare);
	$("#squareEight").on("click", tictactoe.clickSquare);
	$("#squareEight").on("keypress", tictactoe.clickSquare);
	$("#squareNine").on("click", tictactoe.clickSquare);
	$("#squareNine").on("keypress", tictactoe.clickSquare);

	//to work on focus and on click
	$("#btnRandom").on("keypress", tictactoe.pickRandom);
	$("#btnRandom").on("click", tictactoe.pickRandom);
	$("#btnAgain").on("keypress", tictactoe.playAgain);
	$("#btnAgain").on("click", tictactoe.playAgain);
};

//checks if a square is already clicked
tictactoe.IsAlreadyClicked = function (className) {
	return (
		className.includes(tictactoe.playerOneColor) ||
		className.includes(tictactoe.playerTwoColor)
	);
};

//Update who the current and next players are.
tictactoe.swapPlayer = function () {
	let tempPlayer = tictactoe.nextPlayer;
	tictactoe.nextPlayer = tictactoe.currentPlayer;
	tictactoe.currentPlayer = tempPlayer;
};

//checks if a winning move has been made
tictactoe.checkForWinningMove = function () {
	//we need a minimum of 5 moves to have the possibility to win
	if (tictactoe.moveCounter < 4) {
		return false;
	} else {
		return tictactoe.runChecks();
	}
};

tictactoe.runChecks = function () {
	if (
		//all three rows
		(tictactoe.grid[0][0] === tictactoe.grid[0][1] &&
			tictactoe.grid[0][1] === tictactoe.grid[0][2]) ||
		(tictactoe.grid[1][0] === tictactoe.grid[1][1] &&
			tictactoe.grid[1][1] === tictactoe.grid[1][2]) ||
		(tictactoe.grid[2][0] === tictactoe.grid[2][1] &&
			tictactoe.grid[2][1] === tictactoe.grid[2][2]) ||
		//all three columns
		(tictactoe.grid[0][0] === tictactoe.grid[1][0] &&
			tictactoe.grid[1][0] === tictactoe.grid[2][0]) ||
		(tictactoe.grid[0][1] === tictactoe.grid[1][1] &&
			tictactoe.grid[1][1] === tictactoe.grid[2][1]) ||
		(tictactoe.grid[0][2] === tictactoe.grid[1][2] &&
			tictactoe.grid[1][2] === tictactoe.grid[2][2]) ||
		//two diagonals
		(tictactoe.grid[0][0] === tictactoe.grid[1][1] &&
			tictactoe.grid[1][1] === tictactoe.grid[2][2]) ||
		(tictactoe.grid[0][2] === tictactoe.grid[1][1] &&
			tictactoe.grid[1][1] === tictactoe.grid[2][0])
	) {
		tictactoe.gameOver = true;

		return true;
	} else {
		return false;
	}
};

//Reset the game
tictactoe.reset = function () {
	tictactoe.currentPlayer = tictactoe.playerOne;
	tictactoe.nextPlayer = tictactoe.playerTwo;
	tictactoe.nextColor = tictactoe.playerTwo;
	$(".txtMessage").text(
		tictactoe.currentPlayer + tictactoe.msgCurrentPlayer + tictactoe.msgBegin
	);

	tictactoe.moveCounter = 0;
	tictactoe.gameOver = false;

	tictactoe.grid = [
		[1, 2, 3],
		[4, 5, 6],
		[7, 8, 9],
	];

	//clear square colors
	$("." + tictactoe.playerOneColor).removeClass(tictactoe.playerOneColor);
	$("." + tictactoe.playerTwoColor).removeClass(tictactoe.playerTwoColor);
};
