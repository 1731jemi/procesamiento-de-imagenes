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
    function Snowman(x, y, ctx) {
        this.x = x;
        this.y = y;
        this.ctx = ctx;
    }
    Snowman.prototype.draw = function () {
        this.drawSnowman();
        this.drawHat();
        this.drawFace();
    };
    Snowman.prototype.drawSnowman = function () {
        // Cuerpo
        this.ctx.beginPath();
        this.ctx.arc(this.x, this.y, 30, 0, Math.PI * 2);
        this.ctx.fillStyle = 'white';
        this.ctx.fill();
        this.ctx.closePath();
        // Cabeza
        this.ctx.beginPath();
        this.ctx.arc(this.x, this.y - 40, 20, 0, Math.PI * 2);
        this.ctx.fillStyle = 'white';
        this.ctx.fill();
        this.ctx.closePath();
    };
    Snowman.prototype.drawHat = function () {
        // Sombrero
        this.ctx.beginPath();
        this.ctx.rect(this.x - 25, this.y - 75, 50, 40);
        this.ctx.fillStyle = 'black';
        this.ctx.fill();
        this.ctx.closePath();
        // Banda del sombrero
        this.ctx.beginPath();
        this.ctx.rect(this.x - 25, this.y - 75, 50, 10);
        this.ctx.fillStyle = 'red';
        this.ctx.fill();
        this.ctx.closePath();
    };
    Snowman.prototype.drawFace = function () {
        // Ojos
        this.ctx.beginPath();
        this.ctx.arc(this.x - 8, this.y - 45, 2, 0, Math.PI * 2);
        this.ctx.fillStyle = 'red'; // Color de los ojos
        this.ctx.fill();
        this.ctx.closePath();
        this.ctx.beginPath();
        this.ctx.arc(this.x + 8, this.y - 45, 2, 0, Math.PI * 2);
        this.ctx.fillStyle = 'red'; // Color de los ojos
        this.ctx.fill();
        this.ctx.closePath();
        // Nariz
        this.ctx.beginPath();
        this.ctx.moveTo(this.x - 2, this.y - 40);
        this.ctx.lineTo(this.x + 2, this.y - 40);
        this.ctx.lineTo(this.x, this.y - 35);
        this.ctx.fillStyle = 'orange'; // Color de la nariz
        this.ctx.fill();
        this.ctx.closePath();
        // Boca
        this.ctx.beginPath();
        this.ctx.arc(this.x, this.y - 35, 5, 0, Math.PI, false);
        this.ctx.fillStyle = 'black'; // Color de la boca
        this.ctx.fill();
        this.ctx.closePath();
    };
    Snowman.prototype.update = function () {
        // Lógica de actualización del hombre de nieve
        // Puedes agregar aquí cualquier lógica específica para actualizar el estado del hombre de nieve.
    };
    return Snowman;
}());
export { Snowman };
var Snowflake = /** @class */ (function () {
    function Snowflake(x, y, radius, ctx) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.speedY = Math.random() * 2 + 1; // Velocidad vertical aleatoria
        this.ctx = ctx;
    }
    Snowflake.prototype.draw = function () {
        this.ctx.beginPath();
        this.ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        this.ctx.fillStyle = 'white';
        this.ctx.fill();
        this.ctx.closePath();
    };
    Snowflake.prototype.update = function () {
        this.y += this.speedY;
        // Reinicia la posición si el copo de nieve se eleva fuera del lienzo
        if (this.y - this.radius > this.ctx.canvas.height) {
            this.y = -this.radius;
        }
    };
    return Snowflake;
}());
export { Snowflake };
var Snowstorm = /** @class */ (function () {
    function Snowstorm(snowman, ctx) {
        this.snowflakes = [];
        this.snowman = snowman;
        this.ctx = ctx;
        // Crear copos de nieve
        for (var i = 0; i < 100; i++) {
            var x = Math.random() * this.ctx.canvas.width;
            var y = Math.random() * this.ctx.canvas.height;
            var radius = Math.random() * 3 + 1;
            this.snowflakes.push(new Snowflake(x, y, radius, this.ctx));
        }
    }
    Snowstorm.prototype.draw = function () {
        // Dibujar hombre de nieve
        this.snowman.draw();
        // Dibujar copos de nieve
        for (var i = 0; i < this.snowflakes.length; i++) {
            this.snowflakes[i].draw();
        }
    };
    Snowstorm.prototype.update = function () {
        // Actualizar hombre de nieve
        this.snowman.update();
        // Actualizar copos de nieve
        for (var i = 0; i < this.snowflakes.length; i++) {
            this.snowflakes[i].update();
        }
    };
    return Snowstorm;
}());
export { Snowstorm };
var ErrorMessage = /** @class */ (function () {
    function ErrorMessage(x, y, width, height, ctx, text) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.ctx = ctx;
        this.color = 'red';
        this.text = text;
    }
    ErrorMessage.prototype.draw = function () {
        this.ctx.fillStyle = this.color;
        this.ctx.fillRect(this.x - this.width / 2, this.y - this.height / 2, this.width, this.height);
        this.ctx.fillStyle = 'white';
        this.ctx.font = 'bold 12px Arial';
        this.ctx.fillText(this.text, this.x - this.width / 2 + 10, this.y - this.height / 2 + 20);
    };
    ErrorMessage.prototype.update = function () {
        this.y -= 2; // Ajustar la velocidad de movimiento
    };
    return ErrorMessage;
}());
export { ErrorMessage };
var TeleportationSquare = /** @class */ (function () {
    function TeleportationSquare(x, y, size, ctx, colors) {
        this.x = x;
        this.y = y;
        this.size = size;
        this.ctx = ctx;
        this.colors = colors;
        this.currentColorIndex = 0;
    }
    TeleportationSquare.prototype.draw = function () {
        // Dibuja el cuadrado en el color actual
        this.ctx.fillStyle = this.colors[this.currentColorIndex];
        this.ctx.fillRect(this.x, this.y, this.size, this.size);
    };
    TeleportationSquare.prototype.teleport = function () {
        // Cambia al siguiente color en el array circularmente
        this.currentColorIndex = (this.currentColorIndex + 1) % this.colors.length;
        // Ubica el cuadrado en una posición aleatoria dentro del lienzo
        this.x = Math.random() * (this.ctx.canvas.width - this.size);
        this.y = Math.random() * (this.ctx.canvas.height - this.size);
    };
    return TeleportationSquare;
}());
export { TeleportationSquare };
var Star = /** @class */ (function () {
    function Star(x, y, size, ctx, color) {
        this.x = x;
        this.y = y;
        this.size = size;
        this.ctx = ctx;
        this.color = color;
    }
    Star.prototype.draw = function () {
        this.ctx.fillStyle = this.color;
        this.ctx.beginPath();
        this.ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        this.ctx.fill();
    };
    Star.prototype.move = function () {
        this.y += 1; // Ajusta la velocidad de movimiento vertical de las estrellas
        if (this.y > this.ctx.canvas.height) {
            this.y = 0; // Reinicia la posición si la estrella sale de la pantalla
        }
    };
    return Star;
}());
export { Star };
var GalacticStar = /** @class */ (function () {
    function GalacticStar(x, y, size, ctx, color) {
        this.x = x;
        this.y = y;
        this.size = size;
        this.ctx = ctx;
        this.color = color;
    }
    GalacticStar.prototype.move = function () {
        // Ajusta la velocidad y patrón de movimiento para simular una espiral galáctica
        var angle = (this.x + this.y) * 0.02;
        var speed = 1;
        this.x += Math.cos(angle) * speed;
        this.y += Math.sin(angle) * speed;
        if (this.x < 0 || this.x > this.ctx.canvas.width || this.y < 0 || this.y > this.ctx.canvas.height) {
            this.x = Math.random() * this.ctx.canvas.width;
            this.y = Math.random() * this.ctx.canvas.height;
        }
    };
    GalacticStar.prototype.draw = function () {
        this.ctx.fillStyle = this.color;
        this.ctx.beginPath();
        this.ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        this.ctx.fill();
        this.ctx.closePath();
    };
    return GalacticStar;
}());
export { GalacticStar };
var BouncingBall = /** @class */ (function () {
    function BouncingBall(x, y, radius, ctx) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.ctx = ctx;
        this.color = getRandomColor();
        this.velocityX = 2;
        this.velocityY = 2;
    }
    BouncingBall.prototype.update = function () {
        this.x += this.velocityX;
        this.y += this.velocityY;
        // Rebote en los bordes
        if (this.x + this.radius > this.ctx.canvas.width || this.x - this.radius < 0) {
            this.velocityX *= -1;
            this.color = getRandomColor();
        }
        if (this.y + this.radius > this.ctx.canvas.height || this.y - this.radius < 0) {
            this.velocityY *= -1;
            this.color = getRandomColor();
        }
    };
    BouncingBall.prototype.draw = function () {
        this.ctx.beginPath();
        this.ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        this.ctx.fillStyle = this.color;
        this.ctx.fill();
        this.ctx.closePath();
    };
    return BouncingBall;
}());
export { BouncingBall };
