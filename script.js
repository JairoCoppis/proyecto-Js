
// Proyecto Final 1-1


alert("Bienvenid@ a la tienda!")
    

let cantidad = parseInt(prompt("Si luego de ver la lista le interesa comprar en cantidad por favor seleccione la cantidad a comprar y luego el equipo, caso contrario solo presione aceptar "))
console.log(cantidad)
let resultado = 0
let precioSam = 285000
let precioiPhone = 160000



let opcion = " "

const celulares = [

    samsung = {

       nombre: "Samsung s22 ultra",
       precio: "285.000",
       caracteristicas: "108MP/40MP - Memoria expandible, etc",
       colores: "Carbon y Bronce"},
    
    iPhone = {

       nombre: "iPhone XR",
       precio: "160.000",
       caracteristicas: "Pantalla liquid Retina true tone IPS. - 64GB hasta 256GB. - Chip A12 - 12MP, etc.",
       colores: "Negro, Blanco, amarillo, coral, etc."},

    nothingPhone = {

       nombre: "Nothing phone",
       precio: "No hay precio en Argentina",
       caracteristicas: "Tiras led blancas con interfaz Glyph, OLED 120Hz, USBC, etc.",
       colores: "Blanco y Negro (Ambos semitrasnparentes)"
    }
]


do {
    
switch (opcion) {

    case 1:
        console.log(celulares[0])
        console.log(celulares[1])
        console.log(celulares[2])
        break;
    
    case 2: 
    alert("Gracias por comprar 1 unidad del equipo Samsung S22 Ultra a $285.000") //Samsung S22 Ultra
    console.log(celulares[0])
    break;

    case 3:
        alert("Gracias por comprar 1 unidad del equipo iPhone XR a $160.000") //iPhone XR
        console.log(celulares[1])
    break;

    case 4: 
    alert("Aun no poseemos precio de lanzamiento, para mas info consulta nuestras historias en instagram") //NothingPhone
    console.log(celulares[2])

    case 5: 
   
    console.log("Gracias por comprar los equipos Samsung s22 Ultra, el precio total es: ", precioSam * cantidad, "pesos Argentinos"  )
  
    break;

    case 6: 
    
    console.log("Gracias por comprar los equipos apple iPhone XR, el precio total es: ", precioiPhone * cantidad, "pesos Argentinos" )

    break;

    default:
        break;
}


    
opcion = prompt("Continue interactuando con la Lista presionando cualquier tecla")
console.log("----------------")
console.log("Ingrese opcion 1 para ver los celulares")
console.log("Ingrese opcion 2 para Comprar Samsung s22 ultra")
console.log("Ingrese opcion 3 para Comprar iPhone XR")
console.log("Ingrese opcion 4 para Comprar NothingPhone")
console.log("------------------")
console.log("Ingrese opcion 5 para comprar equipos Samsung s22 Ultra en cantidad")
console.log("Ingrese opcion 6 para comprar equipos apple iPhone XR en cantidad")
console.log("------------------")
console.log("INGRESE OPCION 7 PARA SALIR") 
opcion = parseInt(prompt("Ingrese la opcion elegida o presione 7 para salir"))
} while (opcion !=7)
alert("Fin del Programa, refresque la pagina para reiniciar la tienda.")
console.log("Finalizo el programa");









// ------------------------------------------------------------------------------------------------------------

//TP Arrays.
//Lista ServicioSocial

//Nombre - Apellido - Numero de panteon - Fecha de defuncion - Panteon


/* let listaSepelio = [
    {ID:"A1", nombre:"Abel", apellido:"Arias", Defuncion:"20/3/20", Panteon:"1"},
    {ID:"B1", nombre:"Boris", apellido:"Berselino", Defuncion:"28/04/21", Panteon:"2"},
    {ID:"C1", nombre:"Claudio", apellido:"Caseres", Defuncion: "21/05/22", Panteon:"3"}
    
]

console.log(listaSepelio.length)

listaSepelio.forEach(function(nombre, apellido, Defuncion, Panteon){
    console.log(nombre, apellido, Defuncion, Panteon); 
})
*/




// --------------------------------------------------------------------------------------------------------


// Calculadora del Dolar.

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

