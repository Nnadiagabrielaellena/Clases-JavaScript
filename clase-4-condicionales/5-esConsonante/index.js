
function esConsonante(letra){
      letra= letra.toLowerCase();
      
      return letra >= 'a' && letra <='z' && !'aeiou'.includes(letra);
}
console.log(esConsonante('a')); // false
console.log(esConsonante('n')); // true