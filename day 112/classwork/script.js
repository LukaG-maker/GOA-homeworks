// 1) დაწერეთ while loop პროგრამა: შეეკითხეთ მომხმარებელს პაროლი, იქამდე სანამ არ შემოიტანს სწორ მნიშვნელობას.

// 2) while loop-ის გამოყენებით გამოიტანეთ რიცხვები 1-დან 15-ის ჩათვლით.

// 3) while loop-ის გამოყენებით გამოიტანეთ რიცხვები 200-დან 0-ის ჩათვლით.

// 4) კომენტარის სახით ახსენით, თუ რაში გვჭირდება do while loop და რითი განსხვავდება იგი ჩვეულებრივი while loop-ისგან.

let password = prompt("enter your password: ")
let correct = 'Luka'

while(password !== correct){
    console.log('try again')

    if(password == correct)
    console.log("correct")
}

let i = 1;

while(i <= 15) {
    console.log(i);
    i++;
}

let counter = 200;

while(counter >= 0) {
    console.log(counter)
    counter--
}

//while ნიშნას სანამ ანუ სანამ ს მართალია იზამს
//დო ვაილი გამოიყენება როდესაც გინდა რომ კოდი დარანო ერთ ხასზში