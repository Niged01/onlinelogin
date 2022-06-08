const username = JSON.parse(localStorage.getItem("username")) || [];

document.addEventListener('click',function(event){
    const workContainer = event.target.closest('.work__icon-container');
    if (workContainer !== null {
      console.log(workContainer);
    }
  });

  function username(){
    let username = JSON.parse(localStorage.getItem("username")) || [];
    let name = document.getElementsByClassName("name");

    name = username
};

window.localStorage.setItem('name', JSON.stringify(username));