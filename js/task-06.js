// Получаем ссылку на инпут
const textInput = document.querySelector("#validation-input");

// Добавляем обработчик события blur (потери фокуса)
textInput.addEventListener("blur", onInputBlur);

// 1. Через Switch

// Объявляем функцию-обработчик события
function onInputBlur(event) {
  // Удаляем оба класса у инпута, чтобы сбросить стиль перед проверкой
  textInput.classList.remove("valid", "invalid");

  // Используем оператор switch для сравнения длины введенного значения с необходимой длиной, указанной в атрибуте data-length
  switch (event.currentTarget.value.length) {
    // Если значение пустое, ничего не делаем (без break)
    case 0:
      break;
    // Если длина совпадает, добавляем класс "valid" для зеленой рамки
    case Number(textInput.dataset.length):
      textInput.classList.add("valid");
      break;
    // Если длина не совпадает, добавляем класс "invalid" для красной рамки
    default:
      textInput.classList.add("invalid");
      break;
  }
}

// 2. Через тернарный оператор

// // Объявляем функцию-обработчик события
// function onInputBlur(event) {
//   // Удаляем оба класса у инпута, чтобы сбросить стиль перед проверкой
//   textInput.classList.remove("valid", "invalid");

//   // Сравниваем длину введенного значения с необходимой длиной, указанной в атрибуте data-length
//   event.currentTarget.value.length === Number(textInput.dataset.length)
//     ? // Если длина совпадает, добавляем класс "valid" для зеленой рамки
//       textInput.classList.add("valid")
//     : // Если длина не совпадает, добавляем класс "invalid" для красной рамки
//       textInput.classList.add("invalid");
// }