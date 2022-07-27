const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"];

function generateEl() {
    let pass1 = "";
    let pass2 = "";
    for (let i = 0; i < 16; i++) {
        let randomPass = characters[Math.floor(Math.random() * characters.length)];
        pass1 += randomPass;
    }
    document.getElementById("pass-one").textContent = pass1;
    for (let i = 0; i < 16; i++) {
        let randomPass = characters[Math.floor(Math.random() * characters.length)];
        pass2 += randomPass;
    }
    document.getElementById("pass-two").textContent = pass2;
}