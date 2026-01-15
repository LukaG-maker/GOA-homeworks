// 1) შექმენით სახელების სია. for loop ის გამოყენებით გამოიტანეთ სიის თითოეული წევრი.

// 2) შექმენით რიცხვების სია და დაითვალეთ მხოლოდ ლუწი რიცხვების ჯამი. შედეგი გამოიტანეთ კონსოლში.

// 3) შექმენით ორი სახელების სია, შეამოწმეთ შეიცავს თუ არა ერთიდაიგივე წევრებს სიები 
// თუ შეიცავს - mutualNames სიაში დაამატეთ საერთო ელემენტები.


const names = [luka, aleksandre, deme,]

for(let i = 0; i < names.length; i++) {
    console.log(names[i])
}

//----------------------------------------------------
const numbers = [10, 15, 22, 30, 37, 44 ];
let sum = 0;

for(let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0){
        sum += numbers[i];
    }
}

console.log("even numbers sum is: " + sum)

//------------------------------------------------------------

const list1 = ["dato", "nini", "sandro", "mari"];
const list2 = ["gio", "sandro", "aleksander", "mari"];
const mutualNames = [];

for (let i = 0; i < list1.length; i++) {
    for (let j = 0; j < list2.length; j++) {
        if (list1[i] === list2[j]) {
            mutualNames.push(list1[i]);
        }
    }
}

console.log("same firstnames are: ", mutualNames)