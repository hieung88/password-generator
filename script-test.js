// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");


//lowercase characters
var lowerCase = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
//uppercase characters
var upperCase = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
//numeric characters
var numeric = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
//special characters
var special = ['!', '"', '#', '$', '%', '&', "'", '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '[', '\\', ']', '^', '_', '`', '{', '|', '}', '~', '@'];

function generatePassword(){
  console.log("You clicked the button")
// 1. Ask user for password input
// -length
// -lowercase,uppercase,numbers,special characters
// 2. Check input
// 3. Generate password based on the input
// 4. Display password


// numberOfCharacters = prompt("How many characters do you want in your password? Choose between 8-128 characters.");
// if (numberOfCharacters < 8 || numberOfCharacters > 128) {
//   alert("Please choose the length of your password between 8 and 128 characters.");
// } else if (isNaN(numberOfCharacters)) {
//   numberOfCharacters = prompt("Please enter a valid number.");
// }
// else {
//   // alert("Your password will be " + numberOfCharacters + " characters long.");
//   console.log(numberOfCharacters)
  
// }

numberOfCharacters = prompt("How many characters do you want in your password? Choose between 8-128 characters.");
if (isNaN(numberOfCharacters)) {
  numberOfCharacters = prompt("Please enter a valid number.");
} else if (numberOfCharacters < 8 || numberOfCharacters > 128) {
  alert("Please choose the length of your password between 8 and 128 characters.");
}
else {
  // alert("Your password will be " + numberOfCharacters + " characters long.");
  console.log(numberOfCharacters)
  
}




// // empty array
 
//   var resultArray = [];
//   var userArray = [];
//   upperCase [1]
// //-----------------------------------------------------------------
//   var numCharacter = prompt ("How much number of Character you want between 8 and 128?");
//   var numbers = confirm ("you want numbers in your password?");
//   var uppercases = confirm ("you want Uppercases in your password?");
//   var lowercases = confirm ("you want lowercases in your password?");
//   var characters = confirm ("you want special characters in your password?");


// condition of the array

  if (numbers){
    resultArray = resultArray.concat(numeric);
  
  }

  if (uppercases){
    resultArray = resultArray.concat(upperCase );

  } 

  if (lowercases){
    resultArray = resultArray.concat(lowerCase);
  }

  if (characters){
    resultArray = resultArray.concat(special);
  }
  console.log(resultArray)


  for (var i = 0; i < numCharacter; i++) {      
    userArray.push (resultArray[Math.floor(Math.random() * resultArray.length)]); 
  }

 


let finalPassword = ""
for (let i = 0; i < numberOfCharacters; i++) {
  let rng =[Math.floor(Math.random() * possibleCharacters.length)];
  // or finalPassword += possibleCharacters[rng];
  finalPassword = finalPassword + possibleCharacters[rng];
}
return finalPassword;
};



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
