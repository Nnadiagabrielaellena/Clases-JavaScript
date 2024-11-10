let totalsegundos=parseInt(prompt('ingrese el numero en segundos'))
let horas= Math.floor(totalsegundos/3600);
let minutos=Math.floor(totalsegundos%3600)/60;
let segundos=totalsegundos % 60;
alert(horas +' '+'horas'+minutos+' '+'minutos'+' '+segundos+' '+"segundos")