// 1) დაწერეთ საშინაო დავალებაშიმოცემული სავარჯიშო (რაც დღეს გავარჩიეთ), თუმცა ეს პროგრამა უნდა იყოს case-insensitive

// მომხმარებელს შემოატანინეთ prompt() ის საშუალებით პაროლი. დაწერეთ while loop პროგრამა: იქამდე გამოიტანოს 'wrong passsword, try again' სანამ პაროლი არ დაემთხვევა 'admin123'-ს. ამ შემთხვევაში გამოიტანეთ 'Access Granted' და გაწყვიტეთ ციკლი.

// 2) შექმენით 6-ელემენტიანი მასივი. გამოიყენეთ at() პირველი და ბოლო ელემენტების დასაბეჭდად. შემდეგ კი სიიდან ამოშალეთ ყველა ის ელემენტი, რომელთა სიგრძეც 5-ს აღემატება.

// 3) დაწერეთ while loop, რომელიც 1-დან 10-მდე დაბეჭდავს რიცხვებს. 3-ის ჯერად რიცხვებზე დაბეჭდოს 'Fizz', 5-ის ჯერად რიცხვებზე 'Buzz'. ორივეზე ერთად 'FizzBuzz'.

// როდესაც რიცხვების count მიაღწევს 45-ს => გაწყვიტეთ პროგრამა.


const adminpass = 'amdin123'
let userpass = prompt('Enter a password: ')

while(userpass !== adminpass){
    console.log('wrong passwiord, try again')
    userpass = prompt('Enter a password')
    break
}

console.log('Access Granted.')
//-------------------------------------------
lst = ["tomato", "avocado", "cutecumber", "onion", "banana", "watermellon" ]


console.log(lst.at(0))
console.log(lst.at(-1))

lst.splice(1,1)
lst.splice(1,1)
lst.splice(2,1)
//-------------------------------------------
let i = 1;

while (true) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log('FizzBuzz');
    }else if (i % 3 === 0) {
        console.log("Fizz")
    }else if (i % 5 === 0) {
        console.log("Buzz")
    }else {
        console.log(i)
    }
}

if (i === 45) {
    Break;
}
i++