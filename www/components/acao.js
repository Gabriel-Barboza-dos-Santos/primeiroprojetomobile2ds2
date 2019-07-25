// This is a JavaScript file
$(document).on("click","#somar",function(){
  var valor1 = $("#valor1").val();
  var valor2 = $("#valor2").val();
  var result = parseFloat(valor1) + parseFloat(valor2);
  $("#resultado").val(result);
});

// This is a JavaScript file
$(document).on("click","#subtrair",function(){
  var valor1 = $("#valor1").val();
  var valor2 = $("#valor2").val();
  var result = parseFloat(valor1) - parseFloat(valor2);
  $("#resultado1").val(result);
});

// This is a JavaScript file
$(document).on("click","#multi",function(){
  var valor1 = $("#valor1").val();
  var valor2 = $("#valor2").val();
  var result = parseFloat(valor1) * parseFloat(valor2);
  $("#resultado2").val(result);
});