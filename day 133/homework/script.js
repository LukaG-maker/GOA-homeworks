//---------------------------------------------------
const book = {
    title: "The Knight in the Panther's Skin",
    author: "Shota Rustaveli",
    year: 1100
};
console.log("Author:", book.author);

//---------------------------------------
book.year = 2024;
console.log("Updated Book Object:", book);


//--------------------------------------------------------
const calculator = {
    num1: 10,
    num2: 20,
    add: function() {
        return this.num1 + this.num2;
    }
};
console.log("Sum result:", calculator.add());

//----------------------------------------------------
