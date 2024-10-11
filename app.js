// dichiaro una variabile per il conteggio
let count = 0;

// recupero gli elementi dal DOM

const value = document.getElementById('value');
const btns = document.querySelectorAll('.btn');

// uso un ciclo sui bottoni 

btns.forEach(btn => {

    // aggancio un ascoltatore di eventi a ogni singolo bottone
    btn.addEventListener('click', e => {

        // uso l'event target per assicurarmi di ascoltare il bottone giusto
        const styles = e.currentTarget.classList;
        // stabilisco le condizioni
        if (styles.contains('decrease')) {
            count--;
        } else if (styles.contains('increase')) {
            count++;
        } else {
            count = 0;
        }
        value.innerText = count;
    })
})