// создаю группу переменных
// переменная элемента bullet
let bullets = document.getElementsByClassName('bullet-navigation__item');
let bulletsArea = document.getElementsByClassName('bullet-navigation')[0];
// переменная карточки слайда
let slides = document.getElementsByClassName('block-feedback__testimonal-container');
// переменные для кнопок переключения слайдов
let prevBtn = document.getElementById('button-left');
let nextBtn = document.getElementById('button-right');
let slideIndex = 1;
// Теперь напишу функцию, которая будет показывать слайдер, в ней я создам несколько условных операторов.
function showSlides(n) {
   if (n < 1) {
      slideIndex = slides.length;
   } else if (n > slides.length) {
      slideIndex = 1;
   }
   // Затем, прописываю циклы для скрытия неактивных слайдов и убрать класс active с буллетов
   for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = 'none';
   }
   for (let i = 0; i < bullets.length; i++) {
      bullets[i].classList.remove('active');
   }
   // Теперь нужно показать активный слайд, и привязать соответствующий класс к булету
   slides[slideIndex - 1].style.display = 'block';
   bullets[slideIndex - 1].classList.add('active');
}

// Теперь вызываю функцию и передаю ей параметр slideIndex
showSlides(slideIndex);

// Далее прописываю функцию, которая будет листать слайдер
function plusSlides(n) {
   // Вызываю функцию showSlides и добавляю к ней параметр n
   showSlides(slideIndex += n);
}
// Создаю еще одну функцию, для переключения слайдов по клику на буллет
function currentSlide(n) {
   showSlides(slideIndex = n);
}
// Осталось повесить на кнопки и буллеты обработчики событий
prevBtn.onclick = function () {
   plusSlides(-1);
}
nextBtn.onclick = function () {
   plusSlides(1);
}
bulletsArea.onclick = function (e) {
   // создаю цикл, который будет перебирать элементы массива bullets
   for (let i = 0; i < bullets.length + 1; i++) {
      // Прописываю условный оператор для функции е, который будет выполняться только если значение класса по клику будет равно 'bullet-navigation__item';
      if (e.target.classList.contains('bullet-navigation__item') && e.target == bullets[i - 1]) { // Добавляю параметр проверки
         currentSlide(i);
      }
   }
}
