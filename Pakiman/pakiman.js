class Pakiman {

    constructor(name,v,a) {
        this.nombre = name;
        this.tipo = "tierra";
        this.vida = v;
        this.ataque = a;
    }
}

var cauchin = new Pakiman("cauchin",100,30);
var pokacho = new Pakiman("pokacho",80,50);
var tocinauro = new Pakiman("tocinauro",120,40);
console.log(cauchin,pokacho,tocinauro);