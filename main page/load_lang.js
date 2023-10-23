// variable
let text_ru = new Array (
    "Подсказка: поставьте для себя удобный язык чтобы, эффективнее пользоваться сайтом!",
    "Подсказка: статус: читатель, дает возможность читать новые новости",
    "Подсказка: статус: писатель, позволяет вам публиковать новости!",
    "Подсказка: всегда пишите свое настоящее имя и фамилию!",
    "Подсказка: используйте баркод чтобы восстановить данные",
    "Подсказка: запоминайте свой баркод, и не говорите его никому!",
    "Подсказка: пользуйтесь надежным паролем, если не хотите потерять данные!",
    "Подсказка: перед тем как начать работать с сайтом, ознакомьтесь с правилами!",
    "Подсказка: если возникнут вопросы насчет использование сайта, можете нам обратиться!"
)

let text_en = new Array (
    "Hint: set a convenient language for yourself to use the site more effectively!",
    "Hint: status: reader, makes it possible to read new news",
    "Hint: status: writer, allows you to publish news!",
    "Hint: always write your real name and surname!",
    "Hint: use the barcode to recover data",
    "Hint: remember your barcode and don't tell it to anyone!",
    "Hint: use a strong password if you don't want to lose data!",
    "Hint: before you start working with the site, read the rules!",
    "Hint: if you have any questions about using the site, you can contact us!"
)

let text_kaz = new Array (
    "Кеңес сөз: сайтты тиімді пайдалану үшін өзіңізге ыңғайлы тіл қойыңыз!",
    "Кеңес сөз: оқырман күйі, жаңа жаңалықтарды оқуға мүмкіндік береді",
    "Кеңес сөз: жазушы күйі, жаңалықтарды жариялауға мүмкіндік береді!",
    "Кеңес сөз: әрқашан шын аты-жөніңізді жазыңыз!",
    "Кеңес сөз: деректерді қалпына келтіру үшін баркодты пайдаланыңыз",
    "Кеңес сөз: баркодыңызды есте сақтаңыз және оны ешкімге айтпаңыз!",
    "Кеңес сөз: деректерді жоғалтқыңыз келмесе, сенімді құпия сөзді пайдаланыңыз!",
    "Кеңес сөз: сайтпен жұмыс жасамас бұрын ережелермен танысыңыз!",
    "Кеңес сөз: егер сайтты пайдалану туралы сұрақтар туындаса, бізбен байланыса аласыз!"
)
let text_ch = new Array (
    "提示：为自己设置一个方便的语言，以便更有效地使用网站！",
    "提示：状态：读者，使阅读新新闻成为可能",
    "提示：状态：作家，允许您发布新闻！",
    "提示：总是写你的真实姓名和姓氏！",
    "提示：使用条形码恢复数据",
    "提示：记住你的条形码，不要告诉任何人！",
    "提示：如果您不想丢失数据，请使用强密码！",
    "提示：在您开始使用该网站之前，请阅读规则！",
    "提示：如果您对使用网站有任何疑问，可以联系我们！"
)

if (language_local == "English" || language_local == null){
    click.innerHTML = "Click anywhere"
    click.classList.add('click_en')
    load_text.innerHTML = "Loading"
    var ran = Math.floor(Math.random() * (text_en.length - 0))
    help.innerHTML = text_en[ran]
    contact.innerHTML = "Contacts"
    about_us_btn.innerHTML = "About us"
    center_text.innerHTML = "An opportunity to prove yourself in journalism"
    advice_text.innerHTML = "Let your imagination think for you."
    advice_text.classList.add('advice_text_en')
    hire_btn.innerHTML = "Get started"
    advice_start.innerHTML = "Take a step forward to create your own story!"
    advice_start.classList.add('advice_start_en')
    trusted_text.innerHTML  ="Cooperation with"
    motive_text.innerHTML = `Discover your <br> talent with us!`
    description_of_motivation.innerHTML = `From Amazon to Facebook, find out why more <br> than 1,000 top brands use New News <br> to hire workers from different fields.`
    start_motivation_btn.innerHTML = "Get Started"
    corp_text.innerHTML = "Trusted by top brands & businesses"
    connect_text.innerHTML = `Connecting brands and  <br>business builders with the <br> world’s top designers`
    world_class_text.innerHTML = `The world’s leading brands use New News to hire creative talent. Browse millions of top-rated <br> portfolios to find your perfect creative match.`
    find_out_worldClass_teacher.innerHTML = `Find your perfect <br> creative match`
    text_largest.innerHTML = `As the world's largest and most far-reaching network of exceptional <br> creative professionals, we are fully equipped to handle your most critical <br> projects with ease.`
    find_designer.innerHTML = "Find a designer"
    learn_about.innerHTML = "Learn about hiring"
    better_way_text.innerHTML = `A better way to hire <br> designers`
    first_better_way_text.innerHTML = `To work more effectively with the designer, <br> you must register.`
    second_better_way_text.innerHTML = `Decide on the purpose of hiring <br> to find the right people faster.`
    third_better_way_text.innerHTML = "Decide on the amount of <br>work to do the best project."
    why_reason.innerHTML = `Why brands choose New News <br>to hire design talent`
    first_reason.innerHTML = "World-class talents"
    first_reason_text.innerHTML = `From graphic design to UX/UI, our community is home to <br>the world’s leading designers and creative agencies.`
    second_reason.innerHTML = '$0 placement fees'
    second_reason_text.innerHTML = `We make the hiring process as seamless and cost-effective <br>as possible, so you can focus on building your business.`
    third_reason.innerHTML = "Global reach"
    third_reason_text.innerHTML = `With a network of designers spanning over 170 countries,<br> we make it easy to find world-class talent, wherever you are <br>in the world.`
    top_project_text.innerHTML = "Plus, top quality work"
    text_looking_for.innerHTML = 'Looking for work?'
    find_text.innerHTML = "Find your next opportunity"
    boost_text.innerHTML = "Browse new design jobs or boost your portfolio to <br> get discovered."
    find_word_btn.innerHTML = "Find work"
    get_discovered.innerHTML = "Learn"
    inspiration_text.innerHTML = "Here for inspiration?"
    discover_text.innerHTML = "Discover trending designs"
    browse_text.innerHTML  = "Browse and save your favorite design projects for <br>endless inspiration."
    create_prof_btn.innerHTML = "Create profile"
    browse_design_btn.innerHTML  = "Browse design"
    start_hiring_text.innerHTML = "Start hiring today"
    browse_portfolio.innerHTML = "Browse portfolios and engage with top creative talent today"
    now_btn.innerHTML = "Get started now"
    about_hiring_start_btn.innerHTML = "Learn about hiring"
    question_span_start.innerHTML = "Are you a designer?"
    join_new_news.innerHTML = "Join New News"
    for_designers.innerHTML = "For designers"
    hire_talent_text.innerHTML = "Hire talents"
    inspiration_text_btn.innerHTML = "Inspiration"
    advertisement_btn.innerHTML = "Advertisement";
    blog_btn.innerHTML = "Blog"
    careers_btn.innerHTML = "Careers"
}

if (language_local == "Русский"){
    click.innerHTML = "Кликните в любое место"
    click.classList.add('click_ru')
    load_text.innerHTML = "Загрузка"
    var ran = Math.floor(Math.random() * (text_ru.length - 0))
    help.innerHTML = text_ru[ran]
    contact.innerHTML = "Контакты"
    about_us_btn.innerHTML = "О нас"
    center_text.innerHTML = "Возможность проявить себя в журналистике"
    advice_text.innerHTML = "Позвольте вашей фантазии думать за вас."
    advice_text.classList.add('advice_text_ru')
    hire_btn.innerHTML = "Начать работу"
    advice_start.innerHTML = "Сделайте шаг вперед чтобы создать свою историю!"
    advice_start.classList.add('advice_start_ru')
    trusted_text.innerHTML  ="Сотрудничество с"
    motive_text.innerHTML = `Раскройте свой <br> талант с нами!`
    description_of_motivation.innerHTML = `С Amazon и до Facebook, узнайте почему <br> более 1.000 топ брендов используют New News <br> для найма работников с разных сфер.`
    start_motivation_btn.innerHTML = "Начать работу"
    corp_text.innerHTML = "Доверяют ведущие компании & бренды"
    connect_text.innerHTML = `Объединение брендов и <br> создателей бизнеса с ведущими <br>  мировыми дизайнерами`
    connect_text.classList.add('connect_text_ru')
    world_class_text.innerHTML = `Ведущие мировые бренды используют New News для найма творческих талантов. Просмотрите миллионы <br> портфолио с самым высоким рейтингом, чтобы найти свою идеальную творческую пару.`
    world_class_text.classList.add('world_class_text_ru')
    find_out_worldClass_teacher.innerHTML = `Найдите свою идеальную <br> творческую пару`
    find_out_worldClass_teacher.classList.add('find_out_worldClass_teacher_ru')
    text_largest.innerHTML = `Являясь крупнейшей в мире и наиболее разветвленной сетью <br> исключительных творческих профессионалов, мы полностью оснащены для того,<br> чтобы с легкостью справиться с вашими самыми важными проектами.`
    text_largest.classList.add('text_largest_ru')
    find_designer.innerHTML = "Найдите дизайнера"
    learn_about.innerHTML = "Узнайте о приеме на работу"
    learn_about.classList.add('learn_about_ru')
    better_way_text.innerHTML = `Лучший способ нанять <br>дизайнеров`
    first_better_way_text.innerHTML = `Чтобы эффективнее работать с дизайнером, <br> вы должны зарегистрироваться.`
    second_better_way_text.innerHTML = `Определитесь с целью найма, чтобы <br> быстрее найти подходящих людей.`
    third_better_way_text.innerHTML = "Определитесь с объемом работы, <br>чтобы сделать лучший проект."
    why_reason.innerHTML = `Почему бренды выбирают New News <br> для найма талантливых дизайнеров`
    why_reason.classList.add('why_reason_ru')
    first_reason.innerHTML = "Таланты мирового класса"
    first_reason_text.innerHTML = `От графического дизайна до UX/UI - наше сообщество является домом <br>для ведущих мировых дизайнеров и креативных агентств.`
    second_reason.innerHTML = 'Плата за размещение в размере $0'
    second_reason_text.innerHTML = `Мы делаем процесс найма максимально плавным и экономичным, <br> чтобы вы могли сосредоточиться на построении своего бизнеса.`
    third_reason.innerHTML = "Глобальный охват"
    third_reason_text.innerHTML = `Благодаря сети дизайнеров, охватывающей более 170 стран, мы<br> облегчаем поиск талантов мирового класса, где бы вы ни <br>находились.`
    top_project_text.innerHTML = "Плюс ко всему, работа высочайшего качества"
    text_looking_for.innerHTML = 'Ищете работу?'
    find_text.innerHTML = "Найдите свою возможность"
    boost_text.innerHTML = "Просматривайте новые дизайнерские вакансии или расширяете свое портфолио, чтобы о вас узнали."
    find_word_btn.innerHTML = "Найти работу"
    get_discovered.innerHTML = "Учить"
    inspiration_text.innerHTML = "Пришли за вдохновением?"
    inspiration_text.classList.add('inspiration_text_ru')
    discover_text.innerHTML = "Откройте для себя трендовые дизайны"
    browse_text.innerHTML = "Просматривайте и сохраняйте ваши любимые дизайнерские проекты для бесконечного вдохновения."
    create_prof_btn.innerHTML = "Создать профиль"
    browse_design_btn.innerHTML  = "Просмотр дизайна"
    start_hiring_text.innerHTML = "Начните нанимать"
    start_hiring_text.classList.add('start_hiring_text_ru');
    browse_portfolio.innerHTML = "Просматривайте портфолио и общайтесь с лучшими творческими талантами уже сегодня"
    browse_portfolio.classList.add('browse_portfolio_ru');
    now_btn.innerHTML = "Приступить к работе"
    about_hiring_start_btn.innerHTML = "Прием на работу"
    question_span_start.innerHTML = "Вы дизайнер?"
    join_new_news.innerHTML = "Присоединяйтесь к New News"
    join_new_news.classList.add('join_rus')
    for_designers.innerHTML = "Для дизайнеров"
    hire_talent_text.innerHTML = "Нанять талантов"
    hire_talent_text.classList.add('hire_talent_text_ru')
    inspiration_text_btn.innerHTML = "Вдохновение"
    inspiration_text_btn.classList.add('inspiration_text_btn_ru');
    advertisement_btn.innerHTML = "Реклама"
    advertisement_btn.classList.add('advertisement_btn_rus')
    blog_btn.innerHTML = "Блог"
    blog_btn.classList.add('blog_btn_rus')
    careers_btn.innerHTML = "Карьеры"
    careers_btn.classList.add('careers_btn_rus')
}       

if (language_local == "Қазақ тілі"){
    click.innerHTML = "Кез келген жерге басыңыз"
    click.classList.add('click_kaz')
    load_text.innerHTML = "Жүктеу"
    var ran = Math.floor(Math.random() * (text_kaz.length - 0))
    help.innerHTML = text_kaz[ran]
    contact.innerHTML = "Байланыс"
    about_us_btn.innerHTML = "Біз туралы"
    center_text.innerHTML = "Журналистикада өзін көрсету мүмкіндігі"
    center_text.classList.add('center_text_kaz')
    advice_text.innerHTML = "Сіздің қиялыңыз сіз үшін ойлауға мүмкіндік беріңіз."
    advice_text.classList.add('advice_text_kaz')
    hire_btn.innerHTML = "Жұмысты бастау"
    advice_start.innerHTML = "Өз тарихыңызды жасау үшін алға қадам жасаңыз!"
    advice_start.classList.add('advice_start_kaz')
    trusted_text.innerHTML  ="Ынтымақтастықтар"
    motive_text.innerHTML = `Өз талантыңызды <br> бізбен бірге ашыңыз!`
    start_motivation_btn.innerHTML = "Жұмысты бастау"
    description_of_motivation.innerHTML = `Amazon - нан бастап Facebook-ке дейін 1000-нан <br>  астам үздік брендтер әртүрлі  салалардағы <br> жұмысшыларды  жалдау үшін неге New News-ті пайдаланады екенің біліңіз.`
    corp_text.innerHTML = "Жетекші компаниялар & брендтер сенеді"
     connect_text.innerHTML = `Брендтер мен бизнес <br> жасаушыларды жетекші әлемдік <br> дизайнерлермен біріктіру`
     connect_text.classList.add('connect_text_kaz')
     world_class_text.innerHTML = `Әлемдегі жетекші брендтер New News-ті шығармашылық таланттарды жалдау үшін пайдаланады. Өзіңіздің тамаша <br> шығармашылық  жұпыңызды табу үшін миллиондаған ең жоғары бағаланған портфолионы шолыңыз.`
     world_class_text.classList.add('world_class_text_ru')
    find_out_worldClass_teacher.innerHTML = `Өзіңіздің шығармашылық <br> жұбыңызды табыңыз`
    find_out_worldClass_teacher.classList.add('find_out_worldClass_teacher_ru')
    text_largest.innerHTML = `Әлемдегі ең үлкен және ерекше шығармашылық кәсіпқойлардың ең  <br> кең желісі ретінде біз сіздің ең маңызды жобаларыңызбен оңай күресу <br> үшін толық жабдықталған.`
    // text_largest.classList.add('text_largest_ru')
    find_designer.innerHTML = "Дизайнерді табу"
    learn_about.innerHTML = "Жұмысқа қабылдау туралы"
    learn_about.classList.add('learn_about_kaz')
    better_way_text.innerHTML = `Дизайнерлерді жалдаудың <br>ең жақсы тәсілі`
    first_better_way_text.innerHTML = `Дизайнермен тиімді жұмыс істеу <br> үшін сіз тіркелуіңіз керек.`
    second_better_way_text.innerHTML = `Дұрыс адамдарды тезірек табу <br> үшін жалдау мақсатын шешіңіз.`
    third_better_way_text.innerHTML = "Жақсы жоба жасау үшін <br> жұмыс көлемін шешіңіз."
    why_reason.innerHTML = `Неліктен брендтер талантты дизайнерлерді <br>жалдау үшін New News-ті таңдайды`
    why_reason.classList.add('why_reason_kaz')
    first_reason.innerHTML = "Әлемдік деңгейдегі таланттар"
    first_reason_text.innerHTML = `Графикалық дизайннан UX/UI-ге дейін біздің қоғамдастықта әлемдегі <br>жетекші дизайнерлер мен шығармашылық агенттіктер орналасқан.`
    second_reason.innerHTML = 'Орналастыру ақысы $0'
    second_reason_text.innerHTML = `Біз жалдау процесін мүмкіндігінше үнемді етеміз, осылайша сіз өз <br>бизнесіңізді құруды ғана ойлайсыз.`
    third_reason.innerHTML = "Жаһандық қамту"
    third_reason_text.innerHTML = `170-тен астам елді қамтитын дизайнерлер желісінің арқасында біз<br> қай жерде болсаңыз да, әлемдік деңгейдегі таланттарды табуды<br> жеңілдетеміз.`
    top_project_text.innerHTML = "Сонымен қатар, жоғары сапалы жұмыс"
    text_looking_for.innerHTML = "Жұмыс іздеп жүрсіз бе?"
    text_looking_for.classList.add('text_looking_for_kaz')
    find_text.innerHTML = "Келесі мүмкіндікті табыңыз"
    boost_text.innerHTML = "Жаңа дизайнерлік жұмыстарды шолыңыз немесе сіз туралы білу үшін портфолиоңызды кеңейтіңіз."
    find_word_btn.innerHTML = "Жұмыс табу"
    get_discovered.innerHTML = "Үйрену"
    inspiration_text.innerHTML = "Шабыт алу үшін келдіңіз бе?"
    inspiration_text.classList.add('inspiration_text_ru')
    discover_text.innerHTML = "Трендтегі дизайдарды ашыңыз"
    browse_text.innerHTML = "Шексіз шабыт алу үшін сүйікті дизайн жобаларыңызды шолыңыз және сақтаңыз."
    create_prof_btn.innerHTML = "Профиль жасау"
    browse_design_btn.innerHTML  = "Дизайнды қарау"
    start_hiring_text.innerHTML = "Жалдауды бастаңыз"
    start_hiring_text.classList.add('start_hiring_text_kaz')
    browse_portfolio.innerHTML = "Портфолионы қарап шығыңыз және бүгін ең жақсы шығармашылық таланттармен байланысыңыз"
    browse_portfolio.classList.add('browse_portfolio_kaz')
    now_btn.innerHTML = "Жұмысқа кірісу"
    about_hiring_start_btn.innerHTML = "Жұмысқа қабылдау"
    question_span_start.innerHTML = "Сіз дизайнерсіз бе?"
    join_new_news.innerHTML = "New News-ке қосылыңыз"
    join_new_news.classList.add('join_kaz')
    for_designers.innerHTML = "Дизайнерлер үшін"
    hire_talent_text.innerHTML = "Таланттарды жалдау"
    hire_talent_text.classList.add('hire_talent_text_kaz')
    inspiration_text_btn.innerHTML = "Шабыт"
    inspiration_text_btn.classList.add('inspiration_text_btn_kaz')
    advertisement_btn.innerHTML = "Жарнама"
    advertisement_btn.classList.add('advertisement_btn_kaz')
    blog_btn.innerHTML = "Блог"
    blog_btn.classList.add('blog_btn_kaz')
    careers_btn.innerHTML = "Мансап"
    careers_btn.classList.add('careers_btn_kaz')
}

if (language_local == "中文"){
    click.innerHTML = "点击任何地方"
    click.classList.add('click_ch')
    load_text.innerHTML = "装载量"
    var ran = Math.floor(Math.random() * (text_ch.length - 0))
    help.innerHTML = text_ch[ran]
    contact.innerHTML = "联络人"
    about_us_btn.innerHTML = "关于我们"
    center_text.innerHTML = "在新闻业证明自己的机会"
    center_text.classList.add('center_text_ch')
    advice_text.innerHTML = "让你的想象力为你思考"
    advice_text.classList.add('advice_ch')
    hire_btn.innerHTML = "开始吧"
    advice_start.innerHTML = "向前迈进一步，创造自己的故事！"
    advice_start.classList.add('advice_start_ch')
    trusted_text.innerHTML  ="合作与"
    motive_text.innerHTML = `和我们一 <br> 起发现你的才华!`
    start_motivation_btn.innerHTML = "开始吧"
    description_of_motivation.innerHTML = `从亚马逊到facebook，找出为什么超过1,000 <br> 个顶级品牌使用新消息来雇用来自不同领域的工人。`
    corp_text.innerHTML = "受到领先公司和品牌的信任"
    connect_text.innerHTML = `结合品牌和商 <br>业创造者与世界 <br>领先的设计师`
    connect_text.classList.add('connect_text_ch')
    world_class_text.innerHTML = `世界领先的品牌使用New News招聘创意人才。 浏览数以百万计的顶级投资组合，<br>找到你的完美创意匹配。`
    world_class_text.classList.add('world_class_text_ch')
    find_out_worldClass_teacher.innerHTML = `找到你的完美创意夫妇`
    text_largest.innerHTML = `作为世界上最大、最广泛的优秀创意专业人士网络，<br> 我们完全有能力轻松处理您最重要的项目。`
    find_designer.innerHTML = "寻找设计师"
    learn_about.innerHTML = "了解招聘情况"
    better_way_text.innerHTML = `雇用设计师的更<br>好方法`
    first_better_way_text.innerHTML = `为了更有效地与设计师合作，<br> 您必须注册。`
    second_better_way_text.innerHTML = `决定招聘的目的，<br>以便更快地找到合适的人。`
    third_better_way_text.innerHTML = "决定做最好的项目的工作量。"
    why_reason.innerHTML = `为什么品牌选择新的新闻<br>聘请有才华的设计师`
    why_reason.classList.add('why_reason_ch')
    first_reason.innerHTML = "世界级人才"
    first_reason_text.innerHTML = `从平面设计到UX/UI，我们的社区是世<br>界领先的设计师和创意机构的家园。`
    second_reason.innerHTML = '住宿费$0'
    second_reason_text.innerHTML = `我们使招聘过程尽可能顺利和经济，<br>使您可以专注于建立您的业务。`
    third_reason.innerHTML = "全球复盖"
    third_reason_text.innerHTML = `我们的设计师网络遍布170多个国家，<br>无论您身在何处，我们都能让您更轻<br>松地找到世界级的人才。`
    top_project_text.innerHTML = "此外，这项工作质量最高"
    text_looking_for.innerHTML = "找工作？"
    find_text.innerHTML = "寻找下一<br>个机会"
    boost_text.innerHTML = "浏览新的设计空缺或扩大你的投资组合，<br>让人们了解你。"
    find_word_btn.innerHTML = "寻找工作"
    get_discovered.innerHTML = "教书"
    inspiration_text.innerHTML = "在这里寻找灵感？"
    discover_text.innerHTML = "发现趋势设计"
    browse_text.innerHTML = "浏览并保存您最喜爱的设计项目，<br>以获得无尽的灵感。"
    create_prof_btn.innerHTML = "创建配置文件"
    browse_design_btn.innerHTML  = "查看设计"
    start_hiring_text.innerHTML = "开始招聘"
    start_hiring_text.classList.add('start_hiring_text_ch')
    browse_portfolio.innerHTML = "浏览你的作品集，并与最优秀的创意人才聊天"
    browse_portfolio.classList.add('browse_portfolio_ch')
    now_btn.innerHTML = "开始工作吧"
    about_hiring_start_btn.innerHTML = "招聘员工"
    question_span_start.innerHTML = "你是设计师吗？"
    join_new_news.innerHTML = "加入新新闻"
    join_new_news.classList.add('join_rus')
    for_designers.innerHTML = "为设计师而设"
    hire_talent_text.innerHTML = "聘用人才"
    inspiration_text_btn.innerHTML = "灵感的来源"
    inspiration_text_btn.classList.add('inspiration_text_btn_ch')
    advertisement_btn.innerHTML = "广告"
    blog_btn.innerHTML = "博客"
    blog_btn.classList.add('blog_btn_ch')
    careers_btn.innerHTML = "职业生涯"
    careers_btn.classList.add('careers_btn_ch')
}   
