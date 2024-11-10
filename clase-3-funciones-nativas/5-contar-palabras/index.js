function contarPalabras (str){
   const palabras= str.split(/\s+/);
   return palabras.length;

}
console.log(contarPalabras('javascript'));
console.log(contarPalabras('ada lovelace')),
console.log(contarPalabras('si debuggear es el proceso de remover bugs, programar es el proceso de agregarlos'))