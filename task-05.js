const getInputValue = document.querySelector('#name-input');
const nameLabelRef = document.querySelector('#name-output');
console.dir(getInputValue);
console.dir(nameLabelRef);

getInputValue.addEventListener('input', () => (nameLabelRef.textContent = event.target.value ? event.target.value : 'незнакомец'));
