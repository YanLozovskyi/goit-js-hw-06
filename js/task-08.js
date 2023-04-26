// Получаем форму логина из DOM
const loginForm = document.querySelector("form.login-form");

// Вешаем обработчик события "submit" на форму логина
loginForm.addEventListener("submit", onFormSubmit);

// Функция-обработчик события "submit"
function onFormSubmit(event) {
  // Предотвращаем действие по умолчанию для события "submit" (перезагрузка страницы)
  event.preventDefault();

  // Получаем значения полей "email" и "password"
  const email = loginForm.elements.email.value;
  const password = loginForm.elements.password.value;

  // Проверяем, заполнены ли поля "email" и "password". Если хотя бы одно из них пустое, выводим предупреждение
  // и прерываем выполнение функции. Иначе выводим в консоль объект с введенными данными и сбрасываем значения
  // полей формы.
  !email || !password
    ? alert("Please fill in all fields")
    : (console.log({ email, password }), loginForm.reset());
}
