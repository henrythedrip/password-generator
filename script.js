// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

function generatePassword() {
  let result = '';
  let length = Number(prompt("How many characters?"));
  if (length == 0) {
    // user hit cancel
    return
  }
  while (length < 8 || length > 128) { 
    alert("Please keep passwords between 8-128 characters.");
    length = Number(window.prompt("How many characters?"));
    if (length == 0) {
      // user hit cancel
      return
    }
   } 
  let characters = '';
  const lowercaseCharacters = "abcdefghijklmnopqrstuvwxyz";
  const uppercaseCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numberCharacters = "1234567890";
  const specialCharacters = "?!@#$%&*";
  // let isLowercase = window.confirm("Do ya want sum lowercase characters?")
  // let isUppercase = window.confirm("Do ya want sum UPPERCASE characters?")
  // let isNumber = window.confirm("Do ya want sum numbers up in there?")
  // let isSpecial = window.confirm("How about special characters?!@$")

  if (window.confirm("Do ya want sum lowercase characters?")) {
    characters += lowercaseCharacters;
  }
  if (window.confirm("Do ya want sum UPPERCASE characters?")) {
    characters += uppercaseCharacters;
  }
  if (window.confirm("Do ya want sum numbers up in there?")) {
    characters += numberCharacters;
  }
  if (window.confirm("How about special characters?!@$")) {
    characters += specialCharacters;
  } 

  console.log(characters);

  const charactersLength = characters.length;

  if (charactersLength == 0) {
    alert("Please select at least one character type.");
    return generatePassword();
  }

  let counter = 0;
  while (counter < length) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
    counter += 1;
  }
  return result;
}



