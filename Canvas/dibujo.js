var tagCanvas = document.getElementById("dibujo");//Captura etiqueta HTML
var lienzo = tagCanvas.getContext("2d");

var tagNumLineas = document.getElementById("numLineasUser");//Captura Tag Num Lineas
var tagColor = document.getElementById("color");
var tagBoton = document.getElementById("boton");
tagBoton.addEventListener("click", dibujarEstrella);//Pone la funcion a la escucha

tagLimpiar=document.getElementById("limpiar");//Tag Limpiar Canvas
tagLimpiar.addEventListener("click",limpiarCanvas);//Evento Click a la escuchas

function dibujarLinea(color, xInicial, yInicial, xFinal, yFinal) {
    lienzo.beginPath();//Inicia el trazo
    lienzo.strokeStyle = color;//Color
    lienzo.moveTo(xInicial, yInicial);//Punto inicial
    lienzo.lineTo(xFinal, yFinal);//punto final
    lienzo.stroke();//asigna el color de arriba
    lienzo.closePath();//cierra el camino
}

function dibujarEstrella() {
    var colorUser=tagColor.value;
    var anchoCanvas=tagCanvas.width;
    numLineas = tagNumLineas.value;
    inc = (anchoCanvas / numLineas) / 2;

    yi = 0; xf = 150;//Superior Izqda
    for (i = 0; i < numLineas; i++) {
        xi = 150;
        yf = 150;
        dibujarLinea(colorUser, xi, yi, xf, yf);
        yi = yi + inc;
        xf = xf - inc;
    }

    yi = 150; xf = 300;//superior Dcha
    for (i = 0; i < numLineas; i++) {
        xi = 150;
        yf = 150;
        dibujarLinea(colorUser, xi, yi, xf, yf);
        yi = yi - inc;
        xf = xf - inc;
    }
    xi = 150; yf = 300;//inferior dcha
    for (i = 0; i < numLineas; i++) {
        yi = 150;
        xf = 150;
        dibujarLinea(colorUser, xi, yi, xf, yf);
        xi = xi + inc;
        yf = yf - inc;
    }

    xi = 0; yf = 150;//inferior Izda
    for (i = 0; i < numLineas; i++) {
        yi = 150;
        xf = 150;
        dibujarLinea(colorUser, xi, yi, xf, yf);
        xi = xi + inc;
        yf = yf + inc;
    }

}
function limpiarCanvas(){
    lienzo.clearRect(0, 0, tagCanvas.width, tagCanvas.height);
}