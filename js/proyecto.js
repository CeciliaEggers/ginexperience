
function validarEdad() {
let d = document.querySelector("#user_date").value;
let inDate = new Date(d);
let anio = inDate.getFullYear();
let fec_actual = new Date() ; 
let fec_anio = fec_actual.getFullYear() ;
let edad   =  fec_anio -anio 
$(function() {


    if (edad >= 18) {
        document.querySelector("#result").innerHTML = " Bienvenido a The Gin Box" 
        location.href="tienda.html";
   
     } else
     {
     document.querySelector("#result").innerHTML = "VUELVA CUANDO SEA MAYOR :)"
    
     }
    });
}


$(function() {
$("#mi-boton").click(function(){
    $(this).toggleClass("btn-success btn-dark");
  });
});


