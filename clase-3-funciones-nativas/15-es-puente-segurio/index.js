function esPuenteSeguro(puente){
      return ! puente.includes(' ')
}
console.log(esPuenteSeguro('### ##'));  // false (hay espacios)
console.log(esPuenteSeguro('##### ####')); // false (hay espacios)
console.log(esPuenteSeguro('########'));  // true (no hay espacios)