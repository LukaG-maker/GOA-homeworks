
    //1
const higherOrderFunction = (greet) => {
    return () => {
        return greet * 10;
    }
}

const result = higherOrderFunction(greet)

    //2

const example = (ex1) => {
    return () => {
        return ex1
    }
}

// const result = example(ex1)

console.log(result())