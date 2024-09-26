const h3User = document.querySelector('#user span');
const h3Compu = document.querySelector('#compu span');
const h1Result = document.querySelector('h1');
const button = document.querySelector('button');

// Función para obtener la elección de la computadora
const getCompuChoice = () => {
    const choices = ['piedra', 'papel', 'tijera'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
};

// Función para determinar el ganador
const determineWinner = (userChoice, compuChoice) => {
    if (userChoice === compuChoice) {
        return 'Empate';
    } else if (
        (userChoice === 'piedra' && compuChoice === 'tijera') ||
        (userChoice === 'papel' && compuChoice === 'piedra') ||
        (userChoice === 'tijera' && compuChoice === 'papel')
    ) {
        return '¡Ganaste!😜';
    } else {
        return 'Perdiste 😓';
    }
};

// Función principal del juego
const play = () => {
    const choiceUser = prompt('Elige: piedra, papel o tijera').toLowerCase();
    const compuChoice = getCompuChoice();

    // Actualizar las elecciones en el HTML
    h3User.textContent = choiceUser;
    h3Compu.textContent = compuChoice;

    // Determinar el resultado
    const result = determineWinner(choiceUser, compuChoice);
    h1Result.textContent = result;
};

// Agregar el event listener para el botón
button.addEventListener('click', play);