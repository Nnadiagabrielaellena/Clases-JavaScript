function calcularPuntaje(facil,normal,dificil){
      const puntajeTotal= (facil*3)+(normal*5)+(dificil*10);
      return puntajeTotal
}
console.log(calcularPuntaje(3, 0, 0)); // 9
console.log(calcularPuntaje(0, 2, 1)); // 20
console.log(calcularPuntaje(5, 1, 2)); // 40