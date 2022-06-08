
const logoutPopup = document.querySelector('.logout-popup')

window.addEventListener('load',function(){
    showPopup()
});

function showPopup(){
    const timeLimit = 5
    let i = 0
    const timer = setInterval(function(){
        i++;
        if(i == timeLimit){
            clearInterval(timer);
            logoutPopup.classList.add("show");
        }
        console.log(i)
    },1000);
};

function username(){
    let username = JSON.parse(localStorage.getItem("username")) || [];
    let name = document.getElementsByClassName("name");

    name = username
};

window.localStorage.setItem('name', JSON.stringify(username));

