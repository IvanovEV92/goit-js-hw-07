const btnDecrement = document.querySelector('button[data-action="decrement"]');
const btnIincrement = document.querySelector('button[data-action="increment"]');
let valueRef = document.getElementById('value');
console.dir(valueRef);
valueRef.textContent = 0;
btnIincrement.addEventListener('click', () => {
	valueRef.textContent = +valueRef.textContent + 1;
	console.log(valueRef.textContent);

	return valueRef.textContent;
});
btnDecrement.addEventListener('click', () => {
	valueRef.textContent -= 1;
	console.log(valueRef.textContent);
	return valueRef.textContent;
});
