// Chiedi all’utente la sua email,
//Prendere dal DOM l'input
const userEmail = document.getElementById("email")
//Prendere il bottone dall'input e renderlo ascoltabile ad eventi
const mailButton = document.getElementById("button")
const messageContainer = document.getElementById("messageContainer")

mailButton.addEventListener('click', function () {
    // controlla che sia nella lista di chi può accedere
    //array
    //variabile flag che mi serve per stampare dopo i messaggi che sia settata su false
    //for per far scorrere l'array
    //se ci sono presenti modifichi la flag in true
    const emails = ["pippo@gmail.com", "pluto@gmail.com", "kekko@gmail.com", "giovanni@gmail.com"]
    let areUserEmailInArray = false

    for (let i = 0; i < emails.length; i++) {
        const email = emails[i]
        if (email === userEmail.value) {
            areUserEmailInArray = true
        }
    }

    if (areUserEmailInArray === true) {
        messageContainer.innerHTML = `<div>La tua email è gia registrata!</div>`
    } else {
        messageContainer.innerHTML = `<div>La tua email non esiste</div>`
    }

})

// stampa un messaggio appropriato sull’esito del controllo.
//if la variabile flag è true stampi che l'email dell'utente è già registrata
//altrimenti stampa che l'email dell'utente non esiste