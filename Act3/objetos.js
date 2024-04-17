var coche = {};

function crearCoche() {
    var marca = document.getElementById('marca').value;
    var modelo = document.getElementById('modelo').value;
    var anio = document.getElementById('anio').value;
    coche = {
        marca: marca,
        modelo: modelo,
        anio: anio,
        cambiarMarca: function(nuevaMarca) {
            this.marca = nuevaMarca;
        },
        cambiarModelo: function(nuevoModelo) {
            this.modelo = nuevoModelo;
        },
        cambiarAnio: function(nuevoAnio) {
            this.anio = nuevoAnio;
        }
    };
    document.getElementById('resultadoObjeto').innerText = "Coche creado: " + JSON.stringify(coche);
}

function mostrarInfoCoche() {
    var info = "Marca: " + coche.marca + ", Modelo: " + coche.modelo + ", Año: " + coche.anio;
    document.getElementById('resultadoObjeto').innerText = info;
}