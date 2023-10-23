let talk_btn = document.querySelector('#talk_btn')
let text = document.querySelector('.text')
const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition
const recognition = new SpeechRecognition();
let bot_name = "робот"
let input_link = document.querySelector('#input_link')
let music_btn = document.querySelector('#music_btn')
let music_fail = document.querySelector('.music_fail')
let help_msg = "Help with fill out";

// storage
let link_for_music = localStorage.getItem('link_for_music')
let link_change_music = localStorage.getItem('link_change_music')
if (link_change_music != null){
    link_for_music = link_change_music
}
let vacancy_fill = localStorage.getItem('vacancy_fill')
console.log(vacancy_fill);

// data
let mail = 'batyr.ashim05@mail.ru'
let number_tel = +77751216514

recognition.onstart = function () {
    console.log("Speech started");
}

recognition.onresult = function (e) {
    console.log(e);

    const spokenwords = e.results[0][0].transcript;

    console.log("spoken words are: ", spokenwords);
    text.innerHTML = spokenwords
    computerSpeech(spokenwords)
}

function computerSpeech(words) {
    const speech = new SpeechSynthesisUtterance();
    speech.lang = "ru"
    speech.pitch = 20;
    speech.volume = 1.5;
    speech.rate = 1;

    determineWords(speech, words.toLowerCase())
    window.speechSynthesis.speak(speech)
}

function determineWords(speech, words) {
    if (words.includes('открой профиль')) {
        speech.text = "Открываю профиль"
        window.open('file:///C:/Users/%D0%91%D0%B0%D1%82%D1%8B%D1%80/Desktop/Web%20Tech%20Aitu/profile/profile_page.html#', '_blank');
    }
    if (words.includes('как дела')) {
        speech.text = "Все хорошо! У вас как дела?"
    }
    if (words.includes("кто я")) {
        if (name_change.length == 0 && change_surname.length == 0) {
            alert(name_local + " " + surname_local)
        }
        if (name_change.length == 0 && change_surname.length != 0) {
            alert(name_local + " " + change_surname)
        }
        if (name_change.length != 0 && change_surname.length != 0) {
            alert(name_change + " " + change_surname)

        }
        if (name_change.length != 0 && change_surname.length == 0) {
            alert(name_local + " " + change_surname)
        }
    }
    if (words.includes("где я")) {
        speech.text = 'Здесь'
        $.get("https://ipinfo.io", function (response) {
            alert(`${response.ip}, ${response.city}`)
        }, "jsonp")
    }
    if (words.includes('открой карту')) {
        speech.text = "открываю карту!"
        window.open('https://yandex.kz/maps/163/astana/?ll=71.435806%2C51.143974&z=12', '_blank')
    }
    if (words.includes('открой чат') ) {
        speech.text = "открываю Ватсап!"
        window.open('https://web.whatsapp.com/', '_blank')
    }
    if (words.includes('обращаться') && words.includes('почту')) {
        speech.text = "Напишите этой почте и опишите свою проблему!"
        location.href = `mailto: ${mail}`
    }
    if (words.includes('обращаться') && words.includes('номер')) {
        speech.text = "Напишите этому контакту и опишите свою проблему!"
        location.href = `https://wa.me/${number_tel}`
    }
    if (words.includes('текст') ) {
        speech.text = "Создаю документ с готовым названием"
        let res = words.split('со словом').pop()
        localStorage.setItem('text_docx', res)
        let text_local_dox = localStorage.getItem('text_docx')

        const startPDF = () => {
            let doc = new docx.Document()

            doc.addSection({
                children: [
                    new docx.Paragraph({
                        children: [
                            new docx.TextRun({
                                text: `${text_local_dox}`
                            })
                        ]
                    })
                ]
            })

            docx.Packer.toBlob(doc).then(blob => {
                saveAs(blob, `new_news.docx`)
            })
        }
        startPDF()
    }
    function createDocx() {
        if (words.includes('создай')) {
            speech.text = "Создаю документ для изменений текста внутри документа!"

            const create = () => {
                let doc = new docx.Document()
                let res = words.split('создать').pop()
                localStorage.setItem('name', res)
                let name_local = localStorage.getItem('name')

                doc.addSection({
                    children: [
                        new docx.Paragraph({
                            children: [
                                new docx.TextRun({
                                    text: "//Вы успешно создали документ из сайта New News. Вы можете удалить данный текст и корректировать документ так как хотите"
                                })
                            ]
                        })
                    ]
                })

                docx.Packer.toBlob(doc).then(blob => {
                    saveAs(blob, `${name_local}.docx`)
                })
            }
            create()
        }
    }
    createDocx()

    function words_count() {
        var lorem = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo ea vel tenetur placeat voluptatum, commodi quas temporibus repudiandae iusto, nulla suscipit sequi eos ex quibusdam aperiam ipsum inventore facilis error!"
        var numEl = parseInt(words.match(/\d+/))
        console.log(numEl);
        if (words.includes('символ')) {
            speech.text = "Сделано!"

            window.open('file:///C:/Users/%D0%91%D0%B0%D1%82%D1%8B%D1%80/Desktop/Web%20Tech%20Aitu/search/words_count_func/count_page.html', '_blank')
            localStorage.setItem('amount_word', numEl)
            if (numEl <= 217) {
                console.log(lorem.slice(0, numEl));
            } else {
                let lorem_repeat = lorem.repeat(10000)
                console.log(lorem_repeat.slice(0, numEl));
            }
        }
    }
    words_count()

    function search(){
        if (words.includes('найти')){
            let res = words.split('найти').pop()
            speech.text = 'Я нашла вот это'
            window.open(`https://www.youtube.com/results?search_query=${res}`)
            window.open(`https://www.google.com/search?q=${res}&rlz=1C1CHZN_ruKZ969KZ969&oq=${res}&gs_lcrp=EgZjaHJvbWUyDAgAEEUYORixAxiABDIHCAEQABiABDIHCAIQABiABDIHCAMQABiABDIHCAQQABiABDIHCAUQABiABDINCAYQLhivARjHARiABDIKCAcQABixAxiABDIHCAgQABiABDIHCAkQABiABNIBCDcyOThqMGo3qAIAsAIA&sourceid=chrome&ie=UTF-8`)

        }

        if (words.includes('включи') && words.includes('музыку')){
            if (link_for_music != null){
                window.open(link_for_music)
                speech.text = 'Включаю музыку!'
            }
            if(link_for_music == null) {
                speech.text = 'Вы должны указать ссылку чтобы я могла переключаться'
                document.querySelector('.wrapper_main').setAttribute('style', 'display:none')
            document.querySelector('.music_div').setAttribute('style', 'display:flex')
                music_btn.onclick = function (){
                    if (input_link.value.includes('www.youtube.com')){
                        localStorage.setItem('link_for_music', input_link.value)
                        document.querySelector('.wrapper_main').setAttribute('style', 'display:flex')
                        document.querySelector('.music_div').setAttribute('style', 'display:none')
                       window.location.reload()
                      
                    }else {
                        music_fail.innerHTML = "Вы указали неправильную ссылку"
                    
                    }
                }
            }
        }
        if (words.includes('изменить') || words.includes('поменять') || words.includes('сменить') || words.includes('ссылку')){
            document.querySelector('.wrapper_main').setAttribute('style', 'display:none')
            document.querySelector('.music_div').setAttribute('style', 'display:flex')
            speech.text = "Вы можете поменять ссылку"
            music_btn.onclick = function (){
                if (input_link.value.includes('www.youtube.com')){
                    localStorage.setItem('link_change_music', input_link.value)
                    document.querySelector('.wrapper_main').setAttribute('style', 'display:flex')
                    document.querySelector('.music_div').setAttribute('style', 'display:none')
                   window.location.reload()
                  
                }else {
                    music_fail.innerHTML = "Вы указали неправильную ссылку"
                
                }
            }
        }
    }
    search()

    // function help
    function help(){
        if (words.includes('данные')){
            speech.text = "Минуту"
            
            localStorage.setItem('vacancy_fill', help_msg)
            if (vacancy_fill != null){
                window.open('')
            }
        }
    }
    help()
}
function generatePDF() {
    doc.save('bot_guide.pdf');
}

talk_btn.addEventListener('click', () => {
    recognition.start()
    // generatePDF()
  
})

var lorem = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo ea vel tenetur placeat voluptatum, commodi quas temporibus repudiandae iusto, nulla suscipit sequi eos ex quibusdam aperiam ipsum inventore facilis error!"


let text_search = 'поменять песню'


if (text_search.includes(text_search)){


}
if (text_search.includes('закрыть')){
    // window.close('https://www.amazon.com/?&tag=googleglobalp-20&ref=pd_sl_7nnedyywlk_e&adgrpid=82342659060&hvpone=&hvptwo=&hvadid=673584962059&hvpos=&hvnetw=g&hvrand=17777966353874150347&hvqmt=e&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=1009806&hvtargid=kwd-10573980&hydadcr=2246_13649807')
}

document.querySelector('.close_btn_music').onclick = function (){
  document.querySelector('.wrapper_main').setAttribute('style', 'display:flex')
  document.querySelector('.music_wrapper').setAttribute('style', 'display:none')

}

if (link_for_music != null){
    // document.querySelector('#alert_for_music').setAttribute('style', 'display: flex')
}

// Пока браузеры еще не договорились.. заботимся об этом сами!  
if ('getBattery' in navigator) {
    navigator.getBattery().then(function(battery) {
      // Узнаем уровень заряда батареи
      var level = battery.level * 100; // Проценты
      console.log('Уровень заряда: ' + level + '%');
  
      // Узнаем, заряжается ли батарея
      var isCharging = battery.charging;
      console.log('Заряжается: ' + isCharging);
  
      // Узнаем оставшееся время работы от батареи
      var timeRemaining = battery.dischargingTime;
      if (timeRemaining === Infinity) {
        console.log('Время работы от батареи: неизвестно');
      } else {
        console.log('Время работы от батареи: ' + timeRemaining + ' секунд');
      }
    });
  } else {
    console.log('Battery Status API не поддерживается в этом браузере.');
  }

  