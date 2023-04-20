
alert("Ingrese la opcion del producto que desea llevar, para salir ingrese el 0")
let seleccionProductos = parseInt(prompt("1-JBL PARTYBOX 310 $2600000  2-TELEVISOR SAMSUNG UHD 55PULGADAS $4500000  3-SAMSUNG GALAXY A33 $1400000  4-NEVECON LG INVERTER $6700000  5-IPHONE 14 PRO MAX $6000000  6-LAVASECADORA CARGA FRONTAL LG $7500000  7-COMPUTADOR PORTATIL ASUS 1000GB SSD, 6GB RAM, INTEL CORE I9 $8000000"));
let seleccionCantidad;
let total = 0;

const cantidad = (cant, precio) => {
    return cant * precio;
}

while (seleccionProductos != 0){
    switch(seleccionProductos) {
        case 1: 
        seleccionCantidad = parseInt(prompt("El producto seleccionado es el parlante JBL PARTYBOX 310, indique la cantidad correspondiente"));
        total += cantidad(seleccionCantidad, 2600000);
        break;

        case 2: 
        seleccionCantidad = parseInt(prompt("El producto seleccionado es el TELEVISOR SAMSUNG UHD 55PULGADAS, indique la cantidad correspondiente"));
        total += cantidad(seleccionCantidad, 4500000);
        break;
        
        case 3: 
        seleccionCantidad = parseInt(prompt("El producto seleccionado es el telefono celular SAMSUNG GALAXY A33, indique la cantidad correspondiente"));
        total += cantidad(seleccionCantidad, 1400000);
        break;

        case 4: 
        seleccionCantidad = parseInt(prompt("El producto seleccionado es el NEVECON LG INVERTER, indique la cantidad correspondiente"));
        total += cantidad(seleccionCantidad, 6700000);
        break;

        case 5: 
        seleccionCantidad = parseInt(prompt("El producto seleccionado es el IPHONE 14 PRO MAX, indique la cantidad correspondiente"));
        total += cantidad(seleccionCantidad, 6000000);
        break;

        case 6: 
        seleccionCantidad = parseInt(prompt("El producto seleccionado es la LAVASECADORA CARGA FRONTAL LG, indique la cantidad correspondiente"));
        total += cantidad(seleccionCantidad, 7500000);
        break;

        case 7: 
        seleccionCantidad = parseInt(prompt("El producto seleccionado COMPUTADOR PORTATIL ASUS 1000GB SSD, 6GB RAM, INTEL CORE I9"));
        total += cantidad(seleccionCantidad, 8000000);
        break;

        default:
            break;
    }

    seleccionProductos = parseInt(prompt("1-JBL PARTYBOX 310 $2600000  2-TELEVISOR SAMSUNG UHD 55PULGADAS $4500000  3-SAMSUNG GALAXY A33 $1400000  4-NEVECON LG INVERTER $6700000  5-IPHONE 14 PRO MAX $6000000  6-LAVASECADORA CARGA FRONTAL LG $7500000  7-COMPUTADOR PORTATIL ASUS 1000GB SSD, 6GB RAM, INTEL CORE I9 $8000000  0:SALIR DE ESTA VENTANA"));
}


alert(`El total de la compra es de: $${total}`);

const envio = () => {
    if (total >= 4000000) {
        alert("El envio es gratuito")
    }else{
        total += 20000
        alert(`El costo de envio es de 20000, el total es: $${total}`);
    }
}
envio();


const mediosDePago = () => {
    let metodo = prompt("Ingrese el medio de pago: tarjeta o efectivo")
    if(metodo == "tarjeta") {
        total *= 1
        alert(`El valor total a pagar con tarjeta es: $${total}`);
    }else if(metodo == "efectivo"){
        total -= 20000 
        alert(`Tienes un descuento de 20000, el total es: $${total}`);
    }
}
mediosDePago();










