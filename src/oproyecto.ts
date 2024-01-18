export class ColorfulQuadrant {
    protected x: number;
    protected y: number;
    protected width: number;
    protected height: number;
    protected ctx: CanvasRenderingContext2D;
    protected color: string;
    protected speedX: number;
    protected speedY: number;
  
    constructor(x: number, y: number, width: number, height: number, ctx: CanvasRenderingContext2D) {
      this.x = x;
      this.y = y;
      this.width = width;
      this.height = height;
      this.ctx = ctx;
      this.color = getRandomColor();
      this.speedX = Math.random() * 2 - 1;
      this.speedY = Math.random() * 2 - 1;
    }
  
    public draw() {
      this.ctx.globalCompositeOperation = 'color';
      this.ctx.fillStyle = this.color;
      this.ctx.fillRect(this.x, this.y, this.width, this.height);
      this.ctx.globalCompositeOperation = 'source-over';
    }
  
    public update() {
      this.x += this.speedX;
      this.y += this.speedY;
  
      if (this.x + this.width > this.ctx.canvas.width || this.x < 0) {
        this.speedX *= -1;
      }
  
      if (this.y + this.height > this.ctx.canvas.height || this.y < 0) {
        this.speedY *= -1;
      }
    }
  }
  
  // Función para generar un color aleatorio en formato hexadecimal
  function getRandomColor(): string {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  export class Seaweed {
    protected x: number;
    protected y: number;
    protected height: number;
    protected ctx: CanvasRenderingContext2D;
    protected color: string;
  
    constructor(x: number, y: number, height: number, ctx: CanvasRenderingContext2D) {
      this.x = x;
      this.y = y;
      this.height = height;
      this.ctx = ctx;
      this.color = 'green';
    }
  
    public draw() {
      this.ctx.beginPath();
      this.ctx.moveTo(this.x, this.y);
      this.ctx.quadraticCurveTo(this.x + 10, this.y - this.height / 2, this.x, this.y - this.height);
      this.ctx.quadraticCurveTo(this.x - 10, this.y - this.height / 2, this.x, this.y);
      this.ctx.fillStyle = this.color;
      this.ctx.fill();
      this.ctx.closePath();
    }
  }
  
  // Clase Bubble
  export class Bubble {
    protected x: number;
    protected y: number;
    protected radius: number;
    protected ctx: CanvasRenderingContext2D;
    protected color: string;
    protected speedY: number;
  
    constructor(x: number, y: number, radius: number, ctx: CanvasRenderingContext2D) {
      this.x = x;
      this.y = y;
      this.radius = radius;
      this.ctx = ctx;
      this.color = 'white';
      this.speedY = Math.random() * 2 + 1; // Velocidad vertical aleatoria
    }
  
    public draw() {
      this.ctx.beginPath();
      this.ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
      this.ctx.fillStyle = this.color;
      this.ctx.fill();
      this.ctx.closePath();
    }
  
    public update() {
      this.y -= this.speedY;
  
      // Reinicia la posición si la burbuja se eleva fuera del lienzo
      if (this.y + this.radius < 0) {
        this.y = this.ctx.canvas.height + this.radius;
      }
    }
  
    public updatePosition(mouseX: number, mouseY: number) {
      const distanceX = mouseX - this.x;
      const distanceY = mouseY - this.y;
  
      const angle = Math.atan2(distanceY, distanceX);
  
      // Calcula la nueva posición en función del ángulo y la distancia al mouse
      const newX = this.x + Math.cos(angle) * this.speedY;
      const newY = this.y + Math.sin(angle) * this.speedY;
  
      this.x = newX;
      this.y = newY;
    }
  }

  export class Snowman {
    public x: number;
    public y: number;
    protected ctx: CanvasRenderingContext2D;
  
    constructor(x: number, y: number, ctx: CanvasRenderingContext2D) {
      this.x = x;
      this.y = y;
      this.ctx = ctx;
    }
  
    public draw() {
      this.drawSnowman();
      this.drawHat();
      this.drawFace();
    }
  
    private drawSnowman() {
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
    }
  
    private drawHat() {
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
    }
  
    private drawFace() {
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
    }

    public update() {
      // Lógica de actualización del hombre de nieve
      // Puedes agregar aquí cualquier lógica específica para actualizar el estado del hombre de nieve.
    }
  }

 export class Snowflake {
    protected x: number;
    protected y: number;
    protected radius: number;
    protected speedY: number;
    protected ctx: CanvasRenderingContext2D;
  
    constructor(x: number, y: number, radius: number, ctx: CanvasRenderingContext2D) {
      this.x = x;
      this.y = y;
      this.radius = radius;
      this.speedY = Math.random() * 2 + 1; // Velocidad vertical aleatoria
      this.ctx = ctx;
    }
  
    public draw() {
      this.ctx.beginPath();
      this.ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
      this.ctx.fillStyle = 'white';
      this.ctx.fill();
      this.ctx.closePath();
    }
  
    public update() {
      this.y += this.speedY;
  
      // Reinicia la posición si el copo de nieve se eleva fuera del lienzo
      if (this.y - this.radius > this.ctx.canvas.height) {
        this.y = -this.radius;
      }
    }
  }
  
  export class Snowstorm {
    protected snowman: Snowman;
    protected snowflakes: Snowflake[] = [];
    protected ctx: CanvasRenderingContext2D;
  
    constructor(snowman: Snowman, ctx: CanvasRenderingContext2D) {
      this.snowman = snowman;
      this.ctx = ctx;
  
      // Crear copos de nieve
      for (let i = 0; i < 100; i++) {
        let x = Math.random() * this.ctx.canvas.width;
        let y = Math.random() * this.ctx.canvas.height;
        let radius = Math.random() * 3 + 1;
        this.snowflakes.push(new Snowflake(x, y, radius, this.ctx));
      }
    }
  
    public draw() {
      // Dibujar hombre de nieve
      this.snowman.draw();
  
      // Dibujar copos de nieve
      for (let i = 0; i < this.snowflakes.length; i++) {
        this.snowflakes[i].draw();
      }
    }
  
    public update() {
      // Actualizar hombre de nieve
      this.snowman.update();
  
      // Actualizar copos de nieve
      for (let i = 0; i < this.snowflakes.length; i++) {
        this.snowflakes[i].update();
      }
    }
  }

  export class ErrorMessage {
    protected x: number;
    public y: number;
    protected width: number;
    public height: number;
    protected ctx: CanvasRenderingContext2D;
    protected color: string;
    protected text: string;
  
    constructor(x: number, y: number, width: number, height: number, ctx: CanvasRenderingContext2D, text: string) {
      this.x = x;
      this.y = y;
      this.width = width;
      this.height = height;
      this.ctx = ctx;
      this.color = 'red';
      this.text = text;
    }
  
    public draw() {
      this.ctx.fillStyle = this.color;
      this.ctx.fillRect(this.x - this.width / 2, this.y - this.height / 2, this.width, this.height);
      this.ctx.fillStyle = 'white';
      this.ctx.font = 'bold 12px Arial';
      this.ctx.fillText(this.text, this.x - this.width / 2 + 10, this.y - this.height / 2 + 20);
    }
  
    public update() {
      this.y -= 2; // Ajustar la velocidad de movimiento
    }
  }

  
  export class TeleportationSquare {
    protected x: number;
    protected y: number;
    protected size: number;
    protected ctx: CanvasRenderingContext2D;
    protected colors: string[];
    protected currentColorIndex: number;
  
    constructor(x: number, y: number, size: number, ctx: CanvasRenderingContext2D, colors: string[]) {
      this.x = x;
      this.y = y;
      this.size = size;
      this.ctx = ctx;
      this.colors = colors;
      this.currentColorIndex = 0;
    }
  
    public draw() {
      // Dibuja el cuadrado en el color actual
      this.ctx.fillStyle = this.colors[this.currentColorIndex];
      this.ctx.fillRect(this.x, this.y, this.size, this.size);
    }
  
    public teleport() {
      // Cambia al siguiente color en el array circularmente
      this.currentColorIndex = (this.currentColorIndex + 1) % this.colors.length;
  
      // Ubica el cuadrado en una posición aleatoria dentro del lienzo
      this.x = Math.random() * (this.ctx.canvas.width - this.size);
      this.y = Math.random() * (this.ctx.canvas.height - this.size);
    }
  }


  export class Star {
    protected x: number;
    protected y: number;
    protected size: number;
    protected ctx: CanvasRenderingContext2D;
    protected color: string;
  
    constructor(x: number, y: number, size: number, ctx: CanvasRenderingContext2D, color: string) {
      this.x = x;
      this.y = y;
      this.size = size;
      this.ctx = ctx;
      this.color = color;
    }
  
    public draw() {
      this.ctx.fillStyle = this.color;
      this.ctx.beginPath();
      this.ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      this.ctx.fill();
    }
  
    public move() {
      this.y += 1; // Ajusta la velocidad de movimiento vertical de las estrellas
      if (this.y > this.ctx.canvas.height) {
        this.y = 0; // Reinicia la posición si la estrella sale de la pantalla
      }
    }
  }

export class GalacticStar {
  protected x: number;
  protected y: number;
  protected size: number;
  protected ctx: CanvasRenderingContext2D;
  protected color: string;

  constructor(x: number, y: number, size: number, ctx: CanvasRenderingContext2D, color: string) {
    this.x = x;
    this.y = y;
    this.size = size;
    this.ctx = ctx;
    this.color = color;
  }

  public move() {
    // Ajusta la velocidad y patrón de movimiento para simular una espiral galáctica
    const angle = (this.x + this.y) * 0.02;
    const speed = 1;
    this.x += Math.cos(angle) * speed;
    this.y += Math.sin(angle) * speed;

    if (this.x < 0 || this.x > this.ctx.canvas.width || this.y < 0 || this.y > this.ctx.canvas.height) {
      
      this.x = Math.random() * this.ctx.canvas.width;
      this.y = Math.random() * this.ctx.canvas.height;
    }
  }

  public draw() {

    this.ctx.fillStyle = this.color;
    this.ctx.beginPath();
    this.ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    this.ctx.fill();
    this.ctx.closePath();
  }
}

export class BouncingBall {
  protected x: number;
  protected y: number;
  protected radius: number;
  protected ctx: CanvasRenderingContext2D;
  protected color: string;
  protected velocityX: number;
  protected velocityY: number;

  constructor(x: number, y: number, radius: number, ctx: CanvasRenderingContext2D) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.ctx = ctx;
    this.color = getRandomColor();
    this.velocityX = 2;
    this.velocityY = 2;
  }

  public update() {
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
  }

  public draw() {
    this.ctx.beginPath();
    this.ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    this.ctx.fillStyle = this.color;
    this.ctx.fill();
    this.ctx.closePath();
  }
}
