let flag = false
let count = 0

document.onkeyup = function (e){
        if (e.code == "ControlLeft") flag = true
        if (e.code == "KeyB" && flag){
            count++
            console.log(count);
            flag = false
            if (count % 2 == 0){
            assistent.setAttribute('style', 'display: none')

            }else {
                assistent.setAttribute('style', 'display: flex')
            }
        }


    }





class Check_key {
    constructor(){

    }
    getKey(){
        document.onkeydown = function (event){
            console.log(event);
        }
    }
}

const check = new Check_key()
// check.getKey()