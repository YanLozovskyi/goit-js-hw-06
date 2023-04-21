// Создаем объект refs, который содержит ссылки на элементы интерфейса
const refs = {
  btnDecrement: document.querySelector('button[data-action="decrement"]'), // Кнопка уменьшения значения
  btnIncrement: document.querySelector('button[data-action="increment"]'), // Кнопка увеличения значения
  span: document.querySelector("#value"), // Элемент, в котором будет отображаться значение
};

let counterValue = 0; // Начальное значение счетчика

// Добавляем обработчик события "click" на кнопку уменьшения значения
refs.btnDecrement.addEventListener("click", onBtnDecrementClick);

// Добавляем обработчик события "click" на кнопку увеличения значения
refs.btnIncrement.addEventListener("click", onBtnIncrementClick);

// Функция обработчика события для кнопки уменьшения значения
function onBtnDecrementClick() {
  counterValue -= 1; // Уменьшаем значение счетчика на 1
  refs.span.textContent = counterValue; // Обновляем отображение значения на странице
  console.log(counterValue); // Выводим значение счетчика в консоль
}

// Функция обработчика события для кнопки увеличения значения
function onBtnIncrementClick() {
  counterValue += 1; // Увеличиваем значение счетчика на 1
  refs.span.textContent = counterValue; // Обновляем отображение значения на странице
  console.log(counterValue); // Выводим значение счетчика в консоль
}
