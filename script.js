var letterContent = `Magie, my dear, a name so sweet,
Our adventure waits, an exciting feat.
At six o'clock, I'll see your smile,
A moment that'll make my heart beguile. 
See you at 6pm!
`;

var letterIndex = 0;
var letterDelay = 50; // Delay between each letter (in milliseconds)

function typeLetter() {
    var letter = document.getElementById('letter');
    if (letterIndex < letterContent.length) {
        letter.innerHTML += letterContent.charAt(letterIndex);
        letterIndex++;
        setTimeout(typeLetter, letterDelay);
    }
}

function openLetter() {
    var letter = document.getElementById('letter');
    if (letter.style.display === 'none') {
        letter.style.display = 'block';
        typeLetter();
    } else {
        letter.style.display = 'none';
        letter.innerHTML = '';
        letterIndex = 0;
    }
}