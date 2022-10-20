document.addEventListener('DOMContentLoaded', function () {

    const start = document.querySelector('#index')

    createElem('div', 'container-index', start)
    const containerIndex = document.querySelector('.container-index')

    createElem('h1', 'index-title', containerIndex)
    const indexTitle = document.querySelector('.index-title')
    indexTitle.innerHTML = 'Choisis ton mode !'

    createElem('div', 'index-button', containerIndex)
    const indexButton = document.querySelector('.index-button')

    createElem('button', 'button-pvp', indexButton)
    const buttonPvp = document.querySelector('.button-pvp')
    buttonPvp.innerHTML = 'Joueur contre joueur'

    createElem('button', 'button-pvc', indexButton)
    const buttonPvc = document.querySelector('.button-pvc')
    buttonPvc.innerHTML = 'Joueur contre ordinateur'

    // Page 2 
    buttonPvp.addEventListener('click', () => {
        containerIndex.style.display = 'none'
        createElem('div', 'container-option', start)
        const containerOption = document.querySelector('.container-option')
        createElem('div', 'form-option', containerOption)
        const formOption = document.querySelector('.form-option')
        createElem('form', 'form', formOption)
        // form
        const form = document.querySelector('.form')
        form.setAttribute("method", "")
        form.setAttribute("action", "")
        createElem('label', 'label-pOne', form)
        const labelPOne = document.querySelector('.label-pOne')
        labelPOne.innerHTML = 'Pseudo joueur n°1 :'
        createElem('input', 'input-pOne', form)
        const formNamePOne = document.querySelector('.input-pOne')
        formNamePOne.setAttribute("type", "text")
        formNamePOne.setAttribute("name", "p1")
        createElem('label', 'label-pTwo', form)
        const labelPTwo = document.querySelector('.label-pTwo')
        labelPTwo.innerHTML = 'Pseudo joueur n°2 :'
        createElem('input', 'input-pTwo', form)
        const formNamePTwo = document.querySelector('.input-pTwo')
        formNamePTwo.setAttribute("type", "text")
        formNamePTwo.setAttribute("name", "p2")
        createElem('label', 'label-nbGame', form)
        const labelNbGame = document.querySelector('.label-nbGame')
        labelNbGame.innerHTML = 'Nombre de partie(s) :'
        createElem('input', 'input-nb-game', form)
        const inputNbGame = document.querySelector('.input-nb-game')
        inputNbGame.setAttribute("type", "number")
        inputNbGame.setAttribute("min", "1")
        inputNbGame.setAttribute("max", "10")
        createElem('button', 'form-option-submit', form)
        const formOptionSubmit = document.querySelector('.form-option-submit')
        formOptionSubmit.innerHTML = 'Envoyer'
    })

    buttonPvc.addEventListener('click', () => {
        containerIndex.style.display = 'none'
    })




    function createElem(elem, className, childName) {
        let element = document.createElement(elem)
        element.className = className
        childName.appendChild(element)
        return element
    }

})