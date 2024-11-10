

function puedeAvanzar(str) {
      if (str === 'verde') {
            return true;
      } else if (str === 'amarillo' || str === "rojo") {
            return false;

      } else {
            return 'Error: color de semáforo inválido'
      }
}
console.log(puedeAvanzar('verde') )    // true
console.log(puedeAvanzar('amarillo') ) // false
console.log(puedeAvanzar('rojo')  )    // false
console.log(puedeAvanzar('lila'))      // 'Error: color de semáforo inválido'