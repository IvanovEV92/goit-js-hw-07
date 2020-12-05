const getInputValue = document.getElementById('validation-input');

getInputValue.addEventListener('input', (event) =>
	event.target.value.length < getInputValue.getAttribute('data-length')
		? getInputValue.classList.add('invalid')
		: getInputValue.classList.replace('invalid', 'valid')
);
