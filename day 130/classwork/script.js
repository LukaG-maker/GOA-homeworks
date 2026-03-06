// 1) განმარტეთ კომენტარის სახით რა სხვაობაა გლობალურ და ლოკალურ სკოუპს შორის 
// 2) შექმენით ცვლადი გლობალურად და გამოიძახეთ ფუნქციაში 
// 3) შექმენით ფუნქცია შიგნით შექმენით ცვლადი დაპრინტეთ ფუნქციის გარეთ გაუშვით კოდი და ნახეთ რა შედეგი იქნება კომენტარის სახით ახსენით რატომ მიიღეთ ეგ შედეგი 

//global ცვლადის ხელისწვდომა ყველგანაა
//local ცვლადი ხელმისაწვდომია მხოლოდ ფუნქციის შიგნით
let globalUser = "luka";

const sayHi = () => {
    console.log(globalUser)
}

sayHi();

const myLocal = () => {
    let secretCode = 12345;
}
console.log(secretCode)
myLocal()


//---------------------------------------
// function stray(numbers) {
//   let common=0;
  //ვამოწმებთ პირველ სამ ელემენტს რომ გავიგოთ რომელია უმრავლესობა
//   if(numbers[0]===numbers[1] || numbers[0]===numbers[2]){
//     common=numbers[0]
//   } else{
    //თუ პირველი არც მეორეს უდრის და არც მესამეს ესეიგი პირველია უცხო
//     common=numbers[1]
//   }
  
//  ახლა გადავუყვებით მასსივს და ვიპოვით იმას რომელიც ქომონს არ უდრის
//   for(let i=0; i<numbers.length; i++){
//     if(numbers[i]!== common){
//       return number[i]
//     }
//   }


// function filter_list(l) {
//   let int=[] //ვქმნით ცარიელ სიას
//   for(let i=0; i<l.length; i++){ ვიწყებთ მასივის გადაჩხრეკვას თავიდან ბოლომდე
//     if(typeof l[i]==='number'){ ვამოწმებთ ხელში რაც მიჭირავს არის თ არა რიცხვი
//       int.push(l[i]) თუ რიცხვია ჩავაგდებთ ჩვენს კლათში
//     }
//   }
//   return int
// }

// function findNeedle(haystack) { შევქმენით ფუნქქცია
//   const index=haystack.indexOf('needle')  ვპოულობტ ნიიდლის ინდექს
//   return "found the needle at position "+index ეს გამოიტანს ტეკსტს და ასევე თუ რომელ ინდექზე იყო
// }