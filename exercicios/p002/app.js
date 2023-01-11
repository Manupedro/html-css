
    
    var btn = document.querySelector('button')
    btn.onclick = function() {
        var input = document.querySelector("#comprimento");
        var resposta = document.querySelector("#resposta");

        var x = input.value / 10;
        resposta.innerHTML= x*150
      }
