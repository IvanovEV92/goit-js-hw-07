const categorysList = document.getElementById('categories').children;

const arrayElements = [...categorysList];
console.log(`В списке ${categorysList.length} категории`);

function getNameCategory(array) {
	array.forEach((item) => {
		console.log('Категория: ' + item.firstElementChild.textContent + '\nКоличество элементов: ' + item.lastElementChild.children.length);
	});
}

getNameCategory(arrayElements);
