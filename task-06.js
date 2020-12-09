const getInputValue = document.getElementById('validation-input');

getInputValue.addEventListener('blur', () => {
	if (event.target.value.length !== +getInputValue.getAttribute('data-length')) {
		getInputValue.classList.add('invalid');
		getInputValue.classList.remove('valid');
	} else {
		getInputValue.classList.add('valid');
		getInputValue.classList.remove('invalid');
	}
});
