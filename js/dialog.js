const dialogLinks = document.querySelectorAll('.dialog-link'); // получаю все объекты с классом "dialog-link"
const body = document.querySelector('body'); // получаю в переменную тег body, для того, чтобы блокировать скрол внутри него
const lockPadding = document.querySelectorAll(".lock-padding"); // получаю все объекты с классом "lock-padding"


let unlock = true; // переменная нужна, чтобы не было двойных нажатий

const timeout = 500; // таймаут указан в соответствии со свойством transition

if (dialogLinks.length > 0) {
   for (let index = 0; index < dialogLinks.length; index++) {
      const dialogLink = dialogLinks[index];
      // проверка на наличие 
      dialogLink.addEventListener("click", function (e) { // вешаю событие при клике
         const signName = dialogLink.getAttribute('href').replace('#', ''); // беру значение атрибута href без #
         const curentSign = document.getElementById(signName); // далее получаю сам объект Sign в переменную 
         signOpen(curentSign); // полученный объект отправляю в функцию open
         e.preventDefault(); // блокировка работы ссылки, чтобы страница не перезагружалась.
      });
   }
}

const signCloseIcon = document.querySelectorAll('.close-dialog');
if (signCloseIcon.length > 0) {
   for (let index = 0; index < signCloseIcon.length; index++) {  // цикл проверки на наличие объектов
      const el = signCloseIcon[index]; // получаю конткретный объект
      el.addEventListener('click', function (e) { // вешаю на него событие по клику
         signCloseIcon(el.closest('.sign-in')); // при событии клик отправляю в функцию объект, который яв-ся ближайшим родителем с классом sign-in
         e.preventDefault(); // запрет дальнейшей работы ссылки
      });
   }
}

function signOpen(curentSign) { // передаю в функцию готовый объект
   if (curentSign && unlock) { // проверяю наличие объекта, и открыта ли переменная unlock(по умолчанию открыта)
      const signActive = document.querySelector('.sign-in.open'); // получаю объект окна, у которого есть класс .open
      if (signActive) {
         signCloseIcon(signActive, false);// если он существует, то закрыть его
      } else {
         bodyLock(); // если нет, скрол блокируется
      }
      curentSign.classList.add('open');
      curentSign.addEventListener("click", function (e) {
         if (!e.target.closest('.sign-in__content')) {
            signCloseIcon(e.target.closest('.sign-in'));
         }
      });
   }
}