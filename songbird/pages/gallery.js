
window.onload = function(){
    let preloader = document.getElementById('preloader');
    preloader.style.display = 'none';
    randomHud();
}

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


const photo = document.getElementById('rapper__photo'),
      nick = document.getElementById('rapperNick'),
      nameRapper = document.getElementById('rapperName'),
      bio = document.getElementById('repperBio'),
      audiosrc = document.getElementById('audio'),
      audioPlay = document.querySelector('#audio__play'),
      left = document.getElementById('left'),
      right = document.getElementById('right');

let indexOfQuestion,
    indexOfPage = 0;
let completedAnswers = [];

const randomQuestion = () =>{
let randomNumber = Math.floor(Math.random() * questions.length);
let hitDuplicate = false;
    if(completedAnswers.length > 0){
        completedAnswers.forEach(item =>{
            if(item == randomNumber){
                hitDuplicate = true;
            }
        });
        if (hitDuplicate){
            randomQuestion();
        } else{
            indexOfQuestion = randomNumber;
        }
    };
    if(completedAnswers == 0){
        indexOfQuestion = randomNumber;
    }
};
completedAnswers.push(indexOfQuestion);


window.addEventListener('load', ()=>{

randomQuestion();

});

function randomHud(){
    let counter = Math.floor(Math.random() * 6);
    randomQuestion();
    nameRapper.innerHTML = questions[indexOfQuestion].nameOptions[counter];
    nick.innerHTML = questions[indexOfQuestion].nickOptions[counter];
    bio.innerHTML = questions[indexOfQuestion].description[counter];
    audioPlay.setAttribute('src', questions[indexOfQuestion].music[counter]);
    photo.style.backgroundImage = questions[indexOfQuestion].photo[counter];
    photo.style.backgroundSize = '110%';
    photo.style.backgroundRepeat = 'no-repeat';
    playButton.style.backgroundImage = 'url(../assets/images/play.png)'
};

left.addEventListener('click',() =>{
    randomHud();
})
right.addEventListener('click',() =>{
    randomHud();
})

const playButton = document.querySelector('.play__button'),
      muteButton = document.querySelector('.mute__button'),
      durationTime= document.querySelector('.current__duration'),
      currentTime= document.querySelector('.current__time'),
      progress = document.getElementById('progress');

const playOrPayse = () => {
    if (!audioPlay.paused && !audioPlay.ensed) {
      audioPlay.pause();
      playButton.style.backgroundImage = 'url(../assets/images/play.png)'
    }
    else{
      audioPlay.play()
      playButton.style.backgroundImage = 'transition: 0.3s';
      playButton.style.backgroundImage = 'url(../assets/images/pause.png)';
      updateTime = setInterval(update, 500);
    }
  }

const Payse = () => {
    audioPlay.pause();
    playButton.style.backgroundImage = 'url(../assets/images/play.png)'
}
const playing = () => {
    audioPlay.play();
    playButton.style.backgroundImage = 'url(../assets/images/pause.png)'
}
const muteOrspeaker = () => {
    if (audioPlay.muted === true) {
      audioPlay.muted = false
      muteButton.style.backgroundImage = 'url(../assets/images/unmuted.png)';
    }else{
      audioPlay.muted = true
      muteButton.style.backgroundImage = 'url(../assets/images/muted.png)';
    }
  }
  audioPlay.onloadeddata = () => {
    let minutes= parseInt(audioPlay.duration/60);
    let seconds= parseInt(audioPlay.duration%60);
          if(`${seconds}`.length<2){
              durationTime.innerHTML = `${minutes}:0${seconds}`
          } else{ durationTime.innerHTML = `${minutes}:${seconds}`}
          if(`${minutes}`.length<2){
              durationTime.innerHTML = `0${minutes}:${seconds}`
          } else{ durationTime.innerHTML = `${minutes}:${seconds}`}
  };
  const update = () => {
    if(!audioPlay.ended){
      let playerMinute = parseInt(audioPlay.currentTime/60);
      let playerSecond = parseInt(audioPlay.currentTime%60);
      if(`${playerSecond}`.length<2){
          currentTime.innerHTML = `${playerMinute}:0${playerSecond}`;
        } else {currentTime.innerHTML = `${playerMinute}:${playerSecond}`;}
  
    }else{
      currentTime.innerHTML = `0:00`;
      playButton.style.backgroundImage = 'url(../assets/images/play.png)';
  
  
    }
  }
  const clickedBar= (e) => {
    if (!audioPlay.ended) {
      let moveX = e.pageX - defaultBar.offsetLeft;
      let newTime = moveX*audioPlay.duration/barSize;
      audioPlay.currentTime = newTime;
      progresBar.style.width = `${moveX}px`;
  
    }
  }
  playButton.addEventListener('click',playOrPayse,false);
muteButton.addEventListener('click', muteOrspeaker,false);
const volume = document.getElementById('volumne');

volume.addEventListener('change', function changeVolume(elix){
  audioPlay.volume = elix.target.value / 100;
  audioPlay.muted = false
  if(!audioPlay.volume){
    muteButton.style.backgroundImage = 'url(../assets/images/muted.png)'
}else{
    muteButton.style.backgroundImage = 'url(../assets/images/unmuted.png)'
}
});
const valueChanged = (e) => (e.style.setProperty('--value', e.value));
let mouseDownOnSlider = false;
audioPlay.addEventListener("loadeddata", () => {
    progress.value = 0;
});
audioPlay.addEventListener("timeupdate", () => {
    if (!mouseDownOnSlider) {
        progress.value = audioPlay.currentTime / audioPlay.duration * 100;
    valueChanged(progress);
    }
});
progress.addEventListener("change", () => {
    const pct = progress.value / 100;
    audioPlay.currentTime = (audioPlay.duration || 0) * pct;
});
progress.addEventListener("mousedown", () => {
    mouseDownOnSlider = true;
});
progress.addEventListener("mouseup", () => {
    mouseDownOnSlider = false;
});
