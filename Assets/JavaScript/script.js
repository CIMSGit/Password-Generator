// Array of special characters to be included in password
var specialCharacters = [
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
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
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
var upperCasedCharacters = [
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


// Function to generate password with user input  
function generatePassword() {
//  creates a new array holding the information of the customer's character options
  let characters=[]
// gets user's input for the number of characters
  let charactersNumber = prompt("How many characters would you like to have in your password?" );

// adds while loop to get the characters between 10 to 64
 //  creates if statements for building up the new array by concatination

while (charactersNumber < 10 || charactersNumber >64 ) {
  alert("Please choose between 10 and 64 characters");
  alert("Click again on Generate Password")
  return "Try again, please!";

}
  if (confirm("Would you like to have Upper Case Characters?")) {
    characters = characters.concat(upperCasedCharacters)
    
  }

  if (confirm("Would you like to have Special Characters?")) {
    characters = characters.concat(specialCharacters)
    
  }

  if (confirm("Would you like to have Numbers?")) {
    characters = characters.concat(numericCharacters)
    
  }
  if (confirm("Would you like to have Lower Case Characters?")) {
    characters = characters.concat(lowerCasedCharacters)
    
  }
  
  if (characters.length === 0 ){ alert("At least one character type should be selected")
  alert("Click again on the Generate Password")
  return "Try again please"
}
// for loop that creates a new string by building up random characters, based on the user's input 
let result  = "";
for (let i = 0; i < charactersNumber; i++) {
  result += characters[Math.floor(Math.random()*characters.length)];
  
}
  return result;
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