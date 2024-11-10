function esHoraValida (hora){

      let horaYminuto = horanumero.split(':');

      let horas = hora[0];
      let horasNumero = Number(hora)

      return horasNumero;
}

console.log(esHoraValida('12:23')) // true
console.log(esHoraValida('12:65')) // false
console.log(esHoraValida('28:05')) // false
console.log(esHoraValida('00:00')) // true

