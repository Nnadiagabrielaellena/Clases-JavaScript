function obtenerExtension(str){
      const palabraSeparada= str.split('.');
      const seguntaPalabra = palabraSeparada[1];
       
return seguntaPalabra ;
}
console.log(obtenerExtension('imagen.png')) // 'png'
console.log(obtenerExtension('index.html')) // 'html'
console.log(obtenerExtension('notas.txt')) // 'txt'