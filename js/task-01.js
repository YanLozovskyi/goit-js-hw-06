const listEl = document.querySelector("#categories");
const itemEl = listEl.querySelectorAll(".item");

console.log(`Number of categories: ${itemEl.length}`);

itemEl.forEach((item) => {
  const nameEl = item.firstElementChild.textContent;
  const numberOfEl = item.lastElementChild.children.length;
  console.log(`Category: ${nameEl}`);
  console.log(`Elements: ${numberOfEl}`);
});