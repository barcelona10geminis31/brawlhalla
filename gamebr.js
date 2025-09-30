// game.js

// Configuración del lienzo y contexto
const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

// Cargar sonidos
const jumpSound = new Audio('assets/sounds/jump.mp3');
const punchSound = new Audio('assets/sounds/punch.mp3');
const backgroundMusic = new Audio('assets/sounds/background-music.mp3');
backgroundMusic.loop = true;
backgroundMusic.play();

// Jugadores
let player1 = new Player(100, 500, 'red', 'player1.png');
let player2 = new Player(600, 500, 'blue', 'player2.png');

// Actualización del juego
function update() {
    ctx.clearRect(0, 0, canvas.width, canvas.height); // Limpiar el canvas

    // Actualizar jugadores
    player1.update();
    player2.update();

    // Verificar colisiones o condiciones de "game over"
    checkGameOver();

    // Dibujar jugadores
    player1.draw(ctx);
    player2.draw(ctx);

    requestAnimationFrame(update); // Animación continua
}

function checkGameOver() {
    if (player1.y > canvas.height || player2.y > canvas.height) {
        document.getElementById('game-over').style.display = 'block';
        backgroundMusic.pause();
    }
}

// Reiniciar juego
function resetGame() {
    document.getElementById('game-over').style.display = 'none';
    player1.reset(100, 500);
    player2.reset(600, 500);
    backgroundMusic.play();
    update();
}

// Iniciar el juego
update();
