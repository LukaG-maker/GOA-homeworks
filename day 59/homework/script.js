 //შექმენით რამოდენიმე ღილაკი Change Background Color, Change Text Color, Change Font Size, უნდა გქონდეთ ერთი პარაგრაფი - <p>Hello</p> როდესაც მომხმარებელი დააკლიკებს Change Background Color ღილაკს ხელს უნდა შეიცვალოს პარაგრაფის უკანა ფერი, როდესაც მომხმარებელი დააკლიკებს Change Text Color ღილაკს ხელს უნდა შეიcვალოს პარაგრაფის ტექსტის ფერი ხოლო როდესაც მომხმარებელი დააკლიკებს Change Font Size ღილაკს ხელს უნდა შეიცვალოს ამ პარაგრაფის ტექსტის ზომა, დაგჭირდებათ წვდომის მოპოვება თითოეულ ღილაკზე ასევე პარაგრაფზეც


const paragraph = document.getElementById("p-1");
const button1 = document.getElementById("change-backround-color");
const button2 = document.getElementById("change-text-color");
const button3 = document.getElementById("change-font-size");

button1.addEventListener("click", 
    function() {
        paragraph.style.backgroundColor = "blue";
        
   });


button2.addEventListener("click", 
    function() {
        paragraph.style.color = "green";

    }
);

button3.addEventListener("click", 
    function() {
        paragraph.style.fontSize = "30px";

    }
);
