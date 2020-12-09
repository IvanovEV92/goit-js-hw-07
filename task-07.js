const getControlValue = document.getElementById('font-size-control');
const textRef = document.getElementById('text');
console.dir(textRef);
textRef.style.fontSize = getControlValue.value + 'px';
getControlValue.addEventListener('input', (event) => (textRef.style.fontSize = event.target.value + 'px'));
