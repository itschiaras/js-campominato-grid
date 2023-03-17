/*Consegna
L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
Ogni cella ha un numero progressivo, da 1 a 100.
Ci saranno quindi 10 caselle per ognuna delle 10 righe.
Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.*/

// FUNZIONI

// funzione per creare i quadratini

function drawSquare (index, numSquares) {
    const square = document.createElement('div');
    square.classList.add('square');
    square.style.width = `calc(100% / ${numSquares})`;
    square.style.height = square.style.width;
    square.innerHTML = index;
    return square;

}

// funzione per generare la griglia di gioco 
function play(e) {
    e.preventDefault();
    const playground = document.getElementById('playground'); // prendo il div dove ci sarà la griglia di gioco
    playground.innerHTML = ''; // ad un nuovo submit la griglia si svuoterà

    const level = document.getElementById('level').value;// prendo il livello scelto dall'utente
    console.log(level);

    let squareNumbers; //variabile per impostare il numero di quadrati della griglia a seconda del livello
    switch (level) {
        case 'easy':
            squareNumbers = 100;
            break;
        case 'medium':
            squareNumbers = 81;
            break;
        case 'hard':
            squareNumbers = 49;
            break;
    };
    
    // variabile per impostare numero di quadratini per fila della griglia
    let squarePerRow = Math.sqrt(squareNumbers);
    console.log(squarePerRow);

    // ciclo for per generare i quadratini all'interno della griglia
    for (let i = 1; i <= squareNumbers; i++) {
        const square = drawSquare(i, squarePerRow);
        square.addEventListener('click', function () {
            square.classList.add('noBomb');
            console.dir(square.innerText);
        })
        playground.appendChild(square);

    }

}


// creo variabile per prendere il form ed aggiungergli l'evento submit e la funzione play

const levelChoice = document.getElementById('levelForm');
levelChoice.addEventListener('submit', play);