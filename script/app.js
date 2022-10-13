// Choix du joueur
let path = window.location.pathname;
let page = path.split("/").pop();
console.log(page);
if(page === "pvp.html") {
    envoyer.onclick = function(){
    let x;
    let y;
    x = document.querySelector("#namePlayerOne").value;
    y = document.querySelector("#namePlayerTwo").value;
    if (y === "" || y === null || x === "" || x === null) {
        document.querySelector('.error').innerHTML = "Entrer des noms de joueurs !"
        return false
    }
    else {
        localStorage.setItem('namePlayerOne', namePlayerOne.value)
        localStorage.setItem('namePlayerTwo', namePlayerTwo.value)
    }
}
}
else if(page === "gamepvp.html") {
    
}