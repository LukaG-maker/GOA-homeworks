function greetUser(name) {
    //console.log(Hello, ${name});
}

function guessNumber(num) {
    const randomNum = Math.floor(Math.random() * 10) + 1;

    if (num === randomNum) {
        //return correct ${randomNum};
    } else {
       // return wrong ${randomNum};
    }
}

module.exports = { greetUser, guessNumber };