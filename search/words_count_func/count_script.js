// local storage
let word_local = localStorage.getItem('amount_word')

// var
let word_parse = JSON.parse(word_local)
let text = document.querySelector('.text')
let amount_symbol = document.querySelector('.amount_symbol')
var lorem = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo ea vel tenetur placeat voluptatum, commodi quas temporibus repudiandae iusto, nulla suscipit sequi eos ex quibusdam aperiam ipsum inventore facilis error!"


if (word_parse <= 217){
    text.innerHTML = lorem.slice(0, word_parse)
    amount_symbol.innerHTML = `Symbol: ${word_parse}`
   }else {
    let lorem_repeat = lorem.repeat(10000)
    text.innerHTML = lorem_repeat.slice(0, word_parse)
    amount_symbol.innerHTML = `Symbol: ${word_parse}`
}