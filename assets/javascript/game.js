// begin JS

var letters= ["a","b","c","d","e","f","g","h", "i", "j", "k", "l", "m", "n", "o", "p",
"q","r","s","t","u","v","w","x","y","z"];
var wins = 0;
var losses = 0;
var left = 10;

// console.log;
// document.getElementById("wins");
// document.getElementById("losses");
// document.getElementById("left");
// document.getElementById("guesses");

function happy(){for (var i=0; i < letters.length; i=i+1)
  {
    console.log ("I love" + " " + letters[i]);}}
happy();

document.onkeypress = function(event) {
  var userGuess = event.key;
  var node =document.createElement("li");
  var textnode =document.createTextNode(event.key);
  node.appendChild(textnode);
  document.getElementById("guesses").appendChild(node);
//   document.getElementById('guesses').innerHTML= userGuess + ",";
  var computerChoice = letters[Math.floor(Math.random() * letters.length)];

  if(userGuess === computerChoice){
      wins++;
      computerChoice;
      console.log(computerChoice);
      document.getElementById('guesses').innerHTML= userGuess
      alert("YOU WIN!!!!!!!");
        left=10;
  }
  else{
      left--;
  }
  if(left === 0){
      losses++;
      left=10;
  }

document.getElementById('left').innerHTML = left;
document.getElementById('wins').innerHTML = wins;
document.getElementById('losses').innerHTML = losses;
};