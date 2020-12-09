const categorysList = document.querySelectorAll('.item');
console.log(categorysList);
console.log(`В списке ${categorysList.length} категории`);
function getNameCategory(array) {
	array.forEach((item) =>
		console.log('Категория: ' + item.firstElementChild.textContent + '\nКоличество элементов: ' + item.lastElementChild.children.length)
	);
}

getNameCategory(categorysList);
