const viewList = document.querySelector('.long-events-list__switcher-link-list');
const viewGrid = document.querySelector('.long-events-list__switcher-link-grid');
const cardList = document.querySelectorAll('.row');
const cardGrid = document.querySelectorAll('.column');
const cardFlex = document.querySelector('.list-events');
if (viewList) {
   viewList.addEventListener("click", function (e) {
      for (var i = 0; i < cardList.length; i++) {
         cardList[i].classList.toggle('_active');
      }
      cardFlex.classList.remove('_flex');
      viewList.classList.toggle('_active');
      viewGrid.classList.remove('_active');
      for (var i = 0; i < cardGrid.length; i++) {
         cardGrid[i].classList.remove('_active');
      }
   });
}
if (viewGrid) {
   viewGrid.addEventListener("click", function (f) {
      for (var i = 0; i < cardGrid.length; i++) {
         cardGrid[i].classList.toggle('_active');
      }
      cardFlex.classList.toggle('_flex');
      viewGrid.classList.toggle('_active');
      viewList.classList.remove('_active');
      for (var i = 0; i < cardList.length; i++) {
         cardList[i].classList.remove('_active');
      }
   });
}
