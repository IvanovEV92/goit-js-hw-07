const getInputValue = document.querySelector('#name-input');
const nameLabelRef = document.querySelector('#name-output');
console.dir(getInputValue);
console.dir(nameLabelRef);

getInputValue.addEventListener('input', (event) => {
	if (event.target.value) {
		nameLabelRef.textContent = event.target.value;
	} else {
		nameLabelRef.textContent = 'незнакомец';
	}
});
