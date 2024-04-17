function tiposVariables() {
    var stringVar = "Hola";
    var numberVar = 123;
    var booleanVar = true;
    var nullVar = null;
    var undefinedVar;

    document.getElementById('resultadoString').innerText = "String: " + stringVar + " es de tipo " + typeof stringVar;
    document.getElementById('resultadoNumber').innerText = "Number: " + numberVar + " es de tipo " + typeof numberVar;
    document.getElementById('resultadoBoolean').innerText = "Boolean: " + booleanVar + " es de tipo " + typeof booleanVar;
    document.getElementById('resultadoNull').innerText = "Null: " + nullVar + " es de tipo " + typeof nullVar;
    document.getElementById('resultadoUndefined').innerText = "Undefined: " + undefinedVar + " es de tipo " + typeof undefinedVar;
}

function determinarTipo() {
    var dato = document.getElementById('datoUsuario').value;
    var resultado = document.getElementById('resultadoTipo');

    if (!isNaN(dato)) {
        resultado.innerText = "El dato es un número";
    } else if (dato.toLowerCase() === "true" || dato.toLowerCase() === "false") {
        resultado.innerText = "El dato es un booleano";
    } else {
        resultado.innerText = "El dato es una cadena de texto";
    }
}