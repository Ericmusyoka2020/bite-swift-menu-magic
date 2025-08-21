import { MenuItem } from '../types';

export const menuItems: MenuItem[] = [
  // Starters
  {
    id: 'starter-1',
    name: {
      en: 'Mediterranean Mezze Platter',
      he: 'מגש מזה ים תיכוני',
      ar: 'طبق المازة المتوسطي',
      ru: 'Средиземноморская закуска',
      yi: 'מיטעלענדישע מעזע',
      am: 'የመሀል ባህር ምግብ',
      fr: 'Plateau de mezzés méditerranéens',
      es: 'Plato de mezze mediterráneo',
      de: 'Mediterrane Mezze-Platte'
    },
    description: {
      en: 'Hummus, olives, feta cheese, and warm pita bread',
      he: 'חומוס, זיתים, גבינת פטה ולחם פיתה חם',
      ar: 'حمص وزيتون وجبنة فيتا وخبز البيتا الدافئ',
      ru: 'Хумус, оливки, сыр фета и теплый хлеб пита',
      yi: 'חומוס, איליוועס, פעטאַ קעז, און וואַרעם פיטאַ ברויט',
      am: 'ሁመስ፣ ዘይቶና፣ ፌታ አይብ እና ሞቃት ፒታ እንጀራ',
      fr: 'Houmous, olives, fromage feta et pain pita chaud',
      es: 'Hummus, aceitunas, queso feta y pan pita caliente',
      de: 'Hummus, Oliven, Fetakäse und warmes Pita-Brot'
    },
    price: 18,
    image: '/src/assets/appetizers.jpg',
    category: 'starters',
    dietary: ['vegetarian']
  },
  {
    id: 'starter-2',
    name: {
      en: 'Truffle Arancini',
      he: 'אראנצ\'יני טרופל',
      ar: 'أرانشيني الكمأ',
      ru: 'Аранчини с трюфелем',
      yi: 'טרופל אַראַנסיני',
      am: 'ትራፍል አራንቺኒ',
      fr: 'Arancini à la truffe',
      es: 'Arancini de trufa',
      de: 'Trüffel-Arancini'
    },
    description: {
      en: 'Crispy risotto balls with truffle oil and parmesan',
      he: 'כדורי ריזוטו פריכים עם שמן טרופל ופרמזן',
      ar: 'كرات الريزوتو المقرمشة مع زيت الكمأ والبارميزان',
      ru: 'Хрустящие шарики ризотто с трюфельным маслом и пармезаном',
      yi: 'קריספּי ריזאָטאָ באַללס מיט טרופל ייל און פּאַרמעזאַן',
      am: 'በትራፍል ዘይት እና ፓርሜዛን የተቀመመ ጥራጣሬ ሪዞቶ',
      fr: 'Boulettes de risotto croustillantes à l\'huile de truffe et parmesan',
      es: 'Bolas de risotto crujientes con aceite de trufa y parmesano',
      de: 'Knusprige Risotto-Bällchen mit Trüffelöl und Parmesan'
    },
    price: 24,
    image: '/src/assets/appetizers.jpg',
    category: 'starters',
    dietary: ['vegetarian']
  },

  // Main Courses
  {
    id: 'main-1',
    name: {
      en: 'Grilled Salmon with Herbs',
      he: 'סלמון צלוי עם עשבי תיבול',
      ar: 'سلمون مشوي بالأعشاب',
      ru: 'Лосось на гриле с травами',
      yi: 'גרילד לאַקס מיט הערבס',
      am: 'በዝሆን ተጠብሶ የተቀመመ ሳልሞን',
      fr: 'Saumon grillé aux herbes',
      es: 'Salmón a la parrilla con hierbas',
      de: 'Gegrillter Lachs mit Kräutern'
    },
    description: {
      en: 'Fresh Atlantic salmon with seasonal vegetables and lemon butter',
      he: 'סלמון אטלנטי טרי עם ירקות עונתיים וחמאת לימון',
      ar: 'سلمون أطلسي طازج مع خضار موسمية وزبدة الليمون',
      ru: 'Свежий атлантический лосось с сезонными овощами и лимонным маслом',
      yi: 'פריש אַטלאַנטיק לאַקס מיט סיזאַנאַל וועדזשטאַבאַלז און לימענע פּוטער',
      am: 'ትኩስ አትላንቲክ ሳልሞን በወቅታዊ አትክልቶች እና የሎሚ ቅቤ',
      fr: 'Saumon atlantique frais avec légumes de saison et beurre au citron',
      es: 'Salmón atlántico fresco con verduras de temporada y mantequilla de limón',
      de: 'Frischer Atlantik-Lachs mit Saisongemüse und Zitronenbutter'
    },
    price: 32,
    image: '/src/assets/main-course.jpg',
    category: 'mainCourse',
    dietary: []
  },
  {
    id: 'main-2',
    name: {
      en: 'Beef Tenderloin Steak',
      he: 'סטייק פילה בקר',
      ar: 'ستيك لحم البقر',
      ru: 'Стейк из говяжьей вырезки',
      yi: 'רינדפלייש טענדערלוין סטייק',
      am: 'የበሬ ስጋ ቴንደርሎይን ስቴክ',
      fr: 'Steak de filet de bœuf',
      es: 'Filete de ternera',
      de: 'Rinderfilet-Steak'
    },
    description: {
      en: 'Premium cut with truffle mashed potatoes and red wine jus',
      he: 'חתך פרימיום עם פירה טרופל ורוטב יין אדום',
      ar: 'قطعة ممتازة مع البطاطس المهروسة بالكمأ وصلصة النبيذ الأحمر',
      ru: 'Премиальный разрез с трюфельным картофельным пюре и соусом из красного вина',
      yi: 'פּרעמיום שנייַדן מיט טרופל מאַשט פּאַטייטאָוז און רויט ווײַן דזשוס',
      am: 'ከፍተኛ ጥራት ያለው በትራፍል ድንች እና በቀይ ወይን ኪዳን',
      fr: 'Coupe premium avec purée de pommes de terre à la truffe et jus de vin rouge',
      es: 'Corte premium con puré de patatas con trufa y jugo de vino tinto',
      de: 'Premium-Schnitt mit Trüffel-Kartoffelpüree und Rotwein-Jus'
    },
    price: 45,
    image: '/src/assets/main-course.jpg',
    category: 'mainCourse',
    dietary: [],
    spicy: false
  },

  // Drinks
  {
    id: 'drink-1',
    name: {
      en: 'Craft Cocktail',
      he: 'קוקטייל מיוחד',
      ar: 'كوكتيل مصنوع يدوياً',
      ru: 'Авторский коктейль',
      yi: 'קראַפט קאָקטיי',
      am: 'የእጅ ስራ ኮክቴል',
      fr: 'Cocktail artisanal',
      es: 'Cóctel artesanal',
      de: 'Handwerks-Cocktail'
    },
    description: {
      en: 'House-made cocktails with premium spirits and fresh ingredients',
      he: 'קוקטיילים תוצרת בית עם אלכוהול איכותי ורכיבים טריים',
      ar: 'كوكتيلات منزلية الصنع مع مشروبات روحية ممتازة ومكونات طازجة',
      ru: 'Домашние коктейли с премиальными спиртными напитками и свежими ингредиентами',
      yi: 'הויז-געמאכט קאָקטיילז מיט פּרעמיום שפּיריץ און פריש ינגרידיאַנץ',
      am: 'በቤት የተሰሩ ኮክቴሎች ከከፍተኛ ጥራት ያላቸው መጠጦች እና ትኩስ ንጥረ ነገሮች',
      fr: 'Cocktails maison avec spiritueux premium et ingrédients frais',
      es: 'Cócteles caseros con licores premium e ingredientes frescos',
      de: 'Hausgemachte Cocktails mit Premium-Spirituosen und frischen Zutaten'
    },
    price: 16,
    image: '/src/assets/drinks.jpg',
    category: 'drinks',
    subcategory: 'alcoholic',
    dietary: [],
    customizations: [
      {
        id: 'cocktail-type',
        name: {
          en: 'Choose Cocktail',
          he: 'בחר קוקטייל',
          ar: 'اختر الكوكتيل',
          ru: 'Выберите коктейль',
          yi: 'אויסקלייַבן קאָקטיי',
          am: 'ኮክቴል ይምረጡ',
          fr: 'Choisir le cocktail',
          es: 'Elegir cóctel',
          de: 'Cocktail wählen'
        },
        required: true,
        options: [
          {
            id: 'mojito',
            name: {
              en: 'Mojito',
              he: 'מוחיטו',
              ar: 'موهيتو',
              ru: 'Мохито',
              yi: 'מאָדזשיטאָ',
              am: 'ሞሂቶ',
              fr: 'Mojito',
              es: 'Mojito',
              de: 'Mojito'
            }
          },
          {
            id: 'margarita',
            name: {
              en: 'Margarita',
              he: 'מרגריטה',
              ar: 'مارغاريتا',
              ru: 'Маргарита',
              yi: 'מאַרגאַריטאַ',
              am: 'ማርጋሪታ',
              fr: 'Margarita',
              es: 'Margarita',
              de: 'Margarita'
            }
          },
          {
            id: 'whiskey-sour',
            name: {
              en: 'Whiskey Sour',
              he: 'וויסקי חמוץ',
              ar: 'ويسكي حامض',
              ru: 'Виски сауэр',
              yi: 'וויסקי זויער',
              am: 'ዊስኪ ሳወር',
              fr: 'Whiskey Sour',
              es: 'Whiskey Sour',
              de: 'Whiskey Sour'
            }
          }
        ]
      }
    ]
  },
  {
    id: 'drink-2',
    name: {
      en: 'Hot Beverage',
      he: 'משקה חם',
      ar: 'مشروب ساخن',
      ru: 'Горячий напиток',
      yi: 'הייס געטראַנק',
      am: 'ሞቃት መጠጥ',
      fr: 'Boisson chaude',
      es: 'Bebida caliente',
      de: 'Heißgetränk'
    },
    description: {
      en: 'Premium coffee and tea selections',
      he: 'מבחר קפה ותה איכותי',
      ar: 'مجموعة مختارة من القهوة والشاي المتميز',
      ru: 'Премиальный выбор кофе и чая',
      yi: 'פּרעמיום קאָפע און טיי סעלעקציעס',
      am: 'የከፍተኛ ጥራት ቡና እና ሻይ ምርጫዎች',
      fr: 'Sélections de café et thé premium',
      es: 'Selecciones premium de café y té',
      de: 'Premium-Auswahl an Kaffee und Tee'
    },
    price: 8,
    image: '/src/assets/drinks.jpg',
    category: 'drinks',
    subcategory: 'hot',
    dietary: [],
    customizations: [
      {
        id: 'beverage-type',
        name: {
          en: 'Choose Beverage',
          he: 'בחר משקה',
          ar: 'اختر المشروب',
          ru: 'Выберите напиток',
          yi: 'אויסקלייַבן געטראַנק',
          am: 'መጠጥ ይምረጡ',
          fr: 'Choisir la boisson',
          es: 'Elegir bebida',
          de: 'Getränk wählen'
        },
        required: true,
        options: [
          {
            id: 'espresso',
            name: {
              en: 'Espresso',
              he: 'אספרסו',
              ar: 'إسبريسو',
              ru: 'Эспрессо',
              yi: 'עספּרעסאָ',
              am: 'ኤስፕሬሶ',
              fr: 'Espresso',
              es: 'Espresso',
              de: 'Espresso'
            }
          },
          {
            id: 'cappuccino',
            name: {
              en: 'Cappuccino',
              he: 'קפוצ\'ינו',
              ar: 'كابتشينو',
              ru: 'Капучино',
              yi: 'קאַפּוטשינאָ',
              am: 'ካፑቺኖ',
              fr: 'Cappuccino',
              es: 'Cappuccino',
              de: 'Cappuccino'
            }
          },
          {
            id: 'green-tea',
            name: {
              en: 'Green Tea',
              he: 'תה ירוק',
              ar: 'شاي أخضر',
              ru: 'Зеленый чай',
              yi: 'גרין טיי',
              am: 'አረንጓዴ ሻይ',
              fr: 'Thé vert',
              es: 'Té verde',
              de: 'Grüner Tee'
            }
          }
        ]
      },
      {
        id: 'milk-type',
        name: {
          en: 'Milk Option',
          he: 'סוג חלב',
          ar: 'خيار الحليب',
          ru: 'Вариант молока',
          yi: 'מילך אָפּציע',
          am: 'የወተት አማራጭ',
          fr: 'Option de lait',
          es: 'Opción de leche',
          de: 'Milch-Option'
        },
        required: false,
        options: [
          {
            id: 'regular',
            name: {
              en: 'Regular Milk',
              he: 'חלב רגיל',
              ar: 'حليب عادي',
              ru: 'Обычное молоко',
              yi: 'רעגולער מילך',
              am: 'መደበኛ ወተት',
              fr: 'Lait ordinaire',
              es: 'Leche normal',
              de: 'Normale Milch'
            }
          },
          {
            id: 'oat',
            name: {
              en: 'Oat Milk',
              he: 'חלב שיבולת שועל',
              ar: 'حليب الشوفان',
              ru: 'Овсяное молоко',
              yi: 'האָבער מילך',
              am: 'የአዅል ወተት',
              fr: 'Lait d\'avoine',
              es: 'Leche de avena',
              de: 'Hafermilch'
            },
            price: 2
          },
          {
            id: 'almond',
            name: {
              en: 'Almond Milk',
              he: 'חלב שקדים',
              ar: 'حليب اللوز',
              ru: 'Миндальное молоко',
              yi: 'מאַנדל מילך',
              am: 'የሎዝ ወተት',
              fr: 'Lait d\'amande',
              es: 'Leche de almendra',
              de: 'Mandelmilch'
            },
            price: 2
          }
        ]
      }
    ]
  },

  // Desserts
  {
    id: 'dessert-1',
    name: {
      en: 'Chocolate Lava Cake',
      he: 'עוגת לבה שוקולד',
      ar: 'كعكة الشوكولاتة بالحمم',
      ru: 'Шоколадный лава-кейк',
      yi: 'שאָקאָלאַד לאַוואַ צוקערטאָרט',
      am: 'የቸኮሌት ላቫ ኬክ',
      fr: 'Gâteau coulant au chocolat',
      es: 'Pastel de lava de chocolate',
      de: 'Schokoladen-Lava-Kuchen'
    },
    description: {
      en: 'Warm chocolate cake with molten center, vanilla ice cream',
      he: 'עוגת שוקולד חמה עם מרכז נמס, גלידת וניל',
      ar: 'كعكة الشوكولاتة الدافئة مع مركز مذاب، آيس كريم الفانيليا',
      ru: 'Теплый шоколадный торт с расплавленным центром, ванильное мороженое',
      yi: 'וואַרעם שאָקאָלאַד צוקערטאָרט מיט מאָלטאַן צענטער, וואַניל אייַז קרעם',
      am: 'ሞቃት የቸኮሌት ኬክ ከጠለቀ ማዕከል፣ የቫኒላ አይስክሬም',
      fr: 'Gâteau au chocolat chaud avec centre coulant, glace à la vanille',
      es: 'Pastel de chocolate caliente con centro derretido, helado de vainilla',
      de: 'Warmer Schokoladenkuchen mit geschmolzenem Kern, Vanilleeis'
    },
    price: 14,
    image: '/src/assets/desserts.jpg',
    category: 'desserts',
    dietary: ['vegetarian']
  }
];