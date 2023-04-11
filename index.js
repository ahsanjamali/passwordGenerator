const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let genEl1 = document.getElementById("gen1")
let genEl2 = document.getElementById("gen2")

function generatePassword() {
    genEl1.textContent = ""
    genEl2.textContent = ""
   for(let i=0;i<16;i++)
   {
       
      
       
       genEl1.textContent += random();
       genEl2.textContent += random();
   } 

  
}



function random() {
    let rand = Math.floor(Math.random() * characters.length)
    return characters[rand]
} 



