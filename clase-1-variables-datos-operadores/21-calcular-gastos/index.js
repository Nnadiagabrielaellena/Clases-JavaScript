let dinero=prompt('ingreseque dinero tiene disponible')//25
let aguas = prompt("cuanto tiene por pagar para aguas")//5
let muni = prompt("cuanto tiene por pagar para muni")//5
let rentas = prompt("cuanto tiene por pagar para rentas")//5

let dineroRestante = dinero - aguas - muni - rentas //10

alert(`los servicios a pagar son aguas ,muni y rentas y el dinero restante que le quedaria seria ${dineroRestante}`)