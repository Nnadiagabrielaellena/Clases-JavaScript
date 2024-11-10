function esValida(contrasenia){
      return contrasenia.length >= 8
}
console.log(esValida('contraseniaMuySegura'));
console.log(esValida('abc123'))