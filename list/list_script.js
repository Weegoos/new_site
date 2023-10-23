// variable
const inputBox = document.querySelector('#input_box')
const list_container = document.querySelector('#list_container')
let add_btn = document.querySelector('.add_btn')

// adding dynamics and interaction
add_btn.onclick = () =>{
    // inform the user about the presence of an error when entering data
    if (inputBox.value === ''){
        alert("You must write something")
    }
    else {
        let li = document.createElement("li")
        li.innerHTML = inputBox.value;
        list_container.appendChild(li)
        let span = document.createElement('span')
        span.innerHTML = "\u00d7"
        li.appendChild(span)
    }

    inputBox.value = ""
    saveData()
}

// adding clickability via addEventListener
list_container.addEventListener("click", function(e){
    if (e.target.tagName === "LI"){
        e.target.classList.toggle("checked")
        saveData()
    }
    else if (e.target.tagName === "SPAN"){
        e.target.parentElement.remove()
        saveData()

    }
}, false)

// saving data
function saveData(){
    localStorage.setItem('data', list_container.innerHTML)
}

function showTask(){
    list_container.innerHTML = localStorage.getItem('data')
}

showTask()
