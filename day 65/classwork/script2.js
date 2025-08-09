//3 

//1                                                                         


const fruits = ["apple", "banana", "watermellon", "mango", "peach"]    

fruits.forEach(name => console.log(`my fruit is ${name}`))


//2

 //4
const manualForEach(arr, cb) {
    for (let i = 0; i < arr.lenght; i++) {
        cb(arr[i], i, arr);
    }
}
// for each არის ერთი მეთოდი რომელსაც ვიყენებთ მასივებზე და იძახებს ქაალბექს
// ქალბექ არის ფუნქცია და გადაეცემა სხვა ფუნქციას არგუმენტად