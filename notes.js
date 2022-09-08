let clear = document.getElementById("clear")
let note1 = document.getElementById("note1")
let note2 = document.getElementById("note2")
let note3 = document.getElementById("note3")

function changeallnotestoblanks() {
    note1.innerText = "";
    note2.innerText = "";
    note3.innerText = "";
    

}

clear.addEventListener("click",changeallnotestoblanks);