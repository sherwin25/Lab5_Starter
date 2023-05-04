// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {

  var hornSelect = document.getElementById('horn-select');
  var section = document.getElementById('expose');
  var audio = section.querySelector('audio');

  hornSelect.addEventListener('change', function() {
    var img = section.querySelector('img');
    audio.src = 'assests/audio/air-horn.mp3';
    if (hornSelect.value == "air-horn") {
      img.src = "assets/images/air-horn.svg"; 
      audio.src = "assets/audio/air-horn.mp3";
    }
    else if (hornSelect.value == "car-horn") {
      img.src = "assets/images/car-horn.svg";
      audio.src = "assets/audio/car-horn.mp3";
    }
    else if (hornSelect.value == "party-horn") {
      img.src = "assets/images/party-horn.svg";
      audio.src = "assets/audio/party-horn.mp3";
    }
    else {
      img.src = "assets/images/no-image.png";
      audio.src = "";
    }
  });





  var vol = document.getElementById('volume-controls');
  var volumeImg = vol.querySelector('img');
  volume.addEventListener('change', function() {
    var volume = document.getElementById('volume');
    if (volume.value == 0) {
      volumeImg.src = "assets/icons/volume-level-0.svg";
    }
    else if (volume.value >= 1 && volume.value < 33) {
      volumeImg.src = "assets/icons/volume-level-1.svg";
    }
    else if (volume.value >= 33 && volume.value < 67) {
      volumeImg.src = "assets/icons/volume-level-2.svg";
    }
    else {
      volumeImg.src = "assets/icons/volume-level-3.svg";
    }
    audio.volume = volume.value / 100;
  });
 



  var confetti = new JSConfetti();
  var buttonSound = section.querySelector('button');
  buttonSound.addEventListener('click', function() {
    audio.play();
    if(hornSelect.value == "party-horn"){
      confetti.addConfetti({
        confettiRadius: 6,
      })
    }
    console.log(party);
  });
}


