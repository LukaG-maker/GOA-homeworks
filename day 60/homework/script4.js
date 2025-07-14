let textPara = document.getElementById("textPara");
let htmlPara = document.getElementById("htmlPara");
let textBtn = document.getElementById("textBtn");
let HTMLBtn = document.getElementById("HTMLBtn"); 

textBtn.addEventListener("click",
    function() {
        textPara.textContent = "text has changed";
    }
);


HTMLBtn.addEventListener("click",
    function() {
        htmlPara.innerHTML += "<p><b>Value</b></p>";
        htmlPara.innerHTML += "<p><strong>boldtext</strong></p>";
        htmlPara.innerHTML += "<p><i>Italic</i></</p>";
    }
);

// htmlPara.innerHTML += "<p><b>Value</b></p>"; - დაამატებს ახალ ელემენტს უკვე არსებულს
//  htmlPara.innerHTML = "<p><b>Value</b></p>"; - ჩაანაცვლებს შიგთავს მთლიანად