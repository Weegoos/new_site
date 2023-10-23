// local storage
let local_lan_js = localStorage.getItem('language')


// variable
// let name_input_lan = document.querySelector('.name_input')
// let name_fail_lan = document.querySelector('.name_fail')
// let surname_input_lan = document.querySelector('.surname_input')
// let surname_fail_lan = document.querySelector('.surname_fail')
// let nickname_input_lan = document.querySelector('.nickname_input')
// let nickname_fail_lan = document.querySelector('.nickname_fail')

if (local_lan_js == "Русский"){
    name_input.placeholder = "Напишите свое имя..."
    
    surname_input.placeholder = "Напишите свою фамилию..."
   
    nickname_input.placeholder = "Напишите свой никнейм..."
    next.innerHTML = "Продолжить"
    next.classList.add("next_rus")
    text_first_line.innerHTML = "1 этап"
    document.body.onkeydown = function (){
        if (name_input.value.length > 0 && name_input.value.length < 2){
            name_fail.innerHTML = "Неправильное имя"
        icon_name_correct.setAttribute('style', "display: none")

        }
        if (name_input.value.length >= 2){
            icon_name_correct.setAttribute('style', "display: flex")
            name_fail.innerHTML = ""
        }
        if (surname_input.value.length >= 2){
            correct_surname.setAttribute('style', "display: flex")
            surname_fail.innerHTML = ""
    
        }   
    
        if(surname_input.value.length > 0 && surname_input.value.length < 2){
            correct_surname.setAttribute('style', "display: none")
            surname_fail.innerHTML = "Неправильная фамилия"
        }
        if (nickname_input.value.length >= 2){
            nickname_correct.setAttribute('style', "display: flex")
            nickname_fail = ""
        }else if ( nickname_input.value.length < 3){
            nickname_correct.setAttribute('style', "display: none")

        }
    }
}

if (local_lan_js == "English" || local_lan_js == null){
    name_input.placeholder = "Write your name..."
    surname_input.placeholder = "Write your surname..."
    nickname_input.placeholder = "Write your nickname..."
    next.innerHTML = "Continue"
    next.classList.add("next_en")
    text_first_line.innerHTML = "Step 1"
    document.body.onkeydown = function (){
        if (name_input.value.length > 0 && name_input.value.length < 2){
            name_fail.innerHTML = "Wrong name"
        icon_name_correct.setAttribute('style', "display: none")

        }
        if (name_input.value.length >= 2){
            icon_name_correct.setAttribute('style', "display: flex")
            name_fail.innerHTML = ""
        }
        if (surname_input.value.length >= 2){
            correct_surname.setAttribute('style', "display: flex")
            surname_fail.innerHTML = ""
    
        }   
    
        if(surname_input.value.length > 0 && surname_input.value.length < 2){
            correct_surname.setAttribute('style', "display: none")
            surname_fail.innerHTML = "Wrong last name"
        }
        if (nickname_input.value.length >= 2){
            nickname_correct.setAttribute('style', "display: flex")
            nickname_fail = ""
        }else if ( nickname_input.value.length < 3){
            nickname_correct.setAttribute('style', "display: none")

        }
    }
}

if (local_lan_js == "Қазақ тілі"){
    name_input.placeholder = "Өз атыңызды жазыңыз..."
    surname_input.placeholder = "Тегіңізді жазыңыз..."
    nickname_input.placeholder = "Лақап атыңызды жазыңыз..."
    next.innerHTML = "Жалғастыру"
    next.classList.add("next_kazakh")
    text_first_line.innerHTML = "1 кезең"
    document.body.onkeydown = function (){
        if (name_input.value.length > 0 && name_input.value.length < 2){
            name_fail.innerHTML = "Атыңыз қате терілді"
        icon_name_correct.setAttribute('style', "display: none")

        }
        if (name_input.value.length >= 2){
            icon_name_correct.setAttribute('style', "display: flex")
            name_fail.innerHTML = ""
        }
        if (surname_input.value.length >= 2){
            correct_surname.setAttribute('style', "display: flex")
            surname_fail.innerHTML = ""
    
        }   
    
        if(surname_input.value.length > 0 && surname_input.value.length < 2){
            correct_surname.setAttribute('style', "display: none")
            surname_fail.innerHTML = "Тегіңіз қате терілді"
        }
        if (nickname_input.value.length >= 2){
            nickname_correct.setAttribute('style', "display: flex")
            nickname_fail = ""
        }else if ( nickname_input.value.length < 3){
            nickname_correct.setAttribute('style', "display: none")

        }
    }
}

if (local_lan_js == "中文"){
    name_input.placeholder = "写上你的名字..."
    surname_input.placeholder = "写上你的姓。.."
    nickname_input.placeholder = "写你的昵称。.."
    next.innerHTML = "继续"
    next.classList.add("next_chinese")
    text_first_line.innerHTML = "第一阶段"

    document.body.onkeydown = function (){
        if (name_input.value.length > 0 && name_input.value.length < 2){
            name_fail.innerHTML = "名字错了"
        icon_name_correct.setAttribute('style', "display: none")

        }
        if (name_input.value.length >= 2){
            icon_name_correct.setAttribute('style', "display: flex")
            name_fail.innerHTML = ""
        }
        if (surname_input.value.length >= 2){
            correct_surname.setAttribute('style', "display: flex")
            surname_fail.innerHTML = ""
    
        }   
    
        if(surname_input.value.length > 0 && surname_input.value.length < 2){
            correct_surname.setAttribute('style', "display: none")
            surname_fail.innerHTML = "姓错了"
        }
        if (nickname_input.value.length >= 2){
            nickname_correct.setAttribute('style', "display: flex")
            nickname_fail = ""
        }else if ( nickname_input.value.length < 3){
            nickname_correct.setAttribute('style', "display: none")

        }
    }
}