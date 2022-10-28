function myFunction() {
    confirm("¿Confirmas el envío?");
    if (opcion == true) {
        mensaje= "Confirmado";
        
    } else {
        mensaje = "Cancelado";
    }
  }


  var inputUser = document.getElementById("usuario");
  localStorage.setItem ("usuario", inputUser.value);

  function captura(){
    var user=document.getElementById("usuario").value;
    
  }


  document.getElementById("demo").onmouseover = function() {mouseOver()};
  document.getElementById("demo").onmouseout = function() {mouseOut()};
  
  function mouseOver() {
    document.getElementById("demo").style.color = "red";
  }
  
  function mouseOut() {
    document.getElementById("demo").style.color = "black";
  }