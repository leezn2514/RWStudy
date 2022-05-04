var canvas = document.getElementById('gameScene');
var context = canvas.getContext('2d');

class Player {
    constructor(positionX, positionY, radius, color) {
        this.positionX = positionX;
        this.positionY = positionY;
        this.radius = radius;
        this.color = color; // 초기화
    }

    DrawPlayer() {
        context.beginPath();
        context.arc(this.positionX, this.positionY, this.radius, 0, Math.PI * 2, false); // Math.PI = 3.14
        context.fillStyle = this.color;
        context.fill();
    }
}

class Enemy {
    constructor(width, height, color) {
        this.width = width;
        this.height = height;
        this.color = color; // 초기화
    }
}

canvas.addEventListener('mousedown', function (e) {
    var x = e.offsetX;
    var y = e.offsetY; 
    
    context.beginPath();
    context.fillRect(x, y, 20, 20);
});

var char_Player = new Player(320, 240, 20, 'pink');
//var char_Enemy = new Enemy(40, 40, 'aliceblue');
char_Player.DrawPlayer();