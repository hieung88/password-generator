// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");


//lowercase characters
var lowerCase = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
//uppercase characters
var upperCase = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
//numeric characters
var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
//special characters
var special = ['!', '"', '#', '$', '%', '&', "'", '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '[', '\\', ']', '^', '_', '`', '{', '|', '}', '~', '@'];

function generatePassword(){


  console.log('You clicked the button');


// 1. Ask user for password input

numCharacter = prompt(
  'How many characters do you want in your password? Please choose between 8 and 128 characters.'
)


// 2. Check input if it is number and at least 8 characters and no more than 128 characters

while (numCharacter < 8 || numCharacter > 128 || isNaN(numCharacter)) {
  console.log(numCharacter+' is not valid input');
  alert('Please pick a number between 8 and 128');
  numCharacter = prompt('How many characters do you want in your password? Please choose between 8 and 128 characters.');
}


// 3. Generate password based on the input
console.log('There is '+numCharacter+' characters')
var selectedArray = [];
var finalArray = [];


// var numCharacter = prompt ("How much number of Character you want between 8 and 128?");
var lower = confirm ('Please select "OK" if you want LOWERCASE in your password, otherwise select "Cancel"');
var upper = confirm ('Please select "OK" if you want UPPERCASE in your password, otherwise select "Cancel"');
var numeric = confirm ('Please select "OK" if you want NUMBERS in your password, otherwise select "Cancel"');
var characters = confirm ('Please select "OK" if you want SPECIAL CHARACTERS in your password, otherwise select "Cancel"');


if (lower){
  selectedArray = selectedArray.concat(lowerCase); 
}

if (upper){
  selectedArray = selectedArray.concat(upperCase); 
}

if (numeric){
  selectedArray = selectedArray.concat(numbers);  
}

if (characters){
  selectedArray = selectedArray.concat(special); 
}

//Array selected
console.log('Array before joining');
console.log(selectedArray);

//Create final Array
for (var i = 0; i < numCharacter; i++) {      
  finalArray.push (selectedArray[Math.floor(Math.random() * selectedArray.length)]); 
  }

  return finalArray.join("") ;
}


// Write password to the #password input

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button

generateBtn.addEventListener("click", writePassword);
