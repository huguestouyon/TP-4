window.addEventListener('DOMContentLoaded', function () {
    const containerOneVsOne = document.querySelector('.container-ovo')
    containerOneVsOne.style.display = 'none'
    const btnFormMode = document.querySelector('.mode-btn')
    btnFormMode.addEventListener('click', () => {
        console.log('test')
        const playerOne = document.querySelector('#player-one')
        const playerTwo = document.querySelector('#player-two')
        let nbGame = document.querySelector('#nb-game').value
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
                console.log(nbGame)
                containerOneVsOne.style.display = 'flex'
                const cases = Array.from(document.querySelectorAll('.case'))
                const title = document.querySelector('.title')
                const nextPlayer = document.querySelector('.next-player')
                const btnReset = document.querySelector('.reset')
                const announcer = document.querySelector('.announcer')
                const shotRem = document.querySelector('.shots-remaining')
                const shot = document.querySelector('.shot')
                let scorePlayerX = document.querySelector('#scorePX')
                let scorePlayerO = document.querySelector('#scorePO')
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
                        if (roundWon === true) {
                            if (activePlayer === 'X') {
                                announce(pxWin)
                                shot.classList.add('hide')
                                console.log(nbGame)
                                nbGame = nbGame - 1
                                scoreX++
                                scorePlayerX.innerHTML = scoreX
                                if (nbGame === 0) {
                                    if (scoreO > scoreX) {
                                        let messWin = 'GG : ' + namePlayers[0] + ' WIN !'
                                        if (!alert(messWin)) document.location = 'pvp.html';
                                    }
                                    else if (scoreX > scoreO) {
                                        let messWin = alert('GG : ' + namePlayers[1] + 'WIN !')
                                        if (!alert(messWin)) document.location = 'pvp.html';
                                    }
                                    else if (scoreX === scoreO) {
                                        let messWin = alert('Match Nul !')
                                        if (!alert(messWin)) document.location = 'pvp.html';
                                    }
                                }
                            }
                            else {
                                announce(poWin) 
                                shot.classList.add('hide')
                                nbGame = nbGame - 1
                                scoreO++
                                scorePlayerO.innerHTML = scoreO
                                if (nbGame == 0) {
                                    if (scoreO > scoreX) {
                                        let messWin = 'GG : ' + namePlayers[0] + ' WIN !'
                                        if (!alert(messWin)) document.location = 'pvp.html';
                                    }
                                    else if (scoreX > scoreO) {
                                        let messWin = alert('GG : ' + namePlayers[1] + 'WIN !')
                                        if (!alert(messWin)) document.location = 'pvp.html';
                                    }
                                }
                            }
                            activeGame = false
                            shot.classList.add('hide')
                            return;
                        }
                        if(!game.includes('')) {
                            announce(equality)
                            nbGame = nbGame - 1
                            if(nbGame == 0) {
                                if(scoreO > scoreX) {
                                    let messWin = 'GG : ' + namePlayers[0]
                                    if(!alert(messWin)) document.location = 'index.html';
                                }
                                else if (scoreX > scoreO){
                                    let messWin = alert('GG : ' + namePlayers[1] + 'WIN !')
                                    if(!alert(messWin)) document.location = 'pvp.html';
                                }
                                else if (scoreX === scoreO) {
                                    let messWin = alert('Match Nul !')
                                    if(!alert(messWin)) document.location = 'pvp.html';
                                }
                            }
                        }
                    }
                }
                
                const announce = function (type) {
                    switch (type) { 
                        case poWin:
                            announcer.innerHTML = 'Joueur <span class="playerO">' + namePlayers[0] + '</span> Gagne ! 🦾'
                        case pxWin:
                            announcer.innerHTML = 'Joueur <span class="playerX">' + namePlayers[1] + '</span> Gagne ! 🦾' 
                            break;
                        case equality:
                            announcer.innerHTML = 'Égalité ! 🔐'
                    }
                    announcer.classList.remove('hide')
                }
                const validAction = (caseF) => {
                    if (caseF.innerText === 'X' || caseF.innerText === 'O') {
                        return false
                    }
                    else {
                        return true
                    }
                }
                const updateGame = function (index) {
                    game[index] = activePlayer
                }
                const changePlayer = () => {
                    nextPlayer.classList.remove('player' + activePlayer)
                    activePlayer = activePlayer === 'X' ? 'O' : 'X'
                    nextPlayer.innerText = activePlayer
                    nextPlayer.classList.add('player' + activePlayer)
                }
                const user = (caseF, index) => { 
                    if (validAction(caseF) && activeGame) {
                        caseF.innerText = activePlayer
                        caseF.classList.add('player' + activePlayer)
                        updateGame(index)
                        countGame -= 1;
                        shotRem.innerHTML = countGame
                        
                        validation()
                        changePlayer()
                    }
                }
                const resetGame = function () {
                    game = ['', '', '', '', '', '', '', '', '']
                    activeGame = true 
                    announcer.classList.add('hide')
                    countGame = game.length
                    if (activePlayer === 'O' || activePlayer === 'X') {   
                        changePlayer()
                    }
                    cases.forEach(function (caseF) {
                        caseF.innerText = '';
                        caseF.classList.remove('playerX')
                        caseF.classList.remove('playerO')
                        shot.classList.remove('hide')
                        shotRem.innerHTML = game.length
                    });
                }
                cases.forEach(function (caseF, index) {
                    caseF.addEventListener('click', function () {
                        user(caseF, index)
                    });
                });
                
                btnReset.addEventListener('click', resetGame)

            }
        }
    })
})