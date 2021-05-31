const INTRODUCTION_SECTION = document.querySelector('.introduction-section'),
 BACK_THIS_PROJECT_BTN = INTRODUCTION_SECTION.querySelector('.back-this-project'),
 ABOUT_SECTION = document.querySelector('.about-section'),
 PLEDGE_BTN_LIST = ABOUT_SECTION.querySelectorAll('.about-section-card-button'),
 MODAL_PROJECT = document.querySelector('.modal.project'),
 CLOSE_MODAL_PROJECT = MODAL_PROJECT.querySelector('.close-modal'),
 MODAL_CARD_SELECT_LIST = MODAL_PROJECT.querySelectorAll('.modal-content-card-select'),
 PLEDGE_SUBMIT_LIST = MODAL_PROJECT.querySelectorAll('.pledge-submit');
 MODAL_SUCCESS = document.querySelector('.modal.success'),
 MODAL_SUCCESS_BTN = MODAL_SUCCESS.querySelector('.success-button');
 
let lastSelect = "";

function paintModalSuccess(){
 MODAL_PROJECT.classList.remove("showing-modal");
 MODAL_SUCCESS.classList.add("showing-modal");
 topFunction();
 MODAL_SUCCESS_BTN.addEventListener('click', handleCloseModal);
}

function handleSubmit(event){
 paintModalSuccess();
}

function pledgeSubmitEventListener(nodeList){
 for(let i=0; i <nodeList.length; i++){
  nodeList[i].addEventListener("click", handleSubmit);
 }
}

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
  styleSelectedPledge(SELECT);
  showPledgeSection(SELECT);
  if (lastSelect !== "") { //remove selected card style
   styleUnselectedPledge(lastSelect); 
   removePledgeSection(lastSelect);
  }
  lastSelect = SELECT; //store most recent selected node
 }
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

function handleCloseModal(event) {
 const currentBtn = event.target;
 const currentModal = currentBtn.closest('.modal');
 currentModal.classList.remove("showing-modal");
}

function resetAllStyle(nodeList){
 for(let i=0; i<nodeList.length; i++){
  nodeList[i].checked = false;
  styleUnselectedPledge(nodeList[i]); 
  removePledgeSection(nodeList[i]);
 }
}

function paintModal(ABOUT_BTN) {
 topFunction();
 resetAllStyle(MODAL_CARD_SELECT_LIST);
 MODAL_PROJECT.classList.add("showing-modal");
 CLOSE_MODAL_PROJECT.addEventListener("click", handleCloseModal);
 modalCardSelectEventListener(MODAL_CARD_SELECT_LIST);

 pledgeSubmitEventListener(PLEDGE_SUBMIT_LIST)
 switch(true){
  case ABOUT_BTN.id === "bamboo-pledge-btn":
   MODAL_PROJECT.querySelector("#bamboo-select").checked = true;
   styleSelectedPledge(MODAL_PROJECT.querySelector("#bamboo-select"));
   showPledgeSection(MODAL_PROJECT.querySelector("#bamboo-select"));
   lastSelect = MODAL_PROJECT.querySelector("#bamboo-select");
   break;
  case ABOUT_BTN.id === "black-edition-pledge-btn":
    MODAL_PROJECT.querySelector("#black-edition-select").checked = true;
    styleSelectedPledge(MODAL_PROJECT.querySelector("#black-edition-select"));
    showPledgeSection(MODAL_PROJECT.querySelector("#black-edition-select"));
    lastSelect = MODAL_PROJECT.querySelector("#black-edition-select");
    break;
  default:
   break;
 }
}

function handleClick() {
 paintModal(BACK_THIS_PROJECT_BTN);

}

function handleSelectReward(event){
 const BUTTON = event.target;
 const BUTTON_ID = BUTTON.id;
 paintModal(BUTTON);
}

function pledgeBtnEventListener(nodeList){
 for(let i=0; i<nodeList.length; i++){
  nodeList[i].addEventListener("click", handleSelectReward);
 }
}

function init() {
 BACK_THIS_PROJECT_BTN.addEventListener('click', handleClick);
 pledgeBtnEventListener(PLEDGE_BTN_LIST);
}

init();