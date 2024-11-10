function estaEnRango(valor,minimo,maximo){
      return( valor >=minimo && valor<= maximo);
}

console.log(estaEnRango(3, 1, 10));   // true
console.log(estaEnRango(1, 1, 10) )  // true
console.log(estaEnRango(10, 1, 10) ) // true
console.log(estaEnRango(12, 1, 10) ) // false
console.log(estaEnRango(-3, 1, 10))  // false
