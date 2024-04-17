function suma() {
    var resultadotexto = document.getElementById('resultadoFunciones');
    var x = Number(document.getElementById('x').value);
    var y = Number(document.getElementById('y').value);
    var z = Number(document.getElementById('z').value);
    var resultado = x + y + z;
    resultadotexto.innerText = "El resultado de la suma es: " + resultado;
    
}

function multiplica() {
    var resultadotexto = document.getElementById('resultadoFunciones');
    var x = Number(document.getElementById('x').value);
    var y = Number(document.getElementById('y').value);
    var z = Number(document.getElementById('z').value);
    var resultado = x * y * z;
    resultadotexto.innerText = "El resultado de la multiplicación es: " + resultado;
}

function strings() {
    var resultadotexto = document.getElementById('resultadoFunciones');
    var x = document.getElementById('x').value;
    var y = document.getElementById('y').value;
    var z = document.getElementById('z').value;
    var resultado = isNaN(Number(x)) && isNaN(Number(y)) && isNaN(Number(z));
    resultadotexto.innerText = "¿Son todos los datos de tipo string? " + resultado;
}

function verificaVocales() {
    var resultadotexto = document.getElementById('resultVocal');
    var x = document.getElementById('Vocal?').value;
    var vocales = ['a', 'e', 'i', 'o', 'u'];
    var resultado = vocales.includes(x.toLowerCase());
    resultadotexto.innerText = "¿El dato ingresado es una vocal? " + resultado;
    
}