2// var
let search_btn = document.querySelector('#search_btn');
let search_input = document.querySelector('#search_input')
let pattern_main_text = document.querySelector('.pattern_main_text')
let data = localStorage.getItem('msgVacancy')
let msgV = []
let update = document.querySelector('#update')
let assistant_btn = document.querySelector('.assistant_icon')
let assistent = document.querySelector('.assistent')
let close_btn_assistant = document.querySelector('.close_btn_assistant')
let web_design_text = document.querySelector('.web_design_text')
let close_btn_characteristics = document.querySelector('.close_btn_characteristics')
let call_btn = document.querySelector('#call_btn')
// local storage
let language = localStorage.getItem('language')
let name_local = localStorage.getItem('name')
let name_change = localStorage.getItem('name_change')
let img_local = localStorage.getItem('img')
let surname_local = localStorage.getItem('surname')
let change_surname = localStorage.getItem('change_surname')
let web_local = localStorage.getItem('web_local')
let backend_local = localStorage.getItem('backend_local')
let markup_local = localStorage.getItem('markup_local')
let page_local = localStorage.getItem('page_local')
let mobile_local = localStorage.getItem('mobile_local')
let average = localStorage.getItem('average')
let phone_local = localStorage.getItem('phone_local')
let status_local = localStorage.getItem('status')

console.log();

search_btn.onclick = function (){
    console.log(search_input.value);
}

if(data !== " " && data !== null){
    msgV = JSON.parse(data)
}

function createMsgPart(obj){

    const itemPart = document.createElement('li')
    itemPart.classList.add('list-group-item')

    
    const msg = document.createElement('span')
    msg.classList.add('name')

    const msg_2 = document.createElement('span')
    msg_2.classList.add('name')

    const img = document.createElement('img')
    img.classList.add('img_src')

    const img_null = document.createElement('img')
    img.classList.add('img_src')

    const surname = document.createElement('span')
    surname.classList.add('surname')

    const surname_2 = document.createElement('span')
    surname_2.classList.add('surname')

    const rating = document.createElement('span')
    rating.classList.add('rating')

    const button_view = document.createElement('button')
    button_view.classList.add('button_view')

    const button_call = document.createElement('button')
    button_call.classList.add('btn_call')
    if (language == "Қазақ тілі"){
        button_view.innerHTML = "Көру"
        button_call.innerHTML = "Байланыс"
    }
    if (language == 'English' || language == null){
        button_view.innerHTML = "Watch"
        button_call.innerHTML = "Contact"

    }
    if (language == "Русский"){
        button_view.innerHTML = "Посмотреть"

    }
    if(language == "中文"){
        button_view.innerHTML = "手表"

    }

    button_view.onclick = function (){
        web_design_text.innerHTML = "Web Design: " + obj.web_local
        document.querySelector('.markup_text').innerHTML = "Website Markup: " + obj.markup_local
        document.querySelector('.onePage_text').innerHTML = "One Page Skills: " + obj.page_local
        document.querySelector('.mobile_text').innerHTML = "Mobile Template: " + obj.mobile_local
        document.querySelector('.backend_text').innerHTML = "Backend API: " + obj.backend_local
       if (obj.average >= 0 && obj.average < 3){
        document.querySelector('.feedback').innerHTML = "Рейтинг: Не очень"
        document.querySelector('.feedback').setAttribute('style', 'color: red')

       }
       if (obj.average >= 3 && obj.average < 6){
        document.querySelector('.feedback').innerHTML = "Рейтинг: Удовлетворительный"
        document.querySelector('.feedback').setAttribute('style', 'color: #FFC300 ')

       }
       if (obj.average >= 6 && obj.average < 8){
        document.querySelector('.feedback').innerHTML = "Рейтинг: Хороший"
        document.querySelector('.feedback').setAttribute('style', 'color: 	#5F9EA0')

       }
       if (obj.average >= 8 && obj.average < 11){
        document.querySelector('.feedback').innerHTML = "Рейтинг: Лучший в своем деле"
        document.querySelector('.feedback').setAttribute('style', 'color: 		#00A36C')

       }
        document.querySelector('.characteristics_div').setAttribute('style', 'display: flex')

    }

    close_btn_characteristics.onclick = function (){
        document.querySelector('.characteristics_div').setAttribute('style', 'display: none')

    }

    button_call.onclick = function(){
        // alert(`https://wa.me/` + obj.phone_local)
        window.open('https://wa.me/' + obj.phone_local)
    }
   
    try{
        if(name_change.length == 0 ){
            msg.textContent = "Name: " + name_local 
        }
        if(name_change.length != 0) {
            msg_2.textContent = "Name: " + obj.name_change
        }
    
    }
    catch(e){
        if (e instanceof TypeError){
            msg.textContent = "Name: " + name_local
        }
    }

    if (img_local == null){
        img_null.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsw40RqD54BYg7g04mBOm0f2k24h2hhn8-gg&usqp=CAU"
    }else{
        img.src = obj.img_local
    }

    try{
        if (change_surname.length == 0){
            surname.textContent = "Surname: " + surname_local 

        }else{
            surname_2.textContent = "Surname: " + obj.change_surname 

        }
    }
    catch(e){
        if (e instanceof TypeError){
            surname.textContent = "Surname: " + surname_local 
        }
    }

    try{
        rating.textContent = "Rating: " + obj.average
    }
    catch(e){
        if (e instanceof SyntaxError){
            rating.textContent = "Error"
        }
    }
    let br = document.createElement('br')
    itemPart.append(img)
    itemPart.append(img_null)
    itemPart.append(msg_2)

    itemPart.append(msg)
    itemPart.append(msg_2)
    itemPart.append(surname)
    itemPart.append(surname_2)
    itemPart.append(rating)

    if (status_local == "admin"){
        itemPart.append(button_view)
        itemPart.append(button_call)
        rating.onclick = function (){
            console.log("555");
        }
    }






    // console.log(`https://wa.me/` + obj.phone_local);
    document.getElementById('msgList').append(itemPart)
}

for (const msg_do of msgV) {
    createMsgPart(msg_do)
}

update.onclick = function (){
    msgPartObj = {
        name_local: name_local,
        name_change: name_change,
        img_local:img_local,
        surname_local: surname_local,
        change_surname:change_surname,
        average:average,
        web_local:web_local,
        markup_local:markup_local,
        backend_local: backend_local,
        page_local:page_local,
        mobile_local:mobile_local,
        phone_local:phone_local
    }
    msgV.push(msgPartObj)
    createMsgPart(msgPartObj)
    window.location.reload()
    localStorage.setItem('msgVacancy', JSON.stringify(msgV))
}

assistant_btn.onclick = function (){
    assistent.setAttribute('style', 'display: flex')
}

close_btn_assistant.onclick =  () => {
    assistent.setAttribute('style', 'display: none')

}

// document.querySelector('.link_tel').onclick = function (){
//     window.open(`https://wa.me/${phone_local}`)
// }



