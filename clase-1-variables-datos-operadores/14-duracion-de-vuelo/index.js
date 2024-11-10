let vuelo1=prompt('escriba aqui la duracion vuelo 1')
let escalaVuelo1=prompt("escriba la duracionb escala vuelo 1");
let vuelo2=prompt('escriba aqui la duracion vuelo 2')
let escalaVuelo2=prompt("escriba la duracionb escala vuelo 2");
let vuelo3=prompt('escriba aqui la duracion vuelo 3')
let escalaVuelo3=prompt("escriba la duracionb escala vuelo 3");

let SumaDeLasEscalas= parseFloat(escalaVuelo1) +parseFloat (escalaVuelo2) +parseFloat (escalaVuelo3)
let Sumatotal= parseFloat(vuelo1)+parseFloat (escalaVuelo1)+parseFloat (vuelo2)+parseFloat( escalaVuelo2)+parseFloat (vuelo3)+parseFloat( escalaVuelo3);

alert("la suma del total de las escalas es"+" "+SumaDeLasEscalas+" "+"hs"+" "+"y la sumatoria total del vuelo seria"+" "+Sumatotal+" "+"hs"+".")