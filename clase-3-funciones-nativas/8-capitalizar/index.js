function capitalizar(str){
      return str.charAt(0).toUpperCase()+ str.slice(1);
}

console.log(capitalizar('lovelace')); // 'Lovelace'
console.log(capitalizar('había una vez...')); // 'Había una vez...'


//str.charAt(0): Obtiene el primer carácter del string.
//toUpperCase(): Convierte ese primer carácter a mayúscula.
//str.slice(1): Obtiene el resto de la cadena desde el índice 1 hasta el final, manteniendo su formato original.