const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

// получаем ссылку на элемент списка ".gallery"
const list = document.querySelector(".gallery");

// устанавливаем стили для списка
list.style.listStyle = "none";
list.style.display = "flex";
list.style.justifyContent = "center";
list.style.gap = "30px";
list.style.padding = "0";

// создаем HTML-разметку для каждого элемента списка
const markup = images
  .map(
    ({ url, alt }) =>
      `<li><img class="gallery-item" src="${url}" alt="${alt}" width="370" height="250"></li>`
  )
  .join("");

// выводим полученную разметку в начало списка ".gallery"
list.insertAdjacentHTML("afterbegin", markup);
