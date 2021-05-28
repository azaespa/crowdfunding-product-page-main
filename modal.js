const INTRODUCTION_SECTION = document.querySelector('.introduction-section'),
 BACK_THIS_PROJECT_BTN = INTRODUCTION_SECTION.querySelector('.back-this-project'),
 MODAL_PROJECT = document.querySelector('.modal.project'),
 CLOSE_MODAL_PROJECT = MODAL_PROJECT.querySelector('.close-modal'),
 MODAL_CARD_SELECT_LIST = MODAL_PROJECT.querySelectorAll('.modal-content-card-select');

let lastSelect = "";

function styleUnselectedPledge(node){
 node.closest('.modal-content-card-container').classList.remove("selected-card");
}

function styleSelectedPledge(object){
 object.closest('.modal-content-card-container').classList.add("selected-card");
}

function handleSelect(node) {
 const SELECT = node.target;
 if(SELECT.checked === true) {
  if (lastSelect !== "") styleUnselectedPledge(lastSelect);
  styleSelectedPledge(SELECT)
  lastSelect = SELECT;
 }
}

function handleUnselect() {
 SELECT.closest('.modal-content-card-container').classList.remove("selected-card");
}

function modalCardSelectEventListener(nodeList){
 for(let i=0; i <nodeList.length; i++){
  nodeList[i].addEventListener("change", handleSelect);
 }
}

function topFunction(){
 document.body.scrollTop = 0; // For Safari
 document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

function handleCloseModal() {
 MODAL_PROJECT.classList.remove("showing-modal");
}

function paintModal() {
 topFunction();
 MODAL_PROJECT.classList.add("showing-modal");
 CLOSE_MODAL_PROJECT.addEventListener("click", handleCloseModal);
 modalCardSelectEventListener(MODAL_CARD_SELECT_LIST);
}

function handleClick() {
 paintModal();

}

function init() {
 BACK_THIS_PROJECT_BTN.addEventListener('click', handleClick);
}

init();