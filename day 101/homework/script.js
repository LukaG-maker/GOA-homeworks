// 4) შექმენით myNum ცვლადი და დღეს ნასწავლი მათემატიკური ოპერატორების გამოყენებით განაახლეთ მისი მნიშვნელობები შემდეგნაირად:
// • დაუმატეთ 70
// • გამოაკელით 99
// • გაამრავლეთ 100-ზე
// • ბოლოს კი გაყავით 12-ზე
// საბოლოო პასუხი გამოიტანეთ კონსოლში

let myNum = 100;
myNum += 70;
myNum -= 99;
myNum  *= 100;
myNum /= 12;
console.log(myNum)



// 5) ახსენით თუ რა დანიშნულება აქვს Increment/Decrement ოპერატორებს.
//increment ეს ზრდის რიცვს ერთით
//decrement ეს რიცხვს გამოაკლებს ერთს
// 6) რას გამოიტანს ეს კოდები?
// let x = 5;
// x ++;
// x --;
// x ++;
// console.log(x);
//6

// let n = 1;
// n --;
// n++;
// n --;
// n++;
// console.log(n); // 1

// 7) 5 სხვადასხვა ცვლადში შეინახეთ მონაცემები თქვენი თავის შესახებ. გამოიყენეთ Template literal იმისათვის, რომ კონსოლში ერთი დიდი წინადადება დაბეჭდოთ.

let name1 = "Luka";
let lastname = "Gvelukshvili";
let age = 50;
let country = "georgia";
let adress = "krtanisi";

console.log(f`hello my name is ${name1} my lastname is ${lastname} my age is ${age} im from ${country} and my adress is ${adress}`)

// 8) ახსენით Template literal-ის სინტაქსი და ჩამოწერეთ თუ რა მსგავსებები/განსხვავებები აქვს პითონის f string-თან შედარებით. 
// მსგავსება ისაა რომ ორივეს შეუძლია გამოიტანოს ცვლადის მნიშვნელობა
//განსხვავება ისაა რომ სხვადასხვა სინტაქსით იწწერება


// 9) 4 ცვლადში შეინახეთ შემდეგი მონაცემები:
// • 'Group 71'
// • 80
// • true
// • 4.8

// კონსოლში დაბეჭდეთ თითოეული ცვლადის მონაცემის ტიპი

let  group = 'Group 71';  
let num = 80;
let boolean = true;
let float = 4.8;
console.log(typeof group)
console.log(typeof num)
console.log(typeof boolean)
console.log(typeof float)