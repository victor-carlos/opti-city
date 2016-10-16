function calc(){
  // Ocultando os campos
  document.getElementById("f1").style.display = "none";
  document.getElementById("f2").style.display = "none";

  // Variáveis
  var altura = document.getElementById("altura").value;
  var largura = document.getElementById("largura").value;
  var profundidade = document.getElementById("profundidade").value;

  var supesq = document.getElementById("supesq").value;
  var supdir = document.getElementById("supdir").value;
  var centro = document.getElementById("centro").value;
  var infesq = document.getElementById("infesq").value;
  var infdir = document.getElementById("infdir").value;

  //Calculos
  var cm3 = altura * largura * profundidade;
  var media = (supesq + supdir + centro + infdir + infesq) / 5;

  // Peso do Metal Comum
  //var mediaMetal = media - cm3;
  var mediaMetal = cm3;

  var metalComum = 7.5;
  var pesoMetal = mediaMetal * metalComum;
  //alert((supesq + supdir + centro + infdir + infesq));
  // Preço do Metal
  var precoMetal = 2;

  var valorMetal = precoMetal * pesoMetal;

  //alert("O preço do metal é: R$" + valorMetal);
  document.getElementById("valor").innerHTML = valorMetal;
  document.getElementById("f3").style.display = "block";
}

function conf(){
  alert("O agendamento da coleta foi feito com sucesso!");
}
