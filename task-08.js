const inputRef = document.querySelector('#controls > input');
const boxRef = document.querySelector('#boxes');
const btnRenderRef = document.querySelector('button[data-action="render"]');
const btnDestroyRef = document.querySelector('button[data-action="destroy"]');
let amount = 0;
let itemWidth = 20;
let itemHeight = 20;
function createBoxes(amount) {
	amount = +inputRef.value;
	let arr = [];
	for (let i = 1; i <= amount; i++) {
		itemWidth += 10;
		itemHeight += 10;
		const newEl = document.createElement('div');
		newEl.style.height = itemHeight + 'px';
		newEl.style.width = itemWidth + 'px';
		newEl.style.backgroundColor = '#' + (Math.random().toString(16) + '000000').substring(2, 8).toUpperCase();
		arr.push(newEl);
	}
	boxRef.append(...arr);
}

function destroyBoxes() {
	boxRef.innerHTML = '';
	inputRef.value = '';
	itemWidth = 20;
	itemHeight = 20;
}
btnRenderRef.addEventListener('click', () => createBoxes(amount));
btnDestroyRef.addEventListener('click', destroyBoxes);
