// local storage
let local_lan_js = localStorage.getItem('language')


if (local_lan_js == "English" || local_lan_js == null){
    next.classList.add('next_en')
    next.innerHTML = "Continue"
    length_of_symbol.innerHTML = "* The password must be at least 12 characters long"
    symbol_includes.innerHTML = '* The password must contain the symbol "@"'
    number.innerHTML = "* Must use numbers in the password"
    password.placeholder = "Write the password..."
    verify_password.placeholder = "Confirm the password..."
    barcode.placeholder = "Write a barcode..."
    barcode_num.innerHTML = "* The barcode must be of 6 characters"
    text_first_line.innerHTML = "Step 1"
    text_second_line.innerHTML = "Step 2"
}

if (local_lan_js == "Русский"){
    next.classList.add('next_rus')
    next.innerHTML = "Продолжить"
    length_of_symbol.innerHTML = "* Длина пароля должна быть не менее 12 символов"
    symbol_includes.innerHTML = '* В пароле должен быть символ "@"'
    number.innerHTML = "* Должны использовать цифры в пароле"
    password.placeholder = "Напишите пароль..."
    verify_password.placeholder = "Подтвердите пароль..."
    barcode.placeholder = "Напишите баркод..."
    barcode_num.innerHTML = "* Баркод должен быть из 6 символов"
    text_first_line.innerHTML = "1 этап"
    text_second_line.innerHTML = "2 этап"

}

if(local_lan_js == "Қазақ тілі"){
    next.classList.add('next_kazakh')
    next.innerHTML = "Жалғастыру"
    length_of_symbol.innerHTML = "* Құпия сөздің ұзындығы кемінде 12 таңба болуы керек"
    symbol_includes.innerHTML = '* Құпия сөзде "@" белгісі болуы керек'
    number.innerHTML = "* Құпия сөзде сандарды қолдануыныз керек"
    password.placeholder = "Құпия сөзді жазыңыз..."
    barcode.placeholder = "Баркод жазыңыз..."
    verify_password.placeholder = "Құпия сөзді растаңыз..."
    barcode_num.innerHTML = "* Баркод 6 таңбадан тұруы керек"
    text_first_line.innerHTML = "1 кезең"
    text_second_line.innerHTML = "2 кезең"
    
}

if (local_lan_js == "中文"){
    next.classList.add('next_chinese')
    next.innerHTML = "继续"
    length_of_symbol.innerHTML = "* 密码长度必须至少为12个字符"
    symbol_includes.innerHTML = '* 密码必须包含符号"@"'
    number.innerHTML = "* 密码中必须使用数字"
    barcode.placeholder = "写条形码。.."
    password.placeholder = "写密码。.."
    verify_password.placeholder = "确认密码。.."
    barcode_num.innerHTML = "* 条码必须为6个字符"
    text_first_line.innerHTML = "第一阶段"
    text_second_line.innerHTML = "第二步"

}
