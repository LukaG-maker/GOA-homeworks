//მასსივია
const numbers = [1, 2, 3, 4, 5, 6];
//აალი მასივი სადაც მხოლოდ ლუწი იქნება
const num = [];
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
        num.push(numbers[i])
    }
}
console.log(num);
//repl ნიშნავს ოთხ სიტყვას წაკითვას გამოთვლას დაბეჭდვას და ლოოპს 