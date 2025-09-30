// player.js
class Player {
    constructor(x, y, color, sprite) {
        this.x = x;
        this.y = y;
        this.width = 50;
        this.height = 50;
        this.color = color;
        this.sprite = new Image();
        this.sprite.src = `assets/images/${sprite}`;
        this.dx = 0;
        this.dy = 0;
        this.speed = 5;
        this.jumpHeight = -15;
    }

    update() {
        // Lógica de control y movimiento
        if (keys['a']) this.dx = -this.speed;
        else if (keys['d']) this.dx = this.speed;
        else this.dx = 0;

        if (keys['w'] && this.y === 500) {
            this.dy = this.jumpHeight; // Saltar
            jumpSound.play();
        }

        this.dy += 0.5; // Gravedad

        this.x += this.dx;
        this.y += this.dy;

        // Límites de la pantalla
        if (this.x < 0) this.x = 0;
        if (this.x > canvas.width - this.width) this.x = canvas.width - this.width;
        if (this.y > 500) this.y = 500; // Suelo
    }

    draw(ctx) {
        ctx.drawImage(this.sprite, this.x, this.y, this.width, this.height);
    }

    reset(x, y) {
        this.x = x;
        this.y = y;
        this.dx = 0;
        this.dy = 0;
    }
}
