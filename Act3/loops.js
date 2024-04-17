function usarFor() {
    var resultado = '';
    for (var i = 1; i <= 10; i++) {
        resultado += i + ' ';
    }
    document.getElementById('resultadoFor').innerText = "Resultado con for: " + resultado;
}

function usarWhile() {
    var resultado = '';
    var i = 1;
    while (i <= 10) {
        resultado += i + ' ';
        i++;
    }
    document.getElementById('resultadoWhile').innerText = "Resultado con while: " + resultado;
}

function usarDoWhile() {
    var resultado = '';
    var i = 1;
    do {
        resultado += i + ' ';
        i++;
    } while (i <= 10);
    document.getElementById('resultadoDoWhile').innerText = "Resultado con do...while: " + resultado;
}