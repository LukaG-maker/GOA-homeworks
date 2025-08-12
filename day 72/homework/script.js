const myPromise = new Promise((resolve, reject) => {
  const randomNum = Math.floor(Math.random() * 10) + 1;

  if (randomNum > 3) {
    resolve(`${randomNum} უფრო მეტია სამზე`);
  } else {
    reject(`${randomNum} სამზე მეტი უნდი იყოს`);
  }
});

myPromise
 //პრომისი არის შეპირება იგივე უბრალოდ პროგრამირებაში 
 // პრომისი ნიშნავს დაპირებას როგორც წეღან ვთქვი რომ რაღაც ღირებულება ხელმისაწვდომი გახდება მომავალში