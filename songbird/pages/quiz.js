window.onload = function () {
    let preloader = document.getElementById('preloader');
    preloader.style.display = 'none';
};

const option1 = document.querySelector('.option1'),
    option2 = document.querySelector('.option2'),
    option3 = document.querySelector('.option3'),
    option4 = document.querySelector('.option4'),
    option5 = document.querySelector('.option5'),
    option6 = document.querySelector('.option6'),
    optionElements = document.querySelectorAll('.option'),
    question = document.getElementById('question'),
    numberOfQuestion = document.getElementById('number-of-question'),
    numberOfAllQuestion = document.getElementById('number-of-all-questions'),
    numberOfAllQuestion2 = document.getElementById('number-of-all-questions-2'),
    answersTracker = document.getElementById('answers-tracker'),
    btnNext = document.getElementById('btn-next'),
    correctAnswer = document.getElementById('correct-answer'),
    btnTryAgain = document.getElementById('btn-try-again'),
    scoreDiv = document.getElementById('scoreDiv');

let FlagNext = false,
    FlagSoundCorrect = false,
    FlagSoundWrong = false;

const rapperNick = document.getElementById('rapperNick'),
    rapperName = document.getElementById('rapperName'),
    rapperBio = document.getElementById('repperBio');

let indexOfQuestion, //index of current question
    indexOfPage = 0,  //index of pages 
    score = 0,
    score2 = 0,
    FlagSound = true;


const questions = [
    // 1
    {
        rapper: 'Voices',
        tracker: '𐤏',
        track: "../assets/audio/music/Rock/Voices.mp3",
        question: 'Answer1 ??',
        options: [
            'Rammstein - Deutschland',
            'The Cranberries - Zombie',
            'Bring Me The Horizon - sugar honey ice and tea',
            'Motionless In White - Voices',
            'Sabaton - Bismarck',
            'Slipknot - Psychosocial',
        ],
        nickOptions: [
            'Rammstein',
            'The Cranberries',
            'Bring Me The Horizon',
            'Motionless In White',
            'Sabaton',
            'Slipknot',
        ],
        nameOptions: [
            '',
            '',
            '',
            '',
            '',
            '',
            // 'Ноэл Хоган,  Майк Хоган, Фергал Лоулер,  Ниалл Куинн, Долорес О’Риордан',
            // 'Оливер Сайкс, Ли Малиа, Мэтт Николлс, Мэтт Кин, Джордан Фиш',
            // 'Крис Моушнлесс (Черулли) - вокал; Райан Ситкович - соло-гитара; Рикки Хоррор (Олсон) - бас-гитара; Девид Сола - бас-гитара; Вилли Мауро - ударные; Мэри Аллард (сессионный участник) -клавиши',
            // 'Йоаким Броден, Пер Сундстрём, Крис Рёланд, Томми Юханссон, Ханнес Ван Дал',
            // 'Сид Уилсон, Джей Вайнберг, Мик ТомсонКрэйг Джонс, Джеймс Рут, Шон Крейен, Алессандро Вентурелла, Кори Тейлор, Майкл Пфафф',
        ],
        description: [
            'Rammstein — немецкая метал-группа, образованная в январе 1994 года в Берлине. Музыкальный стиль группы относится к жанру индастриал-метала (конкретно — его немецкой сцене Neue Deutsche Härte). Основные черты творчества группы: специфический ритм, в котором выдержана большая часть композиций, и эпатирующие тексты песен. Особую известность группе принесли сценические выступления, часто сопровождаемые использованием пиротехники, получившие признание в музыкальной среде. Состав группы ни разу не менялся. ',
            'The Cranberries (в переводе с англ. — «клюква») — ирландская рок-группа, образованная в 1989 году и добившаяся мировой известности в 1990-х.',
            'Bring Me the Horizon — британская рок-группа из Шеффилда, Йоркшира, основанная в 2004 году. В настоящее время состоит из вокалиста Оливера Сайкса, гитариста Ли Малии, басиста Мэтта Кина, барабанщика Мэтта Николлса и клавишника Джордана Фиша.',
            'Motionless In White — американская металкор-группа из города Скрентон, штат Пенсильвания. Коллектив был основан в 2005 году и стал известен благодаря мрачным текстам и готическому внешнему виду участников. На данный момент у MIW имеется два EP и шесть полноформатных альбомов. Мрачную атмосферу треков подчёркивают клавиши. Тематика текстов содержит в себе истории о ужасе, сердечных переживаниях и безумии, в сочетании с фантастикой.',
            'Sabaton — шведская хэви-пауэр-метал группа, основанная в декабре 1999 года. Основной темой для песен являются войны и отдельные сражения и подвиги. Название группы в переводе с английского означает латный ботинок, часть рыцарских доспехов. ',
            'Slipknot(в переводе с англ. — «скользящий узел», «петля», «удавка») — американская ню-метал-группа, образованная в сентябре 1995 года в Айове, США. Альбомы группы получили статус платиновых, всего продано более 30 млн копий по всему миру[16] из которых 6 миллионов в США[17]. В 2006 году группа получила свою единственную на сегодняшний день премию «Грэмми». Коллектив известен тем, что его участники на концертах, фотосессиях и интервью носят маски и специальные комбинезоны',
        ],
        photo: [
            'url(../assets/images/rammstein.jpg)',
            'url(../assets/images/cran.png)',
            'url(../assets/images/bring.jpg)',
            'url(../assets/images/motion.jpg)',
            'url(../assets/images/sabaton.jpg)',
            'url(../assets/images/slipknot.jpg)',
        ],
        music: [
            "../assets/audio/music/Rock/Deutschland.mp3",
            "../assets/audio/music/Rock/Zombie.mp3",
            "../assets/audio/music/Rock/sugar_honey_ice_tea.mp3",
            "../assets/audio/music/Rock/Voices.mp3",
            "../assets/audio/music/Rock/Bismark.mp3",
            "../assets/audio/music/Rock/Psychosocial.mp3",
        ],

        rightAnswer: 3,
        avatar: 'url(../assets/images/motion.jpg)',
    },
    // 2
    {
        rapper: 'No love',
        tracker: '𐤏',
        track: "../assets/audio/music/Adlin/no_love.mp3",
        question: 'Answer1 ??',
        rightAnswer: 0,
        avatar: 'url(../assets/images/adlin.jpg)',
        options: [
            'Adlin - No love',
            'Rammstein - Rosenrot',
            'Kizaru - Money Long',
            'Rammstein - Sonne',
            'Migayi - Sorry',
            'Скриптонит - Цепи',
        ],
        nickOptions: [
            'Adlin',
            'Rammstein',
            'Kizaru',
            'Rammstein',
            'Migayi',
            'Скриптонит',
        ],
        nameOptions: [
            'Даниил Бондарев',
            '',
            'Олег Нечипоренко',
            '',
            'Азамат Кудзаев',
            'Адиль Жалелов',
        ],
        description: [
            'Адлин — музыкальный исполнитель. Работает в жанре Phonk, Hip-Hop и R&B. Родился 1 мая 2001 года в городе Белгород. Имеет свыше 13 тысяч подписчиков в своей официальной группе ВКонтакте, а также 86 тысяч в TikTok.',
            'Rammstein — немецкая метал-группа, образованная в январе 1994 года в Берлине. Музыкальный стиль группы относится к жанру индастриал-метала (конкретно — его немецкой сцене Neue Deutsche Härte). Основные черты творчества группы: специфический ритм, в котором выдержана большая часть композиций, и эпатирующие тексты песен. Особую известность группе принесли сценические выступления, часто сопровождаемые использованием пиротехники, получившие признание в музыкальной среде. Состав группы ни разу не менялся. ',
            'Kizaru — российский хип-хоп-исполнитель. Родом из Санкт-Петербурга, проживает в Барселоне. Участник и основатель творческого объединения «Haunted Family». ',
            'Rammstein — немецкая метал-группа, образованная в январе 1994 года в Берлине. Музыкальный стиль группы относится к жанру индастриал-метала (конкретно — его немецкой сцене Neue Deutsche Härte). Основные черты творчества группы: специфический ритм, в котором выдержана большая часть композиций, и эпатирующие тексты песен. Особую известность группе принесли сценические выступления, часто сопровождаемые использованием пиротехники, получившие признание в музыкальной среде. Состав группы ни разу не менялся. ',
            'Азамат Кудзаев — рэп-исполнитель, известный под псевдонимом MiyaGi. Он выступает в дуэте с Сосланом Бурнацевым aka Andy Panda (бывший Эндшпиль',
            'Скриптонит  — казахстанский исполнитель и музыкальный продюсер, основатель лейбла Musica36[11]. Впервые громко заявил о себе в 2013 году видеоклипом на песню «VBVVCTND», спустя полтора года выпустил свой дебютный альбом «Дом с нормальными явлениями», который стал одним из самых удачных русскоязычных рэп-альбомов 2015 года. '
        ],
        photo: [
            'url(../assets/images/adlin.jpg)',
            'url(../assets/images/rammstein.jpg)',
            'url(../assets/images/kizaru.jpg)',
            'url(../assets/images/rammstein.jpg)',
            'url(../assets/images/miyagi.jpg)',
            'url(../assets/images/skrip.jpg)',
        ],
        music: [
            "../assets/audio/music/Adlin/no_love.mp3",
            "../assets/audio/music/Rammstein/Rosenrot.mp3",
            "../assets/audio/music/Kizaru/money_long.mp3",
            "../assets/audio/music/Rammstein/Sonne.mp3",
            "../assets/audio/music/Miyagi/sorry.mp3",
            "../assets/audio/music/Skriptonit/cepi.mp3",
        ],
    },
    // 3
    {
        rapper: 'Дежавю',
        tracker: '𐤏',
        track: "../assets/audio/music/Kizaru/dejavu.mp3",
        question: 'Answer2 ??',
        avatar: 'url(../assets/images/kizaru.jpg)',
        rightAnswer: 5,
        options: [
            'Kizaru - Block Baby',
            'Kizaru - Bon Voyage',
            'Kizaru - So Icy Nihao',
            'Скриптонит - Москва любит...',
            'Miyagi - Говори мне',
            'Kizaru - Дежавю',
        ],

        nickOptions: [
            'Kizaru',
            'Kizaru',
            'Kizaru',
            'Скриптонит',
            'Miyagi',
            'Kizaru',
        ],
        nameOptions: [
            'Олег Нечипоренко',
            'Олег Нечипоренко',
            'Олег Нечипоренко',
            'Адиль Жалелов',
            'Азамат Кудзаев',
            'Олег Нечипоренко',
        ],
        description: [
            'Kizaru — российский хип-хоп-исполнитель. Родом из Санкт-Петербурга, проживает в Барселоне. Участник и основатель творческого объединения «Haunted Family». ',
            'Kizaru — российский хип-хоп-исполнитель. Родом из Санкт-Петербурга, проживает в Барселоне. Участник и основатель творческого объединения «Haunted Family». ',
            'Kizaru — российский хип-хоп-исполнитель. Родом из Санкт-Петербурга, проживает в Барселоне. Участник и основатель творческого объединения «Haunted Family». ',
            'Скриптонит  — казахстанский исполнитель и музыкальный продюсер, основатель лейбла Musica36[11]. Впервые громко заявил о себе в 2013 году видеоклипом на песню «VBVVCTND», спустя полтора года выпустил свой дебютный альбом «Дом с нормальными явлениями», который стал одним из самых удачных русскоязычных рэп-альбомов 2015 года. ',
            'Азамат Кудзаев — рэп-исполнитель, известный под псевдонимом MiyaGi. Он выступает в дуэте с Сосланом Бурнацевым aka Andy Panda (бывший Эндшпиль)',
            'Kizaru — российский хип-хоп-исполнитель. Родом из Санкт-Петербурга, проживает в Барселоне. Участник и основатель творческого объединения «Haunted Family». ',

        ],
        photo: [
            'url(../assets/images/kizaru.jpg)',
            'url(../assets/images/kizaru.jpg)',
            'url(../assets/images/kizaru.jpg)',
            'url(../assets/images/skrip.jpg)',
            'url(../assets/images/miyagi.jpg)',
            'url(../assets/images/kizaru.jpg)',
        ],

        music: [
            "../assets/audio/music/Kizaru/Block_Baby.mp3",
            "../assets/audio/music/Kizaru/Bon_Voyage.mp3",
            "../assets/audio/music/Kizaru/so-icy-nihao.mp3",
            "../assets/audio/music/Skriptonit/moskva_lubit.mp3",
            "../assets/audio/music/Miyagi/govori_mne.mp3",
            "../assets/audio/music/Adlin/dead_inside.mp3",
        ],
    },
    // 4
    {
        rapper: 'Bismarck',
        tracker: '𐤏',
        track: "../assets/audio/music/Miyagi/bismarck.mp3",
        question: 'Answer1 ??',
        rightAnswer: 2,
        avatar: 'url(../assets/images/miyagi.jpg)',
        options: [
            'Adlin - Пустота',
            'Rammstein - Rosenrot',
            'Miyagi - Bismarck',
            'Miyagi - Там ревели горы...',
            'Rammstein - Zeit',
            'Miyagi - Самурай',
        ],
        nickOptions: [
            'Adlin',
            'Rammstein',
            'Miyagi',
            'Miyagi',
            'Rammstein',
            'Miyagi',
        ],
        nameOptions: [
            'Даниил Бондарев',
            '',
            'Азамат Кудзаев',
            'Азамат Кудзаев',
            '',
            'Азамат Кудзаев',
        ],
        description: [
            'Адлин - музыкальный исполнитель. Работает в жанре Phonk, Hip-Hop и R&B. Родился 1 мая 2001 года в городе Белгород. Имеет свыше 13 тысяч подписчиков в своей официальной группе ВКонтакте, а также 86 тысяч в TikTok.',
            'Rammstein — немецкая метал-группа, образованная в январе 1994 года в Берлине. Музыкальный стиль группы относится к жанру индастриал-метала (конкретно — его немецкой сцене Neue Deutsche Härte). Основные черты творчества группы: специфический ритм, в котором выдержана большая часть композиций, и эпатирующие тексты песен. Особую известность группе принесли сценические выступления, часто сопровождаемые использованием пиротехники, получившие признание в музыкальной среде. Состав группы ни разу не менялся. ',
            'Азамат Кудзаев — рэп-исполнитель, известный под псевдонимом MiyaGi. Он выступает в дуэте с Сосланом Бурнацевым aka Andy Panda (бывший Эндшпиль)',
            'Азамат Кудзаев — рэп-исполнитель, известный под псевдонимом MiyaGi. Он выступает в дуэте с Сосланом Бурнацевым aka Andy Panda (бывший Эндшпиль)',
            'Rammstein — немецкая метал-группа, образованная в январе 1994 года в Берлине. Музыкальный стиль группы относится к жанру индастриал-метала (конкретно — его немецкой сцене Neue Deutsche Härte). Основные черты творчества группы: специфический ритм, в котором выдержана большая часть композиций, и эпатирующие тексты песен. Особую известность группе принесли сценические выступления, часто сопровождаемые использованием пиротехники, получившие признание в музыкальной среде. Состав группы ни разу не менялся. ',
            'Азамат Кудзаев — рэп-исполнитель, известный под псевдонимом MiyaGi. Он выступает в дуэте с Сосланом Бурнацевым aka Andy Panda (бывший Эндшпиль)',
        ],
        photo: [
            'url(../assets/images/adlin.jpg)',
            'url(../assets/images/rammstein.jpg)',
            'url(../assets/images/miyagi.jpg)',
            'url(../assets/images/miyagi.jpg)',
            'url(../assets/images/rammstein.jpg)',
            'url(../assets/images/miyagi.jpg)',

        ],
        music: [
            "../assets/audio/music/Adlin/pustota.mp3",
            "../assets/audio/music/Rammstein/Rosenrot.mp3",
            "../assets/audio/music/Miyagi/bismarck.mp3",
            "../assets/audio/music/Miyagi/tam_reveli_gory.mp3",
            "../assets/audio/music/Rammstein/Zeit.mp3",
            "../assets/audio/music/Miyagi/samurai.mp3",


        ],
    },
    //////////////////////////////
    {
        rapper: 'Одна',
        tracker: '𐤏',
        track: "../assets/audio/music/Adlin/odna.mp3",
        question: 'Answer1 ??',
        rightAnswer: 5,
        avatar: 'url(../assets/images/adlin.jpg)',
        options: [
            'Adlin - За спиной',
            'Rammstein - Mein Herz brennt',
            'Скриптонит - Положение',
            'Miyagi - Самурай',
            'Скриптонит - Космос',
            'Adlin - Одна',
        ],
        nickOptions: [
            'Adlin',
            'Rammstein',
            'Скриптонит',
            'Miyagi',
            'Скриптонит',
            'Adlin',
        ],
        nameOptions: [
            'Даниил Бондарев',
            '',
            'Адиль Жалелов',
            'Азамат Кудзаев',
            'Адиль Жалелов',
            'Даниил Бондарев',
        ],
        description: [
            'Адлин - музыкальный исполнитель. Работает в жанре Phonk, Hip-Hop и R&B. Родился 1 мая 2001 года в городе Белгород. Имеет свыше 13 тысяч подписчиков в своей официальной группе ВКонтакте, а также 86 тысяч в TikTok.',
            'Rammstein — немецкая метал-группа, образованная в январе 1994 года в Берлине. Музыкальный стиль группы относится к жанру индастриал-метала (конкретно — его немецкой сцене Neue Deutsche Härte). Основные черты творчества группы: специфический ритм, в котором выдержана большая часть композиций, и эпатирующие тексты песен. Особую известность группе принесли сценические выступления, часто сопровождаемые использованием пиротехники, получившие признание в музыкальной среде. Состав группы ни разу не менялся. ',
            'Скриптонит  — казахстанский исполнитель и музыкальный продюсер, основатель лейбла Musica36[11]. Впервые громко заявил о себе в 2013 году видеоклипом на песню «VBVVCTND», спустя полтора года выпустил свой дебютный альбом «Дом с нормальными явлениями», который стал одним из самых удачных русскоязычных рэп-альбомов 2015 года. ',
            'Азамат Кудзаев — рэп-исполнитель, известный под псевдонимом MiyaGi. Он выступает в дуэте с Сосланом Бурнацевым aka Andy Panda (бывший Эндшпиль)',
            'Скриптонит  — казахстанский исполнитель и музыкальный продюсер, основатель лейбла Musica36[11]. Впервые громко заявил о себе в 2013 году видеоклипом на песню «VBVVCTND», спустя полтора года выпустил свой дебютный альбом «Дом с нормальными явлениями», который стал одним из самых удачных русскоязычных рэп-альбомов 2015 года. ',
            'Адлин - музыкальный исполнитель. Работает в жанре Phonk, Hip-Hop и R&B. Родился 1 мая 2001 года в городе Белгород. Имеет свыше 13 тысяч подписчиков в своей официальной группе ВКонтакте, а также 86 тысяч в TikTok.',
        ],
        photo: [
            'url(../assets/images/adlin.jpg)',
            'url(../assets/images/rammstein.jpg)',
            'url(../assets/images/skrip.jpg)',
            'url(../assets/images/miyagi.jpg)',
            'url(../assets/images/skrip.jpg)',
            'url(../assets/images/adlin.jpg)',
        ],
        music: [
            "../assets/audio/music/Adlin/za_spinoy.mp3",
            "../assets/audio/music/Rammstein/Mein-Herz-brennt.mp3",
            "../assets/audio/music/Skriptonit/polozhenie.mp3",
            "../assets/audio/music/Miyagi/samurai.mp3",
            "../assets/audio/music/Skriptonit/kosmos.mp3",
            "../assets/audio/music/Adlin/odna.mp3",
        ],
    },
    //////////////////////////////
    {
        rapper: 'Mein Herz brennt',
        tracker: '𐤏',
        track: "../assets/audio/music/Rammstein/Mein-Herz-brennt.mp3",
        question: 'Answer1 ??',
        rightAnswer: 1,
        avatar: 'url(../assets/images/rammstein.jpg)',
        options: [
            'Kizaru - Никто не нужен',
            'Rammstein - Mein Herz brennt',
            'Rammstein - Zeit',
            'Rammstein - Sonne',
            'Adlin - Dead inside',
            'Kizaru - Money Long',

        ],
        nickOptions: [
            'Kizaru',
            'Rammstein',
            'Rammstein',
            'Rammstein',
            'Adlin',
            'Kizaru',

        ],
        nameOptions: [
            'Олег Нечипоренко',
            '',
            '',
            '',
            'Даниил Бондарев',
            'Олег Нечипоренко',
        ],
        description: [
            'Kizaru — российский хип-хоп-исполнитель. Родом из Санкт-Петербурга, проживает в Барселоне. Участник и основатель творческого объединения «Haunted Family».',
            'Rammstein — немецкая метал-группа, образованная в январе 1994 года в Берлине. Музыкальный стиль группы относится к жанру индастриал-метала (конкретно — его немецкой сцене Neue Deutsche Härte). Основные черты творчества группы: специфический ритм, в котором выдержана большая часть композиций, и эпатирующие тексты песен. Особую известность группе принесли сценические выступления, часто сопровождаемые использованием пиротехники, получившие признание в музыкальной среде. Состав группы ни разу не менялся. ',
            'Rammstein — немецкая метал-группа, образованная в январе 1994 года в Берлине. Музыкальный стиль группы относится к жанру индастриал-метала (конкретно — его немецкой сцене Neue Deutsche Härte). Основные черты творчества группы: специфический ритм, в котором выдержана большая часть композиций, и эпатирующие тексты песен. Особую известность группе принесли сценические выступления, часто сопровождаемые использованием пиротехники, получившие признание в музыкальной среде. Состав группы ни разу не менялся. ',
            'Rammstein — немецкая метал-группа, образованная в январе 1994 года в Берлине. Музыкальный стиль группы относится к жанру индастриал-метала (конкретно — его немецкой сцене Neue Deutsche Härte). Основные черты творчества группы: специфический ритм, в котором выдержана большая часть композиций, и эпатирующие тексты песен. Особую известность группе принесли сценические выступления, часто сопровождаемые использованием пиротехники, получившие признание в музыкальной среде. Состав группы ни разу не менялся. ',
            'Адлин - музыкальный исполнитель. Работает в жанре Phonk, Hip-Hop и R&B. Родился 1 мая 2001 года в городе Белгород. Имеет свыше 13 тысяч подписчиков в своей официальной группе ВКонтакте, а также 86 тысяч в TikTok.',
            'Kizaru — российский хип-хоп-исполнитель. Родом из Санкт-Петербурга, проживает в Барселоне. Участник и основатель творческого объединения «Haunted Family».',
        ],
        photo: [
            'url(../assets/images/kizaru.jpg)',
            'url(../assets/images/rammstein.jpg)',
            'url(../assets/images/rammstein.jpg)',
            'url(../assets/images/rammstein.jpg)',
            'url(../assets/images/adlin.jpg)',
            'url(../assets/images/kizaru.jpg)',

        ],
        music: [
            "../assets/audio/music/Kizaru/nikto_ne_nuzen.mp3",
            "../assets/audio/music/Rammstein/Mein-Herz-brennt.mp3",
            "../assets/audio/music/Rammstein/Zeit.mp3",
            "../assets/audio/music/Rammstein/Sonne.mp3",
            "../assets/audio/music/Adlin/dead_inside.mp3",
            "../assets/audio/music/Kizaru/money_long.mp3",

        ],
    },
    //////////////////////////////
    {
        rapper: 'Положение',
        tracker: '𐤏',
        track: "../assets/audio/music/Skriptonit/polozhenie.mp3",
        question: 'Answer1 ??',
        rightAnswer: 5,
        avatar: 'url(../assets/images/skrip.jpg)',
        options: [
            'Скриптонит - Это любовь',
            'Скриптонит - Москва любит',
            'Kizaru - Никто не нужен',
            'Rammstein - Sonne',
            'Miyagi - Там ревели горы...',
            'Скриптонит - Положение',

        ],
        nickOptions: [
            'Скриптонит',
            'Скриптонит',
            'Kizaru',
            'Rammstein',
            'Miyagi',
            'Скриптонит',
        ],
        nameOptions: [
            'Адиль Жалелов',
            'Адиль Жалелов',
            'Олег Нечипоренко',
            '',
            'Азамат Кудзаев',
            'Адиль Жалелов',
        ],
        description: [
            'Скриптонит  — казахстанский исполнитель и музыкальный продюсер, основатель лейбла Musica36[11]. Впервые громко заявил о себе в 2013 году видеоклипом на песню «VBVVCTND», спустя полтора года выпустил свой дебютный альбом «Дом с нормальными явлениями», который стал одним из самых удачных русскоязычных рэп-альбомов 2015 года. ',
            'Скриптонит  — казахстанский исполнитель и музыкальный продюсер, основатель лейбла Musica36[11]. Впервые громко заявил о себе в 2013 году видеоклипом на песню «VBVVCTND», спустя полтора года выпустил свой дебютный альбом «Дом с нормальными явлениями», который стал одним из самых удачных русскоязычных рэп-альбомов 2015 года. ',
            'Kizaru — российский хип-хоп-исполнитель. Родом из Санкт-Петербурга, проживает в Барселоне. Участник и основатель творческого объединения «Haunted Family».',
            'Rammstein — немецкая метал-группа, образованная в январе 1994 года в Берлине. Музыкальный стиль группы относится к жанру индастриал-метала (конкретно — его немецкой сцене Neue Deutsche Härte). Основные черты творчества группы: специфический ритм, в котором выдержана большая часть композиций, и эпатирующие тексты песен. Особую известность группе принесли сценические выступления, часто сопровождаемые использованием пиротехники, получившие признание в музыкальной среде. Состав группы ни разу не менялся. ',
            'Азамат Кудзаев — рэп-исполнитель, известный под псевдонимом MiyaGi. Он выступает в дуэте с Сосланом Бурнацевым aka Andy Panda (бывший Эндшпиль)',
            'Скриптонит  — казахстанский исполнитель и музыкальный продюсер, основатель лейбла Musica36[11]. Впервые громко заявил о себе в 2013 году видеоклипом на песню «VBVVCTND», спустя полтора года выпустил свой дебютный альбом «Дом с нормальными явлениями», который стал одним из самых удачных русскоязычных рэп-альбомов 2015 года. ',
        ],
        photo: [
            'url(../assets/images/skrip.jpg)',
            'url(../assets/images/skrip.jpg)',
            'url(../assets/images/kizaru.jpg)',
            'url(../assets/images/rammstein.jpg)',
            'url(../assets/images/miyagi.jpg)',
            'url(../assets/images/skrip.jpg)',

        ],
        music: [
            "../assets/audio/music/Skriptonit/eto_lubov.mp3",
            "../assets/audio/music/Skriptonit/moskva_lubit.mp3",
            "../assets/audio/music/Kizaru/nikto_ne_nuzen.mp3",
            "../assets/audio/music/Rammstein/Sonne.mp3",
            "../assets/audio/music/Miyagi/tam_reveli_gory.mp3",
            "../assets/audio/music/Skriptonit/polozhenie.mp3",
        ],
    },
    //////////////////////////////
    {
        rapper: 'Никто не нужен',
        tracker: '𐤏',
        track: "../assets/audio/music/Kizaru/nikto_ne_nuzen.mp3",
        question: 'Answer1 ??',
        rightAnswer: 3,
        avatar: 'url(../assets/images/kizaru.jpg)',
        options: [
            'Kizaru - Block Baby',
            'Kizaru - So Icy Nihao',
            'Miyagi - Bismarck',
            'Kizaru - Никто не нужен',
            'Rammstein - Zeit',
            'Rammstein - Deutschland',
        ],
        nickOptions: [
            'Kizaru',
            'Kizaru',
            'Miyagi',
            'Kizaru',
            'Rammstein',
            'Rammstein',
        ],
        nameOptions: [
            'Олег Нечипоренко',
            'Олег Нечипоренко',
            'Азамат Кудзаев',
            'Олег Нечипоренко',
            '',
            '',
        ],
        description: [
            'Kizaru — российский хип-хоп-исполнитель. Родом из Санкт-Петербурга, проживает в Барселоне. Участник и основатель творческого объединения «Haunted Family».',
            'Kizaru — российский хип-хоп-исполнитель. Родом из Санкт-Петербурга, проживает в Барселоне. Участник и основатель творческого объединения «Haunted Family».',
            'Азамат Кудзаев — рэп-исполнитель, известный под псевдонимом MiyaGi. Он выступает в дуэте с Сосланом Бурнацевым aka Andy Panda (бывший Эндшпиль)',
            'Kizaru — российский хип-хоп-исполнитель. Родом из Санкт-Петербурга, проживает в Барселоне. Участник и основатель творческого объединения «Haunted Family».',
            'Rammstein — немецкая метал-группа, образованная в январе 1994 года в Берлине. Музыкальный стиль группы относится к жанру индастриал-метала (конкретно — его немецкой сцене Neue Deutsche Härte). Основные черты творчества группы: специфический ритм, в котором выдержана большая часть композиций, и эпатирующие тексты песен. Особую известность группе принесли сценические выступления, часто сопровождаемые использованием пиротехники, получившие признание в музыкальной среде. Состав группы ни разу не менялся. ',
            'Rammstein — немецкая метал-группа, образованная в январе 1994 года в Берлине. Музыкальный стиль группы относится к жанру индастриал-метала (конкретно — его немецкой сцене Neue Deutsche Härte). Основные черты творчества группы: специфический ритм, в котором выдержана большая часть композиций, и эпатирующие тексты песен. Особую известность группе принесли сценические выступления, часто сопровождаемые использованием пиротехники, получившие признание в музыкальной среде. Состав группы ни разу не менялся. ',
        ],
        photo: [
            'url(../assets/images/kizaru.jpg)',
            'url(../assets/images/kizaru.jpg)',
            'url(../assets/images/miyagi.jpg)',
            'url(../assets/images/kizaru.jpg)',
            'url(../assets/images/rammstein.jpg)',
            'url(../assets/images/rammstein.jpg)',
        ],
        music: [
            "../assets/audio/music/Kizaru/Block_Baby.mp3",
            "../assets/audio/music/Kizaru/so-icy-nihao.mp3",
            "../assets/audio/music/Miyagi/bismarck.mp3",
            "../assets/audio/music/Kizaru/nikto_ne_nuzen.mp3",
            "../assets/audio/music/Rammstein/Zeit.mp3",
            "../assets/audio/music/Rammstein/Deutschland.mp3",
        ],
    },
    //////////////////////////////
    {
        rapper: 'Москва любит..',
        tracker: '𐤏',
        track: "../assets/audio/music/Skriptonit/moskva_lubit.mp3",
        question: 'Answer1 ??',
        rightAnswer: 0,
        avatar: 'url(../assets/images/skrip.jpg)',
        options: [
            'Скриптонит - Москва любит',
            'Miyagi - Там ревели горы...',
            'Adlin - За спиной',
            'Rammstein - Rosenrot',
            'Kizaru - Bon Voyage',
            'Kizaru - Дежавю',

        ],
        nickOptions: [
            'Скриптонит',
            'Miyagi',
            'Adlin',
            'Rammstein',
            'Kizaru',
            'Kizaru',
        ],
        nameOptions: [
            'Адиль Жалелов',
            'Азамат Кудзаев',
            'Даниил Бондарев',
            '',
            'Олег Нечипоренко',
            'Олег Нечипоренко',
        ],
        description: [
            'Скриптонит  — казахстанский исполнитель и музыкальный продюсер, основатель лейбла Musica36[11]. Впервые громко заявил о себе в 2013 году видеоклипом на песню «VBVVCTND», спустя полтора года выпустил свой дебютный альбом «Дом с нормальными явлениями», который стал одним из самых удачных русскоязычных рэп-альбомов 2015 года. ',
            'Азамат Кудзаев — рэп-исполнитель, известный под псевдонимом MiyaGi. Он выступает в дуэте с Сосланом Бурнацевым aka Andy Panda (бывший Эндшпиль)',
            'Адлин - музыкальный исполнитель. Работает в жанре Phonk, Hip-Hop и R&B. Родился 1 мая 2001 года в городе Белгород. Имеет свыше 13 тысяч подписчиков в своей официальной группе ВКонтакте, а также 86 тысяч в TikTok.',
            'Rammstein — немецкая метал-группа, образованная в январе 1994 года в Берлине. Музыкальный стиль группы относится к жанру индастриал-метала (конкретно — его немецкой сцене Neue Deutsche Härte). Основные черты творчества группы: специфический ритм, в котором выдержана большая часть композиций, и эпатирующие тексты песен. Особую известность группе принесли сценические выступления, часто сопровождаемые использованием пиротехники, получившие признание в музыкальной среде. Состав группы ни разу не менялся. ',
            'Kizaru — российский хип-хоп-исполнитель. Родом из Санкт-Петербурга, проживает в Барселоне. Участник и основатель творческого объединения «Haunted Family».',
            'Kizaru — российский хип-хоп-исполнитель. Родом из Санкт-Петербурга, проживает в Барселоне. Участник и основатель творческого объединения «Haunted Family».',

        ],
        photo: [
            'url(../assets/images/skrip.jpg)',
            'url(../assets/images/miyagi.jpg)',
            'url(../assets/images/adlin.jpg)',
            'url(../assets/images/rammstein.jpg)',
            'url(../assets/images/kizaru.jpg)',
            'url(../assets/images/kizaru.jpg)',

        ],
        music: [
            "../assets/audio/music/Skriptonit/moskva_lubit.mp3",
            "../assets/audio/music/Miyagi/tam_reveli_gory.mp3",
            "../assets/audio/music/Adlin/za_spinoy.mp3",
            "../assets/audio/music/Rammstein/Rosenrot.mp3",
            "../assets/audio/music/Kizaru/Bon_Voyage.mp3",
            "../assets/audio/music/Kizaru/dejavu.mp3",
        ],
    },]


const hidden_photo = document.getElementById('rapper__photo');
const hiddenavatar = document.getElementById('hidden_card');
const hidden_name = document.getElementById('hidden_name');

numberOfAllQuestion.innerHTML = questions.length;



const div1 = document.createElement('div');
const div2 = document.createElement('div');
const div3 = document.createElement('div');
const div4 = document.createElement('div');
const div5 = document.createElement('div');
const div6 = document.createElement('div');

const div_answer1 = document.createElement('div');
const div_answer2 = document.createElement('div');
const div_answer3 = document.createElement('div');
const div_answer4 = document.createElement('div');
const div_answer5 = document.createElement('div');
const div_answer6 = document.createElement('div');
const playerHidden = document.getElementById('rapperSong');
const popUp = document.getElementById('quiz-over-modal');
const startedMessage = document.getElementById('started__message');

function HideAndSeek() {
    hidden_photo.classList.add('hide_element');
    rapperNick.classList.add('hide_element');
    rapperName.classList.add('hide_element');
    rapperBio.classList.add('hide_element');
    playerHidden.classList.remove('rapperSong_active');
    playerHidden.classList.add('hide_element');
    startedMessage.classList.remove('hide_element');
};
function magicAppear() {
    hidden_photo.classList.remove('hide_element');
    rapperNick.classList.remove('hide_element');
    rapperName.classList.remove('hide_element');
    rapperBio.classList.remove('hide_element');
    playerHidden.classList.remove('hide_element');
    playerHidden.classList.add('rapperSong_active');
    startedMessage.classList.add('hide_element');
}
const load = () => {
    HideAndSeek();
    popUp.classList.add('hide_element');



    audioPlay.setAttribute('src', questions[indexOfQuestion].track);
    question.innerHTML = questions[indexOfQuestion].question;
    numberOfQuestion.innerHTML = indexOfPage + 1;
    div1.innerHTML = questions[indexOfQuestion].options[0];
    div2.innerHTML = questions[indexOfQuestion].options[1];
    div3.innerHTML = questions[indexOfQuestion].options[2];
    div4.innerHTML = questions[indexOfQuestion].options[3];
    div5.innerHTML = questions[indexOfQuestion].options[4];
    div6.innerHTML = questions[indexOfQuestion].options[5];
    option1.innerHTML = '𐤏';
    option2.innerHTML = '𐤏';
    option3.innerHTML = '𐤏';
    option4.innerHTML = '𐤏';
    option5.innerHTML = '𐤏';
    option6.innerHTML = '𐤏';



    option1.append(div1);
    option2.append(div2);
    option3.append(div3);
    option4.append(div4);
    option5.append(div5);
    option6.append(div6);



    div1.classList.add('tracker');
    if (!('someDataAttr' in div1.dataset)) {
        div1.dataset.id = '0';
    };
    div2.classList.add('tracker');
    if (!('someDataAttr' in div2.dataset)) {
        div2.dataset.id = '1';
    };
    div3.classList.add('tracker');
    if (!('someDataAttr' in div3.dataset)) {
        div3.dataset.id = '2';
    };
    div4.classList.add('tracker');
    if (!('someDataAttr' in div4.dataset)) {
        div4.dataset.id = '3';
    };
    div5.classList.add('tracker');
    if (!('someDataAttr' in div5.dataset)) {
        div5.dataset.id = '4';
    };
    div6.classList.add('tracker');
    if (!('someDataAttr' in div6.dataset)) {
        div6.dataset.id = '5';
    };

    ///



    if (indexOfPage == 0) {
        document.querySelector('.q6').classList.remove('active_panel');
        document.querySelector('.q1').classList.add('active_panel');
    } else if (indexOfPage == 1) {
        document.querySelector('.q1').classList.remove('active_panel');
        document.querySelector('.q2').classList.add('active_panel');
    } else if (indexOfPage == 2) {
        document.querySelector('.q2').classList.remove('active_panel');
        document.querySelector('.q3').classList.add('active_panel');
    } else if (indexOfPage == 3) {
        document.querySelector('.q3').classList.remove('active_panel');
        document.querySelector('.q4').classList.add('active_panel');
    } else if (indexOfPage == 4) {
        document.querySelector('.q4').classList.remove('active_panel');
        document.querySelector('.q5').classList.add('active_panel');
    } else if (indexOfPage == 5) {
        document.querySelector('.q5').classList.remove('active_panel');
        document.querySelector('.q6').classList.add('active_panel');
    };

    indexOfPage++;
};

const updateAnswerTracker = status => {
    answersTracker.children[indexOfPage - 1].classList.add(`${status}`);
};

let completedAnswers = [];

const randomQuestion = () => {
    let randomNumber = Math.floor(Math.random() * questions.length);
    let hitDuplicate = false;

    if (indexOfPage == 6) {
        quizOver();
    } else {
        if (completedAnswers.length > 0) {
            completedAnswers.forEach(item => {
                if (item == randomNumber) {
                    hitDuplicate = true;
                }
            });
            if (hitDuplicate) {
                randomQuestion();
            } else {
                indexOfQuestion = randomNumber;
                load();
            }
        };
        if (completedAnswers == 0) {
            indexOfQuestion = randomNumber;
            load();
        }
    };
    completedAnswers.push(indexOfQuestion);
};






const checkAnswer = el => {

    const showElementHud = () => {
        playButton1.style.backgroundImage = 'url(../assets/images/play.png)';
        audioPlay1.setAttribute('src', questions[indexOfQuestion].music[el.target.dataset.id]);
        hidden_photo.style.backgroundImage = questions[indexOfQuestion].photo[el.target.dataset.id];
        hidden_photo.style.backgroundSize = '110%';
        hidden_photo.style.backgroundRepeat = 'no-repeat';
        rapperNick.innerHTML = questions[indexOfQuestion].nickOptions[el.target.dataset.id];
        rapperName.innerHTML = questions[indexOfQuestion].nameOptions[el.target.dataset.id];
        rapperBio.innerHTML = questions[indexOfQuestion].description[el.target.dataset.id];
    }

    if (el.target.dataset.id == questions[indexOfQuestion].rightAnswer) {
        FlagNext = true;
        optionElements[el.target.dataset.id].classList.add('correct');
        updateAnswerTracker('correct');
        Payse1();
        if (optionElements[el.target.dataset.id].classList.contains('correct') & FlagSoundCorrect == false) {
            hiddenavatar.style.backgroundImage = questions[indexOfQuestion].avatar;
            hiddenavatar.style.backgroundSize = '110%';
            hiddenavatar.style.backgroundRepeat = 'no-repeat';
            audioCorrect();
            FlagSoundCorrect = true;
            score += 5;
            score2 += 5;
            scoreDiv.innerHTML = 'Score: ' + score;
        };
        showElementHud()
        magicAppear()
        btnNext.classList.add('btn-active');
        hidden_name.innerHTML = questions[indexOfQuestion].rapper;

    }
    else {
        if (optionElements[el.target.dataset.id].classList.contains('sound')) {
            showElementHud();
            magicAppear();
        }
        else {
            optionElements[el.target.dataset.id].classList.add('sound');
            if (FlagNext == true) {
                magicAppear();
                showElementHud();
            } else {
                magicAppear();
                showElementHud();
                audioWrong();
                optionElements[el.target.dataset.id].classList.add('wrong');
                score -= 1;
                score2 -= 1;
                scoreDiv.innerHTML = 'Score: ' + score;
            }

        }
    }

};

const enableOptions = () => {
    optionElements.forEach(item => {
        item.classList.remove('correct', 'wrong');
    })
};
const answerTracker = () => {
    questions.forEach(() => {
        const div = document.createElement('div');
        answersTracker.appendChild(div).classList.add('a');
    })
};

const validate = () => {
    if (FlagNext === true) {
        optionElements.forEach(item => {
            item.classList.remove('sound');
        })
        hidden_name.innerHTML = '***';
        Payse1();
        HideAndSeek();
        hiddenavatar.style.backgroundImage = 'url(../assets/images/question.jpg)';
        playButton.style.backgroundImage = 'url(../assets/images/play.png)';
        audioPlay.setAttribute('src', questions[indexOfQuestion].track);
        btnNext.classList.remove('btn-active');

        randomQuestion();
        enableOptions();
        FlagNext = false;
        FlagSoundCorrect = false;
    } else {
        alert("You haven't answered the question. Choose the correct answer to move on the next question.")
    }
};

btnNext.addEventListener('click', validate);

const disabledOptions = () => {
    optionElements.forEach(item => {
        item.classList.add('disabled');
        if (item.dataset.id == questions[indexOfQuestion].rightAnswer) {
            item.classList.add('correct');
        }
    })
}

for (let option of optionElements) {
    option.addEventListener('click', e => checkAnswer(e));
}


const quizOver = () => {
    document.querySelector('.quiz-container').classList.add('hide_element');
    document.querySelector('.answers_hud_container').style.zIndex = '0';
    popUp.classList.remove('hide_element');
    numberOfAllQuestion2.innerHTML = score2;
};

const tryAgain = () => {
    window.location.reload();
};

btnTryAgain.addEventListener('click', tryAgain);


window.addEventListener('load', () => {

    randomQuestion();
    answerTracker();

});

//audio-player
const audioPlay = document.querySelector('#audio__play'),
    playButton = document.querySelector('.play__button'),
    muteButton = document.querySelector('.mute__button'),
    durationTime = document.querySelector('.current__duration'),
    currentTime = document.querySelector('.current__time'),
    progress = document.getElementById('progress'),
    progress1 = document.getElementById('progress1'),
    audioPlay1 = document.querySelector('#audioQiz'),
    playButton1 = document.querySelector('.play__button1'),
    muteButton1 = document.querySelector('.mute__button1'),
    durationTime1 = document.querySelector('.current__duration1'),
    currentTime1 = document.querySelector('.current__time1'),
    progresBar1 = document.querySelector('.progres__bar1'),
    defaultBar1 = document.querySelector('.default__bar1')


const playOrPayse = () => {
    if (!audioPlay.paused && !audioPlay.ensed) {
        audioPlay.pause();
        playButton.style.backgroundImage = 'url(../assets/images/play.png)'
    }
    else {
        audioPlay.play()
        playButton.style.backgroundImage = 'transition: 0.3s';
        playButton.style.backgroundImage = 'url(../assets/images/pause.png)';
        Payse1();
        updateTime = setInterval(update, 500);
    }
}
const playOrPayse1 = () => {
    if (!audioPlay1.paused && !audioPlay1.ensed) {

        audioPlay1.pause();
        playButton1.style.backgroundImage = 'url(../assets/images/play.png)'

    }
    else {
        audioPlay1.play()
        Payse();
        playButton1.style.backgroundImage = 'transition: 0.3s';
        playButton1.style.backgroundImage = 'url(../assets/images/pause.png)';

    }
}
const Payse1 = () => {
    audioPlay1.pause();
    playButton1.style.backgroundImage = 'url(../assets/images/play.png)'
}
const Payse = () => {
    audioPlay.pause();
    playButton.style.backgroundImage = 'url(../assets/images/play.png)'
}
const playing = () => {
    audioPlay.play();
    playButton.style.backgroundImage = 'url(../assets/images/pause.png)'
}
const playing1 = () => {
    audioPlay1.play();
    playButton1.style.backgroundImage = 'url(../assets/images/pause.png)'
}

const muteOrspeaker = () => {
    if (audioPlay.muted === true) {
        audioPlay.muted = false
        muteButton.style.backgroundImage = 'url(../assets/images/unmuted.png)';
    } else {
        audioPlay.muted = true
        muteButton.style.backgroundImage = 'url(../assets/images/muted.png)';
    }
}

const muteOrspeaker1 = () => {
    if (audioPlay1.muted === true) {
        audioPlay1.muted = false
        muteButton1.style.backgroundImage = 'url(../assets/images/unmuted.png)';
    } else {
        audioPlay1.muted = true
        muteButton1.style.backgroundImage = 'url(../assets/images/muted.png)';
    }
}

audioPlay.onloadeddata = () => {
    let minutes = parseInt(audioPlay.duration / 60);
    let seconds = parseInt(audioPlay.duration % 60);
    if (`${seconds}`.length < 2) {
        durationTime.innerHTML = `${minutes}:0${seconds}`
    } else { durationTime.innerHTML = `${minutes}:${seconds}` }
    if (`${minutes}`.length < 2) {
        durationTime.innerHTML = `0${minutes}:${seconds}`
    } else { durationTime.innerHTML = `${minutes}:${seconds}` }
};

audioPlay1.onloadeddata = () => {
    let minutes1 = parseInt(audioPlay1.duration / 60);
    let seconds1 = parseInt(audioPlay1.duration % 60);
}

const update = () => {
    if (!audioPlay.ended) {
        let playerMinute = parseInt(audioPlay.currentTime / 60);
        let playerSecond = parseInt(audioPlay.currentTime % 60);
        if (`${playerSecond}`.length < 2) {
            currentTime.innerHTML = `${playerMinute}:0${playerSecond}`;
        } else { currentTime.innerHTML = `${playerMinute}:${playerSecond}`; }

    } else {
        currentTime.innerHTML = `0:00`;
        playButton.style.backgroundImage = 'url(../assets/images/play.png)';


    }
}
const update1 = () => {
    if (!audioPlay1.ended) {
        let playerMinute1 = parseInt(audioPlay1.currentTime1 / 60);
        let playerSecond1 = parseInt(audioPlay1.currentTime1 % 60);
        currentTime1.innerHTML = `${playerMinute1}:${playerSecond1}`;

        let size1 = parseInt(audioPlay1.currentTime1 * barSize1 / audioPlay1.duration)
        progresBar1.style.width = `${size1}px`

    } else {
        currentTime1.innerHTML = `0:00`;
        playButton1.style.backgroundImage = 'url(../assets/images/play.png)';

        progresBar1.style.width = `0px`;
    }
}
const clickedBar = (e) => {
    if (!audioPlay.ended) {
        let moveX = e.pageX - defaultBar.offsetLeft;
        let newTime = moveX * audioPlay.duration / barSize;
        audioPlay.currentTime = newTime;
        progresBar.style.width = `${moveX}px`;

    }
}
const clickedBar1 = (e) => {
    if (!audioPlay1.ended) {
        let moveX1 = e.pageX - defaultBar1.offsetLeft;
        let newTime1 = moveX1 * audioPlay1.duration / barSize1;
        audioPlay1.currentTime1 = newTime1;
        progresBar1.style.width = `${moveX1}px`;

    }
}
playButton.addEventListener('click', playOrPayse, false);
muteButton.addEventListener('click', muteOrspeaker, false);
playButton1.addEventListener('click', playOrPayse1, false);
muteButton1.addEventListener('click', muteOrspeaker1, false);
defaultBar1.addEventListener('click', clickedBar1, false);

/*voluminator*/

const volume = document.getElementById('volumne');

volume.addEventListener('change', function changeVolume(elix) {
    audioPlay.volume = elix.target.value / 100;
    audioPlay.muted = false
    if (!audioPlay.volume) {
        muteButton.style.backgroundImage = 'url(../assets/images/muted.png)'
    } else {
        muteButton.style.backgroundImage = 'url(../assets/images/unmuted.png)'
    }
});

const volume1 = document.getElementById('volumne1');

volume1.addEventListener('change', function changeVolume(elix) {
    audioPlay1.volume = elix.target.value / 100;
    audioPlay1.muted = false
    if (!audioPlay1.volume) {
        muteButton1.style.backgroundImage = 'url(../assets/images/muted.png)'
    } else {
        muteButton1.style.backgroundImage = 'url(../assets/images/unmuted.png)'
    }
});

const valueChanged = (e) => (e.style.setProperty('--value', e.value));
let mouseDownOnSlider = false;
let mouseDownOnSlider1 = false;
audioPlay.addEventListener("loadeddata", () => {
    progress.value = 0;
});
audioPlay1.addEventListener("loadeddata", () => {
    progress1.value = 0;
});
audioPlay.addEventListener("timeupdate", () => {
    if (!mouseDownOnSlider) {
        progress.value = audioPlay.currentTime / audioPlay.duration * 100;
        valueChanged(progress);
    }
});
audioPlay1.addEventListener("timeupdate", () => {
    if (!mouseDownOnSlider1) {
        progress1.value = audioPlay1.currentTime / audioPlay1.duration * 100;
        valueChanged(progress1);
    }
});
progress.addEventListener("change", () => {
    const pct = progress.value / 100;
    audioPlay.currentTime = (audioPlay.duration || 0) * pct;
});
progress1.addEventListener("change", () => {
    const pct1 = progress1.value / 100;
    audioPlay1.currentTime = (audioPlay1.duration || 0) * pct1;
});
progress.addEventListener("mousedown", () => {
    mouseDownOnSlider = true;
});
progress1.addEventListener("mousedown", () => {
    mouseDownOnSlider1 = true;
});
progress.addEventListener("mouseup", () => {
    mouseDownOnSlider = false;
});
progress1.addEventListener("mouseup", () => {
    mouseDownOnSlider1 = false;
});


function audioCorrect() {
    audioPlay.pause();
    playButton.style.backgroundImage = 'url(../assets/images/play.png)';
    let audios = new Audio();
    audios.src = "../assets/audio/sound/correct.mp3";
    audios.autoplay = true;
    audios.volume = 0.2;
    return true;
};
function audioWrong() {

    let audios = new Audio();
    audios.src = "../assets/audio/sound/wrong.mp3";
    audios.autoplay = true;
    audios.volume = 0.2;
    return true;
}

document.addEventListener("DOMContentLoaded", () => {
    const images = new Array();

    function preloadImages(...images) {
        images.forEach((image, i) => {
            image = new Image();
            image.src = preloadImages.arguments[i];
        });
    };

    preloadImages(
        "../assets/images/adlin.jpg",
        "../assets/images/bring.jpg",
        '../assets/images/cran.png',
        '../assets/images/home.png',
        "../assets/images/kizaru.jpg",
        '../assets/images/logo.png',
        "../assets/images/miyagi.jpg",
        "../assets/images/motion.jpg",
        "../assets/images/muted.png",
        "../assets/images/pause.png",
        "../assets/images/play.png",
        "../assets/images/question.jpg",
        "../assets/images/rammstein.jpg",
        "../assets/images/sabaton.jpg",
        "../assets/images/skrip.jpg",
        "../assets/images/slipknot.jpg",
        "../assets/images/spotify_logo.png",
        "../assets/images/unmuted.png",
        "../assets/images/volume.png",
        "../assets/images/rs.svg",
        "../assets/images/gh.png",
    );
});