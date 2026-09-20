const publicBase = process.env.NEXT_PUBLIC_BASE_PATH || "";

export default {
  "basePath": publicBase,
  "template": {
    "specialty": "nails",
    "bookingProvider": "Телефон",
    "reviewSource": "Яндекс Карты"
  },
  "brand": {
    "name": "Ольга Олейник",
    "subtitle": "Мастер маникюра и педикюра",
    "monogram": "ОО"
  },
  "master": {
    "name": "Ольга",
    "dative": "Ольге",
    "genitive": "Ольги",
    "instrumental": "Ольгой",
    "monogram": "ОО",
    "profession": "мастер маникюра и педикюра",
    "heroTitle": "",
    "heroEmphasis": "эксперт по маникюру и педикюру",
    "heroCaption": "Мастер маникюра и педикюра",
    "imageAlt": "мастер маникюра и педикюра",
    "heroCopy": "Маникюр, педикюр и уход за ногтями с вниманием к аккуратности, форме и качеству результата.",
    "visitMotto": "",
    "experienceYears": null,
    "experienceAria": "",
    "aboutTitle": "Ольга Олейник",
    "aboutLead": "",
    "aboutParagraphs": [],
    "skills": []
  },
  "location": {
    "country": "Россия",
    "countryCode": "RU",
    "city": "Москва",
    "metro": "",
    "cityMetro": "Москва",
    "address": "ул. Марьинский Парк, 17, корп. 2, Москва",
    "mapCardAddress": "ул. Марьинский Парк, 17, корп. 2, Москва · вход около 4 подъезда",
    "schedule": "Ежедневно 10:00–22:00",
    "scheduleCapitalized": "Ежедневно 10:00–22:00",
    "timeZone": "Europe/Moscow",
    "openTime": "10:00",
    "closeTime": "22:00"
  },
  "contacts": {
    "phoneDisplay": "+7 (926) 258-55-05",
    "phoneHref": "tel:+79262585505",
    "channels": [
      {
        "type": "whatsapp",
        "label": "WhatsApp",
        "url": "https://wa.me/79262585505?text=Обращение+из+Яндекс+Карт%0AЗдравствуйте!+Меня+заинтересовало+ваше+предложение"
      },
      {
        "type": "telegram",
        "label": "Telegram",
        "url": "https://t.me/+79262585505"
      }
    ],
    "messenger": {
      "type": "whatsapp",
      "label": "WhatsApp",
      "url": "https://wa.me/79262585505?text=Обращение+из+Яндекс+Карт%0AЗдравствуйте!+Меня+заинтересовало+ваше+предложение"
    }
  },
  "links": {
    "bookingUrl": "",
    "reviewsUrl": "https://yandex.com/maps/org/nogti_i_tohka/93919961978/",
    "mapUrl": "https://yandex.com/maps/org/nogti_i_tohka/93919961978/",
    "routeUrl": "https://yandex.com/maps/org/nogti_i_tohka/93919961978/",
    "mobileMapEmbedUrl": "about:blank",
    "desktopMapEmbedUrl": "about:blank",
    "yandexMapHrefMatch": "93919961978"
  },
  "reputation": {
    "rating": "4.9",
    "reviewCount": "41"
  },
  "images": {
    "logo": "",
    "portrait": `${publicBase}/masterpc.webp`,
    "portraitDesktop": `${publicBase}/masterpc.webp`,
    "about": `${publicBase}/master.webp`,
    "favicon": `${publicBase}/favicon-source.png`,
    "heroDecoration": `${publicBase}/assets/template/hair-tools.png`,
    "beforeAfter": [],
    "gallery": [
      { "src": `${publicBase}/galery00001.webp`, "alt": "Работа Ольги — 1" },
      { "src": `${publicBase}/galery00002.webp`, "alt": "Работа Ольги — 2" },
      { "src": `${publicBase}/galery00003.webp`, "alt": "Работа Ольги — 3" },
      { "src": `${publicBase}/galery00004.webp`, "alt": "Работа Ольги — 4" },
      { "src": `${publicBase}/galery00005.webp`, "alt": "Работа Ольги — 5" },
      { "src": `${publicBase}/galery00006.webp`, "alt": "Работа Ольги — 6" },
      { "src": `${publicBase}/galery00007.webp`, "alt": "Работа Ольги — 7" },
      { "src": `${publicBase}/galery00008.webp`, "alt": "Работа Ольги — 8" },
      { "src": `${publicBase}/galery00009.webp`, "alt": "Работа Ольги — 9" },
      { "src": `${publicBase}/galery00010.webp`, "alt": "Работа Ольги — 10" },
      { "src": `${publicBase}/galery00011.webp`, "alt": "Работа Ольги — 11" },
      { "src": `${publicBase}/galery00012.webp`, "alt": "Работа Ольги — 12" }
    ]
  },
  "services": {
    "groups": [
      {
        "id": "manicure",
        "label": "Маникюр",
        "services": [
          {
            "name": "Комплекс маникюр",
            "price": "2 500 ₽",
            "time": "",
            "description": "снятие покрытия, маникюр, покрытие",
            "url": ""
          },
          {
            "name": "Мужской маникюр",
            "price": "1 500 ₽",
            "time": "",
            "description": "придание формы, обработка кутикулы",
            "url": ""
          }
        ]
      },
      {
        "id": "pedicure",
        "label": "Педикюр",
        "services": [
          {
            "name": "Комплекс педикюр",
            "price": "3 100 ₽",
            "time": "",
            "description": "обработка стоп в SMART-технике, снятие покрытия, обработка пальцев, придание формы, покрытие",
            "url": ""
          },
          {
            "name": "Мужской педикюр",
            "price": "2 500 ₽",
            "time": "",
            "description": "обработка стоп в SMART-технике, обработка пальчиков, придание формы ногтям",
            "url": ""
          },
          {
            "name": "Экспресс-педикюр",
            "price": "2 500 ₽",
            "time": "",
            "description": "снятие покрытия, обработка пальцев, покрытие Luxio",
            "url": ""
          }
        ]
      },
      {
        "id": "design",
        "label": "Дизайн (маникюр, педикюр)",
        "services": [
          {
            "name": "Френч",
            "price": "500 ₽",
            "time": "",
            "description": "дизайн «Френч»",
            "url": ""
          },
          {
            "name": "Дизайн ногтей",
            "price": "100 ₽",
            "time": "",
            "description": "фольга, стемпинг, глиттер",
            "url": ""
          }
        ]
      },
      {
        "id": "repair",
        "label": "Ремонт ногтя",
        "services": [
          {
            "name": "Ремонт ногтя",
            "price": "200 ₽",
            "time": "",
            "description": "",
            "url": ""
          }
        ]
      }
    ]
  },
  "i18n": {
    "localLocale": "ru",
    "locales": [
      {
        "code": "ru",
        "label": "RU"
      },
      {
        "code": "en",
        "label": "EN"
      }
    ],
    "translations": {
      "en": {
        "мастер маникюра и педикюра": "manicure and pedicure specialist",
        "эксперт по маникюру и педикюру": "manicure and pedicure expert",
        "Мастер маникюра и педикюра": "Manicure and pedicure specialist",
        "Маникюр, педикюр и уход за ногтями с вниманием к аккуратности, форме и качеству результата.": "Manicure, pedicure and nail care with attention to precision, shape and quality.",
        "Выполняю маникюр и педикюр, наращивание и коррекцию ногтей.": "I provide manicure and pedicure, nail extensions and corrections.",
        "Работаю со стерильными инструментами и уделяю внимание аккуратности, форме и качеству результата.": "I work with sterile instruments and pay close attention to precision, shape and the quality of the result.",
        "Маникюр и педикюр": "Manicure and pedicure",
        "Наращивание и коррекция": "Extensions and corrections",
        "Стерильные инструменты": "Sterile instruments",
        "колорист и мастер по волосам": "colorist and hair specialist",
        "парикмахер-стилист": "hair stylist",
        "парикмахер-колорист": "hair colorist",
        "технолог-колорист": "hair technologist and colorist",
        "Колорист": "Colorist",
        "Парикмахер-стилист": "Hair stylist",
        "Парикмахер-колорист": "Hair colorist",
        "Технолог-колорист": "Hair technologist and colorist",
        "эксперт по волосам": "hair expert",
        "Стрижки, окрашивание, блонд, уход и укладки с вниманием к состоянию волос, оттенку и вашему образу.": "Haircuts, coloring, blonding, care and styling with attention to hair condition, tone and your look.",
        "Специализируюсь на стрижках и окрашивании, blond и сложных техниках, уходе и реконструкции волос.": "I specialize in haircuts and coloring, blond and complex techniques, hair care and reconstruction.",
        "Работаю с формой, цветом и состоянием волос, чтобы результат выглядел цельно и подходил именно вам.": "I work with shape, color and hair condition so the result looks cohesive and suits you.",
        "Стрижки и окрашивание": "Haircuts and coloring",
        "Blond и сложные техники": "Blond and complex techniques",
        "Уход и реконструкция волос": "Hair care and reconstruction",
        "Москва": "Moscow",
        "Щёлково": "Shchyolkovo",
        "Беляево": "Belyayevo",
        "Печатники": "Pechatniki",
        "По предварительной записи": "By appointment",
        "Строго по предварительной записи": "Strictly by appointment",
        "Пн–Сб 10:00–22:00": "Mon–Sat 10:00–22:00",
        "Ежедневно 10:00–22:00": "Daily 10:00–22:00",
        "Ольга Олейник": "Olga Oleynik",
        "ул. Марьинский Парк, 17, корп. 2, Москва": "17 bldg. 2 Maryinsky Park Street, Moscow",
        "ул. Марьинский Парк, 17, корп. 2, Москва · вход около 4 подъезда": "17 bldg. 2 Maryinsky Park Street, Moscow · entrance near building entrance 4",
        "Маникюр": "Manicure",
        "Комплекс маникюр": "Manicure package",
        "снятие покрытия, маникюр, покрытие": "coating removal, manicure, coating",
        "придание формы, обработка кутикулы": "nail shaping, cuticle care",
        "Комплекс педикюр": "Pedicure package",
        "обработка стоп в SMART-технике, снятие покрытия, обработка пальцев, придание формы, покрытие": "SMART foot treatment, coating removal, toe treatment, shaping, coating",
        "обработка стоп в SMART-технике, обработка пальчиков, придание формы ногтям": "SMART foot treatment, toe treatment, nail shaping",
        "снятие покрытия, обработка пальцев, покрытие Luxio": "coating removal, toe treatment, Luxio coating",
        "Дизайн (маникюр, педикюр)": "Design (manicure, pedicure)",
        "Френч": "French design",
        "дизайн «Френч»": "French design",
        "фольга, стемпинг, глиттер": "foil, stamping, glitter",
        "Женский маникюр": "Women's manicure",
        "Комбинированный маникюр": "Combined manicure",
        "Аппаратный маникюр": "Hardware manicure",
        "Мужской маникюр": "Men's manicure",
        "Снятие покрытия": "Coating removal",
        "Педикюр": "Pedicure",
        "Комбинированный педикюр": "Combined pedicure",
        "Аппаратный педикюр": "Hardware pedicure",
        "SMART-педикюр": "SMART pedicure",
        "Экспресс-педикюр": "Express pedicure",
        "Мужской педикюр": "Men's pedicure",
        "Дизайн и ремонт": "Design and repair",
        "Дизайн ногтей": "Nail design",
        "Ремонт ногтя": "Nail repair",
        "Я Ольга — эксперт по маникюру и педикюру.": "I am Olga — a manicure and pedicure expert."
      }
    }
  },
  "reviews": [
    {
      "author": "Елена Ч",
      "text": "Благодарна мастеру Ольге за прекрасный маникюр ❤️ хочу отметить, что потрачено времени всего 1ч 10 мин, сделано все аккуратно, качественно и красиво, обязательно приду еще!",
      "source": "Яндекс Карты"
    },
    {
      "author": "Виктория К.",
      "text": "Ольга - прекрасный мастер своего дела! Навела красоту быстро и исправила недочеты ногтевой пластины. Рекомендую!",
      "source": "Яндекс Карты"
    },
    {
      "author": "Vik V.",
      "text": "Все хорошо , делал мужской маникюр",
      "source": "Яндекс Карты"
    },
    {
      "author": "Надежда Яровицына",
      "text": "Замечательное место и супер мастер! Делала у Ольги маникюр и педикюр, мастер работает качественно и очень аккуратно, крафт пакеты вскрывала при мне, всё чисто и стерильно, очень уютное место и супер интересные сериалы😉😄",
      "source": "Яндекс Карты"
    },
    {
      "author": "Виктория",
      "text": "Ольга отличный мастер😊 Быстро и очень аккуратно делает маникюр и педикюр, покрытие держится хорошо, никаких сколов. Ходила уже несколько раз и обязательно приду еще. Удачное расположение салона, все чисто, инструменты стерильные. Однозначно рекомендую!",
      "source": "Яндекс Карты"
    },
    {
      "author": "кристина в.",
      "text": "Мастер сделала работу быстро и качественно, всё стерильно, обработано, крафт-пакеты вскрыты при мне перед использованием. Френч идеальный, не могу налюбоваться, очень довольна😍Советую!",
      "source": "Яндекс Карты"
    },
    {
      "author": "настя",
      "text": "Идеальный маникюр — лучшее украшение девушки! 💅🏻 В этом салоне знают, как подчеркнуть красоту и подарить отличное настроение. Рекомендую от всей души! 🤍",
      "source": "Яндекс Карты"
    },
    {
      "author": "Алина",
      "text": "5/5! Лучший маникюр в моей жизни — спасибо Ольге! Что особенно понравилось: безупречное качество: покрытие идеально ровное, углы...",
      "source": "Яндекс Карты"
    },
    {
      "author": "Луиза С",
      "text": "Ольга - потрясающая! Спасибо Вам большое! Не могу насмотреться на свои ноготки. С моими сложными ногтями и тонкой кутикулой справилась на 5++++. Обычно меня все режут, но не она. В первый же раз решила рискнуть и...",
      "source": "Яндекс Карты"
    }
  ],
  "promotions": [],
  "amenities": [],
  "seo": {
    "siteUrl": "https://ichaey.github.io/TAN-00017/",
    "title": "Ольга Олейник — мастер маникюра и педикюра",
    "description": "Маникюр и педикюр у Ольги Олейник в Москве. Запись по телефону.",
    "keywords": [
      "Ольга Олейник",
      "маникюр Москва",
      "педикюр Москва",
      "Ногти и точка"
    ],
    "locale": "ru_RU"
  },
  "analytics": {
    "yandexMetrikaId": ""
  }
};
