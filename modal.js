const INTRODUCTION_SECTION = document.querySelector('.introduction-section'),
 BACK_THIS_PROJECT_BTN = INTRODUCTION_SECTION.querySelector('.back-this-project'),
 MODAL_PROJECT = document.querySelector('.modal.project'),
 CLOSE_MODAL_PROJECT = MODAL_PROJECT.querySelector('.close-modal'),
 MODAL_CARD_SELECT_LIST = MODAL_PROJECT.querySelectorAll('.modal-content-card-select'),
 PLEDGE_SUBMIT_LIST = MODAL_PROJECT.querySelectorAll('.pledge-submit');
 MODAL_SUCCESS = document.querySelector('.modal.success'),
 MODAL_SUCCESS_BTN = MODAL_SUCCESS.querySelector('.success-button');
 
let lastSelect = "";

function paintModalSuccess(){
 topFunction();
 MODAL_SUCCESS.classList.add("showing-modal");
 MODAL_PROJECT.classList.remove("showing-modal");
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
  if (nodeList[i].checked === true) {
   styleSelectedPledge(nodeList[i]);
   showPledgeSection(nodeList[i]);
   lastSelect = nodeList[i];
  }
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

function paintModal() {
 topFunction();
 MODAL_PROJECT.classList.add("showing-modal");
 CLOSE_MODAL_PROJECT.addEventListener("click", handleCloseModal);
 modalCardSelectEventListener(MODAL_CARD_SELECT_LIST);
 pledgeSubmitEventListener(PLEDGE_SUBMIT_LIST)
}

function handleClick() {
 paintModal();

}

function init() {
 BACK_THIS_PROJECT_BTN.addEventListener('click', handleClick);
}

init();