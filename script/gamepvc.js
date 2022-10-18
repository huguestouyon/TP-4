window.addEventListener('DOMContentLoaded', function () {
    const cases = Array.from(document.querySelectorAll('.case'))
    let responseEndGame = document.querySelector('.response-end-game')
    let egality = 0
    function responseWinner(winner) {
        responseEndGame.innerHTML = winner + ' a gagné !'
    }
    
    function checkWin() {
        if(cases[0].innerHTML !== '' && cases[0].innerHTML === cases[1].innerHTML && cases[1].innerHTML === cases[2].innerHTML) {
            console.log('Ok')
            responseWinner(cases[0].innerHTML)
            egality++
        }
        if(cases[3].innerHTML !== '' && cases[3].innerHTML === cases[4].innerHTML && cases[4].innerHTML === cases[5].innerHTML) {
            console.log('Ok')
            responseWinner(cases[3].innerHTML)
            egality++
        }
        if(cases[6].innerHTML !== '' && cases[6].innerHTML === cases[7].innerHTML && cases[7].innerHTML === cases[8].innerHTML) {
            console.log('Ok')
            responseWinner(cases[6].innerHTML)
            egality++
        }
        if(cases[0].innerHTML !== '' && cases[0].innerHTML === cases[3].innerHTML && cases[3].innerHTML === cases[6].innerHTML) {
            console.log('Ok')
            responseWinner(cases[0].innerHTML)
            egality++
        }
        if(cases[1].innerHTML !== '' && cases[1].innerHTML === cases[4].innerHTML && cases[4].innerHTML === cases[7].innerHTML) {
            console.log('Ok')
            responseWinner(cases[1].innerHTML)
            egality++
        }
        if(cases[2].innerHTML !== '' && cases[2].innerHTML === cases[5].innerHTML && cases[5].innerHTML === cases[8].innerHTML) {
            console.log('Ok')
            responseWinner(cases[2].innerHTML)
            egality++
        }
        if(cases[0].innerHTML !== '' && cases[0].innerHTML === cases[4].innerHTML && cases[4].innerHTML === cases[8].innerHTML) {
            console.log('Ok')
            responseWinner(cases[0].innerHTML)
            egality++
        }
        if(cases[2].innerHTML !== '' && cases[2].innerHTML === cases[4].innerHTML && cases[4].innerHTML === cases[6].innerHTML) {
            console.log('Ok')
            responseWinner(cases[2].innerHTML)
            egality++
        }
    }

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
        console.log(possibility)
        let value = Math.floor(Math.random() * possibility.length)
        checkWin()
        checkTie()
        if(egality===0){
            possibility[value].innerHTML = 'X'
        }     
    }

    document.querySelector('.btn-replay').addEventListener('click', () => {
        cases.forEach(el => el.innerHTML = '')
        responseEndGame.innerHTML = ''
        egality = 0
    })

    cases.forEach(elem => elem.addEventListener('click', () => {
        if(!elem.innerHTML) {
            // elem.innerHTML = tour()
            // function tour() {
            //     roundNb++
            //     if(roundNb % 2 === 0) {
            //         // return 'O'
        
            //     }
            //     else {
            //         return 'X'
            //     }
            // }
            elem.innerHTML = 'O'
            bot()
            checkWin()
            checkTie()
        }
    }))
})