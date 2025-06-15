// скрипт для кнопки бургер меню
document.querySelector('.burger').addEventListener('click', function () {
  this.classList.toggle('active');
  document.querySelector('.nav').classList.toggle('open')
})
// кнопка

// Создание кнопки
const button = document.createElement('button');
button.id = 'redirectButton';
button.textContent = 'Перейти в конструктор';

// Добавление обработчика
button.addEventListener('click', () => {
  window.location.href = 'https://example.com'; // Замените на нужный URL
 
});

// Вставка в DOM
document.getElementById('buttonContainer').appendChild(button);

