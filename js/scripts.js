var elForm = document.querySelector('.js-form');
var elInput = elForm.querySelector('.js-input');
var elCheckbox = elForm.querySelector('.js-checkbox');
var toDo = document.querySelector('.js-todo');
var elOutput = document.querySelector('.js-output');
var elIsInclude = document.querySelector('.js-isInclude-output');

var toDoList = [];

elForm.addEventListener('submit', function(evt) {
  evt.preventDefault();
  var isChecked = elCheckbox.checked;

  if(toDoList.includes(elInput.value)) {
    elIsInclude.classList.add('text-center','h4','text-danger');
    elIsInclude.textContent = 'Error';
    return
  }else{
    elIsInclude.textContent = "";

    if(isChecked) {
      toDoList.unshift(elInput.value);
      elOutput.innerHTML = `<p> ${toDoList.join('<p class="border-top"></p>')} </p>`;
      elInput.value = '';
    }else{
      toDoList.push(elInput.value);
      elOutput.classList.add('border-bottom');
      elOutput.innerHTML = `<p class="m-0"> ${toDoList.join('<p class="border-top"></p>')} </p>`;
      elInput.value = '';
    }
  }
});
