// adding html elements via DOM

let about_btn = document.querySelector('.about_btn')
let news_btn = document.querySelector('.news_btn')
let contact_btn = document.querySelector('.contact_btn')
let about_content = document.querySelector('.about_content')
let news_content = document.querySelector('.news_content')
let contact_content = document.querySelector('.contact_content')
let number = 0

// date
let time = new Date()
let hours = time.getHours()
let minutes = time.getMinutes()
let newYork_time = document.querySelector('#newYork_time')
let london_time = document.querySelector('#london_time')
let astana_time = document.querySelector('#astana_time')

// storage
let num_local = localStorage.getItem('number_page')
console.log(num_local);

// adding clickability
about_btn.onclick = () => {
    about_content.classList.add('animation')
    about_content.setAttribute('style', 'display: flex')
    about_btn.setAttribute('style', 'color: #fff')
    news_btn.setAttribute('style', 'color: #555')
    number = 1
    localStorage.setItem('number_page', number)
    news_content.setAttribute('style', 'display: none')
    contact_btn.setAttribute('style', 'color: #555')
    contact_content.setAttribute('style', 'display: none')
}

news_btn.onclick = () => {
    news_content.classList.add('animation')

    about_content.setAttribute('style', 'display: none')
    news_btn.setAttribute('style', 'color: #fff')
    about_btn.setAttribute('style', 'color: #555')
    number = 2
    localStorage.setItem('number_page', number)
    news_content.setAttribute('style', 'display: flex')
    contact_btn.setAttribute('style', 'color: #555')
    contact_content.setAttribute('style', 'display: none')

}

contact_btn.onclick = () => {
    contact_content.classList.add('animation')

    news_content.setAttribute('style', 'display: none')
    about_content.setAttribute('style', 'display: none')
    news_btn.setAttribute('style', 'color: #555')
    about_btn.setAttribute('style', 'color: #555')
    contact_btn.setAttribute('style', 'color: #fff')
    number = 3
    localStorage.setItem('number_page', number)
    contact_content.setAttribute('style', 'display: flex')

}

// save the data so that when the user restart, this page loads where the user left off
function saveInfo(){
    if (num_local == 1){
        about_content.setAttribute('style', 'display: flex')
        about_btn.setAttribute('style', 'color: #fff')
        news_btn.setAttribute('style', 'color: #555')
    news_content.setAttribute('style', 'display: none')
    contact_btn.setAttribute('style', 'color: #555')
    contact_content.setAttribute('style', 'display: none')


    }

    if (num_local == 2){
        about_content.setAttribute('style', 'display: none')
        news_btn.setAttribute('style', 'color: #fff')
        about_btn.setAttribute('style', 'color: #555')
    news_content.setAttribute('style', 'display: flex')
    contact_btn.setAttribute('style', 'color: #555')
    contact_content.setAttribute('style', 'display: none')


    }

    if (num_local == 3){
        news_content.setAttribute('style', 'display: none')
    about_content.setAttribute('style', 'display: none')
    news_btn.setAttribute('style', 'color: #555')
    about_btn.setAttribute('style', 'color: #555')
    contact_btn.setAttribute('style', 'color: #fff')
    contact_content.setAttribute('style', 'display: flex')

    }
}

saveInfo()

// adding time to our page
function localTime(){
    newYork_time.innerHTML = hours - 10 + ":" + minutes
    london_time.innerHTML = hours - 5 + ":" + minutes
    astana_time.innerHTML = hours + ":" + minutes
}

localTime()