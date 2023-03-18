const form = document.getElementById('form'); 
form.addEventListener('submit', handleSubmit);

let status.document.getElementById('status');
let attempt.document.getElementById('attempt');
let result.document.getElementById('result');

const Guess = {
    max: 10,
    attemptsNumber: 0,
    numberDrawn: function RandomValue() {
        return Math.round(Math.random() * this.max);
    }
};

let numberDrawn = Guess.numberDrawn();

function handleSubmit(e) {

};

function playAgain() {
    document.getElementById('btnRestart').style.display = 'flex';
};

function restart() {
    document.location.reload(true);
};

function clear() {
    document.getElementById('kick').value = '';
};