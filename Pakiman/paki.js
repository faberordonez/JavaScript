class Pakiman {

    constructor(name, v, a) {
        this.imagen = new Image();
        this.nombre = name;
        this.tipo = "tierra";
        this.vida = v;
        this.imagen.src = imagenes[this.nombre];
        this.ataque = a;
    }

    hablar() {
        alert(this.nombre);
    }
    mostrar() {
        document.body.appendChild(this.imagen);
        document.write("<p><h2>");
        document.write(this.nombre+"</h2>");
        document.write("Ataque : "+this.ataque);
        document.write("<br>Vida : "+this.vida);
        document.write("<p><hr>");
    }
}