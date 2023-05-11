//FUNCION PARA ENCRIPTAR TEXTO
function encriptarTexto() {
  let textoOriginal = document.getElementById("textoEncriptar").innerText;
  textoOriginal.toLowerCase();
  let arreglo = textoOriginal.split("");
  for (let i = 0; i < arreglo.length; i++) {
    if (arreglo[i] == 'a') {
      arreglo[i] = 'ai';
    } else if (arreglo[i] == 'e') {
      arreglo[i] = 'enter';
    } if (arreglo[i] == 'i') {
      arreglo[i] = 'imes';
    } if (arreglo[i] == 'o') {
      arreglo[i] = 'ober';
    } if (arreglo[i] == 'u') {
      arreglo[i] = 'ufat';
    }
  }
  arreglo = arreglo.join("");
  document.getElementById("textoEncriptado").innerText = arreglo;
  cambiarSecciones();
  
}

//EVENTO AL DAR CLICK EN EL BOTON ENCRIPTAR
document.getElementById("botonEncriptar").addEventListener("click", function () {
  encriptarTexto();
})

//FUNCION PARA DESENCRIPTAR EL TEXTO
function desencriptarTexto() {
  let textoOriginal = document.getElementById("textoEncriptar").innerText;
  textoOriginal.toLowerCase();
  const encriptaciones = new Map([
    ['ai', 'a'],
    ['enter', 'e'],
    ['imes', 'i'],
    ['ober', 'o'],
    ['ufat', 'u']
  ]);

  let mensajeDesencriptado = textoOriginal;

  encriptaciones.forEach((valor, clave) => {
    mensajeDesencriptado = mensajeDesencriptado.replace(new RegExp(clave, 'g'), valor)
  })

  document.getElementById("textoEncriptado").innerText = mensajeDesencriptado;
  cambiarSecciones();
}

//EVENTO AL DAR CLICK EN BOTON DE DESENCRIPTAR
document.getElementById("botonDesencriptar").addEventListener("click", function () {
  desencriptarTexto();
})


//FUNCION COPIAR
function copiarTexto() {
  const texto = document.getElementById("textoEncriptado").innerText;

  const item = new ClipboardItem({ "text/plain": new Blob([texto], { type: "text/plain" }) });

  try {
    navigator.clipboard.write([item]).then(function () {
      console.log("Contenido copiado al portapapeles.");
    }, function (err) {
      console.error("Error al copiar contenido al portapepeles: ", err);
    });
  } catch (err) {
    console.error("Error al copiar contenido al portapeles: ", err);
  }
}
//EVENTO AL DAR CLICK EN EL BOTON COPIAR
document.getElementById("botonCopiar").addEventListener("click", function () {
  copiarTexto();
})

//FUNCION PARA CAMBIAR LA SECCION DERECHA AL DAR CLICK EN ALGUNO DE LOS 2 BOTONES DE ENCRIPTACION
function cambiarSecciones(){
  const seccionImagen = document.getElementById("contenedorImagen");
  const seccionMensaje1 = document.getElementById("contenedorTexto1");
  const seccionMensaje2 = document.getElementById("contenedorTexto2");

  seccionImagen.style.display = "none";
  seccionMensaje1.style.display = "none";
  seccionMensaje2.style.display = "none";

  const seccionTextoEncriptado = document.getElementById("contenedorTextoEncriptado");
  const seccionBotonCopiar = document.getElementById("contenedorBotonCopiar");

  seccionTextoEncriptado.style.display = "block";
  seccionBotonCopiar.style.display = "block";

}



