const getLenght = (text) => {
    let length = text.length
    return length;
}

const checkAge = (age) => {
    return age >= 18 
        ? console.log("You're an adult") 
        : console.log("You are not an adult");
};

checkAge(20);

const square = i => n * n;
console.log(square())