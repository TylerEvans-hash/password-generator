// Assignment code here

function getCriteria() {
  window.alert("Hello! Welcome to Password Generator!")
  window.alert("Please answer the following questions on the criteria of your password.");

  var charLength = window.prompt("How many characters should your password be? Please choose between 8 and 128");
  charLength = parseInt(charLength);

  if ( charLength === "" || charLength === null || charLength < 8 || charLength > 128 ) {
    window.alert("You need to provide a valid answer! Please try again.");
    return getCriteria();
  }

  var index = window.prompt("Choose from the following for password criteria: Enter 1 for only uppercase letters, Enter 2 for only lowercase letters, Enter 3 for uppercase and numbers (0-9), Enter 4 for lowercase letters and numbers (0-9), Enter 5 for uppercase & lowercase & numbers; Enter 6 for Upper, lower, numbers, & special characters.");
  index = parseInt(index);

  if ( index === "" || index === null || index < 1 || index > 6 ) {
    window.alert("You need to provide a valid answer! Please try again.");
    return getCriteria();
  }

  index--;

  writePassword(charLength, index);
  return;
}

function generatePassword(length, index) {
  var result = '';
  var characters = [{ criteria: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' },
  { criteria: 'abcdefghijklmnopqrstuvwxyz' },
  { criteria: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789' },
  { criteria: 'abcdefghijklmnopqrstuvwxyz0123456789' },
  { criteria: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789' },
  { criteria: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%' }];
  var charactersLength = characters[index].criteria.length;
  for (var i = 0; i < length; i++) {
    result += characters[index].criteria.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword(charLength, index) {
  var password = generatePassword(charLength, index);
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", getCriteria);
