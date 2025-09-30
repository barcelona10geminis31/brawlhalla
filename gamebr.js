// game.js
const Game = {
  canvas: null,
  ctx: null,
  lastTime: 0,
  player1: null,
  player2: null,
  platforms: [],
  running: false,

  init() {
    this.canvas = document.getElementById('gameCanvas');
    this.ctx = this.canvas.getContext('2d');

    // plataformas de ejemplo
    this.platforms = [
      { x: 0, y: 550, width: 800, height: 50 },
      { x: 150, y: 400, width: 200, height: 20 },
      { x: 450, y: 300, width: 200, height: 20 }
    ];

    this.player1 = new Player(100, 100, 'player1');
    this.player2 = new Player(600, 100, 'player2');

    UI.showMenu();
  },

  start() {
    this.running = true;
    this.lastTime = performance.now();
    this.loop();
    Assets.sounds['bgm'].loop = true;
    Assets.sounds['bgm'].play();
  },

  resume() {
    this.running = true;
    this.lastTime = performance.now();
    this.loop();
    Assets.sounds['bgm'].play();
  },

  restart() {
    // reiniciar posiciones y vida
    this.player1 = new Player(100, 100, 'player1');
    this.player2 = new Player(600, 100, 'player2');
    UI.hideGameOver();
    this.start();
  },

  loop() {
    if (!this.running) {
      return;
    }
    const now = performance.now();
    const deltaTime = (now - this.lastTime) / 1000; // en segundos
    this.lastTime = now;

    this.update(deltaTime);
    this.draw();

    requestAnimationFrame(() => this.loop());
  },

  update(dt) {
    this.player1.update(dt, this.platforms);
    this.player2.update(dt, this.platforms);

    // ejemplo simple de “game over”: si alguno baja demasiado
    if (this.player1.y > 600 || this.player2.y > 600) {
      this.running = false;
      UI.showGameOver();
      Assets.sounds['bgm'].pause();
    }

    UI.updateHUD(this.player1, this.player2);
  },

  draw() {
    // dibujar fondo
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.ctx.drawImage(Assets.images['background'], 0, 0, this.canvas.width, this.canvas.height);

    // dibujar plataformas
    this.ctx.fillStyle = '#444';
    for (let plat of this.platforms) {
      this.ctx.fillRect(plat.x, plat.y, plat.width, plat.height);
    }

    // dibujar jugadores
    this.player1.draw(this.ctx);
    this.player2.draw(this.ctx);
  }
};

// Cargar assets y luego inicializar
loadAllAssets().then(() => {
  Game.init();
}).catch(err => {
  console.error("Error cargando assets:", err);
});
