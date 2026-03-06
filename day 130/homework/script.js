// 2) Global და Local ცვლადი
let a = 5; // global

function test() {
  let b = 10; // local
  console.log(a); 
  console.log(b); 
}

test();

console.log(a);
console.log(b); // შეცდომა, რადგან b არის local
//b aris local shesabamisad magas ver vizamt


// 4) რას გამოიტანს კოდი
let name = "Anna";

function showName() {
  let name = "Luka";
  console.log(name);
}

showName();
console.log(name);

// Output:
// Luka
// Anna
// რადგან ფუნქციაში name არის local ("Luka"),
// ხოლო გარეთ global ("Anna")