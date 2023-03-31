function calcularnumero() {
  var numero = document.getElementById("numero").value;
  var tabla = document.getElementById("tabla").value;
  var multiplicar = "";
  for (var i = 0; i <= tabla; i++) {
    multiplicar += +numero + "x" + i + "= " + numero * i + "<br>";
  }
  document.getElementById("resultado").innerHTML = multiplicar;
}
