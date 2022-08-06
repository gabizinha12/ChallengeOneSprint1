/*
As "chaves" de criptografia que utilizaremos são:
A letra "e" é convertida para "enter"
A letra "i" é convertida para "imes"
A letra "a" é convertida para "ai"
A letra "o" é convertida para "ober"
A letra "u" é convertida para "ufat"

Requisitos:
- Deve funcionar apenas com letras minúsculas
- Não devem ser utilizados letras com acentos nem caracteres especiais
- Deve ser possível converter uma palavra para a versão criptografada e também retornar uma palavra criptografada para a versão original.

Por exemplo:
"gato" => "gaitober"
gaitober" => "gato"
*/
let textoCapturado = document.querySelector("#texto");
let botaoCriptografar = document.getElementById("#cript");
let botaoDescriptografar = document.getElementById("#descript");
let output = document.querySelector(".output-resultado");

function criptografa() {
  let textoCriptografado = textoCapturado.value;
  let resultado = textoCriptografado
    .replaceAll("e", "enter")
    .replaceAll("i", "imes")
    .replaceAll("a", "ai")
    .replaceAll("o", "ober")
    .replaceAll("u", "ufat");
  output.innerHTML = "";

  output.innerHTML += ` ${resultado} `;
}

function descriptografa() {
  let textoDescriptografado = textoCapturado.value;
  let descript = textoDescriptografado
    .replaceAll("enter", "e")
    .replaceAll("imes", "i")
    .replaceAll("ai", "a")
    .replaceAll("ober", "o")
    .replaceAll("ufat", "u");

  output.innerHTML = "";

  output.innerHTML += ` ${descript} `;
}
