// local storage
let language = localStorage.getItem('language')
// var
let add_additional_info = document.querySelector('#add_additional_info')
let dropdown_btn = document.getElementById('dropdown_btn')
var r = document.querySelector(':root');
let rs = getComputedStyle(r)
let style_main_var = rs.getPropertyValue('--main_var')
let rename_name = document.querySelector('#rename_name')
let rename_surname = document.querySelector('#rename_surname')
let loading_texts = document.querySelector('.loading_texts')
let password_info = document.querySelector('.password_info')
let dob_info = document.querySelector('.dob_info')
let additional_info = document.querySelector('.additional_info')
let next_btn = document.querySelector('#next_btn')
let prev_btn = document.querySelector('#prev_btn')
let first_slide = document.querySelector('#first_slide')
let second_slide = document.querySelector('#second_slide')
let third_item = document.querySelector('#third_item')
let fourth_slide = document.querySelector('#fourth_slide')
let danger_info = document.querySelector('.danger_info')
let text_node = document.querySelector('#text_node')
let home_btn = document.querySelector('#home_btn')
let setting_btn = document.querySelector('#setting_btn')
let profile_btn = document.querySelector('#profile_btn')
let load_text_surname = document.querySelector('.load_text_surname')
let surname_input = document.querySelector('#surname_input')
let submit_data_btn = document.querySelector('#submit_data_btn')
let about_us = document.querySelector('#about_us')

// text ru
text_russian = new Array (
    "Пусть наступающий новый день принесет вам улыбку и счастье!",
    "Вы можете прожить каждый день только один раз. Сделайте его лучшим!",
    "Самые великие люди достигли своего величайшего успеха, всего в одном шаге от своей величайшей неудачи",
    "Успех приходит именно к тем, кто верит в себя и готов побеждать. Удачи вам!",
    "Любой день – хороший и каждый день может научить нас новому. Приятного дня!",
    "Дойдя до конца, люди смеются над страхами, мучившими их вначале",
    "Чтобы дойти до цели, надо идти",
    "Это своего рода забава, делать невозможное!",
    "Пробуйте и терпите неудачу, но не прерывайте ваших стараний!",
    "Мы сами должны стать теми переменами, которые хотим видеть в мире!",
    "Препятствия – это те страшные вещи, которые вы видите, когда отводите глаза от цели", 
    "Постановка целей является первым шагом на пути превращения мечты в реальность",
    "Через осуществление великих целей человек обнаруживает в себе и великий характер, делающий его маяком для других!",
    "Чтобы достичь поставленных целей, нужны терпение и энтузиазм. Мыслите глобально – но будьте реалистами!",
    "Самый опасный яд – чувство достижения цели. Противоядие к которому – каждый вечер думать, что можно завтра сделать лучше!",
    "Никогда, никогда не позволяйте другим убедить вас, что что-то сложно или невозможно!",
    "Успех обычно приходит к тем, кто слишком занят, чтобы его просто ждать!",
    "Секрет успешной жизни — это понять, что вам предназначено делать, и делать это!",
    "Успех — это сумма небольших усилий, повторяющихся изо дня в день!",
    "Успешные люди делают то, что неуспешные не хотят делать. Не стремитесь, чтобы было легче, стремитесь, чтобы было лучше!",
    "Стремитесь быть не просто успешным человеком, а ценным!",
    "Одна победа не ведет к успеху, в отличие от постоянного желания побеждать!",
    "Осуществляйте свои мечты, или кто-то наймет вас для осуществления своих!",
    "Свой успех я объясняю вот тем, что я никогда не оправдывалась и не слушала оправданий!",
    "Успех — это движение от неудачи к неудаче без потери энтузиазма!",
    "Успех - это лестница, на нее не взобраться, держа руки в карманах!",
    "Успех - это успеть",
    "Успех – не ключ к счастью. Счастье – это ключ к успеху. Если вы любите то, что вы делаете, вы будете иметь успех!",
    "Что разум человека может постигнуть и во что он может поверить, того он способен достичь",
    "Сложнее всего начать действовать, все остальное зависит только от упорства!",
    "Выбери профессию, которую ты любишь, — и тебе не придется работать ни дня в твоей жизни!",
    "Гениальность может оказаться лишь мимолетным шансом. Только работа и воля могут дать ей жизнь и обратить ее в славу!",
    "Жить — значит работать. Труд есть жизнь человека!",
    "Постарайтесь получить то, что любите, иначе придется полюбить то, что получили!",
    "Работа, которую мы делаем охотно, исцеляет боли!", //35
    "Делай что можешь, с тем, что у тебя есть, там, где ты находишься!",
    'Всегда помните о том, что ваша решимость преуспеть важнее всего остального!',
    "Кто хочет – ищет возможности. Кто не хочет – ищет причины!",
    "Любовь и работа - единственные стоящие вещи в жизни. Работа - это своеобразная форма любви",
    "Есть только один вид работы, который не вызывает депрессии, — это работа, которую ты не обязан делать!",
    "Я твердо верю в удачу, и я заметил: чем больше я работаю, тем я удачливее!",
    "Вдохновение приходит только во время работы!",//42
    "Понуждай сам свою работу; не жди, чтобы она тебя понуждала!",
    "Если вы будете работать для настоящего, то ваша работа выйдет ничтожной; надо работать имея в виду только будущее.",
    "Кто делает не больше того, за что ему платят, никогда не получит больше того, что он получает!",
    "Обычно те, кто лучше других умеет работать, лучше других умеют не работать",
    "Самая тяжелая часть работы — решиться приступить к ней!",
    "Самый несчастный из людей тот, для кого в мире не оказалось работы!",
    "Лучше работать без определенной цели, чем ничего не делать.",
    "Мы находим в жизни только то, что сами вкладываем в нее.",//50
    "Пока у тебя есть попытка - ты не проиграл!",
    "Последняя степень неудачи — это первая ступень успеха!",
    "Неудача - это просто возможность начать снова, но уже более мудро!",
    "Я этого хочу. Значит, это будет! - Генри Форд",
    "Если ты рожден без крыльев, не мешай им расти!",
    "Будь собой! Прочие роли уже заняты!",
    "Я не терпел поражений. Я просто нашёл 10 000 способов, которые не работают! - Томас Эдисон",
    "Если проблему можно разрешить, не стоит о ней беспокоиться. Если проблема неразрешима, беспокоиться о ней бессмысленно!",
    "Даже если вы очень талантливы и прилагаете большие усилия, для некоторых результатов просто требуется время: вы не получите ребенка через месяц, даже если заставите забеременеть девять женщин! - Уоррен Баффет",
    "Раз в жизни фортуна стучится в дверь каждого человека, но человек в это время нередко сидит в ближайшей пивной и никакого стука не слышит!", //60
    "Наш большой недостаток в том, что мы слишком быстро опускаем руки. Наиболее верный путь к успеху – все время пробовать еще один раз!",
    "Лично я люблю землянику со сливками, но рыба почему-то предпочитает червяков. Вот почему, когда я иду на рыбалку, я думаю не о том, что люблю я, а о том, что любит рыба!",
    "Просыпаясь утром, спроси себя: «Что я должен сделать?» Вечером, прежде чем заснуть: «Что я сделал?»",
    "Бедный, неудачный, несчастливый и нездоровый это тот, кто часто использует слово 'завтра'. - Роберт Кийосаки",
    "Старики всегда советуют молодым экономить деньги. Это плохой совет. Не копите пятаки. Вкладывайте в себя. Я в жизни не сэкономил и доллара, пока не достиг сорока лет.",
    "Тяжёлый труд - это скопление легких дел, которые вы не сделали, когда должны были сделать.",
    "Раньше я говорил: 'Я надеюсь, что все изменится'. Затем я понял, что существует единственный способ, чтобы все изменилось— измениться мне самому.",
    "Урок, который я извлек и которому следую всю жизнь, состоял в том, что надо пытаться, и пытаться, и опять пытаться - но никогда не сдаваться! - Ричард Бренсон",
    "Делай сегодня то, что другие не хотят, завтра будешь жить так, как другие не могут! - Джаред Лето",
    "Чтобы извлечь из жизни максимум, человек должен уметь изменяться. К сожалению, человек изменяется с большим трудом, и изменения эти происходят очень медленно. Многие тратят на это годы. Самым трудным является по-настоящему захотеть измениться.",
    "Из двух дорог лежащих предо мною – идти решил нехоженной тропой. И это в корне все переменило! - Роберт Фрост" //71
)

let text_eng = new Array(
    "May the coming new day bring you a smile and happiness!",
    "You can live every day only once. Make it the best!",
    "The greatest people have achieved their greatest success, just one step away from their greatest failure",
    "Success comes to those who believe in themselves and are ready to win. Good luck to you!",
    "Any day is good and every day can teach us new things. Have a nice day!",
    "Having reached the end, people laugh at the fears that tormented them at the beginning",
    "To reach the goal, you have to go",
    "It's kind of fun to do the impossible!",
    "Try and fail, but do not interrupt your efforts!",
    "We ourselves must become the changes that we want to see in the world!",
    "Obstacles are those terrible things that you see when you look away from the goal",
    "Setting goals is the first step towards turning dreams into reality",
    "Through the realization of great goals, a person discovers in himself a great character that makes him a beacon for others!",
    "Patience and enthusiasm are needed to achieve the goals set. Think globally – but be realistic!",
    "The most dangerous poison is the feeling of achieving a goal. The antidote to which is to think every night that you can do better tomorrow!",
    "Never, never let others convince you that something is difficult or impossible!",
    "Success usually comes to those who are too busy to just wait for it!",
    "The secret of a successful life is understand what you are meant to do, and do it!",
    "Success is the sum of small efforts repeated from day to day!",
    "Successful people do what unsuccessful people do not want to do. Don't strive to make it easier, strive to make it better!",
    "Strive to be not just a successful person, but a valuable one!",
    "One victory does not lead to success, unlike the constant desire to win!",
    "Fulfill your dreams, or someone will hire you to fulfill their own!",
    "I explain my success by the fact that I have never justified myself and I didn't listen to excuses!",
    "Success is a movement from failure to failure without loss of enthusiasm!",
    "Success is a ladder, you can't climb it with your hands in your pockets!",
    "Success is to have time",
    "Success is not the key to happiness. Happiness is the key to success. If you love what you do, you will succeed!",
    "What a person's mind can comprehend and what he can believe, he is able to achieve",
    "The most difficult thing is to start acting, everything else depends only on perseverance!",
    "Choose a profession that you love — and you won't have to work a day in your life!",
    "Genius may be just a fleeting chance. Only work and will can give her life and turn her into glory!",
    "To live is to work. Work is a man's life!",
    "Try to get what you love, otherwise you will have to love what you have received!",
    "The work that we do willingly heals pain!", //35
    "Do what you can with what you have, where you are!",
    'Always remember that that your determination to succeed is more important than anything else!',
    "Who wants – is looking for opportunities. Who doesn't want to – looking for reasons!",
    "Love and work are the only worthwhile things in life. Work is a kind of form of love",
    "There is only one type of work that does not cause depression - this is work that you do not have to do!",
    "I firmly believe in luck, and I noticed: the more I work, the luckier I am!",
    "Inspiration comes only during work!",//42
    "Force your work yourself; don't expect it to force you!",
    "If you work for the present, then your work will come out insignificant; you have to work with only the future in mind.",
    "Those who do not do more than what they are paid for will never get more than what they get!",
    "Usually those who know how to work better than others know how not to work better than others",
    "The hardest part of the work is to decide to start it!",
    "The most unhappy of people is the one for whom there was no work in the world!",
    "It is better to work without a specific goal than to do nothing.",
    "We find in life only what we put into it ourselves."
)

let text_kz = new Array (
    "Келе жатқан Жаңа күн сізге күлкі мен бақыт әкелсін!",
    "Сіз күн сайын бір рет қана өмір сүре аласыз. Оны ең жақсы етіп жасаңыз!",
    "Ең ұлы адамдар өздерінің ең үлкен жетістіктеріне қол жеткізді, олардың ең үлкен сәтсіздігінен бір қадам ғана",
    "Табыс өзіне сенетін және жеңіске жетуге дайын адамдарға келеді. Сізге сәттілік!",
    "Кез келген күн жақсы және күн сайын бізге жаңа нәрселерді үйрете алады. Күніңіз жақсы өтсін!",
    "Соңына жеткенде, адамдар оларды басында азаптаған қорқынышқа күледі",
    "Мақсатқа жету үшін бару керек",
    "Бұл көңілді, мүмкін емес нәрсені жасау!",
    "Байқап көріңіз және сәтсіздікке ұшыраңыз, бірақ күш-жігеріңізді үзбеңіз!",
    "Біз өзіміз әлемде көргіміз келетін өзгерістер болуымыз керек!",
    "Кедергілер-бұл мақсаттан алыстаған кезде көретін қорқынышты нәрселер", 
    "Мақсат қою-арманды шындыққа айналдырудың алғашқы қадамы",
    "Үлкен мақсаттарды жүзеге асыру арқылы адам өз бойында ұлы мінезді ашады, оны басқалар үшін маяк етеді!",
    "Алға қойған мақсаттарға жету үшін шыдамдылық пен ынта қажет. Жаһандық ойлаңыз - бірақ шынайы болыңыз!",
    "Ең қауіпті улану – мақсатқа жету сезімі. Оған қарсы дәрі-әр кеш сайын сіз ертең жақсы жасай аласыз деп ойлайсыз!",
    "Ешқашан, ешқашан басқалардың сізді бір нәрсенің қиын немесе мүмкін емес екеніне сендіруіне жол бермеңіз!",
    "Табыс әдетте күтуге тым бос емес адамдарға келеді!",
    "Табысты өмірдің құпиясы-не істеу керектігін түсіну және оны жасау!",
    "Табыс-бұл күн сайын қайталанатын аз күш-жігердің жиынтығы!",
    "Табысты адамдар сәтсіздікке ұшырағысы келмейтін нәрсені жасайды. Оны жеңілдетуге тырыспаңыз, жақсырақ болуға тырысыңыз!",
    "Тек табысты адам емес, құнды адам болуға тырысыңыз!",
    "Бір жеңіс жеңіске жетуге деген ұмтылыстан айырмашылығы табысқа жете алмайды!",
    "Армандарыңызды орындаңыз немесе біреу сізді өз арманыңызды орындау үшін жалдайды!",
    "Мен өзімнің жетістігімді мен ешқашан ақталмағанымды және сылтауларды тыңдамағанымды түсіндіремін!",
    "Табыс-бұл құлшынысты жоғалтпай сәтсіздіктен сәтсіздікке дейінгі қозғалыс!",
    "Табыс-бұл баспалдақ, оған қолыңызды қалтаңызда ұстап көтерілмеңіз!",
    "Сәттілік-бұл уақыт",
    "Сәттілік бақыттың кілті емес. Бақыт-сәттіліктің кілті. Егер сіз не істеп жатқаныңызды жақсы көрсеңіз, сіз сәттілікке жетесіз!",
    "Адамның ақыл-ойы нені түсіне алады және ол не істей алатынына сене алады",
    "Ең қиыны-әрекет ету, қалғанының бәрі тек табандылыққа байланысты!",
    "Өзіңізге ұнайтын мамандықты таңдаңыз — және сіздің өміріңізде бір күн жұмыс істеудің қажеті жоқ!",
    "Данышпандық тек өткінші мүмкіндік болуы мүмкін. Тек жұмыс пен ерік оған өмір беріп, оны даңққа айналдыра алады!",
    "Өмір сүру дегеніміз-жұмыс істеу. Еңбек-адамның өмірі!",
    "Өзіңізге ұнайтын нәрсені алуға тырысыңыз, әйтпесе сіз алған нәрсені жақсы көруіңіз керек!",
    "Біз өз еркімізбен жасайтын жұмыс ауырсынуды емдейді!", //35
    "Қолыңнан келгенді істе, қолыңда бар нәрсемен, Сен тұрған жерде!",
    'Әрқашан сіздің табысқа жетуге деген шешіміңіз бәрінен де маңызды екенін ұмытпаңыз!',
    "Кім қалайды-мүмкіндіктер іздейді. Кім қаламайды – себептерін іздейді!",
    "Махаббат пен жұмыс-өмірдегі жалғыз құнды нәрсе. Жұмыс-махаббаттың бір түрі",
    "Депрессияны тудырмайтын жұмыстың бір ғана түрі бар-бұл сізге қажет емес жұмыс!",
    "Мен сәттілікке қатты сенемін және байқадым: мен неғұрлым көп жұмыс жасасам, соғұрлым бақыттымын!",
    "Шабыт тек жұмыс кезінде келеді!",//42
    "Өз жұмысыңды өзіңе мәжбүрле; оның сені талап етуін күтпе!",
    "Егер сіз қазіргі уақытта жұмыс жасасаңыз, онда сіздің жұмысыңыз елеусіз болады; тек болашақты ескере отырып жұмыс істеу керек.",
    "Кім оған төленетін нәрседен артық жасамаса, ол ешқашан алатынынан артық алмайды!",
    "Әдетте басқалардан жақсы жұмыс істей алатындар басқалардан жақсы жұмыс істемейді",
    "Жұмыстың ең қиын бөлігі-оны бастауға шешім қабылдау!",
    "Адамдардың ішіндегі ең бақытсызы-әлемде жұмыс істемеген адам!",
    "Ешнәрсе жасамағаннан гөрі, белгілі бір мақсатсыз жұмыс істеген жақсы.",
    "Біз өмірде оған өзіміз салатын нәрсені ғана табамыз."
)

let text_chenese = new Array (
    "愿即将到来的新的一天给你带来微笑和幸福！",
"你每天只能活一次。 做到最好！",
"最伟大的人取得了他们最大的成功，离他们最大的失败只有一步之遥",
"成功来自于那些相信自己并准备获胜的人。 祝你好运！",
"任何一天都是好的，每一天都可以教给我们新的东西。 祝你今天愉快！",
"走到最后，人们嘲笑开始时折磨他们的恐惧",
"要达到目标，你必须去",
"做不可能的事情很有趣！",
    "尝试和失败，但不要打断你的努力！",
"我们自己必须成为我们希望在世界上看到的变化！",
"障碍是那些可怕的事情，你看到，当你远离目标",
"设定目标是实现梦想的第一步",
"通过实现伟大的目标，一个人在自己身上发现了一个伟大的性格，使他成为他人的灯塔！",
"实现设定的目标需要耐心和热情。 放眼全球-但要现实！",
    "最危险的毒药是实现目标的感觉。 解药就是每天晚上都想着明天可以做得更好！",
"永远，永远不要让别人说服你，有些事情是困难的或不可能的！",
"成功通常来自那些太忙而无法等待的人！",
"成功人生的秘诀是了解你的目的是做什么，并做到这一点！",
"成功是每天重复的小小努力的总和！",
"成功的人做不成功的人不想做的事情。 不要努力让它变得更容易，努力让它变得更好！",
    "努力做不仅仅是一个成功的人，而是一个有价值的人！",
"一场胜利不会导致成功，不像不断的胜利愿望！",
"实现你的梦想，或者有人会雇用你来实现自己的梦想！",
"我解释我的成功的事实，我从来没有为自己辩解，我没有听借口！",
"成功是从失败到失败而不失去热情的运动！",
"成功是一个梯子，你不能用手在口袋里爬！",
"成功就是有时间",
    "成功不是幸福的关键。 幸福是成功的关键。 如果你热爱你所做的，你就会成功！",
"一个人的思想能理解什么，他能相信什么，他就能实现",
"最难的是开始演戏，其他一切只靠毅力！",
"选择一个你喜欢的职业--你一生中不必工作一天！",
"天才可能只是稍纵即逝的机会。 只有工作和意志才能给她生命，把她变成荣耀！",
"活着就是工作。 工作是人的生命！",
    "尽量得到你所爱的东西，否则你将不得不爱你所收到的东西！",
"我们愿意做的工作可以治愈痛苦！", //35
"尽你所能，你有什么，你在哪里！",
    // "永远记住，你成功的决心比其他任何事情都重要',
    "谁想要–正在寻找机会。 谁不想-寻找理由！",
"爱情和工作是生命中唯一有价值的东西。 工作是一种爱的形式",
"只有一种类型的工作不会导致抑郁症-这是你不必做的工作！",
    "我坚信运气，我注意到：我工作得越多，我就越幸运！",
"灵感只在工作中出现！",//42
"自己强迫你的工作;不要指望它强迫你！",
"如果你为现在工作，那么你的工作就会变得微不足道;你必须只考虑未来。",
"那些不做比他们得到的报酬更多的人永远不会得到比他们得到的更多的东西！",
"通常那些知道如何比别人更好地工作的人知道如何不比别人更好地工作",
"工作中最难的部分是决定开始它！",
    "最不幸福的人是世界上没有工作的人！",
"在没有特定目标的情况下工作总比什么都不做好。",
"我们在生活中只找到我们自己投入的东西。"
)

if (language == "English" || language == null){
    button_edit.innerHTML = "Edit Profile"
    add_additional_info.innerHTML = "Add additional information";
    rename_name.innerHTML = "Change the name"
    rename_surname.innerHTML = "Change the surname"
    name_input.placeholder = "Write your name..."
    submit_btn.innerHTML = "Search"
    seacrh_id.placeholder = "Search something..."
    save_btn_loader.innerHTML = "Save"
    work_boost.innerHTML = "Cooperation"
    work_btn.innerHTML = "Work"
    collections_btn.innerHTML  = "Collections"
    about_btn.innerHTML = "Main information"
    about_btn.setAttribute('style', 'width: calc(var(--main_var) * 9.2)')
    password_info.innerHTML = "Password & Barcode"
    dob_info.innerHTML = "Birthday & Status"
    additional_info.innerHTML = "Additional information"
    next_btn.innerHTML = "Next"
    prev_btn.innerHTML = "Previous"
    first_slide.innerHTML = "1. Go to Jobs first"
    second_slide.innerHTML = "2. Create a design"
    third_item.innerHTML = "3. Upload the work"
    fourth_slide.innerHTML = "4. Check the work in the file"
    danger_info.innerHTML = "Oops, you don't have any uploaded jobs yet..."
    text_node.innerHTML = "Welcome! Let's add a new design project today!"
    var ran = Math.floor(Math.random() * (text_eng.length - 0))
    text_node.innerHTML = text_eng[ran]
    home_btn.innerHTML = "Home"
    setting_btn.innerHTML = "Settings"
    profile_btn.innerHTML = "Profile"
    
    surname_input.placeholder = "Write your surname..."
    save_btn_surname.innerHTML = "Save"
    submit_data_btn.innerHTML = "Publish data"
    danger_text.innerHTML = "You must specify a rating for all skills"
    about_us.innerHTML = "About Us"
}

if (language == "Русский"){
    button_edit.innerHTML = "Редактировать профиль"
    button_edit.classList.add('button_edit_rus')
    add_additional_info.innerHTML = "Добавить дополнительную информацию"
    dropdown_btn.setAttribute('style', 'left:calc(var(--main_var) * 41)')
    rename_name.innerHTML = "Поменять имя"
    rename_surname.innerHTML = "Поменять фамилию"
    name_input.placeholder = "Напишите свое имя..."
    submit_btn.innerHTML = "Поиск"
    seacrh_id.placeholder = "Поищите что-нибудь..."
    save_btn_loader.innerHTML = "Сохранить"
    work_boost.innerHTML = "Сотрудничества"
    work_boost.setAttribute('style', 'left: calc(var(--main_var) * 4.5)')
    work_btn.innerHTML = "Работа"
    collections_btn.innerHTML  = "Коллекции"
    collections_btn.setAttribute('style', 'left: calc(var(--main_var) * 12.3)')
    about_btn.innerHTML = "Главные информации"
    about_btn.setAttribute('style', 'left: calc(var(--main_var) * 20.1)')
    password_info.innerHTML = "Пароль & Штрих-код"
    dob_info.innerHTML = "День рождение & Статус"  
    additional_info.innerHTML = "Дополнительная информация"
    first_slide.innerHTML = " 1. Сначала перейдите в работы"
    prev_btn.innerHTML = "Предыдущий"
    next_btn.innerHTML = "Следующий"
    second_slide.innerHTML = "2. Создайте дизайн"
    third_item.innerHTML = "3. Загрузите работу"
    fourth_slide.innerHTML = "4. Проверьте работу в файле"
    danger_info.innerHTML = "Упс, у вас еще нету загруженных работ..."
    var ran = Math.floor(Math.random() * (text_russian.length - 0))
    text_node.innerHTML = text_russian[ran]
    home_btn.innerHTML = "Домой"
    setting_btn.innerHTML = "Настройки"
    profile_btn.innerHTML = "Профиль"
    surname_input.placeholder = "Напишите свое фамилию..."
    save_btn_surname.innerHTML = "Сохранить"
    submit_data_btn.innerHTML = "Опубликовать данные"
    danger_text.innerHTML = "Вы должны указать рейтинг для всех навыков"
    about_us.innerHTML = "О нас"

}

if (language == "Қазақ тілі"){
    button_edit.innerHTML = "Профильді өңдеу"
    button_edit.classList.add('button_edit_rus')
    add_additional_info.innerHTML = "Қосымша ақпарат қосу"
    dropdown_btn.setAttribute('style', 'left:calc(var(--main_var) * 41)')
    rename_name.innerHTML = "Атын өзгерту"
    rename_surname.innerHTML = "Тегін өзгерту"
    name_input.placeholder = "Өз атыңызды жазыңыз..."
    submit_btn.innerHTML = "Іздеу"
    seacrh_id.placeholder = "Бірдеңе іздеңіз..."
    save_btn_loader.innerHTML = "Сақтау"
    work_boost.innerHTML = "Ынтымақтастық"
    work_btn.innerHTML = "Жұмыс"
    work_boost.setAttribute('style', 'left: calc(var(--main_var) * 4.5)')
    collections_btn.innerHTML  = "Жинақтар"
    collections_btn.setAttribute('style', 'left: calc(var(--main_var) * 12.3)')
    about_btn.innerHTML = "Негізгі ақпарат"
    about_btn.setAttribute('style', 'left: calc(var(--main_var) * 20.1)')
    password_info.innerHTML = "Құпия сөз & Штрих-код"
    dob_info.innerHTML = "Туған күн & Күйі"  
    additional_info.innerHTML = "Қосымша ақпарат"
    first_slide.innerHTML = "1. Алдымен жұмысқа өтіңіз"
    prev_btn.innerHTML = "Алдыңғы"
    next_btn.innerHTML = "Келесі"
    second_slide.innerHTML = "2. Дизайн жасаңыз"
    third_item.innerHTML = "3. Жұмысты жүктеңіз"
    fourth_slide.innerHTML = "4. Файлдағы жұмысты тексеріңіз"
    danger_info.innerHTML = "Сізде әлі жүктелген жұмыс жоқ..."
    var ran = Math.floor(Math.random() * (text_kz.length - 0))
    text_node.innerHTML = text_kz[ran]
    home_btn.innerHTML = "Басты бет"
    setting_btn.innerHTML = "Баптау"
    profile_btn.innerHTML = "Профиль"
    surname_input.placeholder = "Тегіңізді жазыңыз..."
    save_btn_surname.innerHTML = "Сақтау"
    submit_data_btn.innerHTML = "Деректерді жариялау"
    about_us.innerHTML = "Біз туралы"

}   

if (language == "中文"){
    button_edit.innerHTML = "编辑个人资料"
    add_additional_info.innerHTML = "添加其他信息"
    rename_name.innerHTML = "更改名称"
    rename_surname.innerHTML = "更改您的姓氏"
    name_input.placeholder = "写上你的名字。.."
    submit_btn.innerHTML = "搜索"
    seacrh_id.placeholder = "找点东西..."
    save_btn_loader.innerHTML = "储蓄"
    work_boost.innerHTML = "合作；合作"
    work_btn.innerHTML = "工作"
    work_boost.setAttribute('style', 'left: calc(var(--main_var) * 3.7)')
    collections_btn.innerHTML  = "馆藏资料"
    collections_btn.setAttribute('style', 'left: calc(var(--main_var) * 11.6)')
    about_btn.innerHTML = "主要资料"
    about_btn.setAttribute('style', 'left: calc(var(--main_var) * 19.6)')
    password_info.innerHTML = "密码及条码"
    dob_info.innerHTML = "生日及状况"  
    additional_info.innerHTML = "其他资料"
    first_slide.innerHTML = "1. 先去找工作"
    prev_btn.innerHTML = "上一次"
    next_btn.innerHTML = "下一个"
    second_slide.innerHTML = "2. 创建设计"
    third_item.innerHTML = "3. 上传作品"
    fourth_slide.innerHTML = "4. 检查文件中的工作"
    danger_info.innerHTML = "哎呀，你还没有任何上传的工作。.."
    var ran = Math.floor(Math.random() * (text_chenese.length - 0))
    text_node.innerHTML = text_chenese[ran]
    home_btn.innerHTML = "家"
    setting_btn.innerHTML = "设置"
    profile_btn.innerHTML = "个人资料"
    surname_input.placeholder = "写上你的姓..."
    save_btn_surname.innerHTML = "储蓄"
    submit_data_btn.innerHTML = "发布数据"
    about_us.innerHTML = "关于我们"

}
