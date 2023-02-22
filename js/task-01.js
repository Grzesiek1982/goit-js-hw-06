const numberOfCategories = document.querySelectorAll("li.item");
console.log(`Number of categries: ${numberOfCategories.length}`);

numberOfCategories.forEach(function (element) {
  console.log(`Category: ${element.firstElementChild.textContent}`);
  console.log(`Elements: ${element.lastElementChild.children.length}`);
});
