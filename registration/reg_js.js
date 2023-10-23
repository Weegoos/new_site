let name_input = document.querySelector('.name_input')
let name_fail = document.querySelector('.name_fail')
let audio_correct = document.querySelector('.audio_correct')
let surname_input = document.querySelector('.surname_input')
let surname_fail = document.querySelector('.surname_fail')
let nickname_input = document.querySelector('.nickname_input')
let nickname_fail = document.querySelector('.nickname_fail')
let next = document.querySelector('#next')
let text_first_line = document.querySelector('.text_first_line')
// img
let icon_name_correct = document.querySelector('.icon_name_correct')
let correct_surname = document.querySelector('.correct_surname')
let nickname_correct = document.querySelector('.nickname_correct')


document.body.onkeydown = function (){
    if (name_input.value.length >= 2){
        icon_name_correct.setAttribute('style', "display: flex")
        name_fail.innerHTML = ""
    }
    if (name_input.value.length > 0 && name_input.value.length < 2){

        icon_name_correct.setAttribute('style', "display: none")
        
    }   

    if (surname_input.value.length >= 2){
        correct_surname.setAttribute('style', "display: flex")
        surname_fail.innerHTML = ""

    }   

    if(surname_input.value.length > 0 && surname_input.value.length < 2){
        correct_surname.setAttribute('style', "display: none")

    }

    if (nickname_input.value.length >= 2){
        nickname_correct.setAttribute('style', "display: flex")
        nickname_fail = ""
    }
  
}

next.onclick = function (){
    if (name_input.value.length > 3 && surname_input.value.length > 3 && nickname_input.value.length > 2){
        localStorage.setItem('name', name_input.value)
        localStorage.setItem('surname', surname_input.value)
        localStorage.setItem('surname', surname_input.value)
        document.querySelector('.first_step').classList.add('green_line')
        setInterval(() => {
            window.location = "file:///C:/Users/%D0%91%D0%B0%D1%82%D1%8B%D1%80/Desktop/Web%20Tech%20Aitu/registration/registration%202-nd%20part/second.html"
        }, 1500);
    }
  

}

