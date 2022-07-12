const nombre = prompt ("Ingrese su nombre")
let precio = 0
alert ("Bienvenido, " + nombre  + "!. ¿Que estas buscando?")

let calzado = prompt ("Ingrese tipo de calzado (1 = bota, 2 = borcego)")
while (calzado != 1 && calzado != 2) {
    alert ("El calzado no existe")
}
calzado = prompt ("Ingrese tipo de calzado (1 = bota, 2 = borcego)")
if (calzado == 1){
    precio = 8650
}else {
    precio = 9863
}
alert ("El precio del calzado es $" + precio)
let dinero = prompt ("¿Con cuanto abonas?")
while (dinero < precio){
    alert ("El pago es insuficiente")
    dinero = prompt ("¿Con cuanto abonas?")
}

let vuelto = dinero - precio
alert ("Su pago es de $" + precio + " y su cambio es $" + vuelto + " ¡GRACIAS POR SU COMPRA!")

console.log(vuelto(precio - dinero))
function vuelto(parametro1, parametro2){
    return parametro1 - parametro2
}


