// 1) let languages = ["Python", "JS", "Java", "C++"];
// მოცემულია სიტყვების მასივი. იპოვე სიტყვა “Java”. როგორც კი იპოვი, დაბეჭდე და გააჩერე ლუპი.

// 2) დაბეჭდე რიცხვები 1-დან 150-მდე. როგორც კი შეხვდები რიცხვს, რომელიც იყოფა 6-ზე, მაგრამ არ იყოფა 12-ზე, გააჩერე ლუპი.

// 3)შექმენით მასივი პროგრამირების ენებზე,შემდეგ popის საშუალებით დაამატეთ ორი ელემენტი და შემდეგ პირველი და ბოლო ელემენტი ამოიღეთ შესაბამისი მეთოდებით,გამოიტანეთ მიღებული მასივი

let languages = ['Python', 'JS', 'Java', 'C++'];

for(let i = 0; i <languages.length; i++) {
    if (languages[i] === 'Java'){
        console.log(languages[i]);
    break;
    }
}

for(let i = 1; i < 150; i++) {
    if(i % 6 === 0 && i % 12 !== 0) {
        console.log(i);
        break;
    }
}

let langs = ['Python', 'JS', 'Java'];

langs.push('C++');
langs.push('idk');

langs.shift()
langs.pop()

console.log(langs)