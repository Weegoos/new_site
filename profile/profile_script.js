// var
let circle_with_firstLetter = document.querySelector('.circle_with_firstLetter')
let full_name_profile = document.querySelector('.full_name_profile')
let button_edit = document.querySelector('.button_edit')
let rename_window = document.querySelector('.rename_window')
let close_btn = document.querySelector('.close_btn')
let wrapper_header = document.querySelector('#wrapper_header')
let wrapper_profile_icon = document.querySelector('.wrapper_profile_icon')
let load_text = document.querySelector('.load_text')
let alert_text = document.querySelector('.alert_text')
let rename_name_div = document.querySelector('.rename_name_div')
let name_input = document.querySelector('#name_input')
let count_letter = document.querySelector('.count_letter');
let save_btn_loader = document.querySelector('#save_btn_loader');
let failed_msg = document.querySelector('.failed_msg')
let internet_connection = document.querySelector('.internet_connection');
let seacrh_id = document.querySelector('#seacrh_id')
let submit_btn = document.querySelector('#submit_btn')
let work_btn = document.querySelector('#work_btn')
let work_boost = document.querySelector('#work_boost')
let collections_btn = document.querySelector('#collections_btn')
let about_btn = document.querySelector('#about_btn')
let count_letter_surname = document.querySelector('.count_letter_surname')
let save_btn_surname = document.querySelector('#save_btn_surname')
let close_btn_add_div = document.querySelector('.close_btn_add_div')
let save_btn_additional = document.querySelector('#save_btn_additional')
let phone_number = document.querySelector('#phone_number')
let bio_text = document.querySelector('#bio_text')
let salary_input = document.querySelector('#salary_input')
let web_input = document.querySelector('#web_input')
let markup_input = document.querySelector('#markup_input')
let page_input = document.querySelector('#page_input')
let mobile_input = document.querySelector('#mobile_input')
let backend_input = document.querySelector('#backend_input')
let avatar_img = document.querySelector('.avatar_img')
let salary_text = document.querySelector('.salary_text')
let web_skills = document.querySelector('.web_skills')
let current_range = document.querySelector('.current_range')
let web_range = document.querySelector('.web_range')
let website_skills = document.querySelector('.website_skills')
let current_website_skills = document.querySelector('.current_website_skills')
let one_skills = document.querySelector('.one_skills')
let one_skills_current = document.querySelector('.one_skills_current')
let one_skills_range = document.querySelector('.one_skills_range')
let website_range = document.querySelector('.website_range')
let template_skills = document.querySelector('.template_skills')
let current_range_template = document.querySelector('.current_range_template')
let template_range = document.querySelector('.template_range')
let api_skills = document.querySelector('.api_skills')
let api_range = document.querySelector('.api_range')
let api_current_range = document.querySelector('.api_current_range')
let close_btn_edit_prof = document.querySelector('.close_btn_edit_prof')
let warning_danger = document.querySelector('#warning_danger')
let danger_text = document.querySelector('.danger_text')
// local storage
let name_local = localStorage.getItem('name')
let surname_local = localStorage.getItem('surname')
let name_local_change = localStorage.getItem('name_change')
let commands = localStorage.getItem('commands')
let change_surname = localStorage.getItem('change_surname')
let phone_local = localStorage.getItem('phone_local')
let bio_local = localStorage.getItem('bio_local')
let salary_local = localStorage.getItem('salary_local')
let web_local = localStorage.getItem('web_local')
let markup_local = localStorage.getItem('markup_local')
let page_local = localStorage.getItem('page_local')
let mobile_local = localStorage.getItem('mobile_local')
let backend_local = localStorage.getItem('backend_local')
let img_local = localStorage.getItem('img')
let true_flag = sessionStorage.getItem('true_flag')
let average = localStorage.getItem('average')
// console.log(average);


// counter
let loader_window = 0;
let max_letter = 32

//  Date
let lin_date = new Date()

circle_with_firstLetter.innerHTML = name_local[0]
full_name_profile.innerHTML = name_local + " " + surname_local



close_btn.onclick = function (){
    rename_window.setAttribute('style', 'display: none')

}

document.querySelector('#loading_is_success').onmouseenter = function (){
    document.querySelector('#loading_is_success').setAttribute('style', 'display:none')
    console.log(888);
}

count_letter.innerHTML = max_letter

name_input.onclick = function (){
    document.body.onkeydown = function (){
     
            max_letter--
        count_letter.innerHTML = max_letter
        if (max_letter < 0){
            count_letter.setAttribute('style', 'color: red')
        }
        
      
    }
}
    
save_btn_loader.onclick = function(){
    document.querySelector('#alert_div').setAttribute('style', 'display: flex')
    if (max_letter > 0 && name_input.value.length > 0){
       
 
            localStorage.setItem('name_change', name_input.value)
        
        
        window.location.reload()
    }
    if (max_letter < 0 || max_letter > 32){
        failed_msg.setAttribute('style', 'display:flex')
        if (language == "English" || language == null){
            failed_msg.innerHTML = "It is impossible to save this name, shorten it!"
        }
        if (language == "Русский"){
            failed_msg.innerHTML = "Невозможно сохранить данное имя, сократите!"

        }
        if (language == "Қазақ тілі"){
            failed_msg.innerHTML = "Бұл атауды сақтау мүмкін емес, қысқартыңыз!"
        }
        if (language == "中文"){
            failed_msg.innerHTML = "这是不可能保存这个名字，缩短它！"

        }
    }
}

try{
    if (name_local_change != null && change_surname == null){
        circle_with_firstLetter.innerHTML = name_local_change[0].toUpperCase()
        full_name_profile.innerHTML = name_local_change + " " + surname_local
    }
    if (change_surname != null && name_local_change == null){
        circle_with_firstLetter.innerHTML = name_local[0].toUpperCase()
        full_name_profile.innerHTML = name_local + " " + change_surname
    }
    if (change_surname != null && name_local_change != null){
        circle_with_firstLetter.innerHTML = name_local_change[0].toUpperCase()
        full_name_profile.innerHTML = name_local_change + " " + change_surname
    }
}
catch(e){
    if (e instanceof TypeError){
        console.log("True");
    }
}


let demo = document.querySelector('.demo')


let messageOffline = () =>{
    internet_connection.textContent = "Not Internet Connection"
}

if (window.navigator.onLine){
    rename_name.onclick = function (){
        rename_window.setAttribute('style', 'display: flex')
        internet_connection.setAttribute('style', 'display: none')
            setInterval(() => {
                loader_window++
                if (loader_window <= 100){
                    if (language == "English" || language == null){
                        load_text.innerHTML =  "Loading " + "[" + loader_window + "%]"
                    }
                    if (language == "Русский"){
                        load_text.innerHTML =  "Загрузка " + "[" + loader_window + "%]"
    
                    }
                    if (language == "Қазақ тілі"){
                        load_text.innerHTML =  "Жүктеу " + "[" + loader_window + "%]"
    
                    }
                    if (language == "中文"){
                        load_text.innerHTML =  "装载量 " + "[" + loader_window + "%]"
    
                    }
                }
    
                if(loader_window == 100){
                   document.querySelector('.loader_div').setAttribute('style', 'display: none') 
                   document.querySelector('#loading_is_success').setAttribute('style', 'display:flex')
                   rename_name_div.setAttribute('style', 'display: flex')
                   if (language == "English" || language == null){
                    alert_text.innerHTML = "You can change the name"
                }
                if (language == "Русский"){
                    alert_text.innerHTML = "Вы можете поменять имя"
    
                }
                if (language == "Қазақ тілі"){
                    alert_text.innerHTML = "Сіз атыңызды өзгерте аласыз"
                }
                if (language == "中文"){
                    alert_text.innerHTML = "您可以更改名称"
    
                }
                }
            }, 15);
        }

    
} 
if (!window.navigator.onLine) {
    messageOffline();
    rename_name.onclick = function (){
        rename_window.setAttribute('style', 'display: flex')
        internet_connection.setAttribute('style', 'display: flex;')
        
            setInterval(() => {
                loader_window++
                if (loader_window <= 100){
                    if (language == "English" || language == null){
                        load_text.innerHTML =  "Loading " + "[" + loader_window + "%]"
                    }
                    if (language == "Русский"){
                        load_text.innerHTML =  "Загрузка " + "[" + loader_window + "%]"
    
                    }
                    if (language == "Қазақ тілі"){
                        load_text.innerHTML =  "Жүктеу " + "[" + loader_window + "%]"
    
                    }
                    if (language == "中文"){
                        load_text.innerHTML =  "装载量 " + "[" + loader_window + "%]"
    
                    }
                }
    
                if(loader_window == 5){
                    rename_window.setAttribute('style', 'display: none')
                    loader_window = 0
                }
            }, 1000);
        }
}
window.addEventListener("offline",messageOffline )

submit_btn.onclick = function (){
    localStorage.setItem('commands', seacrh_id.value)
    if (seacrh_id.value == "ls -a"){
        console.log(888);
        window.location = "file:///C:/Users/%D0%91%D0%B0%D1%82%D1%8B%D1%80/Desktop/Web%20Tech%20Aitu/commands/commands.html"
    }
    if (seacrh_id.value == "mv mp"){
        window.location = "file:///C:/Users/%D0%91%D0%B0%D1%82%D1%8B%D1%80/Desktop/Web%20Tech%20Aitu/main%20page/first_page.html"
    }
    if (seacrh_id.value == "mv mi"){
        container_about.setAttribute('style', 'display: flex')
        work_container.setAttribute('style', 'display: none')
        coorporation_div.setAttribute('style', 'display: none')

     }
     if (seacrh_id.value == "mv work"){
        container_about.setAttribute('style', 'display: none')
        work_container.setAttribute('style', 'display: flex')
        coorporation_div.setAttribute('style', 'display: none')

     }
     if (seacrh_id.value == "mv corp"){
        container_about.setAttribute('style', 'display: none')
        work_container.setAttribute('style', 'display: none')
        coorporation_div.setAttribute('style', 'display: flex')
     }
     if (seacrh_id.value == "mv dp"){
        container_about.setAttribute('style', 'display: none')
        work_container.setAttribute('style', 'display: none')
        coorporation_div.setAttribute('style', 'display: none')
     }
     if (seacrh_id.value == "ls -r"){
       window.location.reload()
     }
     if (seacrh_id.value == "mv -s"){
        window.location = "file:///C:/Users/%D0%91%D0%B0%D1%82%D1%8B%D1%80/Desktop/Web%20Tech%20Aitu/setting/setting.html"
     }
     if (seacrh_id.value == "mv -r /mp"){
        window.location = "file:///C:/Users/%D0%91%D0%B0%D1%82%D1%8B%D1%80/Desktop/Web%20Tech%20Aitu/registration/reg.html"
     }
     if (seacrh_id.value == "ls -l origin"){
        // console.log(location.origin+location.pathname);
        alert(location.origin+location.pathname)
     }
     if (seacrh_id.value == "admin"){
        window.location = "file:///C:/Users/%D0%91%D0%B0%D1%82%D1%8B%D1%80/Desktop/Web%20Tech%20Aitu/admin/admin_page.html#"
     }
     if (seacrh_id.value == "mv cm"){
        window.location = "file:///C:/Users/%D0%91%D0%B0%D1%82%D1%8B%D1%80/Desktop/Web%20Tech%20Aitu/comments/comments.html"
     }
     if (seacrh_id.value == "d -n" ||seacrh_id.value == "e -n"){
    window.location.reload()

     }
    //  if (seacrh_id.value = "ls -al /sec"){
    //     alert(lin_date.getSeconds())
    //     window.location.reload()

    //  }
    //  if (seacrh_id.value = "ls -al /min"){
    //     alert(lin_date.getMinutes() + ":" + lin_date.getSeconds())
    //     window.location.reload()

    //  }
   
}

if (commands == "d -n"){
    document.querySelector('#alert_div').classList.add('commands')
}
if (commands == "e -n"){
    document.querySelector('#alert_div').classList.remove('commands')
}

let count_pr = 0;
let count_pr_text = document.querySelector('.pr_2')

let loader_window_surname = 0
rename_surname.onclick = function (){
    if (window.navigator.onLine){
        document.querySelector('.change_surname_window').setAttribute('style', 'display: flex')
        setInterval(() => {
            loader_window_surname++
            if (loader_window_surname <= 100){
                if (language == "English" || language == null){
                    load_text_surname.innerHTML =  "Loading " + "[" + loader_window_surname + "%]"
                }
                if (language == "Русский"){
                    load_text_surname.innerHTML =  "Загрузка " + "[" + loader_window_surname + "%]"
        
                }
                if (language == "Қазақ тілі"){
                    load_text_surname.innerHTML =  "Жүктеу " + "[" + loader_window_surname + "%]"
        
                }
                if (language == "中文"){
                    load_text_surname.innerHTML =  "装载量 " + "[" + loader_window_surname + "%]"
        
                }
            }
        
            if(loader_window_surname == 100){
                document.querySelector('#loading_is_success').setAttribute('style', 'display:flex')
                document.querySelector('.loader_div_surname').setAttribute('style', 'display: none')
                document.querySelector('.rename_surname_div').setAttribute('style', 'display: flex')
               if (language == "English" || language == null){
                alert_text.innerHTML = "You can change the surname"
                }
                if (language == "Русский"){
                alert_text.innerHTML = "Вы можете поменять фамилию"
        
                }
                if (language == "Қазақ тілі"){
                alert_text.innerHTML = "Сіз тегінізді өзгерте аласыз"
                }
                if (language == "中文"){
                alert_text.innerHTML = "您可以更改您的姓氏"
                    
                }
            }
        }, 15);
    }
    if (!window.navigator.onLine){
    messageOffline();
        console.log("error");
    }
}

let max_letter_surname = 32
count_letter_surname.innerHTML = max_letter_surname
surname_input.onclick = function (){
    document.body.onkeydown = function (){
     
        max_letter_surname--
        count_letter_surname.innerHTML = max_letter_surname
        if (max_letter_surname < 0){
            count_letter_surname.setAttribute('style', 'color: red')
        }
        
      
    }
}

save_btn_surname.onclick = function (){
   if (max_letter_surname >= 0){
    if (surname_input.value != null || surname_input.length > 0){
        localStorage.setItem('change_surname', surname_input.value)
        window.location.reload()
    }
   }else {
        // document.querySelector('.fail_surname').innerHTML = "Fail"
        if (language == "English" || language == null){
            document.querySelector('.fail_surname').innerHTML = "It is impossible to save this name, shorten it!"
        }
        if (language == "Русский"){
            document.querySelector('.fail_surname').innerHTML = "Невозможно сохранить данное имя, сократите!"

        }
        if (language == "Қазақ тілі"){
            document.querySelector('.fail_surname').innerHTML = "Бұл атауды сақтау мүмкін емес, қысқартыңыз!"
        }
        if (language == "中文"){
            document.querySelector('.fail_surname').innerHTML = "这是不可能保存这个名字，缩短它！"

        }
   }
}

add_additional_info.onclick = function (){
    document.querySelector('.additional_info_div').setAttribute('style', 'display: flex')
}

close_btn_add_div.onclick = function (){
    document.querySelector('.additional_info_div').setAttribute('style', 'display: none')
}

save_btn_additional.onclick = function(){
    window.location.reload()
   if (phone_number.value.length == 11){
    localStorage.setItem('phone_local', phone_number.value)
   }
   
   if (bio_text.value.length > 8){
    localStorage.setItem('bio_local', bio_text.value)
   }
//    console.log(salary_input.value);
   if (salary_input.value != " "){
    localStorage.setItem('salary_local', salary_input.value)

   }
   if (web_input.value >= 0){
    localStorage.setItem('web_local', web_input.value)
   }
   if (markup_input.value >= 0){
    localStorage.setItem('markup_local', markup_input.value)
   }
   if (page_input.value >= 0){
    localStorage.setItem('page_local', page_input.value)
   }
   if (mobile_input.value >= 0){
    localStorage.setItem('mobile_local', mobile_input.value)
   }
   if (backend_input.value >= 0){
    localStorage.setItem('backend_local', backend_input.value)
   }
}

if (img_local != null){
    avatar_img.src = img_local

}else {
    avatar_img.src = "https://static.vecteezy.com/system/resources/thumbnails/005/545/335/small/user-sign-icon-person-symbol-human-avatar-isolated-on-white-backogrund-vector.jpg"

}

class Salary {
    constructor(salary){
        salary = this.salary
    }

    getSalary(){
        if (salary_local != null){
            salary_text.innerHTML = `${salary_local}$/h`
        }else {
            salary_text.innerHTML = salary_local

        }
    }
}

const salary = new Salary()
salary.getSalary()

close_btn_edit_prof.onclick = function (){
    document.querySelector('.edit_profile_div').setAttribute('style', 'display: none')
}

button_edit.onclick = function (){
    document.querySelector('.edit_profile_div').setAttribute('style', 'display: flex')

}

let isFlag = true
let count = 5
submit_data_btn.onclick = function (){
    sessionStorage.setItem('true_flag', isFlag)
    window.location = "file:///C:/Users/%D0%91%D0%B0%D1%82%D1%8B%D1%80/Desktop/Web%20Tech%20Aitu/search/search.html"
}

try{
    
let parse_web = JSON.parse((web_local))
let parse_backend = JSON.parse(backend_local)
let parse_markup = JSON.parse(markup_local)
let parse_page = JSON.parse(page_local)
let parse_mobile = JSON.parse(mobile_local)
let average_sum = (parse_web + parse_backend + parse_markup + parse_page + parse_mobile) / 5
localStorage.setItem('average', average_sum)
console.log(average_sum);
}
catch(e){
    if (e instanceof SyntaxError){
        warning_danger.setAttribute('style', 'display:flex')
    }
}

