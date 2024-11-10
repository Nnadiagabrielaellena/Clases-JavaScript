function esUltimoCaracter(palabra,caracter){
      return palabra[ palabra.length - 1] === caracter
}
console.log(esUltimoCaracter('lovelace', 'e')) // true
console.log(esUltimoCaracter('lovelace', 'f')) // false