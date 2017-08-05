  // Open/Close the popup
  let modal = document.getElementById("modal");
  let modal_img=document.getElementById("modal-img");
  let button_test = document.getElementById("button_pop");
  let button_ok= document.getElementById("button_ok");
  let button_cl= document.getElementById("button_cl");

  let span= document.getElementsByClassName("modal-close")[0];

  button_cl.onclick = function(){
    modal.style.display="none";
    parentDisable.style.display="none";
    
  }
  button_ok.onclick = function(){
    modal.style.display="none";
    parentDisable.style.display="none";

  }

  button_test.onclick = function(){
    modal.style.display="block";
    parentDisable.style.display="block";

  }
  span.onclick = function(){
    modal.style.display="none";
    modal_img.display="none";
    parentDisable.style.display="none";

  }

// Drag function for the modals
var draggableElems = document.querySelectorAll('.draggable');
// array of Draggabillies
var draggies = []
// init Draggabillies
for ( var i=0, len = draggableElems.length; i < len; i++ ) {
  var draggableElem = draggableElems[i];
  var draggie = new Draggabilly( draggableElem, {
    containment: ".jim-workspace"
  });
  draggies.push( draggie );
}
function listener(/* parameters */) {
  console.log( 'eventName happened', this.position.x, this.position.y );
}
// bind event listener
draggie.on( 'eventName', listener );
// unbind event listener
draggie.off( 'eventName', listener );
// bind event listener to trigger once. note ONCE not ONE or ON
draggie.once( 'eventName', function() {
  console.log('eventName happened just once');
});

//TODO: add the double-click event for the toolbar
//TODO: add the shortcuts event (zoom)
//TODO: add a function to resize manually the popup
//TODO: add a function to choose between the "normal" mode:
  // one popup at a time + background disabled
//      or the "Blender" mode:
  // more than one pop up, with the node connexion and a live preview
//TODO: connect the thumbnail panel with the open image