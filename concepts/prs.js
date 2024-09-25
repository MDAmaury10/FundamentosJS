const btnPlay  = document.querySelector('button');
const h3Computer = document.querySelector('#compu span');
const h1Result = document.querySelector('h1');

const play = () => {
        const choiceUser = prompt('Elige: piedra, papel o tijera');
        const choices = ['piedra', 'papel', 'tijera'];


        const choiceComputer = choices[Math.floor(Math.random() * 3)];

        let message = '';
        if(choiceUser === choiceComputer){
            h1Result.innerText = 'Empate'
        }else if(
            (choiceUser === 'piedra' && choiceComputer === 'tijera') ||
            (choiceUser === 'papel' && choiceComputer === 'piedra') ||
            (choiceUser === 'tijera' && choiceComputer === 'papel')
        ){
            h1Result.innerText = 'Ganaste'
        }else{
            h1Result.innerText = 'Perdiste'
        }
        h3User.innerText = choiceUser;

}

btn.Play.addEventListener('click', play);