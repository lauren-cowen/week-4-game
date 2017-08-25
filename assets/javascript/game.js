var totalScore =0;
var wins =0;
var loses =0;
var winningNumber;
var numberOptions = [10,3,5,7];
var shuffledNumbers =[];
var counter =0;


$( document ).ready(function() {

winningNumber = 19 + Math.floor(Math.random() * 101);
$("#number-to-guess").text(winningNumber);
$("#numWins").text(wins);
$("#numloses").text(loses);

function shuffleNumbers(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}

shuffledNumbers = shuffleNumbers(numberOptions);


$("#cry1").attr("value", shuffledNumbers[0]);
$("#cry2").attr("value", shuffledNumbers[1]);
$("#cry3").attr("value", shuffledNumbers[2]);
$("#cry4").attr("value", shuffledNumbers[3]);

$("#cry1").on("click", function()
{
	var added = $("#cry1").attr("value");
	added = parseInt(added);
	console.log(added);
	counter +=added;
	$("#score").text(counter);
	$("#result").empty();

	if(counter===winningNumber) {
	$("#result").text("You win!");
	reset();
	wins++;
	$("#numWins").text(wins);

}

if(counter>winningNumber) {
	$("#result").text("You lose!");
	reset();
	loses++;
	$("#numloses").text(loses);

}

	});

$("#cry2").on("click", function()
{
	var added = $("#cry2").attr("value");
	$("#result").empty();
	added = parseInt(added);
	console.log(added);
	counter +=added;
	$("#score").text(counter);

	if(counter===winningNumber) {
	$("#result").text("You win!");
	reset();
	wins++;
	$("#numWins").text(wins);

}

if(counter>winningNumber) {
	$("#result").text("You lose!");
	reset();
	loses++;
	$("#numloses").text(loses);

}

});

$("#cry3").on("click", function()
{
	var added = $("#cry3").attr("value");
	$("#result").empty();
	added = parseInt(added);
	console.log(added);
	counter +=added;
	$("#score").text(counter);

	if(counter===winningNumber) {
	$("#result").text("You win!");
	reset();
	wins++;
	$("#numWins").text(wins);

}

if(counter>winningNumber) {
	$("#result").text("You lose!");
	reset();
	loses++;
	$("#numloses").text(loses);

}

});

$("#cry4").on("click", function()
{
	var added = $("#cry4").attr("value");
	added = parseInt(added);
	console.log(added);
	counter +=added;
	$("#score").text(counter);


	if(counter===winningNumber) {
	$("#result").text("You win!");
	reset();
	wins++;
	$("#numWins").text(wins);

}

if(counter>winningNumber) {
	$("#result").text("You lose!");
	reset();
	loses++;
	$("#numloses").text(loses);

}
});




function reset() {
	winningNumber = 19 + Math.floor(Math.random() * 101);
	$("#number-to-guess").text(winningNumber);
	counter =0;
	shuffledNumbers = shuffleNumbers(numberOptions);
	$("#score").text(counter);
}






















	});


