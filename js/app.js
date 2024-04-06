// let slideIndex = 1;

// function currentSlide(n) {
//     showSlide(slideIndex = n);
// }

// function plusSlides(n) {
//     showSlide(slideIndex += n);
// }

// function showSlide(n) {
//     let i;
//     const slides = document.querySelectorAll('.mySlides');
//     const dots = document.querySelectorAll('.dot');
    
//     if (n > slides.length) {
//         slideIndex = 1;
//     }
    
//     if (n < 1) {
//        slideIndex = slides.length;
//     }
    
//     for (i = 0; i < slides.length; i++) {
//         slides[i].style.display = "none"; // Скрыть все слайды
//     }
    
//     for (i = 0; i < dots.length; i++) {
//         dots[i].classList.remove("active"); // Убрать класс 'active' у всех точек
//     }
    
//     slides[slideIndex - 1].style.display = "block"; // Показать текущий слайд
//     dots[slideIndex - 1].classList.add("active"); // Добавить класс 'active' текущей точке
// }

// // Привязка обработчиков событий вне функции showSlide
// document.querySelector('.prev').addEventListener('click', function() {
//     plusSlides(-1);
// });

// document.querySelector('.next').addEventListener('click', function() {
//     plusSlides(1);
// });

// const dots = document.querySelectorAll('.dot');
// dots.forEach(function(dot, index) {
//     dot.addEventListener('click', function() {
//         currentSlide(index + 1);
//     });
// });

// // Показать первый слайд при загрузке страницы
// showSlide(slideIndex);
const incorrectSybol = ["#", "*", "^", "$",]
function validation(form) {
    function removeError (input) {
        const parent = input.parentNode
        if(parent.classList.contains('error')){
            parent.querySelector('.error-label').remove()
            parent.classList.remove('error')
        }
    }
    function createError(text,input) {
        const parent = input.parentNode;
        const errorLabel = document.createElement('label')
        parent.classList.add('error')
        errorLabel.classList.add('error-label')
        errorLabel.textContent = text
        parent.appendChild(errorLabel)
    }
    let result = true
    const allInputs = form.querySelectorAll('input')
    for (const input of allInputs) {
        removeError(input)
        if(input.dataset.required == "true"){
            if(input.value=="") {
                console.log("Заполните форму")
                createError("Поле не заполнено", input)
                result = false
            }
        }
        if(input.dataset.maxLeght){
        if (input.value.lenght > input.dataset.maxLength){
                console.log("Ошибка поля")
                createError(`Максивмальное количество символов не должно превышать :${input.dataset.maxLeght}`, input)
                result = false
            }
        }
        if(input.dataset.minLeght){
            if (input.value.lenght < input.dataset.maxLength){
                    console.log("Ошибка поля")
                    createError(`минимальное количество символов не должно превышать :${input.dataset.minLeght}`, input)
                    result = false
                }
            }
    form.querySelectorAll('input').forEach(element => {
        console.log(element)
    })
    return result 
    }}

document.querySelector('#add-form').addEventListener('submit', function(event){
    event.preventDefault()
    if(validation(this)==true) {
        alert('Форма успешно заполнена!')
    }
})

document.querySelector('.link').addEventListener('click', function(event){
    event.preventDefault()
    alert('Вы нажали на ссылку, но перехода не произошло')
})

// const oninput = document.querySelector('.input_form')
// oninput = function () {
//     this.value = this.value.slice(0, 3)
// }

