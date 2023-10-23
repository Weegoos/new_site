// language change part

class Language {
   
    language_function(){
        if (language == "English" || language == " "){
            search_input.placeholder = "Look for something...."
            pattern_main_text.innerHTML = "Job openings"
        }
        if (language == "Русский"){
            search_input.placeholder = "Поищите что-то...."
            pattern_main_text.innerHTML = "Вакансии"

        }
        if (language == "Қазақ тілі"){
            search_input.placeholder = "Іздеу..."
            pattern_main_text.innerHTML = "Бос жұмыс орындары"
            pattern_main_text.classList.add('pattern_main_text_kaz')
        }
        if (language == "中文"){
            search_input.placeholder = "找点东西。..."
            pattern_main_text.innerHTML = "职位空缺"

        }
    }
}

const new_lang = new Language()
new_lang.language_function()