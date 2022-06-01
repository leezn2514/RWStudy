var canvas = document.getElementById('game');
var context = canvas.getContext('2d');

class GameManager {
    
}

class GameObject {
    constructor() {
        this.OnStart();
        this.OnUpdate();
        this.OnDraw();
    }
    OnStart() {}
    OnUpdate() {}
    OnDraw(g_x,g_y,g_radius,g_color)
    {
        this.g_x = g_x;
        this.g_y = g_y;
        this.g_radius = g_radius;
        this.g_color = g_color;

        context.beginPath();
        context.arc(this.g_x, this.g_y, this.g_radius,0,2*Math.PI);
        context.fillStyle = this.g_color;
        context.fill();
        context.closePath();
    }
    OnCollisionEnter(obj) {}
    Destroy(name) {}
    Attack() {}
}

class player {
    constructor() {
        var gm = new GameObject();
        gm.OnDraw(300,100,20,'blue');
    }
}

class bullet {
    constructor(b_x, b_y) {
        this.b_x = b_x;
        this.b_y = b_y;
        var gm = new GameObject();
        gm.OnDraw(b_x, b_y, 5, 5,'pink');
    } 
}

var char_player = new player();
var bullets = [];

canvas.onclick = function(event) {
    let clickpos_x = event.clientX - context.canvas.offsetLeft;
    let clickpos_y = event.clientY - context.canvas.offsetTop;

    let bulletsAry = [];
    for (var i = 0; i < 100; i++) {
        bulletsAry.push(new bullet(clickpos_x,clickpos_y));  
        clickpos_x += (clickpos_x - 300) / 60;
        clickpos_y += (clickpos_y - 100) / 60;
    }
};


