function cambiarTexto() {
    var texto = document.getElementById('texto').value;
    document.getElementById('parrafoNuevo').innerText = texto;
}
function cambiarColor() {
    document.getElementById('parrafo').style.backgroundColor = 'yellow';
}

function restaurarColor() {
    document.getElementById('parrafo').style.backgroundColor = '';
}