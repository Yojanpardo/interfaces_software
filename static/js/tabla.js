$(document).ready(function() {
//obtenemos el valor de los input

var i = 1; //contador para asignar id al boton que borrara la fila
var total = 0;

$('#adicionar').click(function() {
var nombre = document.getElementById("nombre").value;
var cantidad = document.getElementById("cantidad").value;
var valorU = document.getElementById("valorU").value;
var subtotal = cantidad * valorU
total = subtotal + total;
var campoTotal = document.getElementById("total");
campoTotal.textContent = total;
var fila = '<tr id="row' + i + '"><td>' + nombre + '</td><td>' + cantidad + '</td><td>' + valorU + '</td><td id="subtotal' + i + '">' + subtotal + '</td><td><button type="button" name="remove" id="' + i + '" class="btn btn-danger btn_remove">Quitar</button></td></tr>'; //esto seria lo que contendria la fila
i++;

$('#mytable tr:first').after(fila);
  $("#adicionados").text(""); //esta instruccion limpia el div adicioandos para que no se vayan acumulando
  var nFilas = $("#mytable tr").length;
  $("#adicionados").append(nFilas - 2);
  //le resto 1 para no contar la fila del header
  document.getElementById("cantidad").value ="";
  document.getElementById("valorU").value = "";
  document.getElementById("subtotal").value = "0";
  document.getElementById("nombre").value = "";
  document.getElementById("nombre").focus();

});

$(document).on('click', '.btn_remove', function() {
var button_id = $(this).attr("id");
  //cuando da click obtenemos el id del boton
  $('#row' + button_id + '').remove(); //borra la fila
  //limpia el para que vuelva a contar las filas de la tabla
  $("#adicionados").text("");
  var nFilas = $("#mytable tr").length;
  $("#adicionados").append(nFilas - 1);
});
});
