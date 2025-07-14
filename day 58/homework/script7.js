const headsbtn = document.getElementById("heads-btn");
const tailsbtn = document.getElementById("tails-btn");
const result = document.getElementById("result");

headsbtn.addEventListener("click", () => {
    result.textContent = "heads"
});
tailsbtn.addEventListener("click", () => {
    result.textContent = "tails"
});