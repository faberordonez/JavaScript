var imagenes = [];
imagenes["cauchin"] = "Image/vaca.png";
imagenes["pokacho"] = "image/pollo.png";
imagenes["tocinauro"] = "image/cerdo.png";

var cauchinn = new Pakiman("cauchin", 100, 30);/*forma simple*/

var coleccion = [];//se crea array para remplazar la declarción anterior
coleccion.push(new Pakiman("cauchin", 100, 30));
coleccion.push(new Pakiman("pokacho", 80, 50));//new crea instancia de la clase pakiman
coleccion.push(new Pakiman("tocinauro", 120, 40));

cauchinn.mostrar();/**funcion de la clase | forma simple*/

for(var item in coleccion){
    coleccion[item].mostrar();
}
//Nota:Forma de hacer lo mismo con ECMASCRIPT 2015 (of)
// for (var item of coleccion) {/*Of muestra directamente el objeto,no el indice*/
//    item.mostrar();
// }