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

 document.addEventListener('DOMContentLoaded', function() {
            const slider = document.querySelector('.slider');
            const slides = document.querySelectorAll('.slide');
            const prevBtn = document.querySelector('.prev-btn');
            const nextBtn = document.querySelector('.next-btn');
            const dots = document.querySelectorAll('.dot');
            
            let currentSlide = 0;
            const slideCount = slides.length;
            
            // Инициализация слайдера
            function initSlider() {
                updateSlider();
            }
            
            // Переход к определенному слайду
            function goToSlide(slideIndex) {
                currentSlide = (slideIndex + slideCount) % slideCount;
                updateSlider();
            }
            
            // Обновление отображения слайдера
            function updateSlider() {
                slider.style.transform = `translateX(-${currentSlide * 100}%)`;
                
                // Обновление активной точки
                dots.forEach((dot, index) => {
                    dot.classList.toggle('active', index === currentSlide);
                });
            }
            
            // Переход к следующему слайду
            function nextSlide() {
                goToSlide(currentSlide + 1);
            }
            
            // Переход к предыдущему слайду
            function prevSlide() {
                goToSlide(currentSlide - 1);
            }
            
            // Автоматическое перелистывание
            let slideInterval = setInterval(nextSlide, 5000);
            
            // Остановка авто-перелистывания при наведении
            const sliderContainer = document.querySelector('.slider-container');
            sliderContainer.addEventListener('mouseenter', () => {
                clearInterval(slideInterval);
            });
            
            sliderContainer.addEventListener('mouseleave', () => {
                slideInterval = setInterval(nextSlide, 5000);
            });
            
            // Обработчики событий для кнопок
            nextBtn.addEventListener('click', nextSlide);
            prevBtn.addEventListener('click', prevSlide);
            
            // Обработчики событий для точек
            dots.forEach((dot, index) => {
                dot.addEventListener('click', () => {
                    goToSlide(index);
                });
            });
            
            // Инициализация слайдера
            initSlider();
        });

