function espaciarCaracteres(str){
      const string = str.toString();
      const stringSeparado = string.split('');
      const stringConLetrasSeparadas =stringSeparado.join(' ');
      return stringConLetrasSeparadas;
}
console.log(espaciarCaracteres('javascript')) // 'j a v a s c r i p t'
console.log(espaciarCaracteres('ada lovelace')) // 'a d a l o v e l a c e')