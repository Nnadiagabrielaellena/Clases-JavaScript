let producto1 = prompt('ingrese cantidad que quiere comprar de producto1');1
let producto2 = prompt('ingrese cantidad que quiere comprar de producto2');2
let producto3 = prompt('ingrese cantidad que quiere comprar de producto3');3

let precioProducto1= 200
let precioProducto2= 300
let precioProducto3= 400
let valorTotalCompra =( producto1 * precioProducto1)+(producto2 *precioProducto2)+(producto3*precioProducto3) //200+600+1200=2000

alert(`el valor total de la compra es ${valorTotalCompra}`)

 let CantCuotas = prompt('en cuantas cuota lo desea realizar?')//2
let valorDeCuota = valorTotalCompra/CantCuotas;//1000

alert(`el monto total de su compra es ${valorTotalCompra} y lo hara en ${CantCuotas} cuotas de ${valorDeCuota} cada una`)
