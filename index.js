
$(document).on('click','.container',function(event) {
    moveAndAnimate()
});

$(document).on('click','.cloned-class',function(event) {
    moveAndAnimate()
});


$(document).on("click",'.move',function() { // use the one in the useState hook to handle active
    console.log($(this).attr('id'));
    localStorage.setItem('id',$(this).attr('id'));
})

function moveAndAnimate() {
    var movableDiv = document.getElementById(localStorage.getItem('id'));
    var divCopy = movableDiv.cloneNode(true);
    var rect = movableDiv.getBoundingClientRect();
  
    divCopy.style.position = 'absolute';
    divCopy.classList.add('cloned-class');
    divCopy.style.left = rect.left + 'px';
    divCopy.style.top = rect.top + 'px';
    document.body.appendChild(divCopy);
  
    var targetDiv = document.getElementById('destinationDiv'); // Replace 'yourTargetDivId' with the actual ID of your target div
    animateCopy(divCopy, targetDiv);
}

function animateCopy(element, targetDiv) {
    var rect = targetDiv.getBoundingClientRect();
    var offsetX = rect.left - element.getBoundingClientRect().left;
    var offsetY = rect.top - element.getBoundingClientRect().top;
  
    element.style.transition = 'transform 0.5s ease-in-out';
    element.style.transform = 'translate(' + offsetX + 'px, ' + offsetY + 'px)';
  
//     element.addEventListener('transitionend', function() {
//         element.style.display = 'none';
//     });
// }

  