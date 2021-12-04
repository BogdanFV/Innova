let menu = document.getElementById("mobile-menu");
let buttonCover = document.getElementById("mobile-menu-cover");
let menuButton = document.getElementById("mobile-menu-button");
let pileIcon = document.getElementById("card-view-pile");
let blocksIcon = document.getElementById('card-view-blocks');
let cards = document.getElementById("cards");
let CF = 1;
let paddingCard = 1;
if(window.screen.width > 1024){
  paddingCard = 100;
} else if((window.screen.width > 768)&&(window.screen.width < 1024)){
  paddingCard = 75;
} else if(window.screen.width < 768){
  paddingCard = 50;
}
console.log(window.screen.width);
menuButton.addEventListener('click', () => {
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

function cardsRotation(){
  
  if(cards.classList.contains('pile-cards')){
    cards.firstElementChild.style = "z-index:"+ cards.children.length + ";" + " transform: rotate(0deg);" + " top:" + paddingCard *  cards.children.length + "px";

    for(let i = 1; i < cards.children.length; i++){
      if(i % 2 == 0){
        cards.children[i].style = "z-index:"+ (cards.children.length - i) + ";" + " transform: rotate(1.5deg);" + " top:" + paddingCard * (cards.children.length - i) + "px; " + "height: " + cards.firstElementChild.offsetHeight + "px;";
      } else{
        cards.children[i].style = "z-index:"+ (cards.children.length - i) + ";" + " transform: rotate(-1.5deg);" + " top:" + paddingCard * (cards.children.length - i) + "px; " + "height: " + cards.firstElementChild.offsetHeight + "px;";
      }
    }
    cards.style.height = cards.firstElementChild.offsetHeight + ((cards.children.length + 1) * paddingCard) + "px" ;
  }
}
function straightCards(){
  if(!cards.classList.contains('pile-cards')){
    for(let i = 0; i < cards.children.length; i++){
      cards.children[i].style = "transform: rotate(0deg);"
    }
    cards.style.height = "auto";
  }
}

function prependItem(){
  let testingCards = document.querySelectorAll('.pile-cards > .card');
  for (let i = 0; i < cards.children.length; i++) {
    testingCards[i].addEventListener('click', () => {
      if(cards.classList.contains('pile-cards')){
        cards.prepend(testingCards[i]);
        cardsRotation()
      }
    });
  }
}

pileIcon.addEventListener('click', () => {
  cards.classList.add('pile-cards');
  pileIcon.style.fill = "#FFA72A"
  blocksIcon.style.fill = "#EDEDED"
  prependItem()
  cardsRotation()
});

blocksIcon.addEventListener('click', () => {
  cards.classList.remove('pile-cards')
  blocksIcon.style.fill = "#FFA72A"
  pileIcon.style.fill = "#EDEDED"
  straightCards();
});



