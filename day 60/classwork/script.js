const div = document.getElementById("main")
const btn = document.getElementById("add-p")

btn.onclick = function() {
    div.innerHTML = <p>gvelukashvili</p>
}

const div2 = document.getElementsByClassName("main")
const btn = document.getElementsByClassName("add-p")

btn.onclick = function() {
    div2.innerHTML = idk
}

const div3 = document.getElementsByTagName("main")
const btn = document.getElementsByTagName("add-p")

btn.onclick = function() {
    div3.innerHTML = <p>LOL</p>
}

// getelementbyid  წამოიღე ელემენტი იდს მეშვეობით
//getelementsbyclassname წამოიღე ელემენტები დოკუმენტიდან 
//კლასის მეშვეობით 
//getelementvytagname რამოიღე ელემენტი თეგის სახელით