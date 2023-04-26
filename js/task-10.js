// объект со всеми ссылками на элементы
const refs = {
  input: document.querySelector("#controls input"),
  buttonCreate: document.querySelector("button[data-create]"),
  buttonDestroy: document.querySelector("button[data-destroy]"),
  boxesEl: document.querySelector("#boxes"),
};

// Задаём чутка базовых стилей
const BoxStyles = refs.boxesEl.style;
BoxStyles.display = "flex";
BoxStyles.gap = "10px";
BoxStyles.paddingTop = "20px";

// функция, возвращающая случайный цвет в формате HEX
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

// добавляем обработчик на кнопку "Create"
refs.buttonCreate.addEventListener("click", () => {
  // перед созданием новых элементов удаляем все старые
  destroyBoxes();
  // создаем новые элементы в количестве, указанном в input
  createBoxes(refs.input.value);
});

// добавляем обработчик на кнопку "Destroy"
refs.buttonDestroy.addEventListener("click", destroyBoxes);

// функция создания новых элементов
function createBoxes(amount) {
  let defaultSize = 30;
  let boxesMarkUp = "";
  // создаем элементы в цикле
  for (let i = 0; i < amount; i += 1) {
    // получаем случайный цвет для каждого элемента
    const color = getRandomHexColor();
    // создаем HTML-разметку для элемента с заданным размером и цветом
    boxesMarkUp += `<div style="width: ${defaultSize}px; height: ${defaultSize}px; background-color: ${color}"></div>`;
    // увеличиваем размер для следующего элемента на 10px
    defaultSize += 10;
  }
  // добавляем HTML-разметку всех элементов в контейнер "boxesEl"
  refs.boxesEl.insertAdjacentHTML("afterbegin", boxesMarkUp);
}

// функция удаления всех элементов
function destroyBoxes() {
  // очищаем HTML-содержимое контейнера "boxesEl"
  refs.boxesEl.innerHTML = "";
}
