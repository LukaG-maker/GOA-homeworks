18

const peoples = [
    { "name": "Alice", 'age': 25 },
    { "name": "Bob", "age": 32 },
    { "name": "Charlie", "age": 19 },
    { "name": "Diana", "age": 27 },
    { "name": "Ethan", "age": 41 },
    { "name": "Fiona", "age": 22 },
    { "name": "George", "age": 36 },
    { "name": "Hannah", "age": 29 },
    { "name": "Isaac", "age": 45 },
    { "name": "Julia", "age": 31 }
];



// 10 - 19
// 20 - 29
// 30 - 39

const result = peoples.reduce((acc, value) => {
    const rounded = Math.floor(value.age / 10) * 10
    const gap = `${rounded}-${rounded + 9}`;


    if(!acc[gap]){
        acc[gap] = [];
    }

    acc[gap].push(value);

    return acc;
}, {});


console.log(result);