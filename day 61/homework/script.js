
// 1
const array = ['football', 'basketball', 'volleyball', 'tennis','boxing'];

for(let i = 0; i < array.length; i++){
    console.log(array[i])
}

// 2
const numbers = [1,2,3,4,5,6,7,8,9,10];
let sum = 0;

for(let i = 0; i < numbers.length; i++){
    sum += numbers[i];
}

console.log(sum)

// 3
const fruitsArray = ['apple', 'cherry', 'strawberry', 'apple', 'orange','apple'];

let countFruit = 0;

for(let i = 0; i < fruitsArray.length; i++){
    if(fruitsArray[i] === 'apple'){
        countFruit += 1
    }
}

console.log(countFruit)

// 4
const numbersArray = [1,2,3,4,5];

for(let i = 0; i < numbersArray.length; i++){
    const doubledNumber = numbersArray[i] ** 2;

    console.log(doubledNumber)
}

// 5
const names = ['Nino', 'Alice', 'Charlie'];

for(let i = 0; i < names.length; i++){
    const greet = `Hello ${names[i]}`

    console.log(greet)
}
