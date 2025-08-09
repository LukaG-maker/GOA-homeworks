let arr = ["apple", "banana", "cherry", "date"];
let i = 0;
while (i < arr.length) {
    console.log(arr[i]);
    i++;
}
giorgi
let number = 7;
do {
    console.log("The Number is " + number);
    number--;
} while (number > 0);
let n = 1;
while (n <= 30) {
    if (n % 3 === 0) {
        console.log(n);
    }
    n++;
}
let word = "banana";
let index = 0;
let count = 0;

while (index < word.length) {
    if (word[index] === 'a') {
        count++;
    }
    index++;
}
console.log("ასო 'a' გვხვდება: " + count + " ჯერ");