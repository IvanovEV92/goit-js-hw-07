const getControlValue = document.getElementById('font-size-control');
const textRef = document.getElementById('text');
console.dir(textRef);
getControlValue.addEventListener('input', (event) => {
	console.log(event.target.value);
	textRef.style.fontSize = event.target.value + 'px';
});
