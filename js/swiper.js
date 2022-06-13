// Подключение слайдера
new Swiper('.best-tutors__slider', {
   // Настройка кнопок навигации
   navigation: {
      nextEl: '.right-slide',
      prevEl: '.left-slide'
   },
   // Задаю возможность перемещения к слайду по клику
   slideToClickedSlide: true,
   // Задаю настройку кол-ва слайдов к показу
   slidesPerView: 4,
   // Устанавливаю количество слайдов к прокрутке при клике
   slidesPerGroup: 2,
   // Задаю настройку для отключения слайдера, при условии нехватки слайдов для прокрутки
   watchOverflow: true,
   // Устанавливаю бесконечное прокурчивание слайдов
   loop: true,
   // Настраиваю параметры автопрокрутки слайдов 
   autoplay: {
      // Таймаут прокрутки слайдов
      delay: 3000,
      // Настройка остановки автопрокрутки, при вмешательстве пользователя
      disableOnInteraction: true,
   },
   // Определяю параметр плавности прокрутки
   speed: 1200,
});
