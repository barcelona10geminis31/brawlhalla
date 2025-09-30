// ui.js
const UI = {
  showMenu() {
    document.getElementById('menu-screen').classList.remove('hidden');
  },
  hideMenu() {
    document.getElementById('menu-screen').classList.add('hidden');
  },
  showPause() {
    document.getElementById('pause-screen').classList.remove('hidden');
  },
  hidePause() {
    document.getElementById('pause-screen').classList.add('hidden');
  },
  showGameOver() {
    document.getElementById('gameover-screen').classList.remove('hidden');
  },
  hideGameOver() {
    document.getElementById('gameover-screen').classList.add('hidden');
  },
  updateHUD(player1, player2) {
    document.getElementById('player1-life').innerText = `P1: ${player1.life}%`;
    document.getElementById('player2-life').innerText = `P2: ${player2.life}%`;
  }
};

window.addEventListener('load', () => {
  document.getElementById('btn-start').onclick = () => {
    UI.hideMenu();
    Game.start();
  };
  document.getElementById('btn-resume').onclick = () => {
    UI.hidePause();
    Game.resume();
  };
  document.getElementById('btn-restart').onclick = () => {
    UI.hideGameOver();
    Game.restart();
  };
});