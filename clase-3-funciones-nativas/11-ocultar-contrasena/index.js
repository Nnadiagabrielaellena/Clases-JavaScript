function ocultarContrasenia(contrasenia){
     const string = contrasenia. toString();
     const cantstring = string.length
     return '*'.repeat(cantstring);

}
console.log(ocultarContrasenia(123456)) // '******'
console.log(ocultarContrasenia(111222333)) // '*********')