// --------------------------------------------------------------
const words3 = ["Hello", " ", "World", "!"];
const joinedString = words3.reduce((acc, curr) => acc + curr, "");
console.log("3) string:", joinedString);


// ------------------------------------------------------------
const numbers4 = [2, 3, 4, 5];
const sum4 = numbers4.reduce((acc, curr) => acc + curr, 0);
const product4 = numbers4.reduce((acc, curr) => acc * curr, 1);
console.log("4) sum:", sum4, "| multiply:", product4);


// ----------------------------------------------
const nums5 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const result5 = nums5
  .filter(n => n % 2 === 0)
  .map(n => n * 3)
  .reduce((acc, curr) => acc + curr, 0);
console.log("5) ლუწების (x3) ჯამი:", result5);


// ---------------------------------------------------------
const words6 = ["python", "java", "c", "javascript", "go"];
const sentence6 = words6
  .filter(word => word.length > 3)
  .map(word => word.toUpperCase())
  .reduce((acc, curr) => acc + " " + curr);
console.log("6) sentence:", sentence6);


//---------------------------------------
function processNumbers(arr) {
  return arr
    .filter(n => n > 0)
    .map(n => n * n)
    .reduce((acc, curr) => acc + curr, 0);
}

const myNumbers7 = [-5, 2, -1, 4, 3];
console.log("7) დადებითების კვადრატების ჯამი:", processNumbers(myNumbers7));