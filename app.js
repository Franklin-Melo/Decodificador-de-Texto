const placeholder = document.querySelector(".placeholder");
const mensagem = document.querySelector(".mensagem");

let matriz = [
  ["e", "enter"],
  ["i", "imea"],
  ["a", "ai"],
  ["o", "obet"],
  ["u", "ufat"],
];

function btnCriptografar() {
  const texto = placeholder.value;
  const textoCriptografado = criptografar(texto);
  mensagem.innerHTML = textoCriptografado;
  placeholder.value = "";

}

function criptografar(string) {
  const resultado = string
    .replaceAll("e", "enter")
    .replaceAll("i", "imea")
    .replaceAll("a", "ai")
    .replaceAll("o", "obet")
    .replaceAll("u", "ufat");

  return resultado;

}

function btnDescriptografar() {
  const texto = placeholder.value;
  const textoDescriptografado = descriptografar(texto);
  mensagem.innerHTML = textoDescriptografado;
  placeholder.value = "";
}


function descriptografar(string) {
  const resultado = string
    .replaceAll("enter", "e")
    .replaceAll("imea", "i")
    .replaceAll("ai", "a")
    .replaceAll("obet", "o")
    .replaceAll("ufat", "u");

  return resultado;

}



function copiarTexto() {
  const textoCriptografado = mensagem.textContent;
  navigator.clipboard.writeText(textoCriptografado);
}




















