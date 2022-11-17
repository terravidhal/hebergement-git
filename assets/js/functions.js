window.onload = () =>{

var burgericon = document.querySelector(".background i");
var username = document.querySelector(".username");

burgericon.addEventListener("click", ()=>{
    if (getComputedStyle(username).backgroundColor == "rgb(0, 128, 0)") {

        username.style.backgroundColor = "brown";
        
    } else {
        
        username.style.backgroundColor = "rgb(0, 128, 0)";
    }
})


}