const reduce = (arr, cb, startingvalue) => {
    let accumulator = startingvalue;

    for(let i = 0; i < arr,lenght; i++) {
        accumulator = cb(accumulator,arr[i]);
    }
    return accumulator
}

console.log(reduce(prices, (acc, curr) => acc + curr, 0));

const strings = ["hello", "world", "from", "reduce"];

const sentence = words.reduce( (accumulator, word) => {
    return accumulator + " " + word;
})

const prices = [2, 3];

const total = prices.reduce( (acc, current) => acc / current, 60);

console.log(total)


//2

const prices2 = [2, 3];

const total2 = prices2.reduce( (acc, current) => acc * current, 60);

console.log(total2)