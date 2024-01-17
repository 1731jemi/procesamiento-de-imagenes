var ColorfulQuadrant = /** @class */ (function () {
    function ColorfulQuadrant(x, y, width, height, ctx) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.ctx = ctx;
        this.color = getRandomColor();
        this.speedX = Math.random() * 2 - 1;
        this.speedY = Math.random() * 2 - 1;
    }
    ColorfulQuadrant.prototype.draw = function () {
        this.ctx.globalCompositeOperation = 'color';
        this.ctx.fillStyle = this.color;
        this.ctx.fillRect(this.x, this.y, this.width, this.height);
        this.ctx.globalCompositeOperation = 'source-over';
    };
    ColorfulQuadrant.prototype.update = function () {
        this.x += this.speedX;
        this.y += this.speedY;
        if (this.x + this.width > this.ctx.canvas.width || this.x < 0) {
            this.speedX *= -1;
        }
        if (this.y + this.height > this.ctx.canvas.height || this.y < 0) {
            this.speedY *= -1;
        }
    };
    return ColorfulQuadrant;
}());
export { ColorfulQuadrant };
// Función para generar un color aleatorio en formato hexadecimal
function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
var Seaweed = /** @class */ (function () {
    function Seaweed(x, y, height, ctx) {
        this.x = x;
        this.y = y;
        this.height = height;
        this.ctx = ctx;
        this.color = 'green';
    }
    Seaweed.prototype.draw = function () {
        this.ctx.beginPath();
        this.ctx.moveTo(this.x, this.y);
        this.ctx.quadraticCurveTo(this.x + 10, this.y - this.height / 2, this.x, this.y - this.height);
        this.ctx.quadraticCurveTo(this.x - 10, this.y - this.height / 2, this.x, this.y);
        this.ctx.fillStyle = this.color;
        this.ctx.fill();
        this.ctx.closePath();
    };
    return Seaweed;
}());
export { Seaweed };
// Clase Bubble
var Bubble = /** @class */ (function () {
    function Bubble(x, y, radius, ctx) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.ctx = ctx;
        this.color = 'white';
        this.speedY = Math.random() * 2 + 1; // Velocidad vertical aleatoria
    }
    Bubble.prototype.draw = function () {
        this.ctx.beginPath();
        this.ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        this.ctx.fillStyle = this.color;
        this.ctx.fill();
        this.ctx.closePath();
    };
    Bubble.prototype.update = function () {
        this.y -= this.speedY;
        // Reinicia la posición si la burbuja se eleva fuera del lienzo
        if (this.y + this.radius < 0) {
            this.y = this.ctx.canvas.height + this.radius;
        }
    };
    Bubble.prototype.updatePosition = function (mouseX, mouseY) {
        var distanceX = mouseX - this.x;
        var distanceY = mouseY - this.y;
        var angle = Math.atan2(distanceY, distanceX);
        // Calcula la nueva posición en función del ángulo y la distancia al mouse
        var newX = this.x + Math.cos(angle) * this.speedY;
        var newY = this.y + Math.sin(angle) * this.speedY;
        this.x = newX;
        this.y = newY;
    };
    return Bubble;
}());
export { Bubble };
var Snowman = /** @class */ (function () {
    function Snowman(x, y, headRadius, bodyRadius, baseRadius, ctx) {
        this.x = x;
        this.y = y;
        this.headRadius = headRadius;
        this.bodyRadius = bodyRadius;
        this.baseRadius = baseRadius;
        this.ctx = ctx;
    }
    Snowman.prototype.draw = function () {
        // Dibuja la cabeza
        this.ctx.beginPath();
        this.ctx.arc(this.x, this.y - this.headRadius - this.bodyRadius - this.baseRadius, this.headRadius, 0, Math.PI * 2);
        this.ctx.fillStyle = 'white';
        this.ctx.fill();
        this.ctx.closePath();
        // Dibuja el cuerpo
        this.ctx.beginPath();
        this.ctx.arc(this.x, this.y - this.bodyRadius - this.baseRadius, this.bodyRadius, 0, Math.PI * 2);
        this.ctx.fillStyle = 'white';
        this.ctx.fill();
        this.ctx.closePath();
        // Dibuja la base
        this.ctx.beginPath();
        this.ctx.arc(this.x, this.y - this.baseRadius, this.baseRadius, 0, Math.PI * 2);
        this.ctx.fillStyle = 'white';
        this.ctx.fill();
        this.ctx.closePath();
    };
    Snowman.prototype.updatePosition = function (mouseX, mouseY) {
        this.x = mouseX;
        this.y = mouseY;
    };
    Snowman.prototype.checkCollision = function (mouseX, mouseY) {
        var distance = Math.sqrt((mouseX - this.x) * 2 + (mouseY - this.y) * 2);
        return distance < this.headRadius + this.bodyRadius + this.baseRadius;
    };
    return Snowman;
}());
export { Snowman };
