const inputRef = document.querySelector('#controls > input');
const boxRef = document.querySelector('#boxes');
const btnRenderRef = document.querySelector('button[data-action="render"]');
const btnDestroyRef = document.querySelector('button[data-action="destroy"]');
let amount = 0;
let itemWidth = 20;
let itemHeight = 20;

function createBoxes(amount) {
	amount = +inputRef.value;

	for (let i = 1; i <= amount; i++) {
		let item = document.createElement('div');
		itemWidth += 10;
		itemHeight += 10;
		item.style.height = itemHeight + 'px';
		item.style.width = itemWidth + 'px';
		item.style.backgroundColor = '#' + (Math.random().toString(16) + '000000').substring(2, 8).toUpperCase();
		boxRef.append(item);
	}
}
function destroyBoxes() {
	boxRef.innerHTML = '';
	itemWidth = 20;
	itemHeight = 20;
	inputRef.value = 0;
}
btnRenderRef.addEventListener('click', () => createBoxes(amount));

btnDestroyRef.addEventListener('click', destroyBoxes);
