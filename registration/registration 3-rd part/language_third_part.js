// local storage
let local_lan_js = localStorage.getItem('language')


if (local_lan_js == "English" || local_lan_js == null){
    finish.classList.add('next_en')
    finish.innerHTML = "Finish"
    status_input.placeholder = "Specify the status..."

    var option_list_en = ['Reader', 'Writer'];
    var list = document.getElementById('status')

    option_list_en.forEach(function(item){
        var option_list_en = document.createElement('option')
        option_list_en.value = item;
        list.appendChild(option_list_en)
    });
    text_first_line.innerHTML = "Step 1"
    text_second_line.innerHTML = "Step 2"
    text_third_line.innerHTML = "Step 3"
}

if (local_lan_js == "Русский"){
    finish.classList.add('next_rus')
    finish.innerHTML = "Завершить"
    status_input.placeholder = "Укажите статус..."

    var option_list_ru = ['Читатель', 'Писатель'];
    var list = document.getElementById('status')

    option_list_ru.forEach(function(item){
        var option_list_ru = document.createElement('option')
        option_list_ru.value = item;
        list.appendChild(option_list_ru)
    });
    text_first_line.innerHTML = "1 этап"
    text_second_line.innerHTML = "2 этап"
    text_third_line.innerHTML = "3 этап"

}

if (local_lan_js == "Қазақ тілі"){
    finish.classList.add('next_kazakh')
    finish.innerHTML = "Аяқтау"
    status_input.placeholder = "Күйді көрсетіңіз..."

    var option_list_en = ['Оқырман','Жазушы'];
    var list = document.getElementById('status')

    option_list_en.forEach(function(item){
        var option_list_en = document.createElement('option')
        option_list_en.value = item;
        list.appendChild(option_list_en)
    });
    text_first_line.innerHTML = "1 кезең"
    text_second_line.innerHTML = "2 кезең"
    text_third_line.innerHTML = "3 кезең"

}

if (local_lan_js == "中文"){
    finish.classList.add('next_chinese')
    finish.innerHTML = "完成"
    status_input.placeholder = "指定状态。.."
    var option_list_en = ["读者", "作家"];
    var list = document.getElementById('status')

    option_list_en.forEach(function(item){
        var option_list_en = document.createElement('option')
        option_list_en.value = item;
        list.appendChild(option_list_en)
    });
    text_first_line.innerHTML = "第一阶段"
    text_second_line.innerHTML = "第二步"
    text_third_line.innerHTML = "第三步"

}