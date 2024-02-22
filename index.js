
$(document).on('click','.container',function(event) {

    //var destinationDiv = document.getElementById('destinationDiv');

    var movableDiv = document.getElementById(localStorage.getItem('id'));
    // Create a copy of the div
    var divCopy = movableDiv.cloneNode(true);
  
    // Set the position of the copy to the initial position of the bottom div
    var rect = movableDiv.getBoundingClientRect();
    divCopy.style.position = 'absolute';
    divCopy.classList.add('cloned-class'); 
    divCopy.style.left = rect.left + 'px';
    divCopy.style.top = rect.top + 'px';
  
    // Append the copy to the body - kwame you can also append the copiedDiv to a divNode
    document.body.appendChild(divCopy);
  
    // Calculate the distance to move the copy to the click point
    var offsetX = event.clientX - rect.left - (divCopy.offsetWidth / 2);
    var offsetY = event.clientY - rect.top - (divCopy.offsetHeight / 2);
  
    // Trigger the animation by setting the transform
   
      divCopy.style.transition = 'transform 0.5s ease-in-out';
      divCopy.style.transform = 'translate(' + offsetX + 'px, ' + offsetY + 'px)';
     
    //   divCopy.addEventListener('transitionend', function() {
    //     divCopy.style.display = 'none';
    //   });


});

$(document).on('click','.cloned-class',function(event) {

    //var destinationDiv = document.getElementById('destinationDiv');

    var movableDiv = document.getElementById(localStorage.getItem('id'));
    // Create a copy of the div
    var divCopy = movableDiv.cloneNode(true);
  
    // Set the position of the copy to the initial position of the bottom div
    var rect = movableDiv.getBoundingClientRect();
    divCopy.style.position = 'absolute';
    divCopy.classList.add('cloned-class'); 
    divCopy.style.left = rect.left + 'px';
    divCopy.style.top = rect.top + 'px';
  
    // Append the copy to the body - kwame you can also append the copiedDiv to a divNode
    document.body.appendChild(divCopy);
  
    // Calculate the distance to move the copy to the click point
    var offsetX = event.clientX - rect.left - (divCopy.offsetWidth / 2);
    var offsetY = event.clientY - rect.top - (divCopy.offsetHeight / 2);
  
    // Trigger the animation by setting the transform
   
      divCopy.style.transition = 'transform 0.5s ease-in-out';
      divCopy.style.transform = 'translate(' + offsetX + 'px, ' + offsetY + 'px)';
     
    //   divCopy.addEventListener('transitionend', function() {
    //     divCopy.style.display = 'none';
    //   });


});


$('.move').click(function() { // use the one in the useState hook to handle active
    localStorage.setItem('id',$(this).attr('id'));
})

  