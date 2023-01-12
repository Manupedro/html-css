

var btn = document.querySelector('button')
var input = document.querySelector("#comprimento");
  var resposta = document.querySelector("#resposta");
btn.onclick = function () {
  var x = input.value / 10;

  resposta.innerHTML = Math.round(x * 150)
}

input.onkeyup = function(){
  var x = input.value / 10;
  resposta.innerHTML = Math.round(x * 150)
}
