const btns = document.querySelectorAll('button');
const selection = document.querySelector('h1');
const result = document.querySelector('.h1');
const weapons = ['rock','paper','scissors'];
const hp = document.querySelector('#hp');
let pscore = 0;
let cpscore = 0;
let player;
let computer;
let lives = 10;
function lifes() {
   /* for (let i = 0; i < lives; i++) {
     //   hp.innerHTML += '<img style="width: 30px;" src="heart.png" alt="" />'
    }*/
}
btns.forEach((button) => {
    button.addEventListener('click', () => {
        selection.textContent = button.id;
        hp.textContent = lives;
        play();
    })
})

function computerPlay() {
    return weapons[~~(Math.random() * weapons.length)];
}
function play(computer, player) {
    computer = computerPlay();
    player = 'rock';

    if (player === computer) {
        result.textContent = 'tie! computer: ' + cpscore + ' player: ' + pscore;
    } else if (
        player === 'rock' && computer === 'scissors' ||
        player === 'paper' && computer === 'rock' || 
        player === 'scissors' && computer === 'paper') {
        pscore = ++pscore;
        result.textContent = 'you win! computer: ' + cpscore + ' player: ' + pscore;
    } else {
        cpscore = ++cpscore;
        lives = --lives;
        result.textContent = 'you lose! computer: ' + cpscore + ' player: ' + pscore;
    }

}
