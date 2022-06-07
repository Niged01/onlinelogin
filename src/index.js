
const username = document.querySelector('#username');
const password = document.querySelector('#password');

function validateform() {
if (username==null || username==""){  
    alert("Name can't be blank");  
    return false;  
  }else if(password.length<6){  
    alert("Password must be at least 6 characters long.");  
    return false;  
    };
}


var user = {
    username: username,
};

var json = JSON.stringify(user);
localStorage.setItem('username', json);
console.log('username');

validateform()