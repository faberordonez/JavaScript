class Billete {
    constructor(v, c) {
        this.imagen = new Image();
        this.valor = v;
        this.cant = c;
        this.imagen.src = "files/" + this.valor / 1000 + ".jpg";
    }

    mostrar(tag){
        document.body.appendChild(this.imagen);
/*         document.write(this.cant + "Billetes");
        document.write("<br> : ");
        document.write("<hr>"); */
    }
}