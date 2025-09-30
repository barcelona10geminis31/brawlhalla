// input.js
const Keys = {};

window.addEventListener('keydown', (e) => {
  Keys[e.key] = true;
});

window.addEventListener('keyup', (e) => {
  Keys[e.key] = false;
});
