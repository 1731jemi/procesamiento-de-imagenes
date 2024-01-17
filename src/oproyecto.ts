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