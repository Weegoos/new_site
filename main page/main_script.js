// variable
let count = 0
let loading = document.querySelector('.loading')
let wrapper = document.querySelector('.wrapper')
let main = document.querySelector('.main')
let main_info = document.querySelector('.main_info')
const music = document.querySelector('.music')
let click = document.querySelector('.click')
let icon_video = document.querySelector('.icon_video')
let loading_info = document.querySelector('.loading_info')
let load_text = document.querySelector('.load_text');
let help = document.querySelector('.help')
let login_or_profile = document.querySelector('.login_or_profile')
let contact = document.querySelector('.contact')
let about_us_btn = document.querySelector('.about_us_btn')
let center_text = document.querySelector('.center_text')
let advice_text = document.querySelector('.advice_text')
let advice_second = document.querySelector('.advice_second')
let hire_btn = document.querySelector('.hire_btn')
let advice_start = document.querySelector('.advice_start')
let trusted_text = document.querySelector('.trusted_text')
let motive_text  = document.querySelector('.motive_text')
let description_of_motivation = document.querySelector('.description_of_motivation')
let start_motivation_btn = document.querySelector('.start_motivation_btn')
let corp_text = document.querySelector('.corp_text')
let connect_text =document.querySelector('.connect_text')
let world_class_text = document.querySelector('.world_class_text')
let find_out_worldClass_teacher = document.querySelector('.find_out_worldClass_teacher')
let text_largest = document.querySelector('.text_largest')
let find_designer = document.querySelector('.find_designer')
let learn_about = document.querySelector('.learn_about')
let better_way_text = document.querySelector('.better_way_text')
let first_better_way_text = document.querySelector('.first_better_way_text')
let second_better_way_text = document.querySelector('.second_better_way_text')
let third_better_way_text = document.querySelector('.third_better_way_text')
let comment_div = document.querySelector('.comment_div')
let one_signal_text = document.querySelector('.one_signal_text')
let icon_one_signal = document.querySelector('.icon_one_signal')
let why_reason = document.querySelector('.why_reason')
let first_reason = document.querySelector('.first_reason')
let first_reason_text = document.querySelector('.first_reason_text')
let second_reason = document.querySelector('.second_reason')
let second_reason_text = document.querySelector('.second_reason_text')
let third_reason = document.querySelector('.third_reason')
let third_reason_text = document.querySelector('.third_reason_text')
let top_project_text = document.querySelector('.top_project_text')
let text_looking_for = document.querySelector('.text_looking_for')
let find_text = document.querySelector('.find_text')
let boost_text = document.querySelector('.boost_text')
let find_word_btn = document.querySelector('.find_word_btn')
let get_discovered = document.querySelector('.get_discovered')
let inspiration_text = document.querySelector('.inspiration_text')
let discover_text = document.querySelector('.discover_text')
let browse_text = document.querySelector('.browse_text')
let create_prof_btn = document.querySelector('.create_prof_btn')
let browse_design_btn = document.querySelector('.browse_design_btn')
let start_hiring_text = document.querySelector('.start_hiring_text')
let browse_portfolio = document.querySelector('.browse_portfolio')
let now_btn = document.querySelector('.now_btn')
let about_hiring_start_btn = document.querySelector('.about_hiring_start_btn')
let question_span_start = document.querySelector('.question_span_start')
let join_new_news = document.querySelector('.join_new_news')
let for_designers = document.querySelector('.for_designers')
let hire_talent_text = document.querySelector('.hire_talent_text')
let inspiration_text_btn = document.querySelector('.inspiration_text_btn');
let advertisement_btn = document.querySelector('.advertisement_btn')
let blog_btn = document.querySelector('.blog_btn');
let careers_btn = document.querySelector('.careers_btn');

main_info.setAttribute("style", "display: none")

// local storage
let name_local = localStorage.getItem('name')
let language_local = localStorage.getItem('language')
let status_local = localStorage.getItem('status')
// console.log(name_local);



if (name_local != null || name_local != " "){
 if (language_local == "Русский"){
    loading_info.innerHTML = name_local + ", сайт загружает ваши данные. Подождите!"
    loading_info.classList.add('loading_info_ru')

 }

 if (language_local == "English" || language_local == null){
    loading_info.innerHTML = name_local + ", the site downloads your data. Wait!" 
    loading_info.classList.add('loading_info_en')
 }

 if (language_local == "Қазақ тілі"){
    loading_info.innerHTML = name_local + ", сайт сіздің деректеріңізді жүктеп жатыр. Күте тұрыңыз!" 
    loading_info.classList.add('loading_info_kaz')
 }

 if (language_local == "中文"){
    loading_info.innerHTML = name_local + ", 该网站下载您的数据。 等等！" 
    loading_info.classList.add('loading_info_ch')
 }

 setInterval(() =>{
    if (count < 100){
        count++;
        loading.innerHTML =  load_text.innerHTML + " " + "[" + count + " %]" 
        if (count== 100){
            wrapper.setAttribute('style', "display: none")
            main.setAttribute('style', "display: none")
            document.querySelector('html').setAttribute('style', "background: white")
            main_info.setAttribute("style", "display: flex")
            // music.setAttribute('style', 'display: none')
            music.pause()
           
icon_video.play()
        }if (count != 100){
         
            if (name_local != null){
               music.play()
            }

        }
        if (count > 75){
         if (language_local == "Русский"){
            loading_info.innerHTML = "Подождите еще немножко, сайт почти загрузился!"
            
         }
         if (language_local == "English" || language_local == null){
            loading_info.innerHTML = "Wait a little more, the site is almost loaded!"

         }
         if (language_local == "Қазақ тілі"){
            loading_info.innerHTML = "Сәл күте тұрыңыз, сайт деректеріңізде жүктеп болды!"

         }
        if(language_local == "中文"){

            loading_info.innerHTML = "再等一会儿，网站就快加载了！"
        }
      }
    }
},  250)

// click.innerHTML = "Кликните в любое место"
document.querySelector('html').onclick = function (){
  click.innerHTML = " "
 
}
if (language_local == "English" || language_local == null){
   login_or_profile.innerHTML = "Profile"
}
if (language_local == "Русский"){
   login_or_profile.innerHTML = "Профиль"
}
if (language_local == "Қазақ тілі"){
   login_or_profile.innerHTML = "Профиль"
}
if (language_local == "中文"){
   login_or_profile.innerHTML = "个人资料"
}

}

if(name_local == null){
    main.setAttribute('style', "display: none")
    wrapper.setAttribute('style', "display: none")
    document.querySelector('html').setAttribute('style', "background: white")
    main_info.setAttribute("style", "display: flex")
    music.pause()
    if (language_local == "English" || language_local == null){
      login_or_profile.innerHTML = "Log in"
   }
   if (language_local == "Русский"){
      login_or_profile.innerHTML = "Авторизоваться"
   }
   if (language_local == "Қазақ тілі"){
      login_or_profile.innerHTML = "Тіркелу"
   }
   if (language_local == "中文"){
      login_or_profile.innerHTML = "登入"
   }
}

login_or_profile.onclick = function (){
   if (status_local == null ){
      console.log(88);
      window.location = "file:///C:/Users/%D0%91%D0%B0%D1%82%D1%8B%D1%80/Desktop/Web%20Tech%20Aitu/registration/reg.html"
      // https://www.instagram.com/new_newsofficial/
   }else {
      window.location = "file:///C:/Users/%D0%91%D0%B0%D1%82%D1%8B%D1%80/Desktop/Web%20Tech%20Aitu/profile/profile_page.html" 
   }
}

let contact_count = 0
contact.onclick = function (){
   contact_count++;
   if (contact_count % 2 == 0){
      document.querySelector('.contact_msg').setAttribute('style', 'display: none')

   }else{
      document.querySelector('.contact_msg').setAttribute('style', 'display: flex')
   }
}

let icon_count = 0
comment_div.onmouseenter = function(){
   icon_count++;
   if (icon_count %2 == 0){
      document.querySelector('.icon_sig').setAttribute('style', 'transform: rotate(0deg)')
      one_signal_text.classList.remove('one_signal_text_rotate')

   }else{
      document.querySelector('.icon_sig').setAttribute('style', 'transform: rotate(15deg)')
      one_signal_text.classList.add('one_signal_text_rotate')

   }
}

icon_one_signal.onmouseenter = function (){
   icon_count++;
   console.log(icon_count);
   if (icon_count %2 == 0){
      document.querySelector('.icon_sig').setAttribute('style', 'transform: rotate(0deg)')
      one_signal_text.classList.remove('one_signal_text_rotate')

   }else{
      document.querySelector('.icon_sig').setAttribute('style', 'transform: rotate(15deg)')
      one_signal_text.classList.add('one_signal_text_rotate')

   }
}





