function convertirEnAcronimo(str){
      return str.toUpperCase().split('').join('.');
      
      

}


console.log(convertirEnAcronimo('afip')); // 'A.F.I.P.'
console.log(convertirEnAcronimo('nasa')); // 'N.A.S.A.'