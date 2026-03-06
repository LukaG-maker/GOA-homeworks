// 1) შექმენით person ობიექტი, დაამატეთ მასში ოთხი key: firstName, lastName, age, height, შემდეგ წაშალეთ age, height შეცვალეთ და საბოლოოდ დაპრინტეთ ობიექტი

let person = {
    firstName: "vini",
    lastName: "jr",
    age: 25,
    height: 176
}

delete person.age;

person.height = 177;

console.log(person);


// 2) შექმენით phone ობიექტი, რომელსაც ექნება brand, model, price property-ები, შექმენით ობიექტის მეთოდი რომელსაც გადაეცემა რამე რიცხვი და ამ რიცხვს დაუმატებს price-ს, გამოიტანეთ განახლებული price კონსოლში

let phone = {
    brand: "Apple",
    model: "Iphone 15",
    price: 99999999,

    increasePrice: function(amount) {
        this.price += amount;
    }
}

phone.increasePrice(99999999999999999999999999999999999999999999999999999999999);
console.log(price)