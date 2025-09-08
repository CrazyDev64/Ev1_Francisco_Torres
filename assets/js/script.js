// Función con parámetro:
// Permite cambiar el color de fondo de la página usando el valor recibido.
function cambiarFondo(color) {
  document.body.style.backgroundColor = color;
}

// Función con condición y manipulación del DOM:
// Alterna el texto y el estilo del título principal.
// Si el título tiene la clase "resaltado", vuelve al texto original y quita la clase.
// Si no la tiene, cambia el texto y agrega la clase para resaltarlo.
function cambiarTexto() {
  const titulo = document.getElementById("titulo");

  if (titulo.classList.contains("resaltado")) {
    titulo.textContent = "Pagina Evaluacion 1"; // volver al texto original
    titulo.classList.remove("resaltado");
  } else {
    titulo.textContent = "¡Magia del javaScript!";
    titulo.classList.add("resaltado");
  }
}

