window.addEventListener('DOMContentLoaded', function () {
    const containerOneVsOne = document.querySelector('.container-ovo')
    containerOneVsOne.style.display = 'none'
    const btnFormMode = document.querySelector('.mode-btn')
    btnFormMode.addEventListener('click', () => {
        console.log('test')
        const playerOne = document.querySelector('#player-one')
        const playerTwo = document.querySelector('#player-two')
        const nbGame = document.querySelector('#nb-game').value
        const mode = document.querySelector('#pet-select').value
        if (playerOne.value !== null && playerTwo.value !== null && nbGame !== '' && mode !== '') {
            const namePlayers = []
            namePlayers.push(playerOne.value, playerTwo.value)
            document.querySelector('.mode').style.display = 'none'
            if (mode === "OneVsComputer") {
                // Morpion vs Computer
            }
            if (mode === "OneVsOne") {
                // One vs One
                containerOneVsOne.style.display = 'flex'
                const cases = Array.from(document.querySelectorAll('.case'))
                const title = document.querySelector('.title')
                const nextPlayer = document.querySelector('.next-player')
                const btnReset = document.querySelector('.reset')
                const announcer = document.querySelector('.announce')
                const shotRem = document.querySelector('.shots-remaining')
                const shot = document.querySelector('.shot')
                
                title.innerHTML = '<span class="playerX">' + namePlayers[0] + '</span>' + ' VS ' + '<span class="playerO">' + namePlayers[1] + '</span>'
                
                let scoreX = 0
                let scoreO = 0
                let game = ['', '', '', '', '', '', '', '', '']
                let countGame = game.length

                let activeGame = true;
                if (Math.floor(Math.random() * 2) === 0) {
                    activePlayer = 'X'
                    nextPlayer.innerHTML = activePlayer
                    nextPlayer.classList.add('player' + activePlayer)
                }
                else {
                    activePlayer = 'O'
                    nextPlayer.innerHTML = activePlayer
                    nextPlayer.classList.add('player' + activePlayer)
                }
                const pxWin = 'player X gagne !'
                const poWin = 'Player O gagne !'
                const equality = 'Egalité !'

                const winCond = [
                    [0, 1, 2],
                    [3, 4, 5],
                    [6, 7, 8],
                    [0, 3, 6],
                    [1, 4, 7],
                    [2, 5, 8],
                    [0, 4, 8],
                    [2, 4, 6]
                ]

                function validation() {
                    let roundWon = false;
                    for (let i = 0; i <= 7; i++) {
                        const winCondition = winCond[i]
                        const a = game[winCondition[0]]
                        const b = game[winCondition[1]]
                        const c = game[winCondition[2]]
                        if (a === '' || b === '' || c === '') {
                            continue;
                        }
                        if (a === b && b === c) {
                            roundWon = true;
                            break;
                        }
                    }
                }

                if (roundWon === true) {
                    if (activePlayer === 'X') {
                        announce(pxWin)
                        shot.classList.add('hide')
                    }
                }
            }
        }
    })
})