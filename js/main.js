document.addEventListener("keydown",direcciones);
var figuraSnake = document.getElementById("snake");
var movimiento_x = 0;
var movimiento_y = 0;
function direcciones(event){
  var codigoFlecha = event.keyCode;
  switch (codigoFlecha) {
    case 39:
      movimiento_x+=50;
      if(movimiento_x>450){
        alert("game over x.x");
      }else {
        figuraSnake.style.marginLeft= movimiento_x +"px";
      }
      break;
    case 37:
      movimiento_x-=50;
      if(movimiento_x < 0)
      {
        alert("game over x.x");
      }else{
        figuraSnake.style.marginLeft= movimiento_x+"px";
      }
      break;
    case  38:
      movimiento_y-=50;
      if(movimiento_y < 0)
      {
        alert("game over x.x");
      }else {
        figuraSnake.style.marginTop = movimiento_y+"px";
      }
      break;
    case 40:
      movimiento_y+=50;
      if (movimiento_y > 450 ){
        alert("game over x.x");
      }else {
        figuraSnake.style.marginTop = movimiento_y+"px";
      }
      break;
    default:
    alert("Tecla equivoda");
  }
}
