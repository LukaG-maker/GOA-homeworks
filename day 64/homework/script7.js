const rockbtn = document.getElementById("rock-btn");
const paperbtn = document.getElementById("paper-btn");
const scisorsbtn = document.getElementById("scisors-btn")
const result = document.getElementById("result");

rockbtnbtn.addEventListener("click", () => {
    result.textContent = "rock"
});
paperbtn.addEventListener("click", () => {
    result.textContent = "paper"
});
scisorsbtn.addEventListener("click", () => {
    result.textContent = "scissors"
});