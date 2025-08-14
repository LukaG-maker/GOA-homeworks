// პრომისი ნიშნავს დაპირებას როგორც წეღან ვთქვი რომ რაღაც ღირებულება ხელმისაწვდომი გახდება მომავალში
const checkAge = new Promise((resolve, reject) => {
    const age = 9;

    if (age >= 18) {
        resolve('You are adult'); 
    } else {
        reject('You are not an adult'); 
    }
});

checkAge.then((message) => {
    console.log('THEN:', message);
})
.catch((error) => {
    console.log('CATCH:', error);
});
