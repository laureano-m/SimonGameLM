var patron = [];

var title = document.getElementById('game-title');
var level = document.getElementById('level');
var score = document.getElementById('score');

var start = document.getElementById('start');

var red = document.getElementById('red');
var green = document.getElementById('green');
var blue = document.getElementById('blue');
var yellow = document.getElementById('yellow');

start.addEventListener('click', startGame);

function startGame() {
    patron = [];
    numLevel = 0;
    level.innerText = 'Nivel ' + numLevel;
    score.innerText = 'Puntos: 0';
}

function newLevel() {
    setTimeout( () => {
        numLevel = numLevel + 1;
        level.innerText = 'Nivel ' + numLevel;
    }, 500)
}