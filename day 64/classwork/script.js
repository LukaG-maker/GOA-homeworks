function myFunction() {
    let number = 60;
    console.log("inside the function:", number);
}
     
myFunction();

console.log("outside the function:", number);

//გლობალური არის აი ვაგფშე ყველას რომ შეუძლია ნავა და გლობალური ფუნქციის გარეთ არის
//ლოკალური კი პირიქით ფუნქციის შიგნით არის და არის როდესაც ფიგურულ ფრჩხიოებში გვინდა გამოყენება

const global = "the earth";
const global2 = "themoon";

function callEverything(){
    return "everything: " + global + ', ' + global2;

}

console.log(callEverything())