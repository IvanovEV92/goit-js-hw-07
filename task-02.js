const elementList = document.getElementById('ingredients');
console.dir(elementList);

const ingredients = ['Картошка', 'Грибы', 'Чеснок', 'Помидоры', 'Зелень', 'Приправы'];

ingredients.forEach((ingredient) => {
	let itemElementList = document.createElement('li');
	itemElementList.textContent = ingredient;
	elementList.append(itemElementList);
	console.log(itemElementList);
});
console.log(elementList);
