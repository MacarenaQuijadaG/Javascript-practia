document.getElementById('formulario').addEventListener('submit', function (event) {
    // EVENTO LISTENER
    event.preventDefault();

    // Reset error messages
    document.querySelectorAll('.error').forEach(error => error.textContent = '');

    // SE CAPTIRA LOS DATOS
    const nombre = document.getElementById('nombre').value.trim();
    const asunto = document.getElementById('asunto').value.trim();
    const mensaje = document.getElementById('mensaje').value.trim();

    // EXPRECION REGULAR REGEX
    const Regex = /^[a-zA-Z]+$/;

    // VALIDA Y EN CASO DE ERROR MUESTRA LOS MENSAJES 
    if (!Regex.test(nombre)) {
        document.querySelector('.errorNombre').textContent = 'Nombre es requerido.';
    }

    if (!Regex.test(asunto)) {
        document.querySelector('.errorAsunto').textContent = 'Asunto es requerido.';
    }

    if (mensaje === '') {
        document.querySelector('.errorMensaje').textContent = 'mensaje es requerido.';
    }

    // EN CASO DE NO TENER ERRORES SE EJECUTA
    if (Regex.test(nombre) && Regex.test(asunto) && mensaje !== '') {
        document.querySelector('.resultado').textContent = '¡Mensaje enviado con éxito!';
        document.querySelector('.resultado').classList.add('success');
    }
});