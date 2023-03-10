// Assignment Code
console.log(password)

var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}
function generatePassword() {

  var passLength = prompt("What is your desired password length?")

  if (passLength < 8 || passLength > 128) {
    alert("Your password must be between 8 and 128 characters");
    prompt("What is your desired password length?");
  }
  
  var charTypeLow = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];  

  // confirm("Would you like to include lowercase letters?")

  var charTypeUp = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]; 

  // confirm("Would you like to include uppercase letters?")

  var charTypeNum = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]; 

  // confirm("Would you like to include any numbers?")

  var charTypeSpec = ["~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "}", "|", "?", "/"]; 

  // confirm("Would you like to include any special characters?")  

  var combineArray = [];
  
  
  if (confirm("Would you like to include lowercase letters?")){
    combineArray = combineArray.concat(charTypeLow);
  }
  if (confirm("Would you like to include uppercase letters?")){
    combineArray = combineArray.concat(charTypeUp);
  }
  if (confirm("Would you like to include any numbers?")){
    combineArray = combineArray.concat(charTypeNum);
  }
  if (confirm("Would you like to include any special characters?")){
    combineArray = combineArray.concat(charTypeSpec);
  }
  console.log(combineArray);
 
  var newPassword; 
  for (var i = 0; i < passLength; i++) {
    var randomPass = combineArray[Math.floor(Math.random() * combineArray.length)];
    
    newPassword = combineArray[randomPass];
  }
  console.log(newPassword)
  return newPassword;
 

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Getting undefined at the moment, need to debug for loop