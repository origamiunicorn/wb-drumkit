function playSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    if (!audio) return; //stop function from running altogether if no audio element
    audio.currentTime = 0; //allows us to rewind to start of audio element
    audio.play(); //plays audio element (in full)
    key.classList.add('playing');
};

function removeTransition(e) {
    if (e.propertyName !== 'transform') return; //skip if it's not a transform
    this.classList.remove('playing');
};

const keys = document.querySelectorAll('.key');
console.log(keys);
keys.forEach(key => key.addEventListener('transitionend', removeTransition));


window.addEventListener('keydown', playSound);