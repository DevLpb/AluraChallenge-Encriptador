let figura = document.getElementById("figura");
let mensaje = document.getElementById("mensaje");
let seccionSalida = document.querySelector(".seccion-salida");
let tituloMensaje = document.getElementById("titulo-mensaje");
let infoMensaje = document.getElementById("info-mensaje");
let botonCopiar = document.getElementById("boton-copiar");

let textoEntrante = document.getElementById("texto-entrante");
let valorTextoEntrante = "";
let textoSaliente = document.getElementById("texto-saliente");

// Captura el contenido del texto entrante //
textoEntrante.addEventListener("input", function () {
  valorTextoEntrante = textoEntrante.value;
  console.log(valorTextoEntrante);
});

// Establece las propiedades o valores de los contenidos iniciales, evita que la imagen se muestre en dispositivos móviles. //
function condicionesIniciales() {
  if (window.innerWidth > 768) {
    figura.style.display = "block";
  }
  mensaje.style.display = "block";
  seccionSalida.style.height = "auto"; 
  tituloMensaje.textContent = "Ningún mensaje fue encontrado";
  infoMensaje.textContent = "Ingresa el texto que desees encriptar o desencriptar.";
  textoSaliente.style.display = "none";
  botonCopiar.style.display = "none";
}

// Función para verificar el textarea
 function verificarEntrada() {
    if (textoEntrante.value === "") {
        condicionesIniciales();
     }
 }
// Captura el contenido del texto entrante (comprueba si está vacío y ejecuta la función) //
textoEntrante.addEventListener("input", verificarEntrada);


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
    if (window.innerWidth <= 768) {
      seccionSalida.style.height = "50%";
    }
    figura.style.display = "none";
    mensaje.style.display = "none";
    textoSaliente.style.display = "block";
    botonCopiar.style.display = "flex";


  // Encriptación
  // Busca las coincidencias de la expresión regular y las reemplaza por los valores de las propiedades del objeto "claves"
    let textoCifrado = valorTextoEntrante.replace(/[aeiou]/g, function(vocal) {
    return claves[vocal];
  });

  textoSaliente.value = textoCifrado;
}

textoEntrante.addEventListener("input", function () {
  valorTextoEntrante = textoEntrante.value;
  console.log(valorTextoEntrante);
});

// Función de desencriptado //
function desencriptar() {
  // Verifica si el texto es apto para encriptar.
  // Si el texto contiene mayúsculas o caracteres especiales, no lo encripta.
    let regExp = /^[a-z ]+$/g;
        if (!regExp.test(valorTextoEntrante)) {
            tituloMensaje.textContent = "Mensaje no aceptado";
            infoMensaje.textContent ="Recuerda que solo se aceptan letras minúsculas y sin acentos";
        return;
}

    // Si pasa la verificación, oculta y muestra los elementos del área.
    if (window.innerWidth <= 768) {
      seccionSalida.style.height = "50%";
    }
    figura.style.display = "none";
    mensaje.style.display = "none";
    textoSaliente.style.display = "block";
    botonCopiar.style.display = "flex";


    // Desencriptado
    // Busca las coincidencias de la expresión regular y las reemplaza, compara los valores de las propiedades del objeto "claves" y si son iguales, las reemplaza por el nombre de la propiedad.
    let textoCifrado = valorTextoEntrante.replace(/(ai|enter|imes|ober|ufat)/g, function(clave) {
      for (let vocal in claves) {
        if (claves[vocal] === clave) {
          return vocal;
        }
      }
    });

    textoSaliente.value = textoCifrado;
    }

    // Función de copiar //
    function copiar() {

      navigator.clipboard.writeText(textoSaliente.value);
    }