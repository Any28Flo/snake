var evento1 = document.getElementById('lienzo');
evento1.addEventListener("keydown", direcciones);

function presionaTeclas(event){
  console.log(event.keyCode);
}

function direcciones(event){
  if(event.keyCode==39){
    console.log("se movio a la derecha");
  }else if (event.keyCode==37) {
    console.log("Se movio a la izquierda");

  }else if (event.keyCode==40) {
    console.log("se movio hacia abajo");

  }else if (event.keyCode==38) {
    console.log("Se movio hacia ariba ");
  }else {
    alert("Tecla equivocad")
  }

}
