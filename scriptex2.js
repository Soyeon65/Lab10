var myPrompt = prompt("What is your age?");
console.log(myPrompt);

var todayDate = new Date();
var currentYear = todayDate.getFullYear();

var birthYear = currentYear - myPrompt;

document.getElementById("output").innerHTML = birthYear;
