var patron = [];

var title = document.getElementById('game-title');
var level = document.getElementById('level');
var score = document.getElementById('score');

var red = document.getElementById('red');
var green = document.getElementById('green');
var blue = document.getElementById('blue');
var yellow = document.getElementById('yellow');

document.addEventListener('start', startGame);

function startGame() {
    console.log("startGame")
    //newLevel();
}

function newLevel() {
    setTimeout( () => {
        numLevel = numLevel + 1;
        level.innerText = 'Nivel ' + numLevel;
    }, 500)
}