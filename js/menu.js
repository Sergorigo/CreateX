// Записываю переменные в константы по именам классов 
const menuBurger = document.querySelector('.menu__burger');
const menuList = document.querySelector('.menu__list');
const menuBody = document.querySelector('.menu__body');
// Создаю условие по клику, в котором добавлять классам модификатор _active в зависимости от состояния. 
if (menuBurger) {
   menuBurger.addEventListener("click", function (e) {
      // Так же повешу модификатор _lock на тег body для запрета скролла страницы во время открытого меню.
      document.body.classList.toggle('_lock');
      menuBurger.classList.toggle('_active');
      menuList.classList.toggle('_active');
      menuBody.classList.toggle('_active');
   });
}
