// creating a namespace
const tictactoe = {};
tictactoe.currentScore = 0;
tictactoe.usermessage = "";

tictactoe.hello = function () {
	tictactoe.currentScore += 2;
	console.log(tictactoe.currentScore);
};

//Play Again
tictactoe.playAgain = function () {
	//reset the score
	//clear the squares
	//clear the text message
	tictactoe.currentScore = 0;
	tictactoe.usermessage = "Resetting Game Now";
	console.log("play again");
};

$(document).ready(function () {
	tictactoe.init();
});

//initialising everything
tictactoe.init = function () {
	console.log("init");

	tictactoe.eventListener();
};

//setting up event listeners
tictactoe.eventListener = function () {
	$(".square").on("click", this.hello);
	$("#btnAgain").on("focus", this.playAgain);
};
