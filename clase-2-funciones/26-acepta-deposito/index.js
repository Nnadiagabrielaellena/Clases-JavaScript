function aceptaDeposito(monto){
      return monto % 10===0 
}
console.log(aceptaDeposito(440)) // true
console.log(aceptaDeposito(123)) // false
console.log(aceptaDeposito(500.50)) // false
console.log(aceptaDeposito(1000)) // true

