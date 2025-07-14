const movie = ["dexter", "titanic", "intercellar", "matrix"];
const favorite = ["dexter"];
const message = movie.includes(favorite)
    ? "the film you have chosen is in the list"
    : "the film you have chosen is not in the list";
console.log(message)
