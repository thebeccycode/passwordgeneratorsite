
let specialCharacters = ['@', '%', '+', '\\', '/', "'", '!', '#', '$', '^', '?', ':', ',', ')', '(', '}', '{', ']', '[', '~', '-', '_', '.']

let numberCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']

let lowercase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

let uppercase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']


//functions  for retrieving a random element

let generateSpecial = specialCharacters[Math.floor(Math.random() * specialCharacters.length)];

let generateNumber = numberCharacters[Math.floor(Math.random() * numberCharacters.length)];

let generateLower = lowercase[Math.floor(Math.random() * lowercase.length)];

let generateUpper = uppercase[Math.floor(Math.random() * lowercase.length)];

let generateMixed = specialCharacters.concat(numberCharacters);
let generateMixedAgain = generateMixed.concat(lowercase);
let generateFinalMix = generateMixedAgain.concat(uppercase);

// Function to prompt user for password options
function getPasswordOptions() {

}

// Function for getting a random element from an array
function getRandom(arr) {

}

// Function to generate password with user input
function generatePassword() {
    return generateMixed;

}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);