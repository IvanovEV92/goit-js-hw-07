const elementList = document.getElementById('ingredients');
const ingredients = ['Картошка', 'Грибы', 'Чеснок', 'Помидоры', 'Зелень', 'Приправы'];
const itemElementList = ingredients.reduce((acc, ingredient) => {
	const newEl = document.createElement('li');
	newEl.textContent = ingredient;
	acc.push(newEl);
	return acc;
}, []);

elementList.append(...itemElementList);
