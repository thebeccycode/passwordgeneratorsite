
let specialCharacters = ['@', '%', '+', '\\', '/', "'", '!', '#', '$', '^', '?', ':', ',', ')', '(', '}', '{', ']', '[', '~', '-', '_', '.']

let numberCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']

let lowercase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

let uppercase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']

confirm("do you want lowercase characters?");
confirm("do you want uppercase characters?");
confirm("do you want to use numbers?");
confirm("do you want to use punctuation marks?");


//functions  for retrieving a random element
function generateLower() {
  return lowercase[Math.floor(Math.random() * lowercase.length)];
};

function generateUpper(){
  return uppercase[Math.floor(Math.random()*uppercase.length)];
};

function generateNumber(){
  return numberCharacters[Math.floor(Math.random() * numberCharacters.length)];
};

function generateSpecial(){
  return specialCharacters[Math.floor(Math.random() * specialCharacters.length)];
};




// Function to generate password with user input



// Get references to the #generate element
//var generateBtn = document.//querySelector('#generate');

// Write password to the #password input
//function writePassword() {
 // let password = generatePassword();
 // let passwordText = document.//querySelector('#password');

  //passwordText.value = password;
//}

// Add event listener to generate button
//generateBtn.addEventListener('click', writePassword);