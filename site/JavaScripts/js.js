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


//  слайдер

// ✅ 1. Ожидаем полной загрузки DOM
document.addEventListener('DOMContentLoaded', function () {
    // ✅ 2. Проверяем, что элементы существуют
    const slider = document.querySelector('.slider');
    const slides = document.querySelectorAll('.slide');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    const dots = document.querySelectorAll('.dot');

    if (!slider || !slides.length || !prevBtn || !nextBtn || !dots.length) {
        console.error("Один из элементов слайдера не найден!");
        return; // Останавливаем скрипт, если что-то не загрузилось
    }

    let currentSlide = 0;
    const slideCount = slides.length;

    function initSlider() {
        updateSlider();
    }

    function goToSlide(slideIndex) {
        currentSlide = (slideIndex + slideCount) % slideCount;
        updateSlider();
    }

    function updateSlider() {
        slider.style.transform = `translateX(-${currentSlide * 100}%)`; // Теперь slider точно существует

        dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === currentSlide);
        });
    }

    function nextSlide() {
        goToSlide(currentSlide + 1);
    }

    function prevSlide() {
        goToSlide(currentSlide - 1);
    }

    // Автопрокрутка
    let slideInterval = setInterval(nextSlide, 5000);

    // Пауза при наведении
    const sliderContainer = document.querySelector('.slider-container');
    if (sliderContainer) {
        sliderContainer.addEventListener('mouseenter', () => clearInterval(slideInterval));
        sliderContainer.addEventListener('mouseleave', () => slideInterval = setInterval(nextSlide, 5000));
    }

    // Клики по кнопкам
    nextBtn.addEventListener('click', nextSlide);
    prevBtn.addEventListener('click', prevSlide);

    // Клики по точкам
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => goToSlide(index));
    });

    initSlider();
});

