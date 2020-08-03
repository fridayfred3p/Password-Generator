// Assignment Code
var generateBtn = document.querySelector("#generate");

// Generates password on click button
function genPassword() {
  // User inputs how long password should be
  var charcount = prompt("How long do you want password to be?");
  console.log(charcount);
  //
  var result = "";
  //selecting box for password input
  var password = document.getElementById("password");
  // Starting for loop to write code
  for ( var i = 0; i < charcount; i++) {
  // Possible selections for password values
  var chars = "H2I3AepbqktMS-T$yGBiaj(9@x1OJN+W67%*U)nh!rV0PCFXDEfv^dKmgRZ#`~czs45&oluwQYL8";
  // Picking a random number
  var rand = Math.floor(Math.random()*charcount);
  // Choosing a random character from chars array
  result += chars.charAt(rand);
  console.log(result);

}
  password.value = result;
}


  // Event listener for button
  generateBtn.addEventListener("click", genPassword);