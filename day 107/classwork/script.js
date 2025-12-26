// 90--100 -> "A"
// 80--89 -> "B"
// 70--79 -> "C"
// 60--69 -> "D"
// 0--59 -> "F" 

let testscore = prompt("enter your test score: ");

switch (testscore) {
    case testscore >= 90 && testscore <= 100:
        console.log("A");
        break;
    case testscore >= 80 && testscore <= 89:
        console.log("B");
        break;
    case testscore >= 70 && testscore <= 79:
        console.log("C");
        break;
    case testscore >= 0 && testscore <= 59:
        console.log("F");
        break;
}

// 2) for loop-ის გამოყენებით დაბეჭდეთ რიცხვები 1-დან 10-მდე
// 3) for loop- ის გამოყენებით დაბეჭდეთ 1-დან 20-მდე მხოლოდ ლუწი რიცხვები
// 4) for loop-ის გამოყენებით დაბეჭდეთ 1-დან 5-ის ჩათვლით ციფრების კვადრატები
// 5) for loop-ის გამოყენებით დაბეჭდეთ რიცხვები 35-დან 15-მდე

for(let i = 1; i <= 10; i ++){
    console.log(i)
}

for(let i = 1; i <= 20; i ++ ){
    if (i % 2 === 0) {
        console.log(i)
    }
}

for(let i = 1; i <= 5; i ++ ){
    if (i ** 2) {
        console.log(i)
    }
}

for (let i = 35; i <= 15; i --){
    console.log(i)
}