const userButton = document.getElementById("user-button")
const computerButton = document.getElementById("computer-button")
const resultAlert = document.getElementById("result")
const resultContainer = document.getElementById("result-container")
//Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
//Creare array vuoto
const userNumbers = []
const computerNumbers = []
let userSum = 0
let computerSum = 0
userButton.addEventListener('click', function () {
    for (let iterations = 1; iterations <= 7; iterations++) {
        //Ad ogni iterazione creare un numero random da 1 a 6 con la formula math.random()
        const randomUserNumber = Math.floor(Math.random() * 6) + 1
        //Pushare i numeri random nell'array
        userNumbers.push(randomUserNumber)

    }
    //Somma dei numeri generati da 1 a 6 per 7 iterazioni
    for (let i = 0; i < userNumbers.length; i++) {
        userSum += userNumbers[i]
    }
    console.log(userNumbers)
    console.log("la somma è " + userSum)

})

computerButton.addEventListener('click', function () {
    for (let iterations = 1; iterations <= 7; iterations++) {
        //Ad ogni iterazione creare un numero random da 1 a 6 con la formula math.random()
        const randomComputerNumber = Math.floor(Math.random() * 6) + 1
        //Pushare i numeri random nell'array
        computerNumbers.push(randomComputerNumber)
    }
    //Somma dei numeri generati da 1 a 6 per 7 iterazioni
    for (let i = 0; i < computerNumbers.length; i++) {
        computerSum += computerNumbers[i]
    }
    console.log(computerNumbers)
    console.log("la somma è " + computerSum)



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
