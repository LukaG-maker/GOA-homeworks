const strings = (string, stringArr) => {
    let array = [];
    if (!stringArr.includes(string)) {
        array.push(string);
    }
    return array;
}

console.log(strings('one', ['two', 'three', 'four']))

const sum = (nums) => {
    let total = 0;
    for (let i = 0; i < nums.length; i++) {
        total += nums[i] / nums.length;
    }
    return total;
}

console.log(sum([1, 2, 3]));


function passwordValidator(password){
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    const numbers = '0123456789'

    let hasDigits = false;
    let hasLetters = false;

    for(let i = 0; i < alphabet.length; i++){
        if(password.includes(alphabet[i])){
            hasLetters = true;
        }
    }

    for(i = 0 ; i < numbers.length; i++){
        if(password.includes(numbers[i])){
            hasDigits = true;
        }
    }

    if(hasDigits && hasLetters && password.length > 6){
        return 'Password is Strong'
    } else {
        return 'The Password Must Contain numbers and letters and it should be at least 6 characters long';
    }
}

console.log(passwordValidator('ThePasswordIs456789'))