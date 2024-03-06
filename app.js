const botonDesencriptar = document.getElementById("desencriptar");
const img = document.getElementById("img");
const parrafo = document.getElementsByClassName("parrafo");
const titulo = document.getElementsByClassName("titulo-principal");
const input = document.getElementById("input");

function boton() {
  const textoIngresado = document.getElementsByClassName("texto-ingresado");
  let nuevoBoton = document.createElement("button");
  let contenedor = document.getElementById("box-message");
  nuevoBoton.id = "nuevo-boton";
  nuevoBoton.textContent = "Copiar";
  contenedor.appendChild(nuevoBoton);

  nuevoBoton.addEventListener("click", () => {
    input.value = textoIngresado[0].innerHTML;
  });
}

//funcion para encriptar el texto
function encriptar(texto) {
  let nuevoTexto = "";

  for (let i = 0; i <= texto.length - 1; i++) {
    if (texto[i] == "a") {
      nuevoTexto += "ai";
    } else if (texto[i] == "e") {
      nuevoTexto += "enter";
    } else if (texto[i] == "i") {
      nuevoTexto += "imes";
    } else if (texto[i] == "o") {
      nuevoTexto += "ober";
    } else if (texto[i] == "u") {
      nuevoTexto += "ufat";
    } else {
      nuevoTexto += texto[i];
    }
  }

  return nuevoTexto = nuevoTexto.toLowerCase();
}

//funcion para poner el encriptado en la pagina
function encriptarTexto() {
  const textoIngresado = document.getElementsByClassName("texto-ingresado");

  boton();

  let mensaje = input.value;

  textoIngresado[0].innerHTML = encriptar(mensaje);

  limpiar();
}

function desencriptarTexto() {
  const textoIngresado = document.getElementsByClassName("texto-ingresado");

  textoIngresado[0].innerHTML = desencriptar(input.value)

  

  boton();
  limpiar();
}



 
function desencriptar(texto) {

  
  let letras = [
    ["a", "ai"],
    ["e","enter"],
    ["i","imes"],
    ["o","ober"],
    ["u","ufat"]
  ]

  for(let i=0 ; i < letras.length ; i++){
    if(texto.includes(letras[i][1])){
      texto = texto.replaceAll(letras[i][1],letras[i][0])
    }

  }

  return texto = texto.toLowerCase()

}

function limpiar() {
  titulo[0].innerHTML = "";
  parrafo[0].innerHTML = "";
  img.remove();
  input.value = "";
}
