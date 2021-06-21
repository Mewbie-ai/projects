const rock = document.querySelector('.rock').addEventListener('click', (e) => {
    console.log(e);
});
const weapons = ['rock','paper','scissors'];
let pscore = 0;
let cpscore = 0;
let computer;
let player;

function computerPlay() {
    return weapons[~~(Math.random() * weapons.length)];
}
function play(computer, player) {
    computer = computerPlay();
    if (player === computer) {
        return('tie');
    } else if (
        player === 'rock' && computer === 'scissors' ||
        player === 'paper' && computer === 'rock' || 
        player === 'scissors' && computer === 'paper') {
        pscore = ++pscore;
        if (pscore === 3){
        return('you win! ' + 'computer: ' + cpscore + 'player: ' + pscore);
        }
    } else {
        cpscore = ++cpscore;
        return('you lose! ' + ' computer: ' + cpscore + ' player: ' + pscore);
    }
}
