//შექმენით increaseTheCount პროექტი, გექნებათ:
//ერთი პარაგრაფი რომლის საწყისი მნიშვნელობა იქნება <p>Count: 0</p>, 
//ერთი ღილაკი Increase Count By One რომელიც ყოველ ჯერზე გაზრდის Count პარაგრაფის მნიშვნელობას ერთით

let count = 0;

const pCount = document.getElementById("counter");
const bCount = document.getElementById("increase-btn");

bCount.addEventListener("click", 
    function() {
        count = count + 1;
        pCount.textContent = "count: " + count;
    });