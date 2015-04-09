var toggleSound = function() {
    if(soundEffects === true) {
        soundEffects = false;
        document.getElementById('buttonHeading1').style.color ='#B0B8B8';
    } else {
        soundEffects = true;
         document.getElementById('buttonHeading1').style.color ='snow';
    }
}


var toggleMusic = function() {
   if(musicPlaying === false) {
       document.getElementById('audiotag3').play();
       musicPlaying = true;
       document.getElementById('buttonHeading2').style.color ='snow';
   } else {
       document.getElementById('audiotag3').pause();
       musicPlaying = false;
       document.getElementById('buttonHeading2').style.color ='#B0B8B8';
   }
}