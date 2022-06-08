
const username = document.querySelector('#user');
const password = document.querySelector('#password');

function validateForm() {
  //collect form data in JavaScript variables
  var name1 = document.getElementById("user").value;
  var pw1 = document.getElementById("password").value;

  
  //check empty first name field
  if(name1 == "") {
    document.getElementById("blankMsg").innerHTML = "**Fill the first name";
    return false;
  }
  
  //character data validation
  if(!isNaN(name1)){
    document.getElementById("blankMsg").innerHTML = "**Only characters are allowed";
    return false;
  }

  //check empty password field
  if(pw1 == "") {
    document.getElementById("message1").innerHTML = "**Fill the password please!";
    return false;
  }

  //minimum password length validation
  if(pw1 == "password") {
    document.getElementById("message1").innerHTML = "**Password must be password";
    return false;
  }
  else {
    alert ("Your password created successfully");
    document.write("JavaScript form has been submitted successfully");
  }
}


var user = {
    username: username,
};

var json = JSON.stringify(user);
localStorage.setItem('username', json);
console.log('username');
