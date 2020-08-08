const draggableElement = document.querySelector('#myDraggableElement');

// This makes the black box draggable
draggableElement.addEventListener('dragstart', (e) => {
  e.dataTransfer.setData('text/plain', draggableElement.id)
});



// For selecting every element with a class of drop-zone
for (const dropZone of document.querySelectorAll('.drop-zone')) {
  // When the draggable element is over the drop zone
  dropZone.addEventListener('dragover', e => {
    e.preventDefault();
    dropZone.classList.add('drop-zone--over')
  });

    // When the draggable element is dropped into a drop zone
  dropZone.addEventListener('drop', e => {
    e.preventDefault();
    
    const droppedElementId = e.dataTransfer.getData('text/plain');
    const droppedElement = document.getElementById(droppedElementId);

    // This moves the box from one point to another
    dropZone.appendChild(droppedElement)
    dropZone.classList.remove('drop-zone--over')
    
  });
}