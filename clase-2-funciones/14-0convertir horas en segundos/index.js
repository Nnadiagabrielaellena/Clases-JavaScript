function convertirHorasEnSegundos(horas){
      const segundos= horas*3600 ;
      return `${horas} horas son ${segundos} segundos`
}

console.log(convertirHorasEnSegundos(1));
console.log(convertirHorasEnSegundos(3));
console.log(convertirHorasEnSegundos(45));