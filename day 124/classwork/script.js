// 1) კომენტარის სახით დაწერეთ რა განსხვავებაა Arrow (Anonymous) ფუნქციებსა და function keyword ფუნქციებს შორის.

// 2) შექმენით arrow function სახელით rectangleArea, რომელიც პარამეტრად მიიღებს width, height-ს. გამოთვალეთ მართკუთხედის ფართობი.

// 3) შექმენით arrow function triangleArea, რომელიც პარამეტრად მიიღებს side1, side2, side3 პარამეტრებს. გამოთვალეთ სამკუთხედის პერიმეტრი.

// სინტაქსის განსხვავებაა, უფრო მოკლეა და მარტივი ასევე პროფესიონალური როგორც ლიკა მასწავლებელი, 
//ასევე keyword-ის განსვავება არის function აღარაა საჭირო არროუში

const rectangleArea = (width, height) => width * height;

console.log(rectangleArea(5, 10));

const triangleArea = (side1, side2, side3) => side1 + side2 + side3;

console.log(triangleArea(3, 3, 5))