

function esHoraValida (hora){
      let horasMinutos= hora.split(':');
      let horasNumeros = Number(horasMinutos[0]);
      let minutosnumeros = Number(horasMinutos[1]);
      

      
      return horasNumeros>= 0 && horasNumeros <= 24 && minutosnumeros >= 0 && minutosnumeros <= 60;



      

    
}

console.log(esHoraValida('12:23')) // true
console.log(esHoraValida('12:65')) // false
console.log(esHoraValida('28:05')) // false
console.log(esHoraValida('00:00')) // true

