//Number Guessing Game
var randomNumber= Math.floor(Math.random()*100)+1; //Generates a random number and stores it
var y=randomNumber%2; //Gets the modulus and stores the result in y
if (y==0) //Check to see whether the random number is even or odd
	alert("The number is Even");
else
	alert("The number is Odd");
for (count=1;count<=10;count++) //Sets the counter to run from your first attempt; the counter stops runnung once you've had 10 attempts; the counter will increase by one for every attempt
{
	let num=prompt("Please enter a number:");//Outputs the prompt for user to play
	if (num>randomNumber){
		alert("Your number is higher. Make another guess");
	}
	if (num<randomNumber){
		alert("Your number is lower. Make another guess");
	}
	if (num==randomNumber){
		alert("YOU WIN");
		break; //Stops game when the user has guessed the correct answer
	}
	if (count==10) {
		alert("YOU LOSE");
	}
}
//Program Complete!!