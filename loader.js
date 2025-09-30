// loader.js
const Assets = {
  images: {},
  sounds: {}
};

function loadImage(key, src) {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.src = src;
    img.onload = () => {
      Assets.images[key] = img;
      resolve(img);
    };
    img.onerror = reject;
  });
}

function loadSound(key, src) {
  return new Promise((resolve, reject) => {
    const audio = new Audio();
    audio.src = src;
    audio.oncanplaythrough = () => {
      Assets.sounds[key] = audio;
      resolve(audio);
    };
    audio.onerror = reject;
  });
}

function loadAllAssets() {
  const promises = [];
  // imágenes
  promises.push(loadImage('player1', 'assets/images/spritesheet_player1.png'));
  promises.push(loadImage('player2', 'assets/images/spritesheet_player2.png'));
  promises.push(loadImage('background', 'assets/images/background.png'));
  promises.push(loadImage('tileset', 'assets/images/tileset.png'));
  // sonidos
  promises.push(loadSound('jump', 'assets/sounds/jump.wav'));
  promises.push(loadSound('punch', 'assets/sounds/punch.wav'));
  promises.push(loadSound('bgm', 'assets/sounds/background_music.mp3'));

  return Promise.all(promises);
}