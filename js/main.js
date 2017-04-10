var evento1 = document.getElementById('lienzo');
//evento1.addEventListener("keydown", presionaTeclas);
evento1.addEventListener("keydown",direcciones);
//console.log(evento1) ;
var figuraSnake = document.getElementById("snake");
//console.log(figuraSnake);
//figuraSnake.addEventListener("keydown", mueveSnake);



function presionaTeclas(event){
  console.log(event);
}

function direcciones(event){
  if(event.keyCode==39){
    console.log(figuraSnake.style.offsetX);
    figuraSnake.style.width +="100px";
    console.log("se movio a la derecha");
  }else if (event.keyCode==37) {
    console.log("Se movio a la izquierda");

  }else if (event.keyCode==40) {
    console.log("se movio hacia abajo");

  }else if (event.keyCode==38) {
    console.log("Se movio hacia ariba ");
  }else {
    alert("Tecla equivoda")
  }

}
function mueveSnake(event){
  if(event.keyCode==39){

  }
}
