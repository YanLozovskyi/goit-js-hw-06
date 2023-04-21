// Находим элементы #name-input и #name-output и сохраняем их в соответствующие переменные
const textInput = document.querySelector("#name-input");
const output = document.querySelector("#name-output");

// Добавляем обработчик события input на элемент #name-input, который вызывает функцию onInputChange
textInput.addEventListener("input", onInputChange);

// Функция onInputChange принимает объект события event в качестве параметра
function onInputChange(event) {
  // Проверяем, если значение поля ввода равно пустой строке, то устанавливаем текст содержимого элемента #name-output равным "Anonymous"
  // В противном случае, устанавливаем текст содержимого элемента #name-output равным значению поля ввода
  output.textContent =
    event.currentTarget.value === "" ? "Anonymous" : event.currentTarget.value;
}
