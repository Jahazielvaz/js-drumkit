let inputs = document.getElementsByTagName("kbd");

let mySounds = {
  drum1 : "./media-files/sounds/drum1.wav",
  drum2 : "./media-files/sounds/drum2.wav",
  drumSnare : "./media-files/sounds/drum-snare.wav",
  drumStick : "./media-files/sounds/drumstick.wav",
  guitarStrum : "./media-files/sounds/guitar-strum.wav",
  guitarSqueak : "./media-files/sounds/guitar-squeak.wav",
  guitarShortRiff : "./media-files/sounds/guitar-short-riff.mp3",
  guitarLongRiff : "./media-files/sounds/guitar-long-riff.wav",
  guitarLongEffect : "./media-files/sounds/guitar-long-effect.wav"
}

let {drum1, drum2, drumSnare, drumStick, guitarStrum, guitarSqueak, guitarShortRiff, guitarLongRiff, guitarLongEffect} = mySounds;


let mySound = (sound) => {
  let audio = new Audio(sound);
  audio.currentTime = 0;
  return audio.play()

}

let keyElement = document.querySelectorAll(".key");

document.addEventListener('keydown', (event) => {
  let classSelect = (select) => {
    keyElement[select].classList.add("playing");
  }


  switch(event.keyCode){
    case 65:
    classSelect(0);
    mySound(drum1);
    break;

    case 83:
    classSelect(1);
    return mySound(drum2);
    break;

    case 68:
    classSelect(2);
    return mySound(drumSnare);
    break;

    case 70:
    classSelect(3);
    return mySound(drumStick);
    break;

    case 71:
    classSelect(4);
    return mySound(guitarStrum);
    break;

    case 72:
    classSelect(5);
    return mySound(guitarSqueak);
    break;

    case 74:
    classSelect(6);
    return mySound(guitarShortRiff);
    break;

    case 75:
    classSelect(7);
    return mySound(guitarLongRiff);
    break;

    case 76:
    classSelect(8);
    return mySound(guitarLongEffect);
    break;



  }
})

function removeTransition(e) {
  if(e.propertyName !== "transform") return;
  this.classList.remove("playing")
}

keyElement.forEach(key => key.addEventListener("transitionend", removeTransition));













// PAGE END
