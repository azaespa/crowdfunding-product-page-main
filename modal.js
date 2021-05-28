const INTRODUCTION_SECTION = document.querySelector('.introduction-section'),
 BACK_THIS_PROJECT_BTN = INTRODUCTION_SECTION.querySelector('.back-this-project'),
 MODAL_PROJECT = document.querySelector('.modal.project'),
 CLOSE_MODAL_PROJECT = MODAL_PROJECT.querySelector('.close-modal'),
 MODAL_CARD_SELECT_LIST = MODAL_PROJECT.querySelectorAll('.modal-content-card-select');

let lastSelect = "";

function removePledgeSection(node) {
 const CONTAINER = node.closest('.modal-content-card-container');
 const PLEDGE_SECTION = CONTAINER.querySelector(".modal-content-pledge-container");
 PLEDGE_SECTION.classList.remove("showing");
}

function showPledgeSection(node){
 const CONTAINER = node.closest('.modal-content-card-container');
 const PLEDGE_SECTION = CONTAINER.querySelector(".modal-content-pledge-container");
 PLEDGE_SECTION.classList.add("showing");
}

function styleUnselectedPledge(node){
 node.closest('.modal-content-card-container').classList.remove("selected-card");
}

function styleSelectedPledge(node){
 node.closest('.modal-content-card-container').classList.add("selected-card");
}

function handleSelect(node) {
 const SELECT = node.target;
 if(SELECT.checked === true) {
  if (lastSelect !== "") { //remove selected card style
   styleUnselectedPledge(lastSelect); 
   removePledgeSection(lastSelect);
  }
  styleSelectedPledge(SELECT);
  showPledgeSection(SELECT);
  lastSelect = SELECT; //store most recent selected node
 }
}

function handleUnselect() {
 SELECT.closest('.modal-content-card-container').classList.remove("selected-card");
}

function modalCardSelectEventListener(nodeList){
 for(let i=0; i <nodeList.length; i++){
  nodeList[i].addEventListener("change", handleSelect);
  if (nodeList[i].checked === true) {
   styleSelectedPledge(nodeList[i]);
   lastSelect = nodeList[i];
  }
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