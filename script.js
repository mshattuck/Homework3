// Assignment Code

// the groups of password element options
var lowercase = "abcdefghijklmnopqrstuvwxyz",
  uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  numbers = "1234567890",
  specialChar = "!@#$%^&*()_+~`|}{[]:;?><,./-=";

// variables to create the password
var generateBtn = document.querySelector("#generate"),
  passwordText = document.querySelector("#password"),
  passLength = document.querySelector("#length"),  
  lowerChars = document.querySelector("#lowercase"),
  upperChars = document.querySelector("#uppercase"),
  specialChars = document.querySelector("#specialChar"),
  numbersChars = document.querySelector("#numbers");
    

var setPass,
  passCharacters,
  passwordLenght;

// creates the password
function writePassword() 
{
  
  setPass = "";
  passCharacters = "";
  

  // creates the set of characters from options selected
  if (lowerChars.checked) {passCharacters += lowercase;}
  
  if (upperChars.checked) {passCharacters += uppercase;}

  if (specialChars.checked) {passCharacters += specialChar;}

  if (numbersChars.checked) {passCharacters += numbers;}

  if (passLength.value < 8 || passLength.value > 128 )
  { alert("Lenght must be greater than 8 and less than 128!");}
  else
  {  
  passwordLenght = Number(passLength.value);
  }

  // creates the password from character options
  for (let i = 0; i < passwordLenght; i++) 
   { setPass += passCharacters.charAt(
      Math.floor(Math.random() * passCharacters.length));}

 
 passwordText.value = setPass;

}

// Event listener to generate button
generateBtn.addEventListener("click", writePassword);

