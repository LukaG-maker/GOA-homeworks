const people = ["nika", "luka", "aleqsi"];

for (let index in people) {
    console.log(index);
    console.log(fruits[index]);
}

const people2 = {
    firstname: "me",
    lastname: "gvelukashvili",
    age: 13,
    city: "tbilisi",
    street: "krtanisi",
}

for (let key in people2) {
    console.log(key);
    console.log(people2[key]);
} 