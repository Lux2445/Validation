const signInBtn = document.querySelector('.signin-btn')
const signUnBtn = document.querySelector('.signup-btn')
const formBox = document.querySelector('.form-box')
const body = document.body;
let tel = document.querySelector('.form__input')
let error = ["~","`","!","#","$","%","^","&","*","(",")","_","-","=","+","№",";",":","?","{","}","[","]","''"] 


signUnBtn.addEventListener('click', function() {
    formBox.classList.add('active');
    body.classList.add('active')
});

signInBtn.addEventListener('click', function () {
    formBox.classList.remove('active')
    body.classList.remove('active')
});

document.querySelector('form__input').addEventListener('input', function() {
    const maxLength = 20;
    document.getElementById('charCount').maxLength - this.value.length;
  });


  function noError(event) {
    if (error.indexOf(event.key) != -1)
      event.preventDefault();
  }