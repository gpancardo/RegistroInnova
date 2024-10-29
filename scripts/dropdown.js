document.addEventListener("DOMContentLoaded", function() {
    cambiarEstado();
});

function cambiarEstado() {
    const botonMenu = document.getElementById("menu-boton");
    const contenidoMenu = document.getElementById("menu-contenido");

    botonMenu.addEventListener("click", function(event) {
        event.stopPropagation();
        contenidoMenu.style.display = contenidoMenu.style.display === "block" ? "none" : "block";
    });

    document.addEventListener("click", function(event) {
        if (!botonMenu.contains(event.target)) {
            contenidoMenu.style.display = "none";
        }
    });
};