//1
const sport = ['football', 'rugby', 'american football', 'basketball'];

const foundSport = sport.findIndex(sport => sport ===
'basketball')

console.log(foundSport)// აქ ბასკეტ ბალი

const cars = ['lambo', 'buggati', 'pagani', 'audi'];

const foundCars = cars.findIndex(cars => cars ===
'audi')

console.log(foundCars)// აქ დააბრუნებს აუდის

const food = ['khinkali', 'pizza', 'khachapuri', 'lobiani'];

const foundFood = food.findIndex(food => food ===
'lobiani')

console.log(foundFood)// აქ დააბრუნებს 3 იმიტომ რომ ლობიანი მიწერია

//find index რომ გადმოვთარგმნოთ არის იპოვე ინდექსიდა ის პულობს ინდექს თუ ვერ მოიძებნა ინდებქსი -1 აბრუნებს

//2

const findIndex = (arr, cb) => {
    for(let i = 0; i < arr.length; i++) {
        if(cb(arr[i])) {
            return i
        }
    }
}