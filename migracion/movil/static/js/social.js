document.addEventListener('DOMContentLoaded', function () {
    const botonRedondo = document.getElementById('boton_redes_sociales');
    const contenedorSocial = document.getElementById('contenedor_social');
    const botonCerrarModal = document.getElementById('boton_cerrar_modal');

    // Configurar el estado inicial del modal como oculto
    contenedorSocial.style.display = 'none';

    // Mostrar el modal al hacer clic en el botón de apertura
    botonRedondo.addEventListener('click', function () {
        contenedorSocial.style.display = 'flex';
        botonRedondo.style.display = 'none'; // Ocultar el botón al abrir el modal
    });

    // Ocultar el modal al hacer clic en el botón de cierre
    botonCerrarModal.addEventListener('click', function () {
        contenedorSocial.style.display = 'none';
        botonRedondo.style.display = 'flex'; // Mostrar el botón de nuevo
    });
});
