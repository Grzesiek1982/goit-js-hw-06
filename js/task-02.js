const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

for (let i = 0; i <= ingredients.length; i += 1) {
  const name = ingredients[i];
  const itemEl = document.createElement("li");
  itemEl.classList.add("item");
  itemEl.textContent = `${name}`;

  const listEl = document.getElementById("ingredients");
  listEl.append(itemEl);
}
