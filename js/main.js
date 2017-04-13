var evento1 = document.getElementById('lienzo');
evento1.addEventListener("keydown",direcciones);

var figuraSnake = document.getElementById("snake");
var snake=document.getElementById("cuadroSnake");
var moviemiento_x = 0;
var moviemiento_y= 0;


function presionaTeclas(event){
  console.log(event);
}

function direcciones(event){
  var codigoFlecha= event.keyCode;
  switch (codigoFlecha) {
    case 39:
      moviemiento_x+=50;
      figuraSnake.style.marginLeft= moviemiento_x +"px";
      break;
    case 37:
      moviemiento_x-=50;
      figuraSnake.style.marginLeft= moviemiento_x+"px";
      break;
    case 40:
      moviemiento_y+=50;
      snake.style.marginTop = moviemiento_y+"px";
      break;
    default:
    alert("Tecla equivoda");

  }
}
//
//   if(event.keyCode==39){
//     //var nuevoNodo= document.createElement("p");
//     //nuevoNodo.id="snake";
//     //cuadroSnake.appendChild(nuevoNodo);
//     console.log(nuevoNodo);
//     console.log(figuraSnake.offsetX);
//     figuraSnake.offsetY += "100px";
//     //figuraSnake.style.width +="100px";
//     console.log("se movio a la derecha");
//   }else if (event.keyCode==37) {
//     console.log("Se movio a la izquierda");
//
//   }else if (event.keyCode==40) {
//     console.log("se movio hacia abajo");
//
//   }else if (event.keyCode==38) {
//     console.log("Se movio hacia ariba ");
//   }else {
//     alert("Tecla equivoda")
//   }
// }
