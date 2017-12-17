$(document ).ready(function(){
	var Random=Math.floor(Math.random()*101+19)
	//Provides randoms number to display at beginning of game
	//Number should be between 19-120
	//
	$('#randomNumber').text(Random);
	//appending random number to "randomNumber id"
	//
	var num1= Math.floor(Math.random()*11+1)
	var num2= Math.floor(Math.random()*11+1)
	var num3= Math.floor(Math.random()*11+1)
	var num4= Math.floor(Math.random()*11+1)
	//Setting a random number for each crystal between the number 1-12

	var playerTotal= 0;
	var wins= 0;
	var loss= 0;

$('#numberWins').text(wins);
$('#numberLoss').text(loss);

//reset function
function reset(){
	Random=Math.floor(Math.random()*101+19);
	console.log(Random)
	$('#randomNumber').text(Random);
	num1= Math.floor(Math.random()*11+1);
	num2= Math.floor(Math.random()*11+1);
	num3= Math.floor(Math.random()*11+1);
	num4= Math.floor(Math.random()*11+1);
	playerTotal= 0;
	$('#finalScore').text(playerTotal);
	}
//adds wins to playerTotal 
function winner(){
alert("Winner!");
	wins++;
	$('#numberWins').text(wins);
	reset();
}
//adds losses to playerTotal
function loser(){
alert("LOSER");
	loss++;
	$('#numberLoss').text(loss);
	reset()
}
//On click for crystals
	$('#first').on ('click', function(){
		playerTotal = playerTotal + num1;
		console.log("New playerTotal= " + playerTotal);
		$('#finalScore').text(playerTotal);
			//setting win or loss conditions
			if (playerTotal == Random) {
				winner();
			}
			else if (playerTotal > Random) {
				loser();
			}
	})
	$('#second').on ('click', function(){
		playerTotal = playerTotal + num2;
		console.log("New playerTotal= " + playerTotal);
		$('#finalScore').text(playerTotal);
			if (playerTotal == Random) {
				winner();
			}
			else if (playerTotal > Random) {
				loser();
			}
	})
	$('#third').on ('click', function(){
		playerTotal = playerTotal + num3;
		console.log("New playerTotal= " + playerTotal);
		$('#finalScore').text(playerTotal);
			if (playerTotal == Random) {
				winner();
			}
			else if (playerTotal > Random) {
				loser();
			}
	})
	$('#forth').on ('click', function(){
		playerTotal = playerTotal + num4;
		console.log("New playerTotal= " + playerTotal);
		$('#finalScore').text(playerTotal);
			if (playerTotal == Random) {
				winner();
			}
			else if (playerTotal > Random) {
				loser();
			}
	});
});