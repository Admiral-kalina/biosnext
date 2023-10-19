import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
    // detect user language
    // learn more: https://github.com/i18next/i18next-browser-languageDetector
    // .use(LanguageDetector)
    // pass the i18n instance to react-i18next.
    .use(initReactI18next)
    // init i18next
    // for all options read: https://www.i18next.com/overview/configuration-options
    .init({
        debug: true,
        fallbackLng: 'ua',
        interpolation: {
            escapeValue: false, // not needed for react as it escapes by default
        },
        resources: {
            //en
            en: {
                translation: {
                    collapse: {
                        beginner: 'Beginner level',
                        elementary: 'Elementary level',
                        intermediate: 'Intermediate level',
                        advanced: 'Advanced level',
                        extra: 'Specialized level',
                    },
                    login: {
                        accountLogin: 'Account Login',
                        login: 'Login',
                        password: 'Password',
                    },
                    toast: {
                        message: {
                            success: 'Message sent successfully!',
                            failed: 'Failed to send message. Please try again later.'
                        },
                        login: {
                            success: 'Login has been successfully completed!',
                            failed: 'Login or password is not correct'
                        },
                        basket: {
                            success: 'You have successfully added this product to your cart.',
                            failed: 'You have already added this product to your cart.'
                        }
                    },
                    cabinet: {
                        back: 'Back',
                        all: 'All',
                        webinar: 'Webinars',
                        program: 'Programs',
                        onlyMy: 'Only mine',
                        schedule: 'schedule',
                        aboutUs: 'about us',
                        availableToMe: 'Available to me',
                        nearest: 'Nearest',
                        watchOnYouTube: 'Watch on YouTube',
                        downloadLecture: 'Download lecture notes',
                        downloadPresentation: 'Download presentation',
                        backToProgram: 'Back to program',
                        open: 'Open',
                        buy: 'Buy',
                        buyProgram: 'Buy Program',
                        studentsSaying: 'What our students are saying our students',
                        participantsExperiences: 'Our participants share their experiences and impressions of their pharmacy and medicine courses.',
                        testimonials: 'Testimonials from our course participants:',
                        trust: 'Trust in experience and quality',
                        about: 'We are a pharmaceutical company trusted by millions. Trust us and let us take care of your well-being. Together we are creating the future of health and comfort.',
                        products: 'Products launched',
                        partners: 'Our global partners',
                        yearsOnMarket: 'Years on the medical market',
                    },
                    additional: {
                        data: 'Date',
                        coach: 'Coach',
                        program: 'Program',
                        format: 'Format',
                        exactTime: 'Time',
                        minutes: 'minutes',
                        beginning: 'Beginning',
                        webinars: 'Webinars',
                        webinar: 'Webinar',
                        open: 'Open',
                        addToBasket: 'Add to cart',
                        oneParticipant: '1 participant',
                        fewParticipant: '2-5 participants',
                        manyParticipant: '6-10 participants',
                        activities: 'Activities',
                        contacts: 'Contacts',
                        contactsDescription: 'You can send your email address and we will get back to you.',
                        address: 'Kiev city, TARASOVSKAYA STREET, 4-A, office 7',
                        enter: 'Enter',
                    },
                    header: {
                        about: 'about company',
                        services: 'services',
                        events: 'events',
                        contacts: 'contacts',
                        main: 'main',
                        basket: 'Shopping cart',
                        account: 'account',
                        exit: 'exit',
                    },
                    services: {
                        services: 'Services',
                        training: 'Training Programs',
                        webinars: 'Lectures and webinars',
                        description: 'Description',
                        webinarDescription: 'The webinar covers the following items:',
                        program: 'Program',
                        webinarsInProgram: 'Webinars in the program',
                        levels: 'Levels of professional training',
                    },
                    individual: {
                        order: 'Order individual training',
                        text1: 'You can order a consultation, a diagnostic audit, a webinar for your team or a conference organization. Offline or Online',
                        text2: 'Please fill out the feedback form and specify the desired topic of the webinar or the name of the program, and we will choose for you the optimal composition of the specialist and convenient format.',
                    },
                    form: {
                        title: 'Your order',
                        empty: 'Your cart is empty',
                        amount: 'Amount',
                        cancel: 'Cancel',
                        send: 'Send',
                        name: 'Name',
                        phone: 'Phone',
                        email: 'E-mail',
                        them: 'Webinar topic or program',
                        short: 'Too Short!',
                        long: 'Too Long!',
                        nameIsRequired: 'Name is required',
                        phoneIsNotValid: 'Phone number is not valid',
                        phoneIsRequired: 'Phone is required',
                        invalidEmail: 'Invalid email',
                        emailIsRequired: 'Email is required',
                        topicIsRequired: 'Topic is required',
                    },
                    main: {
                        title1: 'Знания это',
                        title2: 'ключ к успеху',
                        subtext: 'Мы являемся инновационной и независимой образовательной платформой, на которой можно получить инновации, знания и ответы на сложные вопросы в области фармаконадзора, GMP-сертификации, регистрации и клинического развития в фармацевтической отрасли.',
                        box1: {
                            text1: 'Актуальные и компетентные материалы',
                            subtext1: 'Мы обеспечиваем доступ к самым современным знаниям и практическим инструмента',
                            text2: ' Экспертные преподаватели и ведущие школы',
                            subtext2: 'Мы сотрудничаем с ведущими в своей сфере специалистами международного значения',
                            text3: 'Интерактивность и практика',
                            subtext3: 'Наше обучение включает в себя практические задания, дискуссии и интерактивные упражнения',
                        },
                        box2: {
                            text1: 'ГРУППОВЫЕ ТРЕНИНГИ ГРУППОВЫЕ ТРЕНИНГИ ГРУППОВЫЕ ТРЕНИНГИ',
                        }
                    }
                }
            },//ru
            ru: {
                translation: {
                    home: {
                        hero: {
                            text1: 'Знания это ключ к успеху',
                            text2: 'Мы являемся инновационной и независимой образовательной платформой, на которой можно получить инновации, знания и ответы на сложные вопросы в области фармаконадзора, GMP-сертификации, регистрации и клинического развития в фармацевтической отрасли.',
                        },
                        plitc: {
                            text1: 'Актуальные и компетентные материалы',
                            subtext1: 'Мы обеспечиваем доступ к самым современным знаниям и практическим инструмента',
                            text2: 'Экспертные преподаватели и ведущие школы',
                            subtext2: 'Мы сотрудничаем с ведущими в своей сфере специалистами международного значения',
                            text3: 'Интерактивность и практика',
                            subtext3: 'Наше обучение включает в себя практические задания, дискуссии и интерактивные упражнения',
                        },
                        about: {
                            text1: 'О нас',
                            text2: 'Наша миссия заключается в том, чтобы помочь специалистам в фармацевтической и смежной ей отраслях принимать более эффективные решения в критических бизнес-процессах',
                            text3: '105+',
                            text4: '116+',
                            text5: '300+',
                            text6: 'партнеров по всему миру',
                            text7: 'выпущенных препаратов',
                            text8: 'регистрационных процедур в год',
                        },
                        coach: {
                            text1: 'Обучение от Ведущих Экспертов',
                            text2: 'Наша главная цель это обеспечение потребностей рынка лучшими специалистами в своей области.<br/> Мы делаем это, обучая специалистов инновационным концепциям, которые они могут получить только у практикующих экспертов.'
                        }
                    },
                    aboutCompany: {
                        hero: {
                            text1: 'Наша главная цель',
                            text2: 'Мы обучаем культуре безопасного применения лекарственных средств путем универсального подхода для специалистов разного уровня квалификации',
                            text3: 'Присоединяйтесь к нам и двигайтесь вперед к профессиональному росту и совершенствованию.'
                        },
                        partner: {
                            text1: 'Ваш партнер в мире фармацевтического образования и профессионального роста',
                            text2: 'Наша платформа специализируется на предоставлении высококачественных информационных ресурсов и обучающих программ для специалистов в сфере фармаконадзора, GMP-сертификации, регистрации и клинического развития в фармацевтической отрасли.',
                        },
                        base: {
                            text1: 'Наши основные направления',
                            text2: 'Регистрация',
                            text3: 'Клинические исследования',
                            text4: 'Фармаконадзор',
                            text5: 'GMP-сертификация',
                        },
                        choose: {
                            text1: 'Почему мы:',
                            text2: 'Bioscience Innova это международная команда практикующих профессионалов, имеющая успешный опыт работы в регуляторной сфере фармацевтической отрасли Украины, начиная с 2008 года. ',
                            text3: 'Для решения сложных задач в современной терапии нами привлекаются лучшие эксперты в своей отрасли из разных стран, с которыми имеем глубокое многолетнее сотрудничество.',
                        },
                        advantages: {
                            text1: 'Наши основные преимущества:',
                            text2: 'Актуальные и компетентные материалы',
                            text3: 'Экспертные преподаватели и ведущие школы',
                            text4: 'Интерактивность и практика',
                        },
                        services: {
                            text1: 'Предоставление комплексных услуг своим партнерам ',
                            text2: 'КОНСАЛТИНГ',
                            text3: 'Получение наших консалтинговых услуг дает вам возможность сосредоточиться на основных аспектах вашего бизнеса',
                            text4: 'ОБУЧЕНИЕ',
                            text5: 'Обучение на платформе помогает оптимизировать рабочие процессы и методы',
                            text6: 'АУДИТЫ',
                            text7: 'Получение услуги нашего аудита позволяет провести диагностику состояния системы фармаконадзора, регистрационного досье,',
                            text8: 'ПРАКТИЧЕСКИЕ КУРСЫ',
                            text9: 'Приобретение практических навыков является важным инструментом для повышения квалификации  ',
                        },
                        topics:{
                            text1: 'Все наши курсы обучения и образовательные программы разработаны и преподаются эксклюзивной сетью экспертов, признанных на международном уровне своими коллегами как лидеры общественного мнения в своей области знаний. \n',
                            text2: 'Практикуемая нами система обучения позволяет как освоить профессию с чистого листа, так и усовершенствовать свои знания в узкой специализации.',
                            text3: 'Мы умеем делать сложную научную и клиническую информацию более доступной для тех, кто не так хорошо знаком с этой областью.',
                        }
                        // choose:{
                        //     text1: '',
                        //     text2: '',
                        //     text3: '',
                        // }
                    },
                    login: {
                        accountLogin: 'Вход в аккаунт',
                        login: 'Логин',
                        password: 'Пароль',
                    },
                    toast: {
                        message: {
                            success: 'Сообщение отправлено успешно!',
                            failed: 'Не удалось отправить сообщение. Пожалуйста, повторите попытку позже'
                        },
                        login: {
                            success: 'Вход в систему успешно завершен!',
                            failed: 'Логин или пароль не верны'
                        },
                        basket: {
                            success: 'Вы успешно добавили этот товар в корзину',
                            failed: 'Вы уже добавили этот товар в корзину'
                        }
                    },
                    cabinet: {
                        back: 'Назад',
                        all: 'Все',
                        webinar: 'Вебинары',
                        program: 'Программы',
                        onlyMy: 'Только мои',
                        schedule: 'расписание',
                        aboutUs: 'о нас',
                        availableToMe: 'Доступно для меня',
                        nearest: 'Ближайшие',
                        watchOnYouTube: 'Смотреть на YouTube',
                        downloadLecture: 'Скачать конспект лекций',
                        downloadPresentation: 'Скачать презентацию',
                        backToProgram: 'Вернуться к программе',
                        open: 'Открыть',
                        buy: 'Купить',
                        buyProgram: 'Купить программу',

                        studentsSaying: 'Что говорят наши ученики',
                        participantsExperiences: 'Наши участники разделяют свой опыт и впечатления от прохождения курсов фармацевтики и медицины.',
                        testimonials: 'Отзывы участников наших курсов:',
                        trust: 'Доверьтесь опыту и качеству',
                        about: 'Мы — фармацевтическая компания, которой доверяют миллионы. Доверьтесь нам и позвольте нам заботиться о вашем благополучии. Вместе мы создаем будущее здоровья и комфорта.',
                        products: 'Выпущенных препаратов',
                        partners: 'Наших мировых партнеров',
                        yearsOnMarket: 'Лет на медицинском рынке'

                    },
// {t('additional.minutes')}
                    additional: {
                        data: 'Дата',
                        coach: 'Тренер',
                        program: 'Программа',
                        format: 'Формат',
                        exactTime: 'Время проведения',
                        minutes: 'минут',
                        beginning: 'Начало',
                        webinars: 'Вебинаров',
                        webinar: 'Вебинар',
                        open: 'Открыть',
                        addToBasket: 'Добавить в корзину',
                        oneParticipant: '1 участник',
                        fewParticipant: '2-5 участников',
                        manyParticipant: '6-10 участников',
                        activities: 'Мероприятия',
                        contacts: 'Контакты',
                        contactsDescription: 'Вы можете отправить свой електронный адрес и мы свяжемся с вами.',
                        address: 'город Киев, УЛИЦА ТАРАСОВСКАЯ, дом 4-А, офис 7',
                        enter: 'Войти',
                    },
                    header: {
                        about: 'о компании',
                        services: 'услуги',
                        events: 'мероприятия',
                        contacts: 'контакты',
                        main: 'главная',
                        basket: 'Корзина',
                        account: 'Аккаунт',
                        exit: 'Выйти',
                    },
                    services: {
                        services: 'Услуги',
                        training: 'Программы обучения',
                        webinars: 'Лекции и вебинары',
                        description: 'Описание',
                        webinarDescription: 'Вебинар раскрывает следующие пункты:',
                        program: 'Программа',
                        webinarsInProgram: 'Вебинары в программе',
                        levels: 'Уровни профессиональной подготовки',
                    },
                    individual: {
                        order: 'Заказать индвидуальное обучение',
                        text1: 'Вы можете заказать консультацию, диагностический аудит, проведение вебинара для своей команды или организацию конференции. Оффлайн или Онлайн',
                        text2: 'Заполните, пожалуйста, форму обратной связи и укажите желаемую тему вебинара или название программы, а мы подберем для Вас оптимальный состав специалиста и удобный формат.',
                    },
                    form: {
                        title: 'Ваш заказ',
                        empty: 'Ваша корзина пуста',
                        amount: 'Сумма',
                        cancel: 'Отменить',
                        send: 'Отправить',
                        name: 'Имя',
                        phone: 'Телефон',
                        email: 'E-mail',
                        them: 'Тема вебинара или программа',
                        short: 'Слишком коротко!',
                        long: 'Слишком длинный!',
                        nameIsRequired: 'Имя обязательно',
                        phoneIsNotValid: 'Номер телефона не действителен',
                        phoneIsRequired: 'Телефон обязателен',
                        invalidEmail: 'Неверный e-mail',
                        emailIsRequired: 'Email обязателен',
                        topicIsRequired: 'Тема обязательна',
                    },
                    main: {
                        title1: 'Знания это',
                        title2: 'ключ к успеху',
                        subtext: 'Мы являемся инновационной и независимой образовательной платформой, на которой можно получить инновации, знания и ответы на сложные вопросы в области фармаконадзора, GMP-сертификации, регистрации и клинического развития в фармацевтической отрасли.',
                        box1: {
                            text1: 'Актуальные и компетентные материалы',
                            subtext1: 'Мы обеспечиваем доступ к самым современным знаниям и практическим инструмента',
                            text2: ' Экспертные преподаватели и ведущие школы',
                            subtext2: 'Мы сотрудничаем с ведущими в своей сфере специалистами международного значения',
                            text3: 'Интерактивность и практика',
                            subtext3: 'Наше обучение включает в себя практические задания, дискуссии и интерактивные упражнения',
                        },
                        box2: {
                            text1: 'ГРУППОВЫЕ ТРЕНИНГИ ГРУППОВЫЕ ТРЕНИНГИ ГРУППОВЫЕ ТРЕНИНГИ',
                        }
                    }
                },
            },
            // ua
            ua: {
                translation: {
                    collapse: {
                        beginner: 'Початковий рівень',
                        elementary: 'Елементарний рівень',
                        intermediate: 'Середній рівень',
                        advanced: 'Просунутий рівень',
                        extra: 'Спеціалізований рівень',
                    },
                    login: {
                        accountLogin: 'Вхід в акаунт',
                        login: 'Логін',
                        password: 'Пароль',
                    },
                    toast: {
                        message: {
                            success: 'Повідомлення відправлено успішно!',
                            failed: 'Не вдалося надіслати повідомлення. Будь ласка, повторіть спробу пізніше'
                        },
                        login: {
                            success: 'Вхід у систему успішно завершено!',
                            failed: 'Логін або пароль не вірні'
                        },
                        basket: {
                            success: 'Ви успішно додали цей товар у кошик',
                            failed: 'Ви вже додали цей товар у кошик'
                        }
                    },
                    cabinet: {
                        back: 'Назад',
                        all: 'Усі',
                        webinar: 'Вебінари',
                        program: 'Програми',
                        onlyMy: 'Тільки мої',
                        schedule: 'розклад',
                        aboutUs: 'про нас',
                        availableToMe: 'Доступно для мене',
                        nearest: 'Найближчі',
                        watchOnYouTube: 'Дивитися на YouTube',
                        downloadLecture: 'Завантажити конспект',
                        downloadPresentation: 'Завантажити презентацію',
                        backToProgram: 'Повернутися до програми',
                        open: 'Відкрити',
                        buy: 'Купити',
                        buyProgram: 'Купити програму',

                        studentsSaying: 'Що кажуть наші учні',
                        participantsExperiences: 'Наші учасники поділяють свій досвід і враження від проходження курсів фармацевтики та медицини.',
                        testimonials: 'Відгуки учасників наших курсів:',
                        trust: 'Довіртеся досвіду та якості',
                        about: 'Ми - фармацевтична компанія, якій довіряють мільйони. Довіртеся нам і дозвольте нам піклуватися про ваше благополуччя. Разом ми створюємо майбутнє здоров\'я і комфорту.',
                        products: 'Випущених препаратів',
                        partners: 'Наших світових партнерів',
                        yearsOnMarket: 'Років на медичному ринку'
                    },
                    additional: {
                        data: 'Дата',
                        coach: 'Тренер',
                        program: 'Програма',
                        format: 'Формат',
                        exactTime: 'Час проведення',
                        minutes: 'хвилин',
                        beginning: 'Початок',
                        webinars: 'Вебінарів',
                        webinar: 'Вебінар',
                        open: 'Відкрити',
                        addToBasket: 'Додати в кошик',
                        oneParticipant: '1 учасник',
                        fewParticipant: '2-5 учасників',
                        manyParticipant: '6-10 учасників',
                        activities: 'Заходи',
                        contacts: 'Контакти',
                        contactsDescription: 'Ви можете надіслати свою електронну адресу і ми зв\'яжемося з вами.',
                        address: 'місто Київ, ВУЛИЦЯ ТАРАСІВСЬКА, будинок 4-А, офіс 7',
                        enter: 'Увійти',
                    },
                    header: {
                        about: 'про компанію',
                        services: 'послуги',
                        events: 'заходи',
                        contacts: 'контакти',
                        main: 'головна',
                        basket: 'Кошик',
                        account: 'Аккаунт',
                        exit: 'Вийти',
                    },
                    services: {
                        services: 'Послуги',
                        training: 'Програми навчання',
                        webinars: 'Лекції та вебінари',
                        description: 'Опис',
                        webinarDescription: 'Вебінар розкриває такі пункти:',
                        program: 'Програма',
                        webinarsInProgram: 'Вебінари в програмі',
                        levels: 'Рівні професійної підготовки',

                    },
                    individual: {
                        order: 'Замовити індвидуальне навчання',
                        text1: 'Ви можете замовити консультацію, діагностичний аудит, проведення вебінару для своєї команди або організацію конференції. Офлайн або Онлайн',
                        text2: 'Заповніть, будь ласка, форму зворотного зв\'язку та вкажіть бажану тему вебінару або назву програми, а ми підберемо для Вас оптимальний склад фахівця і зручний формат.',
                    },
                    form: {
                        title: 'Ваше замовлення',
                        empty: 'Ваша корзина порожня',
                        amount: 'Сума',
                        cancel: 'Скасувати',
                        send: 'Відправити',
                        name: 'Ім\'я',
                        phone: 'Телефон',
                        email: 'E-mail',
                        them: 'Тема вебінару або програма',
                        short: 'Занадто коротко!',
                        long: 'Занадто довгий!',
                        nameIsRequired: 'Ім\'я обов\'язкове',
                        phoneIsNotValid: 'Номер телефону не дійсний',
                        phoneIsRequired: 'Телефон обов\'язковий',
                        invalidEmail: 'Неправильний e-mail',
                        emailIsRequired: 'Email обов\'язковий',
                        topicIsRequired: 'Тема обов\'язкова',
                    },
                    main: {
                        title1: 'Знания это',
                        title2: 'ключ к успеху',
                        subtext: 'Мы являемся инновационной и независимой образовательной платформой, на которой можно получить инновации, знания и ответы на сложные вопросы в области фармаконадзора, GMP-сертификации, регистрации и клинического развития в фармацевтической отрасли.',
                        box1: {
                            text1: 'Актуальные и компетентные материалы',
                            subtext1: 'Мы обеспечиваем доступ к самым современным знаниям и практическим инструмента',
                            text2: ' Экспертные преподаватели и ведущие школы',
                            subtext2: 'Мы сотрудничаем с ведущими в своей сфере специалистами международного значения',
                            text3: 'Интерактивность и практика',
                            subtext3: 'Наше обучение включает в себя практические задания, дискуссии и интерактивные упражнения',
                        },
                        box2: {
                            text1: 'ГРУППОВЫЕ ТРЕНИНГИ ГРУППОВЫЕ ТРЕНИНГИ ГРУППОВЫЕ ТРЕНИНГИ',
                            text2: 'О нас',
                            text3: 'Наша миссия заключается в том, чтобы помочь специалистам в фармацевтической и смежной ей отраслях принимать более эффективные решения в критических бизнес-процессах',
                            text4: ' партнеров по всему миру',
                            text5: ' выпущенных препаратов',
                            text6: 'регистрационных процедур в год',
                        },
                        box3: {
                            text1: 'Обучение от Ведущих Экспертов',
                            text2: 'Наша главная цель это обеспечение потребностей рынка лучшими специалистами в своей области. Мы делаем это, обучая специалистов инновационным концепциям, которые они могут получить только у практикующих экспертов.',
                        }
                    }
                },
            }
        }
    });


export default i18n;