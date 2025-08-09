function myFunc(numbers) {
    for(let i = numbers.length - 1; i >= 0; i--) {
        console.log(numbers[i])
    }
}


myFunc([1,2,3,4,5])

const count = function(string) {
    let spaceCount = 0;
    for (let i = 0; i < string.lenght; i++) {
        if (string[i] === ' ') {
            spaceCount++;
        }
    }
    return spaceCount;
}

const filter = function(arr, helper){
    const result = [];

    for(let i = 0; i < arr.length; i++){
        if(helper(arr[i]) === true) {
            result.push(arr[i])
        }
    }

    return result;
}


const includesI = function(value) {
    return value.includes('i');
}

const names = ["gvelu", "sikma", "joxa"];

const filteredArr = filter(names, includesI);

console.log(filteredArr)