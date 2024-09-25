const main = document.querySelector('main');
const h1 = document.querySelector('h1');

const eightBall = () => {
    const question = prompt('Pregunta:');
    const random = Math.floor(Math.random() * 8);
    const options = [
        'si',
        'no',
        'posiblemente',
        'tal vez',
        'la veo dificil',
        'de que we?',
        'maybe',
        'no creo',
    ]
    h1.innerText = options[random];
}

main.addEventListener('click', eightBall);