const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const list = document.querySelector("#ingredients");

// Через MAP
const createListItems = (items) => {
  return items.map((item) => {
    const li = document.createElement("li");
    li.textContent = item;
    li.classList.add("item");

    return li;
  });
};

const items = createListItems(ingredients);
console.log(items);
list.append(...items);

// Через for (старый способ)

// const newArray = [];

// for (let i = 0; i < ingredients.length; i += 1) {
//   const ingredient = ingredients[i];

//   const li = document.createElement('li');
//   li.textContent = ingredient;
//   li.classList.add('item');

//   newArray.push(li);
// }

// console.log(newArray);

// list.append(...newArray);