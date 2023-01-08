// Array of special characters to be included in password
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

// Function for getting a random element from an array
function getRandom(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
};

// Function to generate password with user input
function generateRandomNumber() {
  return getRandom(numericCharacters);
};

function generateRandomLower() {
  return getRandom(lowerCasedCharacters);
};

function generateRandomUpper() {
  return getRandom(upperCasedCharacters);
};

function generateRandomSpecial() {
  return getRandom(specialCharacters);
};

//consolelog checks
console.log(getRandom(numericCharacters));
console.log(getRandom(lowerCasedCharacters));
console.log(getRandom(upperCasedCharacters));
console.log(getRandom(specialCharacters));

let password = document.getElementById("password");

let generatedPassword = numericCharacters.concat(upperCasedCharacters + lowerCasedCharacters + specialCharacters );

function generatePassword(){
  let passwordLength = 10;
  let password = ""; 
  for (let i= 0; index < passwordLength; index++) {
    let randomNumber = Math.floor(Math.random()* generatedPassword.length);
    password += generatedPassword.substring(randomNumber, randomNumber +54);
  };
  document.getElementById("password").value = password;
};