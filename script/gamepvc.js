window.addEventListener('DOMContentLoaded', function () {
    const cases = Array.from(document.querySelectorAll('.case'))
    let roundNb = 0

    function tour() {
        roundNb++
        if(roundNb % 2 === 0) {
            return 'O'
        }
        else {
            return 'X'
        }
    }

    function win() {
        if(cases[0].innerHTML !== '' && cases[0].innerHTML === cases[1].innerHTML && cases[1].innerHTML === cases[2].innerHTML) {
            console.log('Ok')
        }
    }

    function jouer() {
        if(!this.innerHTML) {
            this.innerHTML = tour()
        }
        win()
    }

    cases.forEach(element => element.addEventListener('click', jouer))
})