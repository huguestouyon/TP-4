// Charge la page en entier
window.addEventListener('DOMContentLoaded', function () {
    // Récupère les variables importantes
    const cases = Array.from(document.querySelectorAll('.case')) // Select all cases
    const title = document.querySelector('.playervsplayer-title') // Affiche "J1 VS J2"
    const nextPlayer = document.querySelector('.nextPlayer') // Affiche le joueur suivant
    const btnReset = document.querySelector('#reset') // Reset Btn
    const announcer = document.querySelector('.playervsplayer-anounce') // Annonce du vainqueur (égalité) en cas de fin de match
    const namePlayerX = localStorage.getItem('namePlayerOne') // Récupère J1
    const namePlayerO = localStorage.getItem('namePlayerTwo') // Récupère J2
    const shotRem = document.querySelector('.shots-remaining') // Récupère la div affichant le nb de coups restants
    const shot = document.querySelector('.shot') // Récupère le span dans la div .shots-remaining

    // Titre
    title.innerHTML = '<span class="playerX">' + namePlayerX + '</span>' + ' VS ' + '<span class="playerO">' + namePlayerO + '</span>'

    // Créer un jeu vide
    let game = ['', '', '', '', '', '', '', '', '']
    let countGame = game.length
    // Défini le joueur actif

    // Pile ou face entre les joueurs pour savoir qui commence
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
    // Le jeu est considéré comme commencé
    let activeGame = true;
    // Défini des réponses préfaites
    const pxWin = 'player X gagne !'
    const poWin = 'Player O gagne !'
    const equality = 'Egalité !'
    // Conditions de victoire
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
    // Function de validation
    function validation() {
        // Défini le round sur "en cours"
        let roundWon = false;
        // Pour toutes les divs
        for (let i = 0; i <= 7; i++) {
            // vérifie toutes les wins conditions
            const winCondition = winCond[i]
            // Compare le tableau en train de se remplir aux conditions de victoires
            const a = game[winCondition[0]]
            //console.log(a)
            const b = game[winCondition[1]]
            // console.log(b)
            const c = game[winCondition[2]]
            // console.log(c)
            // Si les variables sont différentes on continue
            if (a === '' || b === '' || c === '') {
                continue;
            }
            // Si on a des égalités on arrête et le round est gagné
            if (a === b && b === c) {
                roundWon = true;
                break;
            }
        }
        // Si le round est gagné
        if (roundWon === true) {
            // announce(activePlayer === 'X' ? pxWin : poWin) == Ligne 91 à 96
            if (activePlayer === 'X') {
                announce(pxWin) // annonce la victoire pour X
                shot.classList.add('hide')

                // const namePlayerO = l // Récupère J2
            }
            else {
                announce(poWin) // annonce la victoire pour O
                shot.classList.add('hide')
            }
            activeGame = false // arrête le jeu
            shot.classList.add('hide')
            return;
        }
        // si plus de place et pas de résultat
        if (!game.includes(''))
            announce(equality) // Annonce de l'égalité         
    }

    // Création d'annonce 
    const announce = function (type) {
        //console.log(type)
        switch (type) { // Switch utile quand on veut faire un nombre défini de possibilités
            case poWin:
                announcer.innerHTML = 'Joueur <span class="playerO">'+namePlayerO+'</span> Gagne ! 🦾'; // Ajoute un message si O gagne
                break;
            case pxWin:
                announcer.innerHTML = 'Joueur <span class="playerX">'+namePlayerX+'</span> Gagne ! 🦾'; // Ajoute un message si X gagne 
                break;
            case equality:
                announcer.innerText = 'Égalité ! 🔐';
        }
        announcer.classList.remove('hide'); // supprime la classe hide
    };
    // vérifie si la valeur html de caseF est bien X ou O
    const validAction = (caseF) => {
        if (caseF.innerText === 'X' || caseF.innerText === 'O') {
            return false
        }
        else {
            return true
        }
    };
    // function pour récupérer l'index dans un tableau 2 dimensions
    const updateGame = function (index) { // peut-être écris (index) => {}
        game[index] = activePlayer // ajoute l'active player dans le jeu tableau de jeu
        // console.log(activePlayer)
        // console.log(game)
    }
    // function pour changer de joueur
    const changePlayer = () => {
        //console.log(changePlayer)
        // supprime la classe (si une est déjà présente)
        nextPlayer.classList.remove('player' + activePlayer) // peut être écris de cette façon avec jquery `player${activePlayer}`
        activePlayer = activePlayer === 'X' ? 'O' : 'X' //result = condition ? value1 : value2; (7 lignes en 1)
        // if(activePlayer==='X'){ // condition pour modifier le joueur actif, son texte et sa classe css
        nextPlayer.innerText = activePlayer
        nextPlayer.classList.add('player' + activePlayer)
        //   activePlayer = 'O' // change le joueur
        //     console.log(nextPlayer)
        // }
        // else {
        //     nextPlayer.innerText = activePlayer
        //     nextPlayer.classList.add('player' + activePlayer)
        //     activePlayer = 'X'
        //     console.log(nextPlayer)
        // }
    }
    // function à deux arguments 
    const user = (caseF, index) => {  // function(caseF, index) {} 
        // console.log(validAction(caseF)) 
        if (validAction(caseF) && activeGame) { // quand on valide un caractère et que la game est active (=true)
            // console.log(caseF)
            caseF.innerText = activePlayer // la case prends la valeur du joueur actif
            caseF.classList.add('player' + activePlayer) // et sa classe css
            updateGame(index) // on met à jour le tableau de jeu
            countGame -= 1;
            shotRem.innerHTML = countGame
            console.log(countGame)
            validation() // on recherche si c'est gagné
            changePlayer() // on change de joueur
        }
    }
    // reset le jeu
    const resetGame = function () {
        game = ['', '', '', '', '', '', '', '', ''] // reset du jeu
        activeGame = true // le jeu est actif
        announcer.classList.add('hide') // ajoute une classe pour cacher le message d'annonce résultat
        countGame = game.length
        if (activePlayer === 'O' || activePlayer === 'X') { //   
            changePlayer() // change de joueur
        }

        cases.forEach(function (caseF) {
            // Reset les cases
            caseF.innerText = '';
            // Supprime les classes css aux joueurs
            caseF.classList.remove('playerX')
            caseF.classList.remove('playerO')
            shot.classList.remove('hide')
            shotRem.innerHTML = game.length
            console.log(countGame)
        });
    }
    // écouteur pour toutes les cases
    cases.forEach(function (caseF, index) {
        caseF.addEventListener('click', function () {
            user(caseF, index) // lance la fonction user
        });
    });
    // Ecouteur du bouton reset
    btnReset.addEventListener('click', resetGame)
});