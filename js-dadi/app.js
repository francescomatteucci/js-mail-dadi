document.body.style.backgroundColor = "#7FF800"
const resultAlert = document.getElementById("result")
const resultContainer = document.getElementById("result-container")
const userSumAlert = document.getElementById("user-sum")
const computerSumAlert = document.getElementById("computer-sum")

//Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
//Creare array vuoto
const userNumbers = []
const computerNumbers = []
resultContainer.addEventListener('click', function () {
    let userSum = 0
    let computerSum = 0
    for (let iterations = 0; iterations <= 6; iterations++) {
        //Ad ogni iterazione creare un numero random da 1 a 6 con la formula math.random()
        const randomUserNumber = Math.floor(Math.random() * 6) + 1
        //Pushare i numeri random nell'array
        userNumbers[iterations] = randomUserNumber

    }
    
    //Somma dei numeri generati da 1 a 6 per 7 iterazioni
    for (let i = 0; i < userNumbers.length; i++) {
        userSum += userNumbers[i]
        
    }
    userSumAlert.innerHTML = `${userSum}`


    for (let iterations = 0; iterations <= 6; iterations++) {
        //Ad ogni iterazione creare un numero random da 1 a 6 con la formula math.random()
        const randomComputerNumber = Math.floor(Math.random() * 6) + 1
        //Pushare i numeri random nell'array
        computerNumbers[iterations] = randomComputerNumber
    }
    //Somma dei numeri generati da 1 a 6 per 7 iterazioni
    for (let i = 0; i < computerNumbers.length; i++) {
        computerSum += computerNumbers[i]
        
        
    }
    computerSumAlert.innerHTML = `${computerSum}`
//Stabilire il vincitore, in base a chi fa il punteggio più alto.
if (userSum < computerSum) {
        resultAlert.innerHTML = `Hai perso!`
    } else if (userSum > computerSum) {
        resultAlert.innerHTML = `Hai vinto!`
    } else {
        resultAlert.innerHTML = `Hai pareggiato!`
    }
})
resultContainer.appendChild(resultAlert);


//Stampare i numeri
//Fai tutti questi passaggi per 2 volte dove la prima volta i dati corrisponderanno all'utente e gli altri dati al pc   

