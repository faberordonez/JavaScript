var canvasVillaPlatzi = document.getElementById("villaPlatzi");
var papel = canvasVillaPlatzi.getContext("2d");

var vaca={
    url: "image/vaca.png",
    cargaOK: false
}

var fondo= {
    url:"image/tile.png",
    cargaOK:false
}

fondo.imagen = new Image(); /* definicion del objeto */
fondo.imagen.src = fondo.url;
fondo.imagen.addEventListener("load", cargarFondo);/*Carga la imagen*/

vaca.imagen=new Image();/*Add objeto imagen al objeto literal vaca */
vaca.imagen.src=vaca.url;
vaca.imagen.addEventListener("load", cargarVaca);

cerdo=new Image();
cerdo.src="image/cerdo.png";
cerdo.addEventListener("load", cargarCerdo);

function cargarFondo(){
    fondo.cargaOK = true;
    dibujar();
}
function cargarVaca(){
    vaca.cargaOK = true;
    dibujar();
}
function cargarCerdo(){

}

function dibujar(){
    if(fondo.cargaOK){/* Valida que fondo  haya cargado(true) */
        papel.drawImage(fondo.imagen,0,0);/* imagen y cordenadas */
    }
    if(vaca.cargaOK){
        var cantidad = getAleatorio(0,60);
        console.log(cantidad);
        for (var v=0; v<cantidad; v++){

            var x=getAleatorio(0,5);
            var y= getAleatorio(0,10);
            x=x*80;/*80 es el Tamaño imagen*/
            y=y*40;
            papel.drawImage(vaca.imagen,x,y);
        }
    }

}

function dibujarVaca(){
    papel.drawImage(vaca,10,10);/* imagen y cordenadas */
}
function dibujarCerdo(){
    papel.drawImage(cerdo,10,300);/* imagen y cordenadas */
}

function getAleatorio(numMin, numMax) {
    var num = Math.floor(Math.random()*(numMax - numMin+1)+ numMin);
    return num;
}