var input = document.getElementById("input");
var vowels = document.getElementById("vowels");
var vowelsNum = document.getElementById("vowelsNum");
var consonents = document.getElementById("consonents");
var consonentsNum = document.getElementById("consonentsNum");


function doTheMagic() {
// Get input value (a string) of the field
  var text = input.value;
// Find and match certain characters of string
// Store all the data as two objects
  var vowelsText = text.match(/[AEIOU]/gi) || [];
  var consonentsText = text.match(/[BCDFGHJKLMNPQRSTVWXYZ]/gi) || [];
// Show
vowelsNum.innerHTML = vowelsText.length;
consonentsNum.innerHTML = consonentsText.length;
vowels.innerHTML = vowelsText.join('');
consonents.innerHTML = consonentsText.join('');
}

input.onkeyup = doTheMagic;


