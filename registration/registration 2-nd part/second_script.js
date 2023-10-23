// variable
let password = document.querySelector('.password')
let password_fail = document.querySelector('.password_fail')
let verify_password = document.querySelector('.verify_password')
let verify_fail = document.querySelector('.verify_fail')
let barcode = document.querySelector('.barcode')
let barcode_fail = document.querySelector('.barcode_fail')
let next = document.querySelector('#next')
let barcode_num = document.querySelector('.barcode_num')
let text_first_line = document.querySelector('.text_first_line')
let text_second_line = document.querySelector('.text_second_line')
// img
let password_correct = document.querySelector('.password_correct')
let verify_correct = document.querySelector('.verify_correct')
let barcode_correct = document.querySelector('.barcode_correct')

// requirements
let length_of_symbol = document.querySelector('.length_of_symbol')
let symbol_includes = document.querySelector('.symbol_includes')
let number = document.querySelector('.number')

// local storage
let password_local = localStorage.getItem('password');
let barcode_local = localStorage.getItem('barcode')

document.body.onkeydown = function(){
    let length_password = password.value.length + 1;
    let barcode_length = barcode.value.length + 1
    console.log(verify_password.value.length);
    if (length_password >= 12){
        length_of_symbol.setAttribute('style', 'color: green')
        password_correct.setAttribute('style', "display: flex")
    }else if (length_password < 12 && length_password > 1){
        length_of_symbol.setAttribute('style', 'color: red')
        password_correct.setAttribute('style', "display: none")
        // console.log(length_password)
    } 
    if (length_password > 1){
        password_fail.innerHTML = " "
    }

    if(password.value.includes('@')){
        symbol_includes.setAttribute('style', 'color: green')
    }else {

        symbol_includes.setAttribute('style', 'color: red')
    }

    if (password.value.includes(1) || password.value.includes(2) || password.value.includes(3) || password.value.includes(4) || password.value.includes(5) || password.value.includes(6) || password.value.includes(7) || password.value.includes(8) || password.value.includes(9) || password.value.includes(0)){
        number.setAttribute('style', 'color: green')
    }else {
        number.setAttribute('style', 'color: red')

    }

    if (verify_password.value == password.value && verify_password.value.length > 0){
        verify_correct.setAttribute('style', 'display: flex')
    }else{
        verify_correct.setAttribute('style', 'display: none')

    }

    if (verify_password.value.length > 1){
        verify_fail.innerHTML = " "
    }

}

verify_password.onclick = function() {
    if (password.value == "" || password.value == null){
        password_correct.setAttribute('style', "display: none")

        if (local_lan_js == "Қазақ тілі"){
            password_fail.innerHTML = "Сіз берілген жолды толтыруыңыз керек"
        }
        if(local_lan_js == "English" || local_lan_js == null){
            password_fail.innerHTML = "You must fill in this field"
        }
        if (local_lan_js == "Русский"){
            password_fail.innerHTML = "Вы должны заполнить данное поле"
        }
        if (local_lan_js == "中文"){
            password_fail.innerHTML = "您必须填写此字段"
        }
    }
}

barcode.onclick = function (){
    verify_correct.setAttribute('style', 'display: none')

 if (verify_password.value.length == 0){
    if (local_lan_js == "Қазақ тілі"){
        verify_fail.innerHTML = "Сіз берілген жолды толтыруыңыз керек"
    }
    if(local_lan_js == "English" || local_lan_js == null){
        verify_fail.innerHTML = "You must fill in this field"
    }
    if (local_lan_js == "Русский"){
        verify_fail.innerHTML = "Вы должны заполнить данное поле"
    }
    if (local_lan_js == "中文"){
        verify_fail.innerHTML = "您必须填写此字段"
    }
 }

    if (verify_password.value == password.value && verify_password.value.length > 0){
    verify_correct.setAttribute('style', 'display: flex')

    }else {
        if (local_lan_js == "Қазақ тілі"){
            verify_fail.innerHTML = "Құпия сөздер бірдей емес"
        }
        if(local_lan_js == "English" || local_lan_js == null){
            verify_fail.innerHTML = "Passwords don't match"
        }
        if (local_lan_js == "Русский"){
            verify_fail.innerHTML = "Пароли не совпадают"
        }
        if (local_lan_js == "中文"){
            verify_fail.innerHTML = "密码不匹配"
        }
    }
}

next.onclick = function (){
    let barcode_length = barcode.value.length
    if (barcode_length == 6){
        barcode_num.setAttribute('style', 'color: green')
    }else if (barcode_length > 1 && barcode_length < 6){
        barcode_num.setAttribute('style', 'color: red')
        barcode_fail.innerHTML = ""
    }
    if (barcode_length == 6){
        barcode_correct.setAttribute('style', 'display: flex')
        barcode_fail.innerHTML = ""
    }else if (barcode_length != 6){
        barcode_correct.setAttribute('style', 'display: none')
    

    
            if (local_lan_js == "Қазақ тілі"){
                barcode_fail.innerHTML = "Баркод 6 таңбадан тұруы керек"
            }
            if(local_lan_js == "English" || local_lan_js == null){
                barcode_fail.innerHTML = "The barcode must be of 6 characters"
            }
            if (local_lan_js == "Русский"){
                barcode_fail.innerHTML = "Баркод должен быть из 6 символов"
            }
            if (local_lan_js == "中文"){
                barcode_fail.innerHTML = "条码必须为6个字符"
            }
        }

        if (verify_password.value != password.value && verify_password.value.length > 1){
            if (local_lan_js == "Қазақ тілі"){
                verify_fail.innerHTML = "Құпия сөздер бірдей емес"
            }
            if(local_lan_js == "English" || local_lan_js == null){
                verify_fail.innerHTML = "Passwords don't match"
            }
            if (local_lan_js == "Русский"){
                verify_fail.innerHTML = "Пароли не совпадают"
            }
            if (local_lan_js == "中文"){
                verify_fail.innerHTML = "密码不匹配"
            }
        }
    
    
    let length_password = password.value.length;
    if ((length_password >= 12) && (barcode_length == 6) && (verify_password.value == password.value && verify_password.value.length > 0) && (password.value.includes(1) || password.value.includes(2) || password.value.includes(3) || password.value.includes(4) || password.value.includes(5) || password.value.includes(6) || password.value.includes(7) || password.value.includes(8) || password.value.includes(9) || password.value.includes(0))){
        localStorage.setItem('password', password.value)
        localStorage.setItem('barcode', barcode.value)
        document.querySelector('.second_step').classList.add('color_green')
        setInterval(() => {
            window.location = "file:///C:/Users/%D0%91%D0%B0%D1%82%D1%8B%D1%80/Desktop/Web%20Tech%20Aitu/registration/registration%203-rd%20part/third_reg.html"
        }, 1500);
    }
}