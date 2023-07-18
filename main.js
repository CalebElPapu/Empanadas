var Empanadas = ["rajas.jpg", "queso.jpg", "queso y jamon.jpg", "res.jpg", "camaron.jpg", "champiñion.jpg"];
var Nombres = ["rajas", "queso", "queso y jamon", "res", "camaron", "champiñion"];
var A = 0;

function siguiente(){
    A++;
    var número = 5; 
    if(A > número){
        A = 0
    }

    var imagen_actual = Empanadas[A];
    var Nombres_actual = Nombres[A];

    document.getElementById("foto_de_la_empanada").src = imagen_actual;
    document.getElementById("descripción_de_empanadas").innerHTML = Nombres_actual;
}
