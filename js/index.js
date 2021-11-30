/*let menuParent = document.querySelector('.header-menu');
let menuOption = menuParent.querySelectorAll('.menu-option');
menuParent.addEventListener('click', (event) => {
    let target = event.target;
    if(target.classList.contains('menu-option')) {
      for(let i = 0; i < menuOption.length; i++) {
        menuOption[i].classList.remove('active');
      }
      target.classList.add('active');
    }
});
*/
let menu = document.getElementById("mobile-menu");
let buttonCover = document.getElementById("mobile-menu-cover");
let menuButton = document.getElementById("mobile-menu-button");
menuButton.addEventListener('click', (event) => {
  let target = event.target;
  if(menu.classList.contains('hidden-menu')){
    menu.classList.remove('hidden-menu');
    menuButton.style ="background:#FFA72A";
    menuButton.style.borderRadius ="9px 9px 0px 0px";
    buttonCover.style.borderRadius ="9px 9px 0px 0px";
  } else{
    menu.classList.add('hidden-menu');
    menuButton.style ="background:#C4C4C4";
    buttonCover.style.borderRadius ="9px";
    menuButton.style.borderRadius ="9px";
  }
});