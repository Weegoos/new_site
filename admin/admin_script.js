let full_name = document.querySelector('#full_name')
let delete_btn = document.querySelector('#delete_btn')
let pic = document.querySelector('#pic')

// local storage
let name_local = localStorage.getItem('name')
let surname_local = localStorage.getItem('surname')
let name_change = localStorage.getItem('name_change')
let img_local = localStorage.getItem('img')
let change_surname = localStorage.getItem('change_surname')

console.log(img_local);

// if (name_change == null || name_change.length == 0){
//     console.log("null");
//     full_name.innerHTML = "Full name: " + name_local + " " + surname_local[0] + "."
// }else{
//     full_name.innerHTML = "Full name: " + name_change + " " + surname_local[0] + "."
// }

if (change_surname == null && name_change == null){
    full_name.innerHTML = "Full name: " + name_local + " " + surname_local[0] + "."
}
if (change_surname != null && name_change == null){
    full_name.innerHTML = "Full name: " + name_local + " " + change_surname[0] + "."

}
if (change_surname != null && name_change != null){
    full_name.innerHTML = "Full name: " + name_change + " " + change_surname[0] + "."

}

delete_btn.onclick = function(){
    localStorage.clear()
    document.querySelector('#fff').setAttribute('style', 'display: none')
}

if (img_local != null){
    pic.src = img_local
}else {
    pic.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsw40RqD54BYg7g04mBOm0f2k24h2hhn8-gg&usqp=CAU"
}