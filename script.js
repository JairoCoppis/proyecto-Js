
//TP Arrays.
//Lista ServicioSocial

//Nombre - Apellido - Numero de panteon - Fecha de defuncion - Panteon


let listaSepelio = [
    {ID:"A1", nombre:"Abel", apellido:"Arias", Defuncion:"20/3/20", Panteon:"1"},
    {ID:"B1", nombre:"Boris", apellido:"Berselino", Defuncion:"28/04/21", Panteon:"2"},
    {ID:"C1", nombre:"Claudio", apellido:"Caseres", Defuncion: "21/05/22", Panteon:"3"}
    
]

console.log(listaSepelio.length)

listaSepelio.forEach(function(nombre, apellido, Defuncion, Panteon){
    console.log(nombre, apellido, Defuncion, Panteon); 
})






// Calculadora del Dolar

/* alert ("Bienvenid@ a la calculadora del dolar")
let dolarOficialBnaCompra = parseInt(prompt("Ingrese monto de la compra de dolar BNA: "))
let dolarOficialBnaVenta = parseInt(prompt("Ingrese monto de la venta del dolar BNA: "))
let dolarBlueVenta = parseInt(prompt("Ingrese monto de la venta del dolar blue: "))
let dolarBlueCompra = parseInt(prompt("Ingrese monto de la compra del dolar blue: "))
let impuestoPais = (1 + (65/100))
let opcion = " "

do {
    
switch (opcion) {

    case 1:
        console.log("Valor dolar oficial + impuesto pais/ganancias:  ", dolarOficialBnaVenta * impuestoPais)
        
        break;
    
    case 2: 
        console.log("Diferencia a repartir de compra/venta arbolito: ", (dolarBlueVenta + dolarBlueCompra) / 2)

    break;

    case 3:
        console.log("Ganancia de la venta", (((dolarBlueVenta + dolarBlueCompra))/2) - (dolarOficialBnaVenta * 1.65))

    default:
        break;
}

opcion = prompt("Ingrese a la calculadora presionando cualquier tecla")
    console.log("----------------")
    console.log("Ingrese opcion 1 para ver el costo final de la compra del dolar BNA")
    console.log("Ingrese opcion 2 para ver la diferencia entre compra/venta arbolito")
    console.log("Ingrese opcion 3 para ganancia de venta entre compra oficial y venta blue")
    console.log("----------------")
    console.log("Venta Dolar oficial BNA: "+dolarOficialBnaVenta)
    console.log("Compra Dolar oficial BNA "+dolarOficialBnaCompra)
    console.log("Venta Dolar Blue: "+dolarBlueVenta)
    console.log("Compra Dolar Blue: "+dolarBlueCompra)
    console.log("------------------")
    console.log("INGRESE OPCION 4 PARA SALIR") 

opcion = parseInt(prompt("Ingrese la opcion elegida o presione 4 para salir"))
} while (opcion != 4)
console.log("Fin Programa, refresque la pagina para reiniciar");  */

