function esAnioNuevo(fecha){
      const numSeparados = fecha.split("/");
      return numSeparados[0]==='01' && numSeparados[1]==='01';

      
}

console.log(esAnioNuevo('03/05/2015')) // false
console.log(esAnioNuevo('22/01/1987')) // false
console.log(esAnioNuevo('01/01/2020')) // true