// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  const txtBox = document.getElementById('text-to-speak');
  const btn = document.querySelector('button');
  var selectedVoice = document.querySelector('select');
  var synth = window.speechSynthesis;
  var voices = [];
  var image = document.querySelector('img');

  setTimeout(() => {
    console.log(window.speechSynthesis.getVoices());
    populateList();
  }, 50);


  function populateList() { 
    voices = window.speechSynthesis.getVoices();

        for (var i = 0; i < voices.length; i++) {
        var option = document.createElement('option');
        option.textContent = voices[i].name + ' (' + voices[i].lang + ')';
        option.value = i;
        selectedVoice.appendChild(option)
    }
  }

  btn.addEventListener('click', function() {
    let input = txtBox.value;
    let say = new SpeechSynthesisUtterance(input);
    say.voice = voices[selectedVoice.value];
    image.setAttribute('src', 'assets/images/smiling-open.png');
    synth.speak(say);
    txtBox.blur();
    say.addEventListener('end', function(){
      image.setAttribute('src', 'assets/images/smiling.png');
    });
  });
}