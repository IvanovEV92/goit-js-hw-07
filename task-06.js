const getInputValue = document.getElementById('validation-input');

getInputValue.addEventListener('input', (event) => {
	if (event.target.value.length < getInputValue.getAttribute('data-length')) {
		getInputValue.classList.add('invalid');
	} else {
		getInputValue.classList.replace('invalid', 'valid');
	}
});
