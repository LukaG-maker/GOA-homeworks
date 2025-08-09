//4
const greet = () => "hello world";

console.log(greet())

//5
const hello = () => `hello ${"name"}`

//6
const filtarr = (arr, num) => {
    const result = [];
    for (let i = 0; i < arr.lenght; i++) {
        if (arr[i] !== num) {
            result.push(arr[i]);
        }
    }
    return result;
}