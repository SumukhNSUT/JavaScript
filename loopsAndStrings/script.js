// number guessing game
gameNum = 25;
userNum = prompt("Enter number:");

while (gameNum != userNum) {
	userNum = prompt("Enter again:");
}
console.log("You win!");
