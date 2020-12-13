var tagValor = document.getElementById("valor");
var tagResultado = document.getElementById("resultado");
var dineroDisponible = 0;
var entregar = [];
var caja = [];
caja.push(new Billete(100000, 2));
caja.push(new Billete(50000, 2));
caja.push(new Billete(20000, 2));
caja.push(new Billete(10000, 2));
caja.push(new Billete(5000, 2));

window.addEventListener("load", disponible());

function disponible() {
    var tagDineroDisponible = document.getElementById("dineroDisponible");

    for (var item of caja) {
        dineroDisponible = dineroDisponible + (item.valor * item.cant);
    }
    tagDineroDisponible.innerHTML = "<strong>Saldo Disponible :</strong>" + dineroDisponible;
    dineroDisponible = 0;
}

function contarBilletes() {
    var dineroSolicitado = tagValor.value;
    tagResultado.innerHTML = "El valor a Retirar es " + dineroSolicitado;

    if (dineroSolicitado > 0) {

        console.log("Tenemos");

        for (var item of caja) {//Recorre Caja disponible
            console.log(item.valor + "=>" + item.cant + " | " + (item.valor * item.cant))

            var cantBilletes = Math.floor(dineroSolicitado / item.valor);// Determina Cantidad billetes del valor recorrido

            if (item.cant > cantBilletes) {
                item.cant = item.cant - cantBilletes;
                entregar.push(new Billete(item.valor, cantBilletes));
            } else {
                cantBilletes = item.cant;
                item.cant = 0;
                entregar.push(new Billete(item.valor, cantBilletes));
                
            }
            var dineroSolicitado = dineroSolicitado - (cantBilletes * item.valor);// Saldo restante
        }

        if (dineroSolicitado > 0) {
            alert("Fondos Insuficientes o cantidad errada");
        }  mostrarBilletes();
    } else {
        alert("Ingrese un valor mayor que cero");
    }
    disponible();
}


function mostrarBilletes() {
    console.log("Quedan");

    for (item of caja) {
        console.log(item.valor + "=>" + item.cant + " | " + (item.valor * item.cant));
    }

    console.log("Entregan");

    for (item of entregar) {
        console.log(item.valor + "=>" + item.cant + " | " + (item.valor * item.cant));

        if (item.cant > 0) {
            for(i=0; i<item.cant; i++){
                item.mostrar();//Intancia la funcion de la clase
            }
        }

    }
}