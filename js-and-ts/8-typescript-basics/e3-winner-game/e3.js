/*
You can use the following spell to get a random integer between 0 and 3:

const random = Math.floor(Math.random() * 3)
Create a very simple game where two players get a random number. Declare a new variable winner with a conditional type that allows it to contain a string or undefined.

Compare the players' numbers. If player one's number is larger, set winner to be string "player 1". If player two's number is larger, set winner to be string "player 2". If the numbers are equal, set winner to undefined.

Print the message "The winner is <winner>" with the appropriate winner to the screen.
*/
{
    var player1 = Math.floor(Math.random() * 3);
    var player2 = Math.floor(Math.random() * 3);
    var winner = void 0;
    if (player1 > player2) {
        winner = "player 1";
    }
    else if (player2 > player1) {
        winner = "player 2";
    }
    else {
        winner = undefined;
    }
    console.log("The winner is ".concat(winner));
}
