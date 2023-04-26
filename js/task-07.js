// создаём объект refs, содержащий ссылки на элементы input#font-size-control и span#text
const refs = {
  input: document.querySelector("#font-size-control"),
  span: document.querySelector("#text"),
};

// добавляем обработчик события input на элемент input#font-size-control
refs.input.addEventListener("input", onValueInputChange);
// устанавливаем дефолтное значение размера шрифта для элемента span#text
refs.span.style.fontSize = `${refs.input.value}px`;
// определяем функцию onValueInputChange, которая будет вызвана при каждом изменении значения в input#font-size-control
function onValueInputChange(event) {
  // получаем текущее значение input#font-size-control
  const inputValue = event.currentTarget.value;

  // устанавливаем динамическое значение размера шрифта для элемента span#text, используя свойство style.fontSize
  refs.span.style.fontSize = `${inputValue}px`;
}
