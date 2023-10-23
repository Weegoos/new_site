let dob = document.querySelector('.dob')
let date_fail = document.querySelector('.date_fail')
let status_input = document.querySelector('.status_input')
let status_fail = document.querySelector('.status_fail')
let finish = document.querySelector('#finish')
let text_first_line = document.querySelector('.text_first_line')
let text_second_line = document.querySelector('.text_second_line')
let text_third_line = document.querySelector('.text_third_line')
// img
let date_correct = document.querySelector('.date_correct')
let status_correct = document.querySelector('.status_correct')

// date
const register = new Date()
const month = register.getMonth() + 1
const fullYear = register.getFullYear()

// local storage
let finish_count = localStorage.getItem('finish_count')
console.log(finish_count);

finish.onclick = function (){
    
    if (status_input.value.length == 0){
        status_correct.setAttribute('style', 'display: none')

        if (local_lan_js == "Русский"){
            status_fail.innerHTML = "Вы должны заполнить данное поле"
        }
        if (local_lan_js == "English" || local_lan_js == null){
            status_fail.innerHTML = "You must fill in this field"
        }

        if(local_lan_js == "Қазақ тілі"){
            status_fail.innerHTML = "Сіз берілген жолды толтыруыңыз керек"
        }

        if(local_lan_js == "中文"){
            status_fail.innerHTML = "您必须填写此字段"
        }
    }else {
        status_fail.innerHTML = " "
        status_correct.setAttribute('style', 'display: flex')
    }

    if (dob.value.slice(0, 2) != 20){
        date_correct.setAttribute('style', 'display: none')

        if (local_lan_js == "Русский"){
            date_fail.innerHTML = "Вы должны заполнить данное поле"
        }
        if (local_lan_js == "English" || local_lan_js == null){
            date_fail.innerHTML = "You must fill in this field"
        }

        if(local_lan_js == "Қазақ тілі"){
            date_fail.innerHTML = "Сіз берілген жолды толтыруыңыз керек"
        }

        if(local_lan_js == "中文"){
            date_fail.innerHTML = "您必须填写此字段"
        }
    }else {
        date_fail.innerHTML = " "
        date_correct.setAttribute('style', 'display: flex')

    }

    if (dob.value.slice(0, 2) == 20 && (status_input.value.length > 0)){
        document.querySelector('.third_step').classList.add('color_green')
        localStorage.setItem('dob', dob.value)
        localStorage.setItem('status' ,status_input.value)
        localStorage.setItem('year', fullYear)
        localStorage.setItem('month', month)
        setInterval(() => {
            window.location = "file:///C:/Users/%D0%91%D0%B0%D1%82%D1%8B%D1%80/Desktop/Web%20Tech%20Aitu/main%20page/first_page.html"
        }, 1500);
    }
}

status_input.onclick = function (){
    if (dob.value.slice(0, 2) == 20){
        date_correct.setAttribute('style', 'display: flex')
        date_fail.innerHTML = " "
    }
    if (dob.value.slice(0, 2) != 20){
        date_correct.setAttribute('style', 'display: none')

        if (local_lan_js == "Русский"){
            date_fail.innerHTML = "Вы должны заполнить данное поле"
        }
        if (local_lan_js == "English" || local_lan_js == null){
            date_fail.innerHTML = "You must fill in this field"
        }

        if(local_lan_js == "Қазақ тілі"){
            date_fail.innerHTML = "Сіз берілген жолды толтыруыңыз керек"
        }

        if(local_lan_js == "中文"){
            date_fail.innerHTML = "您必须填写此字段"
        }
    }
}
