let heading = document.getElementById("myheading");
let button = document.getElementById("mybutton");
function changetext(){
    heading.textContent = "hello world";
}
button.addEventListener("click",changetext)