function obtenerPrimeraOracion(str){
      const stringHastaPunto= srt.indexOf('.');
     return str.slice(0,stringHastaPunto.lenght);
}

console.log(obtenerPrimeraOracion('A mí no me preguntes, sólo soy una oración')) // 'A mí no me preguntes, sólo soy una oración'
console.log(obtenerPrimeraOracion('Tengo varias oraciones. Esta es la segunda. Y esta es la tercera.')) // 'Tengo varias oracione

