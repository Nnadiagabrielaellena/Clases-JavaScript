function sonIguales(str1,str2){
      return ( str1.toUpperCase === str2.toUpperCase) && (str1.length )===(str2.length);
}

console.log(sonIguales('javascript', 'JavaScript')) // true
console.log(sonIguales('AdA LoVeLaCe', 'Ada Lovelace')) // true
console.log(sonIguales('NO ESTOY GRITANDO', 'ESTOY GRITANDO')) // fals