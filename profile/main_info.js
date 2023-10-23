// local storage
let month_local = localStorage.getItem('month')
let year_local = localStorage.getItem('year')
let password_local = localStorage.getItem('password')
let barcode_local = localStorage.getItem('barcode')
let dob_local = localStorage.getItem('dob')
let status_local = localStorage.getItem('status')
// var
let since_text = document.querySelector('.since_text')
let container_about = document.querySelector('.container_about')
let text_en = "Member since: "
let text_rus = "Участник с: "
let text_kaz = "Тіркелу күні: "
let text_ch = "成员自: "
let password_text = document.querySelector('.password_text');
let barcode_text = document.querySelector('.barcode_text')
let dob_text = document.querySelector('.dob_text')
let status_text = document.querySelector('.status_text')
let work_container = document.querySelector('.work_container')
let coorporation_div = document.querySelector('.coorporation_div')

// btn
// let work_btn = document.querySelector('#work_btn')

if (language == "English" || language == null){
    if (month_local == 9){
        since_text.innerHTML = text_en + " Sep" + " " + year_local 
    }
    if (month_local == 1){
        since_text.innerHTML = text_en + " Jan" + " " + year_local 
    }
    if (month_local == 2){
        since_text.innerHTML = text_en + " Feb" + " " + year_local 
    }
    if (month_local == 3){
        since_text.innerHTML = text_en + " Mar" + " " + year_local 
    }
    if (month_local == 4){
        since_text.innerHTML = text_en + " Apr" + " " + year_local 
    }
    if (month_local == 5){
        since_text.innerHTML = text_en + " May" + " " + year_local 
    }if (month_local == 6){
        since_text.innerHTML = text_en + " June" + " " + year_local 
    }
    if (month_local == 7){
        since_text.innerHTML = text_en + " July" + " " + year_local 
    }
    if (month_local == 8){
        since_text.innerHTML = text_en + " Aug" + " " + year_local 
    }
    if (month_local == 10){
        since_text.innerHTML = text_en + " Oct" + " " + year_local 
    }
    if (month_local == 11){
        since_text.innerHTML = text_en + " Nov" + " " + year_local 
    }
    if (month_local == 12){
        since_text.innerHTML = text_en + " Dec" + " " + year_local 
    }
}

if (language == "Русский"){
    if (month_local == 9){
        since_text.innerHTML = text_rus + " Сен" + " " + year_local 
    }
    if (month_local == 1){
        since_text.innerHTML = text_rus + " Янв" + " " + year_local 
    }
    if (month_local == 2){
        since_text.innerHTML = text_rus + " Фев" + " " + year_local 
    }
    if (month_local == 3){
        since_text.innerHTML = text_rus + " Март" + " " + year_local 
    }
    if (month_local == 4){
        since_text.innerHTML = text_rus + " Апр" + " " + year_local 
    }
    if (month_local == 5){
        since_text.innerHTML = text_rus + " Май" + " " + year_local 
    }
    if (month_local == 6){
        since_text.innerHTML = text_rus + " Июнь" + " " + year_local 
    }
    if (month_local == 7){
        since_text.innerHTML = text_rus + " Июль" + " " + year_local 
    }
    if (month_local == 8){
        since_text.innerHTML = text_rus + " Авг" + " " + year_local 
    }
    if (month_local == 10){
        since_text.innerHTML = text_rus + " Окт" + " " + year_local 
    }
    if (month_local == 11){
        since_text.innerHTML = text_rus + " Ноя" + " " + year_local 
    }
    if (month_local == 12){
        since_text.innerHTML = text_rus + " Дек" + " " + year_local 
    }
}

if (language == "Қазақ тілі"){
    if (month_local == 9){
        since_text.innerHTML = text_kaz + " Қыр" + " " + year_local 
    }
    if (month_local == 1){
        since_text.innerHTML = text_kaz + " Қаң" + " " + year_local 
    }
    if (month_local == 2){
        since_text.innerHTML = text_kaz + " Ақп" + " " + year_local 
    }
    if (month_local == 3){
        since_text.innerHTML = text_kaz + " Нау" + " " + year_local 
    }
    if (month_local == 4){
        since_text.innerHTML = text_kaz + " Сәу" + " " + year_local 
    }
    if (month_local == 5){
        since_text.innerHTML = text_kaz + " Мамыр" + " " + year_local 
    }if (month_local == 6){
        since_text.innerHTML = text_kaz + " Мау" + " " + year_local 
    }
    if (month_local == 7){
        since_text.innerHTML = text_kaz + " Шіл" + " " + year_local 
    }
    if (month_local == 8){
        since_text.innerHTML = text_kaz + " Там" + " " + year_local 
    }
    if (month_local == 10){
        since_text.innerHTML = text_kaz + " Қаз" + " " + year_local 
    }
    if (month_local == 11){
        since_text.innerHTML = text_kaz + " Қар" + " " + year_local 
    }
    if (month_local == 12){
        since_text.innerHTML = text_kaz + " Жел" + " " + year_local 
    }
}

if (language == "中文"){
    if (month_local == 9){
        since_text.innerHTML = text_ch + " Sep" + " " + year_local 
    }
    if (month_local == 1){
        since_text.innerHTML = text_ch + " Jan" + " " + year_local 
    }
    if (month_local == 2){
        since_text.innerHTML = text_ch + " Feb" + " " + year_local 
    }
    if (month_local == 3){
        since_text.innerHTML = text_ch + " Mar" + " " + year_local 
    }
    if (month_local == 4){
        since_text.innerHTML = text_ch + " Apr" + " " + year_local 
    }
    if (month_local == 5){
        since_text.innerHTML = text_ch + " May" + " " + year_local 
    }if (month_local == 6){
        since_text.innerHTML = text_ch + " June" + " " + year_local 
    }
    if (month_local == 7){
        since_text.innerHTML = text_ch + " July" + " " + year_local 
    }
    if (month_local == 8){
        since_text.innerHTML = text_ch + " Aug" + " " + year_local 
    }
    if (month_local == 10){
        since_text.innerHTML = text_ch + " Oct" + " " + year_local 
    }
    if (month_local == 11){
        since_text.innerHTML = text_ch + " Nov" + " " + year_local 
    }
    if (month_local == 12){
        since_text.innerHTML = text_ch + " Dec" + " " + year_local 
    }
}
about_btn.onclick = function (){
    count_pr = 0

    container_about.setAttribute('style', 'display: flex')
    work_container.setAttribute('style', 'display: none')
    coorporation_div.setAttribute('style','display: none')
    document.querySelector('.progress_t').setAttribute('style', 'display: none')


}

work_btn.onclick = function(){
    count_pr = 0
    container_about.setAttribute('style', 'display: none')
    work_container.setAttribute('style', 'display: flex')
    coorporation_div.setAttribute('style','display: none')
    document.querySelector('.progress_t').setAttribute('style', 'display: none')


}

work_boost.onclick = function (){
    count_pr = 0
    coorporation_div.setAttribute('style','display: flex')
    container_about.setAttribute('style', 'display: none')
    work_container.setAttribute('style', 'display: none')
    document.querySelector('.progress_t').setAttribute('style', 'display: none')

}

collections_btn.onclick = function (){
    setInterval(() => {
        if (count_pr < 100){
          count_pr++;
        
          count_pr_text.innerHTML = count_pr + "%"
        }
        if (count_pr > 0){
            document.querySelector('.audio').play()
        }
      }, 150);
    coorporation_div.setAttribute('style','display: none')
    container_about.setAttribute('style', 'display: none')
    work_container.setAttribute('style', 'display: none')
    document.querySelector('.progress_t').setAttribute('style', 'display: flex')
}

$.get("https://ipinfo.io", function(response){

if (language == "English" || language == null){
    document.querySelector("#address").innerHTML = "City: " +  response.city
}
if(language == "Русский"){
    document.querySelector("#address").innerHTML = "Город: " +  response.city
}
if(language == "Қазақ тілі"){
    document.querySelector("#address").innerHTML = "Қала: " +  response.city
}
if (language == "中文"){
    document.querySelector("#address").innerHTML = "城市: " +  response.city
}
}, "jsonp")

password_text.innerHTML = password_local[0] + "*".repeat(password_local.length - 2) + password_local[password_local.length - 1]
barcode_text.innerHTML = barcode_local[0] + "*".repeat(barcode_local.length - 1)
dob_text.innerHTML = dob_local
status_text.innerHTML = status_local