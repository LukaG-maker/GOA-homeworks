class Person {
    constructor(name, age, lastname, country) {
        this.name = name;
        this.age = age;
        this.lastname = lastname;
        this.country = country;
    }
}

const Person1 = new Person("luka", 13, "gvelukashvili", "georgia");
const Person2 = new Person("gabriel", 2, "gvelukashvili", "georgia");
const Person3 = new Person("noa", 2, "gvelukashvili", "georgia")

console.log(Person1);
console.log(Person2);
console.log(Person3);

//class- ის მეშვეობით იქმნება ობიექტი
//ნიუ ინსტანც არის რომ ვქმნით აალ ობიექტს კლასის მიედვით