envoyer.onclick = function () {
    let x = document.querySelector("#namePlayerOne").value
    let y = document.querySelector("#namePlayerTwo").value
    let z = document.querySelector("#numberGame").value
    if (y === "" || y === null || x === "" || x === null || z === null || z === "") {
        document.querySelector('.error').innerHTML = "Entrer les noms des joueurs !"
        return false
    }
    else {
        localStorage.setItem('namePlayerOne', namePlayerOne.value)
        localStorage.setItem('namePlayerTwo', namePlayerTwo.value)
        localStorage.setItem('numberGame', numberGame.value)
        localStorage.setItem('scorePlayerOne', 0)
        localStorage.setItem('scorePlayerTwo', 0)
    }
}