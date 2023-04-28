// Получаем элемент, который мы будем анимировать
const element = document.getElementyId("1234");

// Устанавливаем интервал в 3 секунды
setInterval(function() {
  // Добавляем класс для анимации "bounce"
element.classList.add("bounce");

  // Ждем 1.5 секунды, чтобы анимация завершилась
setTimeout(function() {
    // Удаляем класс для анимации "bounce"
    element.classList.remove("bounce");
}, 1500);
}, 3000);

