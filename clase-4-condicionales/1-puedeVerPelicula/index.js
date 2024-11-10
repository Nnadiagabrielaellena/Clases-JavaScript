function puedeVerPelicula(edad,tieneAutorizacion){
  return(  edad >= 15 || tieneAutorizacion )
}
            


console.log(puedeVerPelicula(12, false)) // false
console.log(puedeVerPelicula(12, true))  // true
console.log(puedeVerPelicula(16, false)) // true
console.log(puedeVerPelicula(18, true))  // true
