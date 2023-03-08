// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}
function generatePassword() {

  var passLength

  prompt("What is your desired password length?")

  var charTypeLow 
  confirm("Would you like to include lowercase letters?")

  var charTypeUp
  confirm("Would you like to include uppercase letters?")

  var charTypeNum
  confirm("Would you like to include any numbers?")

  var charTypeSpec
  confirm("Would you like to include any special characters?")  

}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

