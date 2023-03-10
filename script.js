// Assignment Code
console.log(password);

var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}
function generatePassword() {
  var passLength = prompt("What is your desired password length?");

  if (passLength < 8 || passLength > 128) {
    alert("Your password must be between 8 and 128 characters");
    prompt("What is your desired password length?");
  }

   // confirm("Would you like to include lowercase letters?")

  var charTypeLow = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];

// confirm("Would you like to include uppercase letters?")

  var charTypeUp = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];

 
  // confirm("Would you like to include any numbers?")

  var charTypeNum = [
    "0", 
    "1", 
    "2", 
    "3", 
    "4", 
    "5", 
    "6", 
    "7", 
    "8", 
    "9"
  ];

  // confirm("Would you like to include any special characters?")

  var charTypeSpec = [
    "~",
    "`",
    "!",
    "@",
    "#",
    "$",
    "%",
    "^",
    "&",
    "*",
    "(",
    ")",
    "_",
    "-",
    "+",
    "=",
    "{",
    "}",
    "|",
    "?",
    "/",
  ];


  var combineArray = [];

  if (confirm("Would you like to include lowercase letters?")) {
    combineArray = combineArray.concat(charTypeLow);
  }

  if (confirm("Would you like to include uppercase letters?")) {
    combineArray = combineArray.concat(charTypeUp);
  }

  if (confirm("Would you like to include any numbers?")) {
    combineArray = combineArray.concat(charTypeNum);
  }

  if (confirm("Would you like to include any special characters?")) {
    combineArray = combineArray.concat(charTypeSpec);
  }

  console.log("Avaiable Characters: ", combineArray);

  // newPassword is a temp variable to hold data, this will be a STRING
  var newPassword = "";

  for (var i = 0; i < passLength; i++) {

    // this returns A number between 0 and 1, but does not include 1.
    var rando = Math.random() * combineArray.length;

    // apply (Math.floor method to rando) and, this returns a WHOLE number of the number of things in the Array (0 - number of things in array)
    var index = Math.floor(rando); 
    
    // this will give me the VALUE that is stored in the Array at a specific INDEX
    var randomCharacter = combineArray[index]; 
    

    // here we are grabbing the VALUE at INDEX in the ARRAY
    console.log("Random Num: ", rando);
    console.log("Index: ", index);
    console.log("Char: ", randomCharacter);


    // Here we are ADDING to our temp dataset (PASSWORD)


    newPassword = newPassword + randomCharacter;
    
    console.log("Password: ", newPassword);
  }

  console.log(newPassword);
  return newPassword;
  
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


