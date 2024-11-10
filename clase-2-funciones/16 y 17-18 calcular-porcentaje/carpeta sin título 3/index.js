 function calcularPorcentaje(num, porcentaje){
      return (num * porcentaje) /100
 }

 console.log(calcularPorcentaje(100,15));//15
 console.log(calcularPorcentaje(10,50));//5
 console.log(calcularPorcentaje(200,10));//20


 function sumarPorcentaje( num, porcentaje){
   const porcentajeSumar = calcularPorcentaje(num,porcentaje);
     return num + porcentajeSumar
 }

 console.log( sumarPorcentaje(100,15));//115
 console.log( sumarPorcentaje(10,50));//15
 console.log( sumarPorcentaje(200,10));//220

 function restarPorcentaje( num ,porcentaje){
    const porcetajeRestar = calcularPorcentaje(num,porcentaje);
    return num - porcetajeRestar ;
 }

 console.log(restarPorcentaje(100,15));//85
 console.log(restarPorcentaje(10,40));//6
 console.log(restarPorcentaje(200,10));//180