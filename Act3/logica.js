//Ejercicio 1 Comparación de números
function numeroMayor() {
    var a = parseInt(document.getElementById('num1').value);
    var b = parseInt(document.getElementById('num2').value);
    var resultado = document.getElementById('resultado');
    
    if (isNaN(a) || isNaN(b)) {
        resultado.innerText = "Por favor, introduce números enteros";
        return;
    }
    
    if (a > b) {
        resultado.innerText = a + " es mayor";
    } else if (a < b) {
        resultado.innerText = b + " es mayor";
    } else {
        resultado.innerText = "Los números son iguales";
    }
}

function numeroMenor() {
    var a = parseInt(document.getElementById('num1').value);
    var b = parseInt(document.getElementById('num2').value);
    var resultado = document.getElementById('resultado');
    
    if (isNaN(a) || isNaN(b)) {
        resultado.innerText = "Por favor, introduce números enteros";
        return;
    }
    
    if (a < b) {
        resultado.innerText = a + " es menor";
    } else if (a > b) {
        resultado.innerText = b + " es menor";
    } else {
        resultado.innerText = "Los números son iguales";
    }
}

//Ejercicio 2 Logicos


function operacionesLogicas() {
    var var1 = true;
    var var2 = false;
    
    var resultadoAnd = var1 && var2; // false
    var resultadoOr = var1 || var2; // true
    var resultadoNot = !var1; // false
    
    var resultado = document.getElementById('resultadoLogicos');
    resultado.innerText = "AND: " + resultadoAnd + ", OR: " + resultadoOr + ", NOT: " + resultadoNot;
}