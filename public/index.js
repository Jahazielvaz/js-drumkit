let inputs = document.getElementsByTagName("kbd");

let mySounds = {
  drumBass : "./media-files/sounds/drum-bass.wav",
  drumCymbal : "./media-files/sounds/drum-cymbal.wav",
  drumSnare : "./media-files/sounds/drum-snare.wav",
  drumStick : "./media-files/sounds/drumstick.wav",
  guitarGChord : "./media-files/sounds/guitar-gchord.wav",
  guitarCChord : "./media-files/sounds/guitar-cchord.wav",
  guitarDChord : "./media-files/sounds/guitar-dchord.wav",
  beatboxCh : "./media-files/sounds/beatbox-ch.wav",
  beatboxPop : "./media-files/sounds/beatbox-pop.wav"
}

let {drumBass, drumCymbal, drumSnare, drumStick, guitarGChord
  , guitarCChord, guitarDChord, beatboxCh, beatboxPop} = mySounds;


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
    mySound(drumBass);
    break;

    case 83:
    classSelect(1);
    return mySound(drumCymbal);
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
    return mySound(guitarGChord);
    break;

    case 72:
    classSelect(5);
    return mySound(guitarCChord);
    break;

    case 74:
    classSelect(6);
    return mySound(guitarDChord);
    break;

    case 75:
    classSelect(7);
    return mySound(beatboxCh);
    break;

    case 76:
    classSelect(8);
    return mySound(beatboxPop);
    break;



  }
})

function removeTransition(e) {
  if(e.propertyName !== "transform") return;
  this.classList.remove("playing")
}

keyElement.forEach(key => key.addEventListener("transitionend", removeTransition));













// PAGE END
