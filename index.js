const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q",
    "R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l",
    "m","n","o","p","q","r","s","t","u","v","w","x","y","z","0","1","2","3","4","5","6",
    "7", "8","9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{",
    "[","}","]",",","|",":",";","<",">",".","?","/"];

passwordLength = 15
let resultEl1 = document.getElementById("result-el-1")
let resultEl2 = document.getElementById("result-el-2")



function generate(){
    resultEl1.textContent = ""
    resultEl2.textContent = ""
    for(let i = 0; i < passwordLength; i++){
        let randomness1 = Math.floor(Math.random() * characters.length)
        let randomness2 = Math.floor(Math.random() * characters.length)
        resultEl1.textContent += characters[randomness1]
        resultEl2.textContent += characters[randomness2]
    }
}

function copyToClipboard(elementId) {
    var element = document.getElementById(elementId);
    var text = element.innerText;
    navigator.clipboard.writeText(text).then(function() {
        alert("Text copied to clipboard: " + text);
    }).catch(function(err) {
        console.error("Failed to copy text: ", err);
    });
}