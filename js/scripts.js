var elForm = document.querySelector('.js-form');
var elInput = elForm.querySelector('.js-input');
var elCheckbox = elForm.querySelector('.js-checkbox');
var toDo = document.querySelector('.js-todo');
var elOutput = document.querySelector('.js-output');

var toDoList = [];





elForm.addEventListener('submit', function(evt) {
  evt.preventDefault();
  var isChecked = elCheckbox.checked;

  var myFunction = function() {
    if(isChecked) {
      toDoList.unshift(elInput.value);
      elOutput.innerHTML = `<p> ${toDoList.join('<p></p>')} </p>`;
    }
  }
  elCheckbox.addEventListener('change', function(){
    myFunction();
  });

  if(isChecked) {
    myFunction();
  }else{
    toDoList.push(elInput.value);
    elOutput.classList.add('border-bottom');
    elOutput.innerHTML = `<p class="m-0"> ${toDoList.join('<p class="border-top"></p>')} </p>`;
  }



});
