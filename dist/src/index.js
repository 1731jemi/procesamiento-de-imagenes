import { ImageLocal } from "./ImageLocal.js";
import { ImageType } from "./ImageType.js";
import { MathImg } from "./MathImg.js";
import { Particle } from "./particle.js";
import { ParticleText } from "./particle.js";
import { CanvasLocal } from './canvasLocal.js';
import { ColorfulQuadrant, Bubble, Seaweed, Snowman, Snowstorm, ErrorMessage, TeleportationSquare, GalacticStar } from "./oproyecto.js";
var lienzo1;
var lienzo2;
var lienzo4;
var pantalla1;
var pantalla2;
var pantalla4;
/* Este evento controla la forma de abrir un archivo mediante el evento de arrastrar y soltar */
function handleDragOver(evt) {
    evt.stopPropagation();
    evt.preventDefault(); //que no se abra en otra ventana sola la imagen
    evt.dataTransfer.dropEffect = 'copy'; // Explicitly show this is a copy.
}
/** Variables que controla el canvas de la imagen, el primero
 * posteriormemte se volveran arreglos cuando ya controlemos las seis ventanas de nuestro frame
*/
lienzo1 = document.getElementById('img1');
pantalla1 = lienzo1.getContext("2d");
lienzo2 = document.getElementById('img2');
pantalla2 = lienzo2.getContext("2d");
lienzo4 = document.getElementById('img4');
pantalla4 = lienzo4.getContext("2d");
var dropZone = lienzo1; //document.getElementById('img1');
var imgLocal = new ImageLocal(pantalla1);
imgLocal.getImage().onload = imgLocal.onload;
var imgLocal4 = new ImageLocal(pantalla4);
imgLocal4.getImage().onload = imgLocal4.onload;
function convertirAGris(evt) {
    var imagenSal = new ImageType(pantalla1, imgLocal.getImage());
    imagenSal.imageArray2DtoData(pantalla2, MathImg.toGray(imagenSal));
}
function convertirANegativo(evt) {
    var imagenSal = new ImageType(pantalla1, imgLocal.getImage());
    imagenSal.imageArray2DtoData(pantalla2, MathImg.toNegative(imagenSal));
}
function convertirANegativoGrises(evt) {
    var imagenSal = new ImageType(pantalla1, imgLocal.getImage());
    imagenSal.imageArray2DtoData(pantalla2, MathImg.toNegativeGrises(imagenSal));
}
function convertirARojo(evt) {
    var imagenSal = new ImageType(pantalla1, imgLocal.getImage());
    imagenSal.imageArray2DtoData(pantalla2, MathImg.toRed(imagenSal));
}
function convertirAVerde(evt) {
    var imagenSal = new ImageType(pantalla1, imgLocal.getImage());
    imagenSal.imageArray2DtoData(pantalla2, MathImg.toGreen(imagenSal));
}
function convertirAAzul(evt) {
    var imagenSal = new ImageType(pantalla1, imgLocal.getImage());
    imagenSal.imageArray2DtoData(pantalla2, MathImg.toBlue(imagenSal));
}
//este codigo se agreo el 4 de abril de 2022
function convertirTricolor(evt) {
    var imagenSal = new ImageType(pantalla1, imgLocal.getImage());
    imagenSal.imageArray2DtoData(pantalla2, MathImg.toTricolor(imagenSal));
}
function convertirTricolorhorizontal(evt) {
    var imagenSal = new ImageType(pantalla1, imgLocal.getImage());
    imagenSal.imageArray2DtoData(pantalla2, MathImg.toTricolorhorizontal(imagenSal));
}
////////////hasta aqui
function correccionGamma(evt) {
    var args = prompt('Ingresa los factores de correccion Gamma, separados por coma');
    var factores = args.split(',').map(function (elem) { return parseFloat(elem); });
    var imagenSal = new ImageType(pantalla1, imgLocal.getImage());
    imagenSal.imageArray2DtoData(pantalla2, MathImg.correctionGamma(imagenSal, factores));
}
function umbralizado(evt) {
    var args = prompt('Ingresa el valor del umbral');
    var umbral = parseFloat(args);
    var imagenSal = new ImageType(pantalla1, imgLocal.getImage());
    imagenSal.imageArray2DtoData(pantalla2, MathImg.toUmbral(imagenSal, umbral));
}
function desfaseX(evt) {
    var args = prompt('Ingresa el valor del desfase en X');
    var des = parseFloat(args);
    var imagenSal = new ImageType(pantalla1, imgLocal.getImage());
    imagenSal.imageArray2DtoData(pantalla2, MathImg.toDesfaceX(imagenSal, des));
}
function desfaseY(evt) {
    var args = prompt('Ingresa el valor del desfase en Y');
    var desy = parseFloat(args);
    var imagenSal = new ImageType(pantalla1, imgLocal.getImage());
    imagenSal.imageArray2DtoData(pantalla2, MathImg.toDesfaceY(imagenSal, desy));
}
function desfaseD(evt) {
    var args = prompt('Ingresa el valor del desfase y angulo');
    var rangos = args.split(',').map(function (elem) { return parseFloat(elem); });
    var imagenSal = new ImageType(pantalla1, imgLocal.getImage());
    imagenSal.imageArray2DtoData(pantalla2, MathImg.toDesfaceD(imagenSal, rangos[0], rangos[1]));
}
function umbral2limites(evt) {
    var args = prompt('Ingresa el rango minimo y el maximo separado por comas');
    var rangos = args.split(',').map(function (elem) { return parseFloat(elem); });
    var imagenSal = new ImageType(pantalla1, imgLocal.getImage());
    imagenSal.imageArray2DtoData(pantalla2, MathImg.toUmbral2limites(imagenSal, rangos));
}
function changeBrightness(evt) {
    var factor = prompt("Ingresa un valor en el rango de 0-2, como un porcentaje");
    var imagenSal = new ImageType(pantalla1, imgLocal.getImage());
    imagenSal.imageArray2DtoData(pantalla2, MathImg.changeBrightness(imagenSal, parseFloat(factor)));
}
function cambioFtransferencia(evt) {
    var args = prompt('Ingresa los valores de la funcion de transferencia, separados por coma');
    var factores = args.split(',').map(function (elem) { return parseFloat(elem); });
    //console.log(factores, factores.length)
    var imagenSal = new ImageType(pantalla1, imgLocal.getImage());
    imagenSal.imageArray2DtoData(pantalla2, MathImg.cambioFTransferencia(imagenSal, factores));
}
function colorGradienteX(evt) {
    var args = prompt("Ingresa color de Inicio y final en formato r,g,b, separados por coma");
    var factores = args.split(',').map(function (elem) { return parseFloat(elem); });
    var imagenSal = new ImageType(pantalla1, imgLocal.getImage());
    imagenSal.imageArray2DtoData(pantalla2, MathImg.colorGradienteX(imagenSal, factores));
}
function colorGradienteY(evt) {
    var args = prompt("Ingresa color de Inicio y final en formato r,g,b, separados por coma");
    var factores = args.split(',').map(function (elem) { return parseFloat(elem); });
    var imagenSal = new ImageType(pantalla1, imgLocal.getImage());
    imagenSal.imageArray2DtoData(pantalla2, MathImg.colorGradientY(imagenSal, factores));
}
function opchangeContraste(evt) {
    var argss = prompt('Ingresa un valor entre el rango de -100 a 100');
    var valor = parseFloat(argss);
    var imagenSal = new ImageType(pantalla1, imgLocal.getImage());
    imagenSal.imageArray2DtoData(pantalla2, MathImg.changeContraste(imagenSal, valor));
}
function opgetPow(evt) {
    var argss = prompt('Ingresa un numero ( potencia )');
    var valor = parseFloat(argss);
    var imagenSal = new ImageType(pantalla1, imgLocal.getImage());
    imagenSal.imageArray2DtoDataWithResizing(pantalla2, MathImg.pow(imagenSal, valor));
}
function coseno(evt) {
    var imagenSal = new ImageType(pantalla1, imgLocal.getImage());
    imagenSal.imageArray2DtoDataWithResizing(pantalla2, MathImg.toCos(imagenSal));
}
function multiplicacion(evt) {
    var argss = prompt('Ingresa un numero real');
    var valor = parseFloat(argss);
    var imagenSal = new ImageType(pantalla1, imgLocal.getImage());
    imagenSal.imageArray2DtoDataWithResizing(pantalla2, MathImg.toMultiplication(imagenSal, valor));
}
function subtract(evt) {
    var argss = prompt('Ingresa un numero real');
    var restar = parseFloat(argss);
    var imagenSal = new ImageType(pantalla1, imgLocal.getImage());
    imagenSal.imageArray2DtoDataWithResizing(pantalla2, MathImg.toSubtract(imagenSal, restar));
}
function funcionSine(evt) {
    var imagenSal = new ImageType(pantalla1, imgLocal.getImage());
    imagenSal.imageArray2DtoDataWithResizing(pantalla2, MathImg.toSine(imagenSal));
}
function add(evt) {
    var argss = prompt('Ingresa un numero real');
    var sumar = parseFloat(argss);
    var imagenSal = new ImageType(pantalla1, imgLocal.getImage());
    imagenSal.imageArray2DtoData(pantalla2, MathImg.toAdd(imagenSal, sumar));
}
function sqrt(evt) {
    var imagenSal = new ImageType(pantalla1, imgLocal.getImage());
    imagenSal.imageArray2DtoDataWithResizing(pantalla2, MathImg.toSqrt(imagenSal));
}
function div(evt) {
    var argss = prompt('Ingresa un numero real');
    var dividir = parseFloat(argss);
    if (dividir === 0) {
        var argss = prompt('Ingresa un valor diferente de 0');
        var dividir = parseFloat(argss);
        var imagenSal = new ImageType(pantalla1, imgLocal.getImage());
        imagenSal.imageArray2DtoDataWithResizing(pantalla2, MathImg.toDividir(imagenSal, dividir));
    }
    else {
        var imagenSal = new ImageType(pantalla1, imgLocal.getImage());
        imagenSal.imageArray2DtoDataWithResizing(pantalla2, MathImg.toDividir(imagenSal, dividir));
    }
}
function tan(evt) {
    var imagenSal = new ImageType(pantalla1, imgLocal.getImage());
    imagenSal.imageArray2DtoDataWithResizing(pantalla2, MathImg.toTan(imagenSal));
}
function sumaImg(evt) {
    var imagenSal = new ImageType(pantalla1, imgLocal.getImage());
    var imagen2 = new ImageType(pantalla4, imgLocal4.getImage());
    imagenSal.imageArray2DtoData(pantalla2, MathImg.addImg(imagenSal, imagen2));
}
function marcaAguaCentro(evt) {
    var imagenSal = new ImageType(pantalla1, imgLocal.getImage());
    var imagen2 = new ImageType(pantalla4, imgLocal4.getImage());
    imagenSal.imageArray2DtoDataWithResizing(pantalla2, MathImg.marcaAguaCentro(imagenSal, imagen2, 1));
}
function marcaAguaArray(evt) {
    var argss = prompt('Ingresa porcentaje de ponderacion ');
    var porc = parseFloat(argss);
    var imagenSal = new ImageType(pantalla1, imgLocal.getImage());
    var imagen2 = new ImageType(pantalla4, imgLocal4.getImage());
    imagenSal.imageArray2DtoDataWithResizing(pantalla2, MathImg.marcaAguaArray(imagenSal, imagen2, porc));
}
//variables adicionales para el efecto rain
var ctx = pantalla2;
var w;
var h;
var numberOfParticles = 1000;
var particlesArray;
particlesArray = new Array(0);
var imagenSal;
function init() {
    //init
    var imagenSal = new ImageType(pantalla1, imgLocal.getImage());
    var tmp = MathImg.relativeBrightness(imagenSal);
    w = imagenSal.getWidth();
    h = imagenSal.getHeight();
    for (var i = 0; i < numberOfParticles; i++) {
        particlesArray.push(new Particle(w, h, ctx, tmp));
    }
}
function animate() {
    ctx.drawImage(imgLocal.getImage(), 0, 0, w, h);
    ctx.globalAlpha = 0.25;
    ctx.fillStyle = 'rgb(0,0,0)';
    ctx.fillRect(0, 0, w, h);
    for (var i = 0; i < particlesArray.length; i++) {
        particlesArray[i].update();
        particlesArray[i].draw();
    }
    requestAnimationFrame(animate);
}
function animate2() {
    ctx.globalAlpha = 0.25;
    ctx.fillStyle = 'rgb(0,0,0)';
    ctx.fillRect(0, 0, w, h);
    for (var i = 0; i < particlesArray.length; i++) {
        particlesArray[i].update();
        ctx.globalAlpha = particlesArray[i].getSpeed() * 0.5;
        particlesArray[i].draw();
    }
    requestAnimationFrame(animate2);
}
function rain(evt) {
    init();
    animate();
}
function rain2(evt) {
    init();
    animate2();
}
//codigo para efecto de particulas
var particleArray;
var mouse = {
    x: null,
    y: null,
    radius: 50
};
function textEfects(evt) {
    var args = prompt("Ingresa texto, tamaño de texto y coord x y y, separados por coma:");
    var factores = args.split(','); //.map(elem => parseInt(elem));
    pantalla1.font = 'bold  ' + factores[1] + 'px Verdana';
    //let cadena = 
    pantalla1.fillText(factores[0], parseInt(factores[2]), parseInt(factores[3]));
    imagenSal = new ImageType(pantalla1, null, 300, 300, true);
    initParticles();
    animateParticles();
}
function initParticles() {
    particleArray = [];
    var arrImage = imagenSal.getArrayImg();
    for (var i = 0; i < 300; i++) {
        for (var j = 0; j < 300; j++) {
            if (arrImage[0][i][j] > 128) {
                particleArray.push(new ParticleText(j, i, pantalla1));
            }
        }
    }
}
function animateParticles() {
    pantalla1.clearRect(0, 0, 300, 300);
    for (var i = 0; i < particleArray.length; i++) {
        particleArray[i].update(mouse);
        particleArray[i].draw();
    }
    requestAnimationFrame(animateParticles);
}
function handleMouse(event) {
    mouse.x = event.clientX;
    mouse.y = event.clientY;
}
// primera operacion: cuadrantes con color 
var colorfulQuadrantArray = [];
var numQuadrants = 4;
function initColorfulQuadrants() {
    var imageWidth = pantalla2.canvas.width;
    var imageHeight = pantalla2.canvas.height;
    var quadrantWidth = imageWidth / numQuadrants;
    var quadrantHeight = imageHeight / numQuadrants;
    for (var i = 0; i < numQuadrants; i++) {
        for (var j = 0; j < numQuadrants; j++) {
            var x = i * quadrantWidth;
            var y = j * quadrantHeight;
            colorfulQuadrantArray.push(new ColorfulQuadrant(x, y, quadrantWidth, quadrantHeight, ctx));
        }
    }
}
function animateColorfulQuadrants() {
    ctx.drawImage(imgLocal.getImage(), 0, 0, pantalla2.canvas.width, pantalla2.canvas.height);
    for (var i = 0; i < colorfulQuadrantArray.length; i++) {
        colorfulQuadrantArray[i].update();
        colorfulQuadrantArray[i].draw();
    }
    requestAnimationFrame(animateColorfulQuadrants);
}
function opCuadrantesColor() {
    initColorfulQuadrants();
    animateColorfulQuadrants();
}
//Efecto fondo marino
var seaweedArray = [];
var bubbleArray = [];
function initUnderwater() {
    for (var i = 0; i < 10; i++) {
        var x = Math.random() * pantalla2.canvas.width;
        var y = pantalla2.canvas.height;
        var height = Math.random() * 100 + 50;
        seaweedArray.push(new Seaweed(x, y, height, ctx));
    }
    // Crea burbujas en posiciones aleatorias
    for (var i = 0; i < 50; i++) {
        var x = Math.random() * pantalla2.canvas.width;
        var y = Math.random() * pantalla2.canvas.height;
        var radius = Math.random() * 10 + 5;
        bubbleArray.push(new Bubble(x, y, radius, ctx));
    }
    pantalla2.canvas.addEventListener('mousemove', handleMouseMove);
}
function handleMouseMove(event) {
    // Actualiza la posición de las burbujas según la posición del mouse
    for (var i = 0; i < bubbleArray.length; i++) {
        bubbleArray[i].updatePosition(event.clientX, event.clientY);
    }
}
function animateUnderwater() {
    pantalla2.clearRect(0, 0, pantalla2.canvas.width, pantalla2.canvas.height);
    pantalla2.drawImage(imgLocal.getImage(), 0, 0, pantalla2.canvas.width, pantalla2.canvas.height);
    for (var i = 0; i < seaweedArray.length; i++) {
        seaweedArray[i].draw();
    }
    for (var i = 0; i < bubbleArray.length; i++) {
        bubbleArray[i].update();
        bubbleArray[i].draw();
    }
    requestAnimationFrame(animateUnderwater);
}
function opFondoSubmarino() {
    initUnderwater();
    animateUnderwater();
}
// fecto snowman
var snowman;
function initSnowman() {
    snowman = new Snowman(pantalla2.canvas.width / 2, pantalla2.canvas.height / 2, ctx);
}
function animateSnowman() {
    pantalla2.clearRect(0, 0, pantalla2.canvas.width, pantalla2.canvas.height);
    pantalla2.drawImage(imgLocal.getImage(), 0, 0, pantalla2.canvas.width, pantalla2.canvas.height);
    snowman.draw();
    requestAnimationFrame(animateSnowman);
}
function moveSnowman(e) {
    snowman.x = e.clientX - pantalla2.canvas.getBoundingClientRect().left;
    snowman.y = e.clientY - pantalla2.canvas.getBoundingClientRect().top;
}
function opsnowman() {
    initSnowman();
    animateSnowman();
    pantalla2.canvas.addEventListener('mousemove', moveSnowman);
}
// snowman con rain 
var snowstorm;
function initSnowstorm() {
    snowman = new Snowman(pantalla2.canvas.width / 2, pantalla2.canvas.height / 2, ctx);
    snowstorm = new Snowstorm(snowman, ctx);
}
function animateSnowstorm() {
    pantalla2.clearRect(0, 0, pantalla2.canvas.width, pantalla2.canvas.height);
    pantalla2.drawImage(imgLocal.getImage(), 0, 0, pantalla2.canvas.width, pantalla2.canvas.height);
    snowstorm.update();
    snowstorm.draw();
    requestAnimationFrame(animateSnowstorm);
}
function moveSnowman1(e) {
    snowman.x = e.clientX - pantalla2.canvas.getBoundingClientRect().left;
    snowman.y = e.clientY - pantalla2.canvas.getBoundingClientRect().top;
}
function opsnowandtorment() {
    initSnowstorm();
    animateSnowstorm();
    pantalla2.canvas.addEventListener('mousemove', moveSnowman1);
}
//animacion de errores
var errorMessages = [];
function generateErrorMessage(text) {
    var x = pantalla2.canvas.width / 2;
    var y = pantalla2.canvas.height / 2;
    var width = Math.random() * 300 + 100; // Ancho aleatorio entre 100 y 400
    var height = Math.random() * 80 + 40; // Altura aleatoria entre 40 y 120
    errorMessages.push(new ErrorMessage(x, y, width, height, ctx, text));
}
function animateErrorMessages() {
    ctx.drawImage(imgLocal.getImage(), 0, 0, pantalla2.canvas.width, pantalla2.canvas.height);
    for (var i = 0; i < errorMessages.length; i++) {
        errorMessages[i].update();
        errorMessages[i].draw();
        if (errorMessages[i].y + errorMessages[i].height / 2 < 0) {
            errorMessages.splice(i, 1);
            i--;
        }
    }
    requestAnimationFrame(animateErrorMessages);
}
function operrores() {
    // Simula la generación de mensajes de error cada cierto tiempo
    setInterval(function () {
        var errorTexts = ['Error de sistema', 'Fallo en la aplicación', 'Windows ha detectado un problema'];
        var randomText = errorTexts[Math.floor(Math.random() * errorTexts.length)];
        generateErrorMessage(randomText);
    }, 500);
    animateErrorMessages();
}
// cuadrado cambiante
var teleportationSquare;
function initTeleportationSquare() {
    var colors = ['red', 'green', 'blue', 'yellow', 'purple']; // Puedes personalizar los colores
    teleportationSquare = new TeleportationSquare(50, 50, 30, ctx, colors);
}
function animateTeleportationSquare() {
    ctx.drawImage(imgLocal.getImage(), 0, 0, pantalla2.canvas.width, pantalla2.canvas.height);
    if (teleportationSquare) {
        teleportationSquare.draw();
        // Retraso de 500 milisegundos 
        setTimeout(function () {
            teleportationSquare.teleport();
            requestAnimationFrame(animateTeleportationSquare);
        }, 500);
    }
}
function opTeleportacionCuadrado() {
    initTeleportationSquare();
    animateTeleportationSquare();
}
// vortice de galaxia
var galacticStars = [];
function initGalacticStars() {
    var centerX = pantalla2.canvas.width / 2;
    var centerY = pantalla2.canvas.height / 2;
    for (var i = 0; i < 300; i++) {
        var angle = i * 0.7;
        var radius = i * 0.9;
        var x = centerX + radius * Math.cos(angle);
        var y = centerY + radius * Math.sin(angle);
        var size = Math.random() * 2 + 1;
        var color = getRandomColor();
        galacticStars.push(new GalacticStar(x, y, size, ctx, color));
    }
}
function animateGalacticStars() {
    ctx.clearRect(0, 0, pantalla2.canvas.width, pantalla2.canvas.height);
    // Dibuja la imagen original con una opacidad
    ctx.globalAlpha = 0.8;
    ctx.drawImage(imgLocal.getImage(), 0, 0, pantalla2.canvas.width, pantalla2.canvas.height);
    ctx.globalAlpha = 1; // Restaura la opacidad al valor normal
    for (var i = 0; i < galacticStars.length; i++) {
        galacticStars[i].move();
        galacticStars[i].draw();
    }
    requestAnimationFrame(animateGalacticStars);
}
function opViaLactea() {
    initGalacticStars();
    animateGalacticStars();
}
function getRandomColor() {
    // Genera un color hexadecimal aleatorio
    return '#' + Math.floor(Math.random() * 16777215).toString(16);
}
//seccion de histogramas  
function histogramas(evt) {
    var imagenSal = new ImageType(pantalla1, imgLocal.getImage());
    var canvas1 = lienzo2;
    var graphics1 = pantalla2;
    var canvas2 = lienzo4;
    var graphics2 = pantalla4;
    var hist = MathImg.hist(imagenSal);
    var miCanvas1 = new CanvasLocal(graphics1, canvas1, hist);
    miCanvas1.paint();
    var histAc = MathImg.histAcum(hist);
    var miCanvas2 = new CanvasLocal(graphics2, canvas2, histAc);
    miCanvas2.paint();
}
function ecualizado(evt) {
    var imagenSal = new ImageType(pantalla1, imgLocal.getImage());
    imagenSal.imageArray2DtoData(pantalla2, MathImg.ecualizar(imagenSal));
}
function erosionarImg(evt) {
    var imagenSal = new ImageType(pantalla1, imgLocal.getImage());
    imagenSal.imageArray2DtoData(pantalla2, MathImg.erosionar(imagenSal, true));
}
function dilatarImg(evt) {
    var imagenSal = new ImageType(pantalla1, imgLocal.getImage());
    imagenSal.imageArray2DtoData(pantalla2, MathImg.dilatar(imagenSal, true));
}
function aperturaImg(evt) {
    var imagenSal = new ImageType(pantalla1, imgLocal.getImage());
    imagenSal.imageArray2DtoData(pantalla2, MathImg.apertura(imagenSal, true));
}
function cierreImg(evt) {
    var imagenSal = new ImageType(pantalla1, imgLocal.getImage());
    imagenSal.imageArray2DtoData(pantalla2, MathImg.cierre(imagenSal, true));
}
function opchangeFalsoColor(evt) {
    var argss = prompt('Ingresa un valor de color Hue');
    var hue = parseFloat(argss);
    var imagenSal = new ImageType(pantalla1, imgLocal.getImage());
    imagenSal.imageArray2DtoData(pantalla2, MathImg.fromHSItoRGB(MathImg.falseColorByHue(MathImg.fromRGBtoHSI(imagenSal), hue, 210)));
}
function generarPulso(evt) {
    var imagenSal = new ImageType(pantalla1, imgLocal.getImage());
    imagenSal.imageArray2DtoData(pantalla2, MathImg.pulso(imgLocal.getImage().width, imgLocal.getImage().height));
}
function generarRuido(evt) {
    var imagenSal = new ImageType(pantalla1, imgLocal.getImage());
    imagenSal.imageArray2DtoData(pantalla2, MathImg.ruido(imgLocal.getImage().width, imgLocal.getImage().height));
}
function generarRampaX(evt) {
    var imagenSal = new ImageType(pantalla1, imgLocal.getImage());
    imagenSal.imageArray2DtoDataWithResizing(pantalla1, MathImg.rampaX(imgLocal.getImage().width, imgLocal.getImage().height));
}
function generarRampaY(evt) {
    var imagenSal = new ImageType(pantalla1, imgLocal.getImage());
    imagenSal.imageArray2DtoDataWithResizing(pantalla1, MathImg.rampaY(imgLocal.getImage().width, imgLocal.getImage().height));
}
function escalarImagen(evt) {
    var argss = prompt('Ingresa un factor de escala');
    var factor = parseFloat(argss);
    //var imagenSal: ImageType = new ImageType(pantalla1, imgLocal.getImage());
    var imagenSal = new ImageType(pantalla2, null, Math.floor(imgLocal.getImage().width * factor), Math.floor(imgLocal.getImage().height * factor));
    imagenSal.imageArray2DtoData(pantalla2, MathImg.escalar(imagenSal, factor));
}
function escalarImagen2(evt) {
    var argss = prompt('Ingresa un factor de escala');
    var factor = parseFloat(argss);
    pantalla2.drawImage(imgLocal.getImage(), 0, 0, Math.floor(imgLocal.getImage().width * factor), Math.floor(imgLocal.getImage().height * factor));
}
function rotarImagen(evt) {
    var argss = prompt('Ingresa un angulo de rotacion');
    var angulo = parseFloat(argss);
    var imagenSal = new ImageType(pantalla1, imgLocal.getImage());
    imagenSal.imageArray2DtoData(pantalla2, MathImg.rotar(imagenSal, angulo));
}
function rotarImagen2(evt) {
    var argss = prompt('Ingresa un angulo de rotacion');
    var angulo = parseFloat(argss);
    //pantalla2.drawImage(imgLocal.getImage(), 0,0)
    pantalla2.translate(Math.floor(imgLocal.getImage().width / 2), Math.floor(imgLocal.getImage().height / 2));
    pantalla2.rotate(angulo * Math.PI / 180);
    pantalla2.translate(-Math.floor(imgLocal.getImage().width / 2), -Math.floor(imgLocal.getImage().height / 2));
    pantalla2.drawImage(imgLocal.getImage(), 0, 0);
}
function shearingX(evt) {
    var argss = prompt('Ingresa un factor de shearing');
    var factor = parseFloat(argss);
    var imagenSal = new ImageType(pantalla1, imgLocal.getImage());
    imagenSal.imageArray2DtoData(pantalla2, MathImg.shearingX(imagenSal, factor));
}
function shearingY(evt) {
    var argss = prompt('Ingresa un factor de shearing');
    var factor = parseFloat(argss);
    var imagenSal = new ImageType(pantalla1, imgLocal.getImage());
    imagenSal.imageArray2DtoData(pantalla2, MathImg.shearingY(imagenSal, factor));
}
function tAfin(evt) {
    var argss = prompt('Ingresa 6 valores para t Afin, con x3<x1<x2 y y1<y2, y1<y3');
    var factores = argss.split(',').map(function (elem) { return parseInt(elem); });
    var imagenSal = new ImageType(pantalla1, imgLocal.getImage());
    imagenSal.imageArray2DtoData(pantalla2, MathImg.tAfin(imagenSal, factores));
}
lienzo1.addEventListener('mousemove', handleMouse);
lienzo1.addEventListener("mousemove", imgLocal.drawSmallImg);
document.getElementById('files').addEventListener('change', imgLocal.handleFileSelect, false);
document.getElementById('files2').addEventListener('change', imgLocal4.handleFileSelect, false);
dropZone.addEventListener('dragover', handleDragOver, false);
dropZone.addEventListener('drop', imgLocal.handleFileSelect, false);
// llamadas para funciones nuevas 
document.getElementById("op-cuadrantes").addEventListener('click', opCuadrantesColor, false);
document.getElementById("op-fondosubmarino").addEventListener('click', opFondoSubmarino, false);
document.getElementById("op-snowman").addEventListener('click', opsnowman, false);
document.getElementById("op-snowandtorment").addEventListener('click', opsnowandtorment, false);
document.getElementById("op-errores").addEventListener('click', operrores, false);
document.getElementById("op-Teleportacion").addEventListener('click', opTeleportacionCuadrado, false);
document.getElementById("op-vialactea").addEventListener('click', opViaLactea, false);
