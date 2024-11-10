function obtenerDuracionEnSegundos(duracion){
      const separarHoraMinuto= duracion.split(':').map(Number);
      const horasporSegundos = separarHoraMinuto[0]*60;
      return horasporSegundos + separarHoraMinuto[1];
      
}
console.log(obtenerDuracionEnSegundos('00:33'))// devuelve 33 segundos.
console.log(obtenerDuracionEnSegundos('01:05'))// devuelve 65 segundos.
console.log(obtenerDuracionEnSegundos('10:42'))// devuelve 642 segundos.
