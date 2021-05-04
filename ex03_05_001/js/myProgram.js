
$(document).ready(function(){
  var tam = $(window).width();
  window.addEventListener('resize', function(){
    $("#menu-vertical").hide();
  });

  var x = $("img").position();
  alert("Top position: " + x.top + ", Left position: " + x.left);
    
  var y = $("img").offset();
  alert("Top offset: " + y.top + ", Left offset: " + y.left);

  $("button").click(function () {
    alert($("#paragraph").scrollTop() + " px");
  });

  // 1. Use os métodos jQuery para definir a altura e a largura de <div> em 500 pixels

  $("#paragraph").width(500).height(500);

  // 2. Use o método jQuery para obter a altura de um elemento <div>, excluido preenchimento, borda e margem
  alert("Altura div 1: " + $("#myText").height() + "px");

  // 2. Use o método jQuery para obter a altura de um elemento <div>, incluindo preenchimento(não borda e margem).
  alert("Altura div 2: " + $("#myText").innerHeight() + "px");


});