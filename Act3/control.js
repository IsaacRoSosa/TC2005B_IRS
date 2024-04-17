function mayorDeEdad(){
    edad = parseInt(document.getElementById("edad").value);
    var resultadotexto = document.getElementById('resultadoEdad');

    if(edad >= 18){
        resultadotexto.innerText = "El usuario es  mayor de edad";
    }
    else{
            resultadotexto.innerText = "El usuario es  menor de edad";
        }
}