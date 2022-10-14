envoyer.onclick = function () {
    let x;
    let y;
    x = document.querySelector("#namePlayerOne").value;
    y = document.querySelector("#namePlayerTwo").value;
    if (y === "" || y === null || x === "" || x === null) {
        document.querySelector('.error').innerHTML = "Entrer les noms des joueurs !"
        return false
    }
    else {
        localStorage.setItem('namePlayerOne', namePlayerOne.value)
        localStorage.setItem('namePlayerTwo', namePlayerTwo.value)
    }
}