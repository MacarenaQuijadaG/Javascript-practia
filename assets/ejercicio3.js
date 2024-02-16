
// SE CAPTURAN LOS DATOS DESDE EL HTML
document.getElementById('btn-sumar').addEventListener('click', sumar);
document.getElementById('btn-restar').addEventListener('click', restar);

// INICIA LA FUNCION SUMAR
function sumar() {
    var valor1 = parseFloat(document.getElementById('valor1').value) || 0;
    var valor2 = parseFloat(document.getElementById('valor2').value) || 0;
    // SE ASIGNA A LA VARIABLE RESUTADO DE VALOR1 Y VALOR2
    var resultado = valor1 + valor2;
    // SE DERIVA EL RESULTADO AL HTML 
    document.getElementById('resultado').innerText = resultado;
}
// INICIA FUNCION RESTA
function restar() {
    var valor1 = parseFloat(document.getElementById('valor1').value) || 0;
    var valor2 = parseFloat(document.getElementById('valor2').value) || 0;
    // SE LE ACSIGNA A LA VARIABLE RESUTADO DE VALOR 1 Y VALOR2
    var resultado = Math.max(valor1 - valor2, 0);
    // SE DERIVA EL RESULTADO AL HTML
    document.getElementById('resultado').innerText = resultado;
}