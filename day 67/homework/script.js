const nums = [10, 14, 18, 22, 26, 35]
const example = nums.findIndex(num => num % 7 === 0);
console.log(index);

const names = ['Ana', 'Giorgi', 'Mariam', 'Luka'];
const index = names.findIndex(name => name.startsWith('M'));
console.log(index);

const strings = ['hello world', 'adios', 'oh my god'];
const randomstrings = strings.map(word => word + '!');
console.log(randomstrings);

const nums2 = [1, 2, 3];
const strNums = nums.map(num => num.toString());
console.log(strNums); 

const mixed = [true, 'apple', 42, 'banana', {}, [], 'hello'];
const str = mixed.filter(item => typeof item === 'string');
console.log(strings); 

const str2 = ['happy', 'sad', 'angry'];
const endingWithY = words.filter(word => word.endsWith('y'));
console.log(endingWithY); 