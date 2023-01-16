let specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
let numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
let lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
let upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];
let validCharacters = "";
// Function to prompt user for password options

function getPasswordOptions() {
let passwordLength = parseInt(prompt("password length 10-64"));
if (Number.isNaN(passwordLength)){
  alert("Password length must be between 10-64 characters");
  getPasswordOptions();
}
if (passwordLength < 10 || passwordLength > 64){
  alert("Password length must be between 10-64 characters");
  getPasswordOptions();
}
console.log("passwordLength=", passwordLength);


let includeLC = confirm("press OK to include lowercase characters");
if (includeLC){
validCharacters += lowerCasedCharacters;
}

let includeUC = confirm("press OK to include uppercase characters");
if (includeUC){
validCharacters += upperCasedCharacters;
}

let includeSC = confirm("press OK to include special characters");
if (includeSC){
validCharacters += specialCharacters;
}

let includeNC = confirm("press OK to include numbers");
if (includeNC){
validCharacters += numericCharacters;
}

if (includeLC === false &&
     includeUC === false &&
     includeNC === false &&
     includeSC === false){
      alert("at least one character type must be chosen");
      getPasswordOptions();
     }


}

// Function for getting a random element from an array
function getRandom(arr) {
    return arr[Math.floor(Math.random()*arr.length)];
  }; 

// Function to generate password with user input

  function generatePassword() {
    console.log("generatePassword function");
    let options = getPasswordOptions();
    return getRandom(numericCharacters);
  };



 
  
// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
};

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);