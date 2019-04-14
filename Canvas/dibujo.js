var texto=document.getElementById("texto_lineas");
var boton=document.getElementById("botoncito");
var d = document.getElementById("dibujito");
var lienzo = d.getContext("2d");

for(i=0;i<30;i++){//Boque Azul For
    yIni=0;
    xFin=10;
    yIni=10*i;
    xFin=10*i;
    dibujarLinea("blue",0,yIni,xFin,300);
     //console.log("Linea"+i); //probar ciclo
}

i=0;//bloque Rojo While
xFin=300;
while(i<30){
    yIni=0;
    yIni=i*10;
    xFin=xFin-10;
    dibujarLinea("red",300,yIni,xFin,300);
    i++;
}

i=0;//Bloque verde Do-While
xIni=0;
yFin=300;
do{
    xIni=i*10;
    yFin=yFin-10;
    dibujarLinea("green",xIni,0,0,yFin);
   i++;
}while(i<30);


function dibujarLinea(color, xInicial, yInicial, xFinal, yFinal ) {
    lienzo.beginPath();//Inicia el trazo
    lienzo.strokeStyle = color;//Color
    lienzo.moveTo(xInicial,yInicial);//Punto inicial
    lienzo.lineTo(xFinal,yFinal);//punto final
    lienzo.stroke();//asigna el color de arriba
    lienzo.closePath();//cierra el camino
} 
