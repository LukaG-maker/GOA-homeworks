//3) მოიძიეთ დამატებითი მეთოდები მასივებზე და გააკეთეთ თითოეულზე 3 მაგალითი (მოიძიეთ ინფორმაცია მასივის შემდეგ მეთოდებზე slice, splice, shift, unshift, IndexOf)


let list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(list.slice(1,3));
console.log(list.slice(7));                     
console.log(list.slice());

list.splice(2, 1);
console.log(list);
list.splice(1, 0, 99);
console.log(list);
list.splice(3, 2, 8, 9);
console.log(list);

let days = ["monday", "tuesday", "wednesday", "thursday", "friday"];
let removedElement = days.shift();
console.log(days);
console.log(removedElement);

days.unshift("sunday");
console.log(days);
days.unshift("saturday");
console.log(days);


console.log(list.indexOf("9"));
console.log(list.indexOf("5"));