let inputs = document.getElementsByTagName("kbd");

let soundsArray = ["drum"];

let audio = new Audio('./media-files/sounds/guitar-long-effect.wav');
let mySound = () => {
  return audio.play()
}

document.addEventListener('keydown', (event) => {
  switch(event.keyCode){
    case 65:
    alert("A has been pressed");
    break;

    case 83:
    alert("S has been pressed");
    break;

    case 68:
    alert("D has been pressed");
    break;

    case 70:
    alert("F has been pressed");
    break;

    case 71:
    alert("G has been pressed");
    break;

    case 72:
    alert("H has been pressed");
    break;

    case 74:
    alert("J has been pressed");
    break;

    case 75:
    alert("K has been pressed");
    break;

    case 76:
    alert("L has been pressed");
    break;



  }
})
