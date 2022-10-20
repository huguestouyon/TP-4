window.addEventListener('DOMContentLoaded', function () {
    const cases = Array.from(document.querySelectorAll('.case'))
    let responseEndGame = document.querySelector('.response-end-game')
    let egality = 0
    let countX = 0
    let countO = 0
    function responseWinner(winner) {
        if(winner === 'O') {
            document.querySelector('.response-end-gameO').innerHTML = 'Player ' + winner + ' a gagné !'
            responseEndGame.style.color = '#ee6677'
            countO++
            document.querySelector('.scoreO').innerHTML = countO/2
        } 
        if(winner === 'X'){
            document.querySelector('.response-end-gameX').innerHTML = 'Player ' + winner + ' a gagné !'
            responseEndGame.style.color = '#18BC9C'
            countX++
            document.querySelector('.scoreX').innerHTML = countX
        }
    }
    function classList() {
        cases.forEach(elem => {
            if(elem.innerHTML === 'O'){
                elem.style.transition = 'all 300ms ease-out'
                elem.style.color = '#ee6677'
            }
            if(elem.innerHTML === 'X'){
                elem.style.transition = 'all 300ms ease-out'
                elem.style.color = '#18BC9C'
            }
            
        })
    }
    function checkWin() {
        if(cases[0].innerHTML !== '' && cases[0].innerHTML === cases[1].innerHTML && cases[1].innerHTML === cases[2].innerHTML) {
            responseWinner(cases[0].innerHTML)
            egality++
        }
        if(cases[3].innerHTML !== '' && cases[3].innerHTML === cases[4].innerHTML && cases[4].innerHTML === cases[5].innerHTML) {
            responseWinner(cases[3].innerHTML)
            egality++
        }
        if(cases[6].innerHTML !== '' && cases[6].innerHTML === cases[7].innerHTML && cases[7].innerHTML === cases[8].innerHTML) {
            responseWinner(cases[6].innerHTML)
            egality++
        }
        if(cases[0].innerHTML !== '' && cases[0].innerHTML === cases[3].innerHTML && cases[3].innerHTML === cases[6].innerHTML) {
            responseWinner(cases[0].innerHTML)
            egality++
        }
        if(cases[1].innerHTML !== '' && cases[1].innerHTML === cases[4].innerHTML && cases[4].innerHTML === cases[7].innerHTML) {
            responseWinner(cases[1].innerHTML)
            egality++
        }
        if(cases[2].innerHTML !== '' && cases[2].innerHTML === cases[5].innerHTML && cases[5].innerHTML === cases[8].innerHTML) {
            responseWinner(cases[2].innerHTML)
            egality++
        }
        if(cases[0].innerHTML !== '' && cases[0].innerHTML === cases[4].innerHTML && cases[4].innerHTML === cases[8].innerHTML) {
            responseWinner(cases[0].innerHTML)
            egality++
        }
        if(cases[2].innerHTML !== '' && cases[2].innerHTML === cases[4].innerHTML && cases[4].innerHTML === cases[6].innerHTML) {
            responseWinner(cases[2].innerHTML)
            egality++
        }
    }
    // function displayScore() {
        
    // }

    
    function checkTie() {
        if(cases[0].innerHTML !== "" && cases[1].innerHTML !== "" && cases[2].innerHTML !== "" && cases[3].innerHTML !== "" && cases[4].innerHTML !== "" && cases[5].innerHTML !== "" && cases[6].innerHTML !== "" && cases[7].innerHTML !== "" && cases[8].innerHTML !== "") {
            if(egality === 0) {
                responseEndGame.innerHTML = 'Égalité !'
                egality++
            }
        }
    }
    function bot() {        
        let possibility = []
        cases.forEach(el => {
            if(el.innerHTML === '') {
                possibility.push(el)
            }
        });
        let value = Math.floor(Math.random() * possibility.length)
        if(egality===0){
            possibility[value].innerHTML = 'X'
        }
    }
    document.querySelector('.btn-replay').addEventListener('click', () => {
        cases.forEach(el => el.innerHTML = '')
        responseEndGame.innerHTML = ''
        document.querySelector('.response-end-gameO').innerHTML = ''
        document.querySelector('.response-end-gameX').innerHTML = ''
        egality = 0
    })

    cases.forEach(elem => elem.addEventListener('click', () => {
        if(!elem.innerHTML && egality === 0) {
            elem.innerHTML = 'O'        
            checkWin()
            checkTie()
            bot()
            checkWin()
            checkTie()
            classList()
        }
    }))
})