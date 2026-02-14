import { MenuItem } from '../types';

const t = (en: string, he: string, ar: string, ru: string, yi: string, am: string, fr: string, es: string, de: string) => ({ en, he, ar, ru, yi, am, fr, es, de });

export const menuItems: MenuItem[] = [
  // ===== STARTERS =====
  {
    id: 'starter-1',
    name: t('Mediterranean Mezze Platter', 'מגש מזה ים תיכוני', 'طبق المازة المتوسطي', 'Средиземноморская закуска', 'מיטעלענדישע מעזע', 'የመሀል ባህር ምግብ', 'Plateau de mezzés méditerranéens', 'Plato de mezze mediterráneo', 'Mediterrane Mezze-Platte'),
    description: t('Hummus, olives, feta cheese, and warm pita bread', 'חומוס, זיתים, גבינת פטה ולחם פיתה חם', 'حمص وزيتون وجبنة فيتا وخبز البيتا الدافئ', 'Хумус, оливки, сыр фета и теплый хлеб пита', 'חומוס, איליוועס, פעטאַ קעז, און וואַרעם פיטאַ ברויט', 'ሁመስ፣ ዘይቶና፣ ፌታ አይብ እና ሞቃት ፒታ እንጀራ', 'Houmous, olives, fromage feta et pain pita chaud', 'Hummus, aceitunas, queso feta y pan pita caliente', 'Hummus, Oliven, Fetakäse und warmes Pita-Brot'),
    price: 18, image: '/appetizers.jpg', category: 'starters', dietary: ['vegetarian']
  },
  {
    id: 'starter-2',
    name: t('Truffle Arancini', 'אראנצ\'יני טרופל', 'أرانشيني الكمأ', 'Аранчини с трюфелем', 'טרופל אַראַנסיני', 'ትራፍል አራንቺኒ', 'Arancini à la truffe', 'Arancini de trufa', 'Trüffel-Arancini'),
    description: t('Crispy risotto balls with truffle oil and parmesan', 'כדורי ריזוטו פריכים עם שמן טרופל ופרמזן', 'كرات الريزوتو المقرمشة مع زيت الكمأ والبارميزان', 'Хрустящие шарики ризотто с трюфельным маслом и пармезаном', 'קריספּי ריזאָטאָ באַללס מיט טרופל ייל און פּאַרמעזאַן', 'በትራፍል ዘይት እና ፓርሜዛን የተቀመመ ጥራጣሬ ሪዞቶ', 'Boulettes de risotto croustillantes à l\'huile de truffe et parmesan', 'Bolas de risotto crujientes con aceite de trufa y parmesano', 'Knusprige Risotto-Bällchen mit Trüffelöl und Parmesan'),
    price: 24, image: '/appetizers.jpg', category: 'starters', dietary: ['vegetarian']
  },
  {
    id: 'starter-3',
    name: t('Crispy Calamari', 'קלמרי פריך', 'كالاماري مقرمش', 'Хрустящие кальмары', 'קריספּי קאַלאַמאַרי', 'ጥብስ ካላማሪ', 'Calamars croustillants', 'Calamares crujientes', 'Knusprige Calamari'),
    description: t('Golden fried squid rings with garlic aioli dip', 'טבעות דיונון מטוגנות עם טבילת אאיולי שום', 'حلقات الحبار المقلية مع صلصة الأيولي بالثوم', 'Жареные кольца кальмаров с чесночным айоли', 'גאָלדענע פריד סקווידז מיט קנאָבל איאָלי', 'ወርቃማ የተጠበሰ ስኳይድ ከነጭ ሽንኩርት አዮሊ ጋር', 'Anneaux de calmars frits avec aïoli à l\'ail', 'Anillos de calamar fritos con alioli de ajo', 'Goldene frittierte Tintenfischringe mit Knoblauch-Aioli'),
    price: 20, image: '/appetizers.jpg', category: 'starters', dietary: []
  },
  {
    id: 'starter-4',
    name: t('Bruschetta Trio', 'טריו ברוסקטה', 'تريو بروسكيتا', 'Трио брускетты', 'ברוסקעטאַ טריאָ', 'ብሩስኬታ ትሪዮ', 'Trio de bruschettas', 'Trío de bruschettas', 'Bruschetta-Trio'),
    description: t('Tomato basil, mushroom truffle, and smoked salmon toppings', 'עגבנייה בזיליקום, פטריות טרופל, וסלמון מעושן', 'طماطم ريحان وفطر كمأ وسلمون مدخن', 'Томат-базилик, грибы с трюфелем и копчёный лосось', 'טאָמאַטאָ באַזיל, שוואָמל טרופל, און גערויכערט לאַקס', 'ቲማቲም ባስል፣ እንጉዳይ ትራፍል፣ እና የተጨሰ ሳልሞን', 'Tomate basilic, champignons truffés et saumon fumé', 'Tomate albahaca, champiñones trufa y salmón ahumado', 'Tomate-Basilikum, Pilz-Trüffel und Räucherlachs'),
    price: 22, image: '/appetizers.jpg', category: 'starters', dietary: []
  },
  {
    id: 'starter-5',
    name: t('Spring Rolls', 'ספרינג רולס', 'لفائف الربيع', 'Спринг-роллы', 'פרילינג ראָלס', 'ስፕሪንግ ሮልስ', 'Rouleaux de printemps', 'Rollitos de primavera', 'Frühlingsrollen'),
    description: t('Vegetable spring rolls with sweet chili sauce', 'ספרינג רולס ירקות עם רוטב צ\'ילי מתוק', 'لفائف الربيع بالخضار مع صلصة الفلفل الحلو', 'Овощные спринг-роллы со сладким соусом чили', 'גרינס ספּרינג ראָלס מיט זיס טשילי סאָס', 'የአትክልት ስፕሪንግ ሮልስ ከጣፋጭ ቺሊ ሶስ ጋር', 'Rouleaux de printemps aux légumes avec sauce chili douce', 'Rollitos de primavera de verduras con salsa de chile dulce', 'Gemüse-Frühlingsrollen mit süßer Chilisauce'),
    price: 16, image: '/appetizers.jpg', category: 'starters', dietary: ['vegetarian', 'vegan']
  },
  {
    id: 'starter-6',
    name: t('Soup of the Day', 'מרק היום', 'حساء اليوم', 'Суп дня', 'זופּ פון טאָג', 'የዛሬ ሾርባ', 'Soupe du jour', 'Sopa del día', 'Tagessuppe'),
    description: t('Chef\'s daily creation served with artisan bread', 'יצירת השף היומית מוגשת עם לחם אומן', 'إبداع الشيف اليومي يقدم مع خبز حرفي', 'Ежедневное творение шефа с домашним хлебом', 'שעפס טעגלעכע באשאפונג מיט ברויט', 'የዛሬው የሼፍ ፈጠራ ከአርቲዛን ዳቦ ጋር', 'Création quotidienne du chef servie avec pain artisanal', 'Creación diaria del chef servida con pan artesanal', 'Tägliche Kreation des Küchenchefs mit Handwerksbrot'),
    price: 14, image: '/appetizers.jpg', category: 'starters', dietary: ['vegetarian']
  },

  // ===== MAIN COURSES =====
  {
    id: 'main-1',
    name: t('Grilled Salmon with Herbs', 'סלמון צלוי עם עשבי תיבול', 'سلمون مشوي بالأعشاب', 'Лосось на гриле с травами', 'גרילד לאַקס מיט הערבס', 'በዝሆን ተጠብሶ የተቀመመ ሳልሞን', 'Saumon grillé aux herbes', 'Salmón a la parrilla con hierbas', 'Gegrillter Lachs mit Kräutern'),
    description: t('Fresh Atlantic salmon with seasonal vegetables and lemon butter', 'סלמון אטלנטי טרי עם ירקות עונתיים וחמאת לימון', 'سلمون أطلسي طازج مع خضار موسمية وزبدة الليمون', 'Свежий атлантический лосось с сезонными овощами и лимонным маслом', 'פריש אַטלאַנטיק לאַקס מיט סיזאַנאַל וועדזשטאַבאַלז און לימענע פּוטער', 'ትኩስ አትላንቲክ ሳልሞን በወቅታዊ አትክልቶች እና የሎሚ ቅቤ', 'Saumon atlantique frais avec légumes de saison et beurre au citron', 'Salmón atlántico fresco con verduras de temporada y mantequilla de limón', 'Frischer Atlantik-Lachs mit Saisongemüse und Zitronenbutter'),
    price: 32, image: '/main-course.jpg', category: 'mainCourse', dietary: []
  },
  {
    id: 'main-2',
    name: t('Beef Tenderloin Steak', 'סטייק פילה בקר', 'ستيك لحم البقر', 'Стейк из говяжьей вырезки', 'רינדפלייש טענדערלוין סטייק', 'የበሬ ስጋ ቴንደርሎይን ስቴክ', 'Steak de filet de bœuf', 'Filete de ternera', 'Rinderfilet-Steak'),
    description: t('Premium cut with truffle mashed potatoes and red wine jus', 'חתך פרימיום עם פירה טרופל ורוטב יין אדום', 'قطعة ممتازة مع البطاطس المهروسة بالكمأ وصلصة النبيذ الأحمر', 'Премиальный разрез с трюфельным картофельным пюре и соусом из красного вина', 'פּרעמיום שנייַדן מיט טרופל מאַשט פּאַטייטאָוז און רויט ווײַן דזשוס', 'ከፍተኛ ጥራት ያለው በትራፍል ድንች እና በቀይ ወይን ኪዳን', 'Coupe premium avec purée de pommes de terre à la truffe et jus de vin rouge', 'Corte premium con puré de patatas con trufa y jugo de vino tinto', 'Premium-Schnitt mit Trüffel-Kartoffelpüree und Rotwein-Jus'),
    price: 45, image: '/main-course.jpg', category: 'mainCourse', dietary: []
  },
  {
    id: 'main-3',
    name: t('Chicken Parmesan', 'עוף פרמזן', 'دجاج بارميزان', 'Куриный пармезан', 'הון פּאַרמעזאַן', 'ዶሮ ፓርሜዛን', 'Poulet parmesan', 'Pollo parmesano', 'Hähnchen-Parmesan'),
    description: t('Breaded chicken breast with marinara sauce and melted mozzarella', 'חזה עוף בציפוי עם רוטב מרינרה ומוצרלה מומסת', 'صدر دجاج مغلف بصلصة المارينارا وجبنة الموزاريلا', 'Куриная грудка в панировке с соусом маринара и моцареллой', 'ברעדעד הון ברוסט מיט מאַרינאַראַ סאָס און מאָזאַרעלאַ', 'የዶሮ ደረት በማሪናራ ሶስ እና ሞዛሬላ', 'Poitrine de poulet panée avec sauce marinara et mozzarella', 'Pechuga de pollo empanada con salsa marinara y mozzarella', 'Paniertes Hähnchenbrustfilet mit Marinara-Sauce und Mozzarella'),
    price: 28, image: '/main-course.jpg', category: 'mainCourse', dietary: []
  },
  {
    id: 'main-4',
    name: t('Lamb Rack', 'צלעות כבש', 'رف لحم الضأن', 'Каре ягнёнка', 'לאַם ראַק', 'የበግ ጎን', 'Carré d\'agneau', 'Costillar de cordero', 'Lammkarree'),
    description: t('Herb-crusted lamb with roasted vegetables and mint jus', 'כבש בציפוי עשבי תיבול עם ירקות צלויים ורוטב נענע', 'لحم ضأن بقشرة الأعشاب مع خضار محمصة وصلصة النعناع', 'Каре ягнёнка в травяной корочке с овощами и мятным соусом', 'קרויטער לאַם מיט געבראָטענע גרינס און מינט סאָס', 'በቅመም የተቀመመ በግ ከተጠበሱ አትክልቶች ጋር', 'Agneau en croûte d\'herbes avec légumes rôtis et jus de menthe', 'Cordero en costra de hierbas con verduras asadas y jugo de menta', 'Kräuter-Lammkarree mit geröstetem Gemüse und Minz-Jus'),
    price: 48, image: '/main-course.jpg', category: 'mainCourse', dietary: []
  },
  {
    id: 'main-5',
    name: t('Mushroom Risotto', 'ריזוטו פטריות', 'ريزوتو الفطر', 'Ризотто с грибами', 'שוואָמל ריזאָטאָ', 'የእንጉዳይ ሪዞቶ', 'Risotto aux champignons', 'Risotto de champiñones', 'Pilz-Risotto'),
    description: t('Creamy arborio rice with wild mushrooms and aged parmesan', 'אורז ארבוריו קרמי עם פטריות בר ופרמזן מיושן', 'أرز أربوريو كريمي مع فطر بري وبارميزان معتق', 'Кремовый рис арборио с лесными грибами и выдержанным пармезаном', 'קרימיק אַרבאָריאָ רייַז מיט ווילדע שוואָמלעך און פּאַרמעזאַן', 'ክሬሚ አርቦሪዮ ሩዝ ከዱር እንጉዳይ እና ፓርሜዛን', 'Riz arborio crémeux aux champignons sauvages et parmesan affiné', 'Arroz arborio cremoso con setas silvestres y parmesano añejo', 'Cremiger Arborio-Reis mit Waldpilzen und gereiftem Parmesan'),
    price: 26, image: '/main-course.jpg', category: 'mainCourse', dietary: ['vegetarian']
  },
  {
    id: 'main-6',
    name: t('Seafood Pasta', 'פסטה פירות ים', 'معكرونة المأكولات البحرية', 'Паста с морепродуктами', 'ים-פרוכט פּאַסטאַ', 'የባህር ምግብ ፓስታ', 'Pâtes aux fruits de mer', 'Pasta de mariscos', 'Meeresfrüchte-Pasta'),
    description: t('Linguine with shrimp, mussels, clams, and white wine sauce', 'לינגוויני עם שרימפס, מולים, צדפות ורוטב יין לבן', 'لينغويني مع الروبيان وبلح البحر والمحار وصلصة النبيذ الأبيض', 'Лингвини с креветками, мидиями, моллюсками и соусом из белого вина', 'לינגוויני מיט שרימפּס, מאַסאַלז, קלעמז, און ווייַן סאָס', 'ሊንጊኒ ከሽሪምፕ፣ ሙስልስ፣ ክላምስ እና ነጭ ወይን ሶስ', 'Linguine aux crevettes, moules, palourdes et sauce au vin blanc', 'Linguine con camarones, mejillones, almejas y salsa de vino blanco', 'Linguine mit Garnelen, Muscheln und Weißweinsauce'),
    price: 34, image: '/main-course.jpg', category: 'mainCourse', dietary: []
  },
  {
    id: 'main-7',
    name: t('Veggie Buddha Bowl', 'בודהה באול טבעוני', 'وعاء بوذا النباتي', 'Веган боул Будда', 'וועגי בודאַ שיסל', 'ቬጂ ቡድሃ ቦውል', 'Bol Bouddha végétalien', 'Bowl Buda vegano', 'Veggie Buddha Bowl'),
    description: t('Quinoa, avocado, roasted sweet potato, chickpeas, and tahini', 'קינואה, אבוקדו, בטטה צלויה, חומוס וטחינה', 'كينوا وأفوكادو وبطاطا حلوة مشوية وحمص وطحينة', 'Киноа, авокадо, запечённый батат, нут и тахини', 'קווינאָאַ, אַוואָקאַדאָ, געבראָטענע באַטאַטע, קיטשערפּיז און טאַכיני', 'ኪኖዋ፣ አቮካዶ፣ ጣፋጭ ድንች፣ ሽምብራ እና ታህኒ', 'Quinoa, avocat, patate douce rôtie, pois chiches et tahini', 'Quinoa, aguacate, boniato asado, garbanzos y tahini', 'Quinoa, Avocado, geröstete Süßkartoffel, Kichererbsen und Tahini'),
    price: 24, image: '/main-course.jpg', category: 'mainCourse', dietary: ['vegetarian', 'vegan']
  },
  {
    id: 'main-8',
    name: t('BBQ Ribs', 'צלעות ברביקיו', 'أضلاع الباربكيو', 'Рёбра барбекю', 'באַרבעקיו ריבס', 'ባርቢኪው ሪብስ', 'Côtes levées BBQ', 'Costillas BBQ', 'BBQ-Rippchen'),
    description: t('Slow-cooked pork ribs with smoky BBQ glaze and coleslaw', 'צלעות חזיר בבישול איטי עם ציפוי ברביקיו מעושן וקולסלו', 'أضلاع لحم مطبوخة ببطء مع صلصة الباربكيو المدخنة وسلطة الكولسلو', 'Свиные рёбра медленного приготовления с копчёной глазурью и капустным салатом', 'פּאָמעליך געקאָכט ריבס מיט סמאָוקי באַרבעקיו גלייז', 'ቀስ ብለው የተቀቀሉ ሪብስ ከባርቢኪው ግሌዝ ጋር', 'Côtes cuites lentement avec glaçage BBQ fumé et coleslaw', 'Costillas cocidas a fuego lento con glaseado BBQ ahumado y ensalada', 'Langsam gegarte Rippchen mit rauchiger BBQ-Glasur und Krautsalat'),
    price: 36, image: '/main-course.jpg', category: 'mainCourse', dietary: [], spicy: true
  },
  {
    id: 'main-9',
    name: t('Fish & Chips', 'פיש אנד צ\'יפס', 'سمك وبطاطس', 'Фиш энд чипс', 'פיש און טשיפּס', 'ፊሽ ኤንድ ቺፕስ', 'Fish and chips', 'Pescado con patatas', 'Fish & Chips'),
    description: t('Beer-battered cod with thick-cut fries and tartar sauce', 'בקלה בבלילת בירה עם צ\'יפס עבה ורוטב טרטר', 'سمك القد بخليط البيرة مع بطاطس مقلية سميكة وصلصة التارتار', 'Треска в пивном кляре с картофелем фри и соусом тартар', 'ביר-באַטערד פיש מיט טשיפּס און טאַרטאַר סאָס', 'በቢራ ቤተር የተጠበሰ ዓሣ ከቺፕስ እና ታርታር ሶስ ጋር', 'Cabillaud en pâte à bière avec frites épaisses et sauce tartare', 'Bacalao rebozado en cerveza con patatas fritas y salsa tártara', 'Kabeljau im Bierteig mit dicken Pommes und Remoulade'),
    price: 26, image: '/main-course.jpg', category: 'mainCourse', dietary: []
  },
  {
    id: 'main-10',
    name: t('Spicy Thai Curry', 'קארי תאילנדי חריף', 'كاري تايلاندي حار', 'Острый тайский карри', 'שאַרף טייַ קאַרי', 'ቅመም ታይ ከሪ', 'Curry thaï épicé', 'Curry tailandés picante', 'Scharfes Thai-Curry'),
    description: t('Red curry with coconut milk, vegetables, and jasmine rice', 'קארי אדום עם חלב קוקוס, ירקות ואורז יסמין', 'كاري أحمر مع حليب جوز الهند والخضروات وأرز الياسمين', 'Красный карри с кокосовым молоком, овощами и рисом жасмин', 'רויט קאַרי מיט קאָקאָס מילך, גרינס, און יאַסמין רייַז', 'ቀይ ከሪ ከኮኮናት ወተት፣ አትክልቶች እና ጃስሚን ሩዝ', 'Curry rouge au lait de coco, légumes et riz jasmin', 'Curry rojo con leche de coco, verduras y arroz jazmín', 'Rotes Curry mit Kokosmilch, Gemüse und Jasminreis'),
    price: 25, image: '/main-course.jpg', category: 'mainCourse', dietary: ['vegetarian', 'vegan'], spicy: true
  },

  // ===== DRINKS =====
  {
    id: 'drink-1',
    name: t('Craft Cocktail', 'קוקטייל מיוחד', 'كوكتيل مصنوع يدوياً', 'Авторский коктейль', 'קראַפט קאָקטיי', 'የእጅ ስራ ኮክቴል', 'Cocktail artisanal', 'Cóctel artesanal', 'Handwerks-Cocktail'),
    description: t('House-made cocktails with premium spirits and fresh ingredients', 'קוקטיילים תוצרת בית עם אלכוהול איכותי ורכיבים טריים', 'كوكتيلات منزلية الصنع مع مشروبات روحية ممتازة ومكونات طازجة', 'Домашние коктейли с премиальными спиртными напитками и свежими ингредиентами', 'הויז-געמאכט קאָקטיילז מיט פּרעמיום שפּיריץ און פריש ינגרידיאַנץ', 'በቤት የተሰሩ ኮክቴሎች ከከፍተኛ ጥራት ያላቸው መጠጦች እና ትኩስ ንጥረ ነገሮች', 'Cocktails maison avec spiritueux premium et ingrédients frais', 'Cócteles caseros con licores premium e ingredientes frescos', 'Hausgemachte Cocktails mit Premium-Spirituosen und frischen Zutaten'),
    price: 16, image: '/drinks.jpg', category: 'drinks', subcategory: 'alcoholic', dietary: [],
    customizations: [{
      id: 'cocktail-type',
      name: t('Choose Cocktail', 'בחר קוקטייל', 'اختر الكوكتيل', 'Выберите коктейль', 'אויסקלייַבן קאָקטיי', 'ኮክቴል ይምረጡ', 'Choisir le cocktail', 'Elegir cóctel', 'Cocktail wählen'),
      required: true,
      options: [
        { id: 'mojito', name: t('Mojito', 'מוחיטו', 'موهيتو', 'Мохито', 'מאָדזשיטאָ', 'ሞሂቶ', 'Mojito', 'Mojito', 'Mojito') },
        { id: 'margarita', name: t('Margarita', 'מרגריטה', 'مارغاريتا', 'Маргарита', 'מאַרגאַריטאַ', 'ማርጋሪታ', 'Margarita', 'Margarita', 'Margarita') },
        { id: 'whiskey-sour', name: t('Whiskey Sour', 'וויסקי חמוץ', 'ويسكي حامض', 'Виски сауэр', 'וויסקי זויער', 'ዊስኪ ሳወር', 'Whiskey Sour', 'Whiskey Sour', 'Whiskey Sour') },
        { id: 'pina-colada', name: t('Piña Colada', 'פינה קולדה', 'بينيا كولادا', 'Пина Колада', 'פּינאַ קאָלאַדאַ', 'ፒና ኮላዳ', 'Piña Colada', 'Piña Colada', 'Piña Colada') }
      ]
    }]
  },
  {
    id: 'drink-2',
    name: t('Hot Beverage', 'משקה חם', 'مشروب ساخن', 'Горячий напиток', 'הייס געטראַנק', 'ሞቃት መጠጥ', 'Boisson chaude', 'Bebida caliente', 'Heißgetränk'),
    description: t('Premium coffee and tea selections', 'מבחר קפה ותה איכותי', 'مجموعة مختارة من القهوة والشاي المتميز', 'Премиальный выбор кофе и чая', 'פּרעמיום קאָפע און טיי סעלעקציעס', 'የከፍተኛ ጥራት ቡና እና ሻይ ምርጫዎች', 'Sélections de café et thé premium', 'Selecciones premium de café y té', 'Premium-Auswahl an Kaffee und Tee'),
    price: 8, image: '/drinks.jpg', category: 'drinks', subcategory: 'hot', dietary: [],
    customizations: [
      {
        id: 'beverage-type',
        name: t('Choose Beverage', 'בחר משקה', 'اختر المشروب', 'Выберите напиток', 'אויסקלייַבן געטראַנק', 'መጠጥ ይምረጡ', 'Choisir la boisson', 'Elegir bebida', 'Getränk wählen'),
        required: true,
        options: [
          { id: 'espresso', name: t('Espresso', 'אספרסו', 'إسبريسو', 'Эспрессо', 'עספּרעסאָ', 'ኤስፕሬሶ', 'Espresso', 'Espresso', 'Espresso') },
          { id: 'cappuccino', name: t('Cappuccino', 'קפוצ\'ינו', 'كابتشينو', 'Капучино', 'קאַפּוטשינאָ', 'ካፑቺኖ', 'Cappuccino', 'Cappuccino', 'Cappuccino') },
          { id: 'latte', name: t('Latte', 'לאטה', 'لاتيه', 'Латте', 'לאַטע', 'ላቴ', 'Latte', 'Latte', 'Latte') },
          { id: 'green-tea', name: t('Green Tea', 'תה ירוק', 'شاي أخضر', 'Зеленый чай', 'גרין טיי', 'አረንጓዴ ሻይ', 'Thé vert', 'Té verde', 'Grüner Tee') }
        ]
      },
      {
        id: 'milk-type',
        name: t('Milk Option', 'סוג חלב', 'خيار الحليب', 'Вариант молока', 'מילך אָפּציע', 'የወተት አማራጭ', 'Option de lait', 'Opción de leche', 'Milch-Option'),
        required: false,
        options: [
          { id: 'regular', name: t('Regular Milk', 'חלב רגיל', 'حليب عادي', 'Обычное молоко', 'רעגולער מילך', 'መደበኛ ወተት', 'Lait ordinaire', 'Leche normal', 'Normale Milch') },
          { id: 'oat', name: t('Oat Milk', 'חלב שיבולת שועל', 'حليب الشوفان', 'Овсяное молоко', 'האָבער מילך', 'የአዅል ወተት', 'Lait d\'avoine', 'Leche de avena', 'Hafermilch'), price: 2 },
          { id: 'almond', name: t('Almond Milk', 'חלב שקדים', 'حليب اللوز', 'Миндальное молоко', 'מאַנדל מילך', 'የሎዝ ወተት', 'Lait d\'amande', 'Leche de almendra', 'Mandelmilch'), price: 2 }
        ]
      }
    ]
  },
  {
    id: 'drink-3',
    name: t('Fresh Juice', 'מיץ טבעי', 'عصير طازج', 'Свежий сок', 'פריש זאַפט', 'ትኩስ ጭማቂ', 'Jus frais', 'Jugo fresco', 'Frischer Saft'),
    description: t('Freshly squeezed juices made to order', 'מיצים סחוטים טריים להזמנה', 'عصائر طازجة معصورة حسب الطلب', 'Свежевыжатые соки на заказ', 'פריש געפּרעסט זאַפט', 'ወደ ትዕዛዝ የተዘጋጁ ትኩስ ጭማቂዎች', 'Jus pressés frais sur commande', 'Jugos recién exprimidos hechos al momento', 'Frisch gepresste Säfte auf Bestellung'),
    price: 10, image: '/drinks.jpg', category: 'drinks', subcategory: 'cold', dietary: ['vegetarian', 'vegan'],
    customizations: [{
      id: 'juice-type',
      name: t('Choose Juice', 'בחר מיץ', 'اختر العصير', 'Выберите сок', 'אויסקלייַבן זאַפט', 'ጭማቂ ይምረጡ', 'Choisir le jus', 'Elegir jugo', 'Saft wählen'),
      required: true,
      options: [
        { id: 'orange', name: t('Orange', 'תפוז', 'برتقال', 'Апельсин', 'מאַראַנטש', 'ብርቱካን', 'Orange', 'Naranja', 'Orange') },
        { id: 'carrot-ginger', name: t('Carrot & Ginger', 'גזר וג\'ינג\'ר', 'جزر وزنجبيل', 'Морковь и имбирь', 'מער און אינגבער', 'ካሮት እና ዝንጅብል', 'Carotte et gingembre', 'Zanahoria y jengibre', 'Karotte & Ingwer') },
        { id: 'watermelon', name: t('Watermelon', 'אבטיח', 'بطيخ', 'Арбуз', 'אַרבוז', 'ሐብሐብ', 'Pastèque', 'Sandía', 'Wassermelone') },
        { id: 'green-detox', name: t('Green Detox', 'ירוק דיטוקס', 'ديتوكس أخضر', 'Зеленый детокс', 'גרין דיטאָקס', 'አረንጓዴ ዲቶክስ', 'Détox verte', 'Detox verde', 'Grüner Detox') }
      ]
    }]
  },
  {
    id: 'drink-4',
    name: t('Smoothie', 'סמודי', 'سموذي', 'Смузи', 'סמודי', 'ስሙዚ', 'Smoothie', 'Batido', 'Smoothie'),
    description: t('Thick blended fruit smoothies with your choice of base', 'סמודי פירות סמיך עם בסיס לבחירתך', 'سموذي الفاكهة السميكة مع اختيار القاعدة', 'Густые фруктовые смузи на ваш выбор', 'דיקע געמישט פרוכט סמודי', 'ወፍራም የፍራፍሬ ስሙዚ', 'Smoothie épais aux fruits mélangés', 'Batido espeso de frutas con tu base favorita', 'Dickflüssiger Frucht-Smoothie mit Basis nach Wahl'),
    price: 12, image: '/drinks.jpg', category: 'drinks', subcategory: 'cold', dietary: ['vegetarian', 'vegan'],
    customizations: [{
      id: 'smoothie-type',
      name: t('Choose Flavor', 'בחר טעם', 'اختر النكهة', 'Выберите вкус', 'אויסקלייַבן טעם', 'ጣዕም ይምረጡ', 'Choisir la saveur', 'Elegir sabor', 'Geschmack wählen'),
      required: true,
      options: [
        { id: 'tropical', name: t('Tropical Mango', 'מנגו טרופי', 'مانجو استوائي', 'Тропический манго', 'טראָפּיקאַל מאַנגאָ', 'ትሮፒካል ማንጎ', 'Mangue tropicale', 'Mango tropical', 'Tropische Mango') },
        { id: 'berry', name: t('Mixed Berry', 'תערובת פירות יער', 'توت مشكل', 'Ягодный микс', 'געמישט בעריז', 'የተቀላቀለ ቤሪ', 'Baies mélangées', 'Frutos del bosque', 'Beerenmix') },
        { id: 'banana-pb', name: t('Banana Peanut Butter', 'בננה חמאת בוטנים', 'موز وزبدة الفول السوداني', 'Банан с арахисовым маслом', 'באַנאַנע פּינאַט באַטער', 'ባናና ፒናት ባተር', 'Banane beurre de cacahuète', 'Plátano con mantequilla de maní', 'Banane-Erdnussbutter') }
      ]
    }]
  },
  {
    id: 'drink-5',
    name: t('Soft Drinks', 'שתייה קלה', 'مشروبات غازية', 'Безалкогольные напитки', 'ווייכע געטראַנקען', 'ለስላሳ መጠጦች', 'Boissons gazeuses', 'Refrescos', 'Erfrischungsgetränke'),
    description: t('Classic sodas and sparkling water', 'סודה קלאסית ומים מוגזים', 'المشروبات الغازية الكلاسيكية والمياه الفوارة', 'Классическая газировка и минеральная вода', 'קלאַסיש סאָדאַ און ספּאַרקלינג וואַסער', 'ክላሲክ ሶዳዎች እና የሚያንጸባርቅ ውሃ', 'Sodas classiques et eau pétillante', 'Refrescos clásicos y agua con gas', 'Klassische Limonaden und Sprudelwasser'),
    price: 6, image: '/drinks.jpg', category: 'drinks', subcategory: 'cold', dietary: ['vegetarian', 'vegan'],
    customizations: [{
      id: 'soda-type',
      name: t('Choose Drink', 'בחר שתייה', 'اختر المشروب', 'Выберите напиток', 'אויסקלייַבן געטראַנק', 'መጠጥ ይምረጡ', 'Choisir la boisson', 'Elegir bebida', 'Getränk wählen'),
      required: true,
      options: [
        { id: 'cola', name: t('Cola', 'קולה', 'كولا', 'Кола', 'קאָלאַ', 'ኮላ', 'Cola', 'Cola', 'Cola') },
        { id: 'lemonade', name: t('Lemonade', 'לימונדה', 'ليموناضة', 'Лимонад', 'לימאָנאַד', 'ሊሞናዳ', 'Limonade', 'Limonada', 'Limonade') },
        { id: 'sparkling', name: t('Sparkling Water', 'מים מוגזים', 'مياه فوارة', 'Газированная вода', 'ספּאַרקלינג וואַסער', 'ስፓርክሊንግ ዋተር', 'Eau pétillante', 'Agua con gas', 'Sprudelwasser') },
        { id: 'ginger-ale', name: t('Ginger Ale', 'ג\'ינג\'ר אייל', 'جنجر ايل', 'Имбирный эль', 'אינגבער אייל', 'ጂንጀር ኤል', 'Ginger Ale', 'Ginger Ale', 'Ginger Ale') }
      ]
    }]
  },
  {
    id: 'drink-6',
    name: t('Wine by the Glass', 'יין בכוס', 'نبيذ بالكأس', 'Вино по бокалам', 'וויין בייַ דאָס גלאָז', 'ወይን በብርጭቆ', 'Vin au verre', 'Vino por copa', 'Wein glasweise'),
    description: t('Curated selection of red, white, and rosé wines', 'מבחר יינות אדומים, לבנים ורוזה', 'مجموعة مختارة من النبيذ الأحمر والأبيض والروزيه', 'Подборка красных, белых и розовых вин', 'אַ סעלעקציע פון רויט, ווייַס, און ראָזע וויינען', 'የቀይ፣ ነጭ እና ሮዜ ወይን ምርጫ', 'Sélection de vins rouges, blancs et rosés', 'Selección de vinos tintos, blancos y rosados', 'Auswahl an Rot-, Weiß- und Roséweinen'),
    price: 14, image: '/drinks.jpg', category: 'drinks', subcategory: 'alcoholic', dietary: [],
    customizations: [{
      id: 'wine-type',
      name: t('Choose Wine', 'בחר יין', 'اختر النبيذ', 'Выберите вино', 'אויסקלייַבן וויין', 'ወይን ይምረጡ', 'Choisir le vin', 'Elegir vino', 'Wein wählen'),
      required: true,
      options: [
        { id: 'cab-sauv', name: t('Cabernet Sauvignon', 'קברנה סוביניון', 'كابرنيه سوفينيون', 'Каберне Совиньон', 'קאַבערנעט סאָוויניאָן', 'ካበርኔ ሶቪኞን', 'Cabernet Sauvignon', 'Cabernet Sauvignon', 'Cabernet Sauvignon') },
        { id: 'chardonnay', name: t('Chardonnay', 'שרדונה', 'شاردونيه', 'Шардоне', 'שאַרדאָנע', 'ሻርዶኔ', 'Chardonnay', 'Chardonnay', 'Chardonnay') },
        { id: 'rose', name: t('Rosé', 'רוזה', 'روزيه', 'Розе', 'ראָזע', 'ሮዜ', 'Rosé', 'Rosado', 'Rosé') }
      ]
    }]
  },

  // ===== DESSERTS =====
  {
    id: 'dessert-1',
    name: t('Chocolate Lava Cake', 'עוגת לבה שוקולד', 'كعكة الشوكولاتة بالحمم', 'Шоколадный лава-кейк', 'שאָקאָלאַד לאַוואַ צוקערטאָרט', 'የቸኮሌት ላቫ ኬክ', 'Gâteau coulant au chocolat', 'Pastel de lava de chocolate', 'Schokoladen-Lava-Kuchen'),
    description: t('Warm chocolate cake with molten center, vanilla ice cream', 'עוגת שוקולד חמה עם מרכז נמס, גלידת וניל', 'كعكة الشوكولاتة الدافئة مع مركز مذاب، آيس كريم الفانيليا', 'Теплый шоколадный торт с расплавленным центром, ванильное мороженое', 'וואַרעם שאָקאָלאַד צוקערטאָרט מיט מאָלטאַן צענטער, וואַניל אייַז קרעם', 'ሞቃት የቸኮሌት ኬክ ከጠለቀ ማዕከል፣ የቫኒላ አይስክሬም', 'Gâteau au chocolat chaud avec centre coulant, glace à la vanille', 'Pastel de chocolate caliente con centro derretido, helado de vainilla', 'Warmer Schokoladenkuchen mit geschmolzenem Kern, Vanilleeis'),
    price: 14, image: '/desserts.jpg', category: 'desserts', dietary: ['vegetarian']
  },
  {
    id: 'dessert-2',
    name: t('Crème Brûlée', 'קרם ברולה', 'كريم بروليه', 'Крем-брюле', 'קרעם ברולע', 'ክሬም ብሩሌ', 'Crème brûlée', 'Crème brûlée', 'Crème brûlée'),
    description: t('Classic French vanilla custard with caramelized sugar crust', 'קרם וניל צרפתי קלאסי עם קרום סוכר מקורמל', 'كاسترد الفانيليا الفرنسي الكلاسيكي مع قشرة السكر المكرمل', 'Классический французский ванильный крем с карамелизированной корочкой', 'קלאַסיש פראנצויזיש וואַניל קאַסטאַרד מיט קאַראַמעל שוגאַר', 'ክላሲክ የፈረንሳይ ቫኒላ ካስታርድ ከካራሜል ስኳር ጋር', 'Crème anglaise à la vanille avec croûte de sucre caramélisé', 'Crema de vainilla clásica francesa con corteza de azúcar caramelizado', 'Französische Vanille-Creme mit karamellisierter Zuckerkruste'),
    price: 12, image: '/desserts.jpg', category: 'desserts', dietary: ['vegetarian']
  },
  {
    id: 'dessert-3',
    name: t('Tiramisu', 'טירמיסו', 'تيراميسو', 'Тирамису', 'טיראַמיסו', 'ቲራሚሱ', 'Tiramisu', 'Tiramisú', 'Tiramisu'),
    description: t('Italian coffee-soaked ladyfingers with mascarpone cream', 'אצבעות גבירה ספוגות קפה עם קרם מסקרפונה', 'أصابع سافواردي المنقوعة بالقهوة مع كريمة الماسكاربوني', 'Итальянский десерт с пропитанным кофе бисквитом и кремом маскарпоне', 'איטאַלישע קאַווע ליידיפינגערז מיט מאַסקאַרפּאָנע קרעם', 'የጣልያን ቡና ቲራሚሱ ከማስካርፖኔ ክሬም ጋር', 'Biscuits imbibés de café avec crème mascarpone', 'Bizcochos empapados en café con crema de mascarpone', 'Italienische kaffeegetränkte Löffelbiskuits mit Mascarpone-Creme'),
    price: 13, image: '/desserts.jpg', category: 'desserts', dietary: ['vegetarian']
  },
  {
    id: 'dessert-4',
    name: t('Cheesecake', 'עוגת גבינה', 'تشيز كيك', 'Чизкейк', 'קעז טאָרט', 'ቺዝኬክ', 'Cheesecake', 'Tarta de queso', 'Käsekuchen'),
    description: t('New York style cheesecake with mixed berry compote', 'עוגת גבינה ניו יורק עם קומפוט פירות יער', 'تشيز كيك على طريقة نيويورك مع كومبوت التوت المشكل', 'Чизкейк в нью-йоркском стиле с ягодным компотом', 'ניו יאָרק סטייל קעז טאָרט מיט בעריז', 'ኒው ዮርክ ስታይል ቺዝኬክ ከቤሪ ኮምፖት ጋር', 'Cheesecake new-yorkais avec compote de fruits rouges', 'Tarta de queso estilo Nueva York con compota de frutos rojos', 'New Yorker Käsekuchen mit Beerenkompott'),
    price: 14, image: '/desserts.jpg', category: 'desserts', dietary: ['vegetarian']
  },
  {
    id: 'dessert-5',
    name: t('Ice Cream Selection', 'מבחר גלידות', 'تشكيلة آيس كريم', 'Выбор мороженого', 'אייַז קרעם סעלעקציע', 'የአይስክሬም ምርጫ', 'Sélection de glaces', 'Selección de helados', 'Eisauswahl'),
    description: t('Three scoops of artisan gelato with wafer', 'שלושה כדורי ג\'לאטו עם וופל', 'ثلاث كرات من الجيلاتو مع ويفر', 'Три шарика ремесленного джелато с вафлей', 'דרייַ סקופּס אַרטיזאַן דזשעלאַטאָ מיט וואַפל', 'ሶስት ስኩፕ የእጅ ጀላቶ ከዌፈር ጋር', 'Trois boules de gelato artisanal avec gaufrette', 'Tres bolas de gelato artesanal con barquillo', 'Drei Kugeln handwerkliches Gelato mit Waffel'),
    price: 11, image: '/desserts.jpg', category: 'desserts', dietary: ['vegetarian'],
    customizations: [{
      id: 'ice-cream-flavor',
      name: t('Choose Flavors', 'בחר טעמים', 'اختر النكهات', 'Выберите вкусы', 'אויסקלייַבן טעמען', 'ጣዕሞች ይምረጡ', 'Choisir les parfums', 'Elegir sabores', 'Geschmack wählen'),
      required: true,
      options: [
        { id: 'vanilla', name: t('Vanilla', 'וניל', 'فانيليا', 'Ваниль', 'וואַניל', 'ቫኒላ', 'Vanille', 'Vainilla', 'Vanille') },
        { id: 'chocolate', name: t('Chocolate', 'שוקולד', 'شوكولاتة', 'Шоколад', 'שאָקאָלאַד', 'ቸኮሌት', 'Chocolat', 'Chocolate', 'Schokolade') },
        { id: 'pistachio', name: t('Pistachio', 'פיסטוק', 'فستق', 'Фисташка', 'פּיסטאַש', 'ፒስታቺዮ', 'Pistache', 'Pistacho', 'Pistazie') },
        { id: 'strawberry', name: t('Strawberry', 'תות', 'فراولة', 'Клубника', 'טרוסקאַווקע', 'እንጆሪ', 'Fraise', 'Fresa', 'Erdbeere') }
      ]
    }]
  },
  {
    id: 'dessert-6',
    name: t('Fruit Platter', 'מגש פירות', 'طبق فواكه', 'Фруктовая тарелка', 'פרוכט טעלער', 'የፍራፍሬ ሳህን', 'Plateau de fruits', 'Plato de frutas', 'Obstteller'),
    description: t('Seasonal fresh fruit selection with honey drizzle', 'מבחר פירות עונתיים טריים עם טפטוף דבש', 'تشكيلة فواكه طازجة موسمية مع رذاذ العسل', 'Сезонные свежие фрукты с мёдом', 'סיזאַנאַל פריש פרוכט מיט האָניג', 'ወቅታዊ ትኩስ ፍራፍሬ ከማር ጋር', 'Sélection de fruits frais de saison avec filet de miel', 'Selección de frutas frescas de temporada con miel', 'Saisonale frische Fruchtauswahl mit Honig'),
    price: 10, image: '/desserts.jpg', category: 'desserts', dietary: ['vegetarian', 'vegan']
  }
];