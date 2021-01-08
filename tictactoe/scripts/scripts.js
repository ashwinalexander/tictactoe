// creating a namespace to avoid clashing
const tictactoe = {
	playerOneColor: "playerOneColor",
	playerTwoColor: "playerTwoColor",
	playerOne: "Yellow",
	playerTwo: "Blue",
	msgAlreadyClicked: "This square has already been clicked",
	msgCurrentPlayer: " to play.",
	msgBegin: " Begin by clicking any square",
};

tictactoe.currentPlayer = "";
tictactoe.nextPlayer = "";
tictactoe.nextColor = "";
tictactoe.currentScore = 0;
tictactoe.displayMessage = "";

tictactoe.clickSquare = function () {
	if (tictactoe.IsAlreadyClicked($(this).attr("class"))) {
	} else {
		tictactoe.nextColor =
			tictactoe.nextColor === tictactoe.playerOneColor
				? tictactoe.playerTwoColor
				: tictactoe.playerOneColor;

		$(this).addClass(tictactoe.nextColor);
		tictactoe.swapPlayer();

		$(".txtMessage").text(tictactoe.currentPlayer + "to play now");
	}
	// check if it has blue or yellow class
	// if no, add class
	// if no, compute
	// if yes, put message  and return
	// if(String.con
	// console.log(document.activeElement.className);
};

//Reset score, Restore to default for replay
tictactoe.playAgain = function () {
	//reset the score
	//clear the squares
	//clear the text message
	tictactoe.reset();
};

tictactoe.pickRandom = function () {
	console.log("random");
};

$(document).ready(function () {
	tictactoe.init();
});

tictactoe.reset = function () {
	console.log("reset and init");
	tictactoe.currentPlayer = tictactoe.playerOne;
	tictactoe.nextPlayer = tictactoe.playerTwo;
	tictactoe.nextColor = tictactoe.playerTwo;
	$(".txtMessage").text(
		tictactoe.currentPlayer + tictactoe.msgCurrentPlayer + tictactoe.msgBegin
	);

	//clear square colors
	$("." + tictactoe.playerOneColor).removeClass(tictactoe.playerOneColor);
	$("." + tictactoe.playerTwoColor).removeClass(tictactoe.playerTwoColor);
};

//initialising everything
tictactoe.init = function () {
	tictactoe.eventListener();
	tictactoe.reset();
};

//setting up event listeners
tictactoe.eventListener = function () {
	$(".squareOne").on("click", this.clickSquare);
	$(".squareOne").on("keypress", this.clickSquare);
	$(".squareTwo").on("click", this.clickSquare);
	$(".squareTwo").on("keypress", this.clickSquare);
	$(".squareThree").on("click", this.clickSquare);
	$(".squareThree").on("keypress", this.clickSquare);
	$(".squareFour").on("click", this.clickSquare);
	$(".squareFour").on("keypress", this.clickSquare);
	$(".squareFive").on("click", this.clickSquare);
	$(".squareFive").on("keypress", this.clickSquare);
	$(".squareSix").on("click", this.clickSquare);
	$(".squareSix").on("keypress", this.clickSquare);
	$(".squareSeven").on("click", this.clickSquare);
	$(".squareSeven").on("keypress", this.clickSquare);
	$(".squareEight").on("click", this.clickSquare);
	$(".squareEight").on("keypress", this.clickSquare);
	$(".squareNine").on("click", this.clickSquare);
	$(".squareNine").on("keypress", this.clickSquare);

	//to work on focus and on click
	$("#btnRandom").on("keypress", this.pickRandom);
	$("#btnRandom").on("click", this.pickRandom);
	$("#btnAgain").on("keypress", this.playAgain);
	$("#btnAgain").on("click", this.playAgain);
};

//checks if a square is already clicked
tictactoe.IsAlreadyClicked = function (className) {
	return className.includes(tictactoe.playerOneColor) ||
		className.includes(tictactoe.playerTwoColor)
		? true
		: false;
};

tictactoe.swapPlayer = function () {
	// let tempPlayer = tictactoe.nextPlayer;
	// tictactoe.nextPlayer = tictactoe.currentPlayer;
	// tictactoe.currentPlayer = tempPlayer;
	console.log("current " + tictactoe.currentPlayer);
	console.log("next" + tictactoe.nextPlayer);
};
