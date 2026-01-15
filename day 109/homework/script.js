let nums = [-2, 5, 10, -1];
let sum = 0;

for (let n of nums) {
    if (n > 0) sum += n;
}
console.log(sum); 
//=----------------------------------------
let a = [1, 2, 3], b = [2, 3, 4];
let mutualNums = [];

for (let x of a) {
    if (b.includes(x)) mutualNums.push(x);
}
console.log(mutualNums); // [2, 3]