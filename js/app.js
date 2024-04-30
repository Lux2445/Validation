const allDomains = ["google", "yandex", "mail", "gmail", "inbox"]
const phoneNum = /^[\+]?[(]?[0-9]{2}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4}$/
 // var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
function removeError(input) {
    const parent = input.parentNode;
    if (parent.classList.contains('error')) {
        parent.querySelector('.error-label').remove()
        parent.classList.remove('error')
    }
}

function createError(input, text) {
    const parent = input.parentNode;
    const errorLabel = document.createElement('label')
    errorLabel.classList.add('error-label')
    errorLabel.textContent = text
    parent.classList.add('error')
    parent.append(errorLabel)
}

function validation(form) {
    const allInputs = form.querySelectorAll('input');
    let result = true;

   

    for (const input of allInputs) {
        removeError(input)       

        if (input.dataset.minLength) {
            if (input.value.length < input.dataset.minLength) {
                removeError(input)
                createError(input, `Минимальное кол-во символов: ${input.dataset.minLength}`)
                result = false
            }
        }

        if (input.dataset.maxLength) {
            if (input.value.length > input.dataset.maxLength) {
                removeError(input)
                createError(input, `Максимальное кол-во символов: ${input.dataset.maxLength}`)
                result = false
            }
        }

        if (input.dataset.required == "true") {
            if (input.value == "") {
                removeError(input)
                createError(input, 'Поле не заполнено')
                result = false
            }
        }

        if(input.dataset.email) {
            if(!input.value.includes('@')) {
                removeError(input)
                createError(input, `Введен некорректный адрес электронной почты`)                
                result = false
            } else {
                const domain = input.value.split('@')[1].split('.')[0] //yandex,google
                // console.log(domain)
                if(!allDomains.includes(domain)) {
                    createError(input, `Недопустимый домен почты: ${allDomains}`)                    
                    result = false
                }
            }
        }

        if(input.dataset.phone) {

            if (input.value.match(phoneNum)) { 
                removeError(input)             
                
            } else {
                removeError(input)
                createError(input, `Введен некорректный номер телефона`)               
                result = false
            }

            // if(!input.value.includes('@')) {
            //     removeError(input)
            //     createError(input, `Введен некорректный адрес электронной почты`)                
            //     result = false
            // } else {
            //     const domain = input.value.split('@')[1].split('.')[0] //yandex,google
            //     // console.log(domain)
            //     if(!allDomains.includes(domain)) {
            //         createError(input, `Недопустимый домен почты: ${allDomains}`)                    
            //         result = false
            //     }
            // }


        }
        // if (input.dataset.usermail) {
        //     removeError(input)
        //     if (input.value.match(mailformat)) {
        //         createError(input, 'Valid email address!')           
        //         return true;
        //     } else {
        //         createError(input, 'You have entered an invalid email address!') 
                
        //         return false;
        //     }
        // }

    }
    return result
}

document.querySelector('#add-form').addEventListener('submit', function (event){
    event.preventDefault()
    if (validation(this) == true) {
        alert('Форма успешно заполнена!')
    }
}) 