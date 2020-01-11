tagCanvas=document.getElementById("canvas");
lienzo=tagCanvas.getContext("2d");
var tagColor = document.getElementById("color");
var tagGrosor = document.getElementById("grosor");
var tagLimpiar=document.getElementById("limpiar");//Tag Limpiar Canvas
tagLimpiar.addEventListener("click",limpiarCanvas);//Evento Click a la escucha

document.addEventListener("keyup", dibujarTeclado);/*Detecta movimiento de la Tecla */

/**Eventos Mouse */
tagCanvas.addEventListener("mousedown", activarLapiz);/**down */
tagCanvas.addEventListener("mousemove", trazarLinea);
tagCanvas.addEventListener("mouseup",desactivarLapiz);
var lapiz= false;

function activarLapiz(){
    lapiz=true;
}
function desactivarLapiz(){
    lapiz=false;
}

function trazarLinea(evento){
    corX=evento.clientX-9;/**Cordenadas mouse */
    corY=evento.clientY-153;

    if(lapiz == true){
        dibujarLinea(tagColor.value,corX,corY,corX-tagGrosor.value,corY-tagGrosor.value);
    }else{
        console.log("hola soy lapiz y valgo-->"+lapiz)
    }
}

var xInicio=150;
var yInicio=150;

function dibujarLinea(color, xInicial, yInicial, xFinal, yFinal) {
    lienzo.beginPath();//Inicia el trazo
    lienzo.strokeStyle = color;//Color
    lienzo.lineWidth = tagGrosor.value;
    lienzo.moveTo(xInicial, yInicial);//Punto inicial
    lienzo.lineTo(xFinal, yFinal);//punto final
    lienzo.stroke();//asigna el color de arriba
    lienzo.closePath();//cierra el camino
    tagGrosor.blur();/*Quitar foco  a la etiqueta*/
}

function dibujarTeclado(evento){//EVENTO->Trae Todos los detalles del evento
    valMoviento=10;
    var colorUser=tagColor.value;
    var teclas = {
                LEFT:37,//variable en mayuscula generalmente, no cambia de valor
                UP:38,
                RIGHT:39,
                DOWN:40
    };

    switch(evento.keyCode ){  /*if(evento.keyCode == teclas.LEFT){console.log("IZQDA");}*/
        case teclas.LEFT:
            dibujarLinea(colorUser,xInicio,yInicio,xInicio-valMoviento,yInicio);
            xInicio=xInicio-valMoviento;
        break;
        case teclas.UP:
            dibujarLinea(colorUser,xInicio,yInicio,xInicio,yInicio-valMoviento);
            yInicio=yInicio-valMoviento;
        break;
        case teclas.RIGHT:
            dibujarLinea(colorUser,xInicio,yInicio,xInicio+valMoviento,yInicio);
            xInicio=xInicio+valMoviento
        break;
        case teclas.DOWN:
            dibujarLinea(colorUser,xInicio,yInicio,xInicio,yInicio+valMoviento);
            yInicio=yInicio+valMoviento;
        break;
        default:
            console.log("Otra");       
        break;
    }
}

function limpiarCanvas(){
    lienzo.clearRect(0, 0, tagCanvas.width, tagCanvas.height);
}