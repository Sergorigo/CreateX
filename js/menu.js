const menuBurger = document.querySelector('.menu__burger');
const menuList = document.querySelector('.menu__list');
if (menuBurger) {
   menuBurger.addEventListener("click", function (e) {
      document.body.classList.toggle('_lock');
      menuBurger.classList.toggle('_active');
      menuList.classList.toggle('_active');
   });
}