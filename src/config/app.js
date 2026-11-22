/**
 * Lógica del cliente para el módulo front-end
 * Cumple estándares de codificación (camelCase y comentarios)
 */

// Referencias a elementos del DOM
const moduloForm = document.getElementById('moduloForm');
const mensajeDiv = document.getElementById('mensaje');

// Evento de envío del formulario
moduloForm.addEventListener('submit', (evento) => {
    evento.preventDefault(); // Evita recargar la página

    const nombre = document.getElementById('nombre').value.trim();
    const correo = document.getElementById('correo').value.trim();

    // Validación básica antes de enviar al backend
    if (nombre && correo) {
        mensajeDiv.textContent = `Registro procesado correctamente para: ${nombre}`;
        mensajeDiv.className = 'alerta exito';
        moduloForm.reset();
    }
});
