let currentDroppable = null;
var Inside = false;

cake.onmousedown = function(event) {
    Inside = false;
    let shiftX = event.clientX - cake.getBoundingClientRect().left;
    let shiftY = event.clientY - cake.getBoundingClientRect().top;

    var cakeBox = document.getElementById("cakeBox");

    cake.style.position = 'absolute';
    cake.style.zIndex = 1000;
    cakeBox.append(cake);

    moveAt(event.pageX, event.pageY);

    function moveAt(pageX, pageY) {
        cake.style.left = pageX - shiftX + 'px';
        cake.style.top = pageY - shiftY + 'px';
    }

  function onMouseMove(event) {
    moveAt(event.pageX, event.pageY);

    cake.hidden = true;
    let elemBelow = document.elementFromPoint(event.clientX, event.clientY);
    cake.hidden = false;

    if (!elemBelow) return;

    let droppableBelow = elemBelow.closest('.droppable');
    if (currentDroppable != droppableBelow) {
      if (currentDroppable) { // null when we were not over a droppable before this event
        leaveDroppable(currentDroppable, cake);
        Inside = false;
        console.log(Inside)
      }
      currentDroppable = droppableBelow;
      if (currentDroppable) { // null if we're not coming over a droppable now
        // (maybe just left the droppable)
        enterDroppable(currentDroppable, cake);
        Inside = true;
        console.log(Inside)
      }
    }
  }

  document.addEventListener('mousemove', onMouseMove);

  cake.onmouseup = function() {
    if(Inside == true){
        console.log("syöty")
    }
    else{
        console.log("ei syöty")
    }
    document.removeEventListener('mousemove', onMouseMove);
    cake.onmouseup = null;
    cake.style.top = 0 + "px" 
    cake.style.left = 100 + "px"
  };

};

function enterDroppable(elem, obj) {
  //elem.style.background = 'pink';
  
}

function leaveDroppable(elem, obj) {
  elem.style.background = '';
  
}

cake.ondragstart = function() {
  return false;
};

