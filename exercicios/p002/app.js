var btn = document.querySelector('button')
var input = document.querySelector("#comprimento");
var resposta = document.querySelector("#resposta");
window.onload = contagem()
btn.onclick = contagem()

input.onkeyup = contagem()

function contagem() {
  var x = input.value * 2.54;
  resposta.innerHTML = Math.ceil(x * 120)
}