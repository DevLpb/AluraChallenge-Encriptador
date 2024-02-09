let figura = document.getElementById("figura");
let mensaje = document.getElementById("mensaje");
let tituloMensaje = document.getElementById("titulo-mensaje");
let infoMensaje = document.getElementById("info-mensaje");
let botonCopiar = document.getElementById("boton-copiar");

let textoEntrante = document.getElementById("texto-entrante");
let valorTextoEntrante = "";
let textoSaliente = document.getElementById("texto-saliente");

// Captura de contenido del texto entrante //
textoEntrante.addEventListener("input", function () {
  valorTextoEntrante = textoEntrante.value;
});

/* Claves de encriptación */

let claves = {
  a: "ai",
  e: "enter",
  i: "imes",
  o: "ober",
  u: "ufat",
};

// Función de encriptación //
function encriptar() {
  // Verifica si el texto es apto para encriptar.
  // Si el texto contiene mayúsculas o caracteres especiales, no lo encripta.
    let regExp = /^[a-z ]+$/g;
        if (!regExp.test(valorTextoEntrante)) {
            tituloMensaje.textContent = "Mensaje no aceptado";
            infoMensaje.textContent ="Recuerda que solo se aceptan letras minúsculas y sin acentos";
        return;
  }

  // Si pasa la verificación, oculta y muestra los elementos del área.
    figura.style.display = "none";
    mensaje.style.display = "none";
    textoSaliente.style.display = "block";
    botonCopiar.style.display = "flex";


  // Encriptación
    let textoCifrado = valorTextoEntrante.replace(/[aeiou]/g, function(vocal) {
    return claves[vocal];
  });

  textoSaliente.value = textoCifrado;
}

// Función de desencriptado //

function desencriptar() {
  console.log("función de desencriptación");
}

// Función de copiar //
function copiar() {

  navigator.clipboard.writeText(textoSaliente.value);
}

/* Posibles funciones para manejar la visibilidad de distintos elementos */
// // Obtén los elementos
// var figura = document.getElementById("figura");
// var mensaje = document.getElementById("mensaje");
// var textarea = document.querySelector("textarea");

// // Función para encriptar
// function encriptar() {
//     figura.style.display = "none";
//     mensaje.style.display = "none";
// }

// // Función para verificar el textarea
// function verificarTextarea() {
//     if (textarea.value === "") {
//         figura.style.display = "block";
//         mensaje.style.display = "block";
//     }
// }

// // Agrega el evento input al textarea
// textarea.addEventListener("input", verificarTextarea);
