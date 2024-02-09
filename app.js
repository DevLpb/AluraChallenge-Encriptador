let figura = document.getElementById("figura");
let mensaje = document.getElementById("mensaje");
let textoEntrante = document.getElementById("texto-entrada");
let textoEncriptado = document.getElementById("texto-encriptado");
let valorTextoEntrante = "";

// Captura de contenido del texto entrante //
textoEntrante.addEventListener("input", function() {
    valorTextoEntrante = textoEntrante.value;
})

function encriptar() {
    figura.style.display = "none";
    mensaje.style.display = "none";
    textoEncriptado.style.display = "block";
    textoEncriptado.value = valorTextoEntrante + "test";
}

function desencriptar() {
    console.log("función de desencriptación");
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

