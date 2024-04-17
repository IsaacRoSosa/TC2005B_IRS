var nombres = [];

function agregarNombre() {
    var nombre = document.getElementById('nombre').value;
    nombres.push(nombre);
    document.getElementById('resultadoArreglo').innerText = "Arreglo actual: " + nombres.join(', ');
}

function eliminarNombre() {
    var nombre = document.getElementById('nombre').value;
    var index = nombres.indexOf(nombre);
    if (index > -1) {
        nombres.splice(index, 1);
    }
    document.getElementById('resultadoArreglo').innerText = "Arreglo actual: " + nombres.join(', ');
}

function buscarNombre() {
    var nombre = document.getElementById('nombre').value;
    var index = nombres.indexOf(nombre);
    if (index > -1) {
        document.getElementById('resultadoArreglo').innerText = "El nombre " + nombre + " está en el arreglo.";
    } else {
        document.getElementById('resultadoArreglo').innerText = "El nombre " + nombre + " no está en el arreglo.";
    }
}

var numeros = [4, 9, 16, 25, 36, 81];

function calcularRaices() {
    var raices = numeros.map(Math.sqrt);
    document.getElementById('resultadoRaices').innerText = "Raíces cuadradas: " + raices.join(', ');
}