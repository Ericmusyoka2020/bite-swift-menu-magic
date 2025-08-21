import { Translations, Language } from '../types';

export type { Language };

export const translations: Translations = {
  // Navigation
  welcome: {
    en: "Welcome to BiteSwift",
    he: "ברוכים הבאים לביטסוויפט",
    ar: "مرحباً بكم في بايت سويفت",
    ru: "Добро пожаловать в БайтСвифт",
    yi: "ברוכים הבאים צו ביטעסוויפט",
    am: "እንኳን ወደ ቢትስዊፍት በደህና መጡ",
    fr: "Bienvenue à BiteSwift",
    es: "Bienvenido a BiteSwift",
    de: "Willkommen bei BiteSwift"
  },
  tagline: {
    en: "Order easily from your table!",
    he: "הזמן בקלות מהשולחן שלך!",
    ar: "اطلب بسهولة من طاولتك!",
    ru: "Заказывайте легко со своего стола!",
    yi: "באשטעל גרינג פון דיין טיש!",
    am: "ከጠረጴዛዎ በቀላሉ ይዘዙ!",
    fr: "Commandez facilement depuis votre table !",
    es: "¡Ordena fácilmente desde tu mesa!",
    de: "Bestellen Sie einfach von Ihrem Tisch!"
  },
  // Categories
  starters: {
    en: "Starters",
    he: "מנות ראשונות",
    ar: "المقبلات",
    ru: "Закуски",
    yi: "ערשטע גאנגען",
    am: "መጀመሪያ",
    fr: "Entrées",
    es: "Entradas",
    de: "Vorspeisen"
  },
  mainCourse: {
    en: "Main Course",
    he: "מנה עיקרית",
    ar: "الطبق الرئيسي",
    ru: "Основное блюдо",
    yi: "הויפט גאנג",
    am: "ዋና ምግብ",
    fr: "Plat principal",
    es: "Plato principal",
    de: "Hauptgang"
  },
  drinks: {
    en: "Drinks",
    he: "משקאות",
    ar: "المشروبات",
    ru: "Напитки",
    yi: "געטראנקען",
    am: "መጠጦች",
    fr: "Boissons",
    es: "Bebidas",
    de: "Getränke"
  },
  desserts: {
    en: "Desserts",
    he: "קינוחים",
    ar: "الحلويات",
    ru: "Десерты",
    yi: "נאכגעריכט",
    am: "ጣፋጭ ምግቦች",
    fr: "Desserts",
    es: "Postres",
    de: "Desserts"
  },
  // UI Elements
  addToCart: {
    en: "Add to Cart",
    he: "הוסף לעגלה",
    ar: "أضف إلى السلة",
    ru: "Добавить в корзину",
    yi: "לייג צו וואגן",
    am: "ወደ ጋሪ አክል",
    fr: "Ajouter au panier",
    es: "Agregar al carrito",
    de: "In den Warenkorb"
  },
  cart: {
    en: "Cart",
    he: "עגלה",
    ar: "السلة",
    ru: "Корзина",
    yi: "וואגן",
    am: "ጋሪ",
    fr: "Panier",
    es: "Carrito",
    de: "Warenkorb"
  },
  checkout: {
    en: "Checkout",
    he: "לחשבון",
    ar: "الدفع",
    ru: "Оформить заказ",
    yi: "באצאלן",
    am: "ክፍያ",
    fr: "Commander",
    es: "Pagar",
    de: "Bestellen"
  },
  total: {
    en: "Total",
    he: "סה״כ",
    ar: "المجموع",
    ru: "Итого",
    yi: "אין גאנצן",
    am: "ጠቅላላ",
    fr: "Total",
    es: "Total",
    de: "Gesamt"
  },
  tableNumber: {
    en: "Table Number",
    he: "מספר שולחן",
    ar: "رقم الطاولة",
    ru: "Номер стола",
    yi: "טיש נומער",
    am: "የጠረጴዛ ቁጥር",
    fr: "Numéro de table",
    es: "Número de mesa",
    de: "Tischnummer"
  },
  guestName: {
    en: "Guest Name (Optional)",
    he: "שם האורח (אופציונלי)",
    ar: "اسم الضيف (اختياري)",
    ru: "Имя гостя (опционально)",
    yi: "גאסט נאמען (אויסוואל)",
    am: "የእንግዳ ስም (አማራጭ)",
    fr: "Nom de l'invité (Optionnel)",
    es: "Nombre del huésped (Opcional)",
    de: "Gastname (Optional)"
  },
  notes: {
    en: "Special Notes (Optional)",
    he: "הערות מיוחדות (אופציונלי)",
    ar: "ملاحظات خاصة (اختيارية)",
    ru: "Особые примечания (опционально)",
    yi: "באזונדערע הערות (אויסוואל)",
    am: "ልዩ ማስታወሻዎች (አማራጭ)",
    fr: "Notes spéciales (Optionnel)",
    es: "Notas especiales (Opcional)",
    de: "Besondere Wünsche (Optional)"
  },
  placeOrder: {
    en: "Place Order",
    he: "בצע הזמנה",
    ar: "اطلب الآن",
    ru: "Сделать заказ",
    yi: "געב באשטעלונג",
    am: "ትዕዛዝ ይስጡ",
    fr: "Passer commande",
    es: "Realizar pedido",
    de: "Bestellung aufgeben"
  },
  orderConfirmation: {
    en: "Your order has been placed. Please wait to be served.",
    he: "ההזמנה שלך נקלטה. אנא המתן להגשה.",
    ar: "تم تسجيل طلبك. يرجى الانتظار ليتم تقديمه.",
    ru: "Ваш заказ принят. Пожалуйста, ожидайте подачи.",
    yi: "דיין באשטעלונג איז אנגענומען. ביטע וואַרט פֿאַר דינען.",
    am: "ትዕዛዝዎ ተመዝግቧል። እባክዎን እስኪቀርብ ድረስ ይጠብቁ።",
    fr: "Votre commande a été enregistrée. Veuillez attendre d'être servi.",
    es: "Su pedido ha sido registrado. Por favor espere a ser servido.",
    de: "Ihre Bestellung wurde aufgenommen. Bitte warten Sie auf die Bedienung."
  },
  // Dietary labels
  vegetarian: {
    en: "Vegetarian",
    he: "צמחוני",
    ar: "نباتي",
    ru: "Вегетарианское",
    yi: "וועגעטאַריאַן",
    am: "የአትክልት",
    fr: "Végétarien",
    es: "Vegetariano",
    de: "Vegetarisch"
  },
  vegan: {
    en: "Vegan",
    he: "טבעוני",
    ar: "نباتي صرف",
    ru: "Веганское",
    yi: "וועגאַן",
    am: "ቨጋን",
    fr: "Végan",
    es: "Vegano",
    de: "Vegan"
  },
  spicy: {
    en: "Spicy",
    he: "חריף",
    ar: "حار",
    ru: "Острое",
    yi: "שאַרף",
    am: "ቅመም",
    fr: "Épicé",
    es: "Picante",
    de: "Scharf"
  },
  // Additional UI
  menu: {
    en: "Menu",
    he: "תפריט",
    ar: "القائمة",
    ru: "Меню",
    yi: "מעניו",
    am: "ዝርዝር",
    fr: "Menu",
    es: "Menú",
    de: "Speisekarte"
  },
  searchDishes: {
    en: "Search dishes...",
    he: "חפש מנות...",
    ar: "ابحث عن الأطباق...",
    ru: "Поиск блюд...",
    yi: "זוך געריכט...",
    am: "ምግብ ይፈልጉ...",
    fr: "Rechercher des plats...",
    es: "Buscar platos...",
    de: "Gerichte suchen..."
  },
  noItemsFound: {
    en: "No items found",
    he: "לא נמצאו פריטים",
    ar: "لم يتم العثور على عناصر",
    ru: "Ничего не найдено",
    yi: "קיין זאכן געפֿונען",
    am: "ምንም አልተገኘም",
    fr: "Aucun élément trouvé",
    es: "No se encontraron elementos",
    de: "Keine Artikel gefunden"
  },
  emptyCart: {
    en: "Your cart is empty",
    he: "העגלה שלך ריקה",
    ar: "سلتك فارغة",
    ru: "Ваша корзина пуста",
    yi: "דיין וואגן איז ליידיק",
    am: "ጋሪዎ ባዶ ነው",
    fr: "Votre panier est vide",
    es: "Tu carrito está vacío",
    de: "Ihr Warenkorb ist leer"
  },
  orderSummary: {
    en: "Order Summary",
    he: "סיכום הזמנה",
    ar: "ملخص الطلب",
    ru: "Сводка заказа",
    yi: "באשטעלונג סיכום",
    am: "የትዕዛዝ ማጠቃለያ",
    fr: "Résumé de commande",
    es: "Resumen del pedido",
    de: "Bestellübersicht"
  },
  submitting: {
    en: "Submitting...",
    he: "שולח...",
    ar: "جارٍ الإرسال...",
    ru: "Отправка...",
    yi: "שיקן...",
    am: "በመላክ ላይ...",
    fr: "Envoi en cours...",
    es: "Enviando...",
    de: "Senden..."
  },
  orderError: {
    en: "There was an error submitting your order. Please try again.",
    he: "הייתה שגיאה בשליחת ההזמנה. אנא נסה שוב.",
    ar: "حدث خطأ في إرسال طلبك. يرجى المحاولة مرة أخرى.",
    ru: "Произошла ошибка при отправке заказа. Пожалуйста, попробуйте еще раз.",
    yi: "עס איז געווען אַ טעות ביי שיקן דיין באשטעלונג. ביטע פּרובירן ווידער.",
    am: "ትዕዛዝዎን በመላክ ላይ ስህተት ተፈጥሯል። እባክዎን እንደገና ይሞክሩ።",
    fr: "Une erreur s'est produite lors de l'envoi de votre commande. Veuillez réessayer.",
    es: "Hubo un error al enviar su pedido. Por favor, inténtelo de nuevo.",
    de: "Beim Senden Ihrer Bestellung ist ein Fehler aufgetreten. Bitte versuchen Sie es erneut."
  },
  orderPlaced: {
    en: "Order Placed!",
    he: "ההזמנה בוצעה!",
    ar: "تم تقديم الطلب!",
    ru: "Заказ размещен!",
    yi: "באשטעלונג געלייגט!",
    am: "ትዕዛዝ ተሰጥቷል!",
    fr: "Commande passée !",
    es: "¡Pedido realizado!",
    de: "Bestellung aufgegeben!"
  },
  backToMenu: {
    en: "Back to Menu",
    he: "חזור לתפריט",
    ar: "العودة إلى القائمة",
    ru: "Вернуться в меню",
    yi: "צוריק צו מעניו",
    am: "ወደ ዝርዝር ተመለስ",
    fr: "Retour au menu",
    es: "Volver al menú",
    de: "Zurück zum Menü"
  },
  browseMenu: {
    en: "Browse Menu",
    he: "עיין בתפריט",
    ar: "تصفح القائمة",
    ru: "Просмотреть меню",
    yi: "בלעטער מעניו",
    am: "ዝርዝር ይመልከቱ",
    fr: "Parcourir le menu",
    es: "Explorar menú",
    de: "Menü durchsuchen"
  },
  easyOrdering: {
    en: "Easy Ordering",
    he: "הזמנה קלה",
    ar: "طلب سهل",
    ru: "Легкий заказ",
    yi: "גרינג באשטעלן",
    am: "ቀላል ትዕዛዝ",
    fr: "Commande facile",
    es: "Pedido fácil",
    de: "Einfache Bestellung"
  },
  easyOrderingDesc: {
    en: "Order directly from your table with just a few taps",
    he: "הזמן ישירות מהשולחן שלך בכמה הקשות בלבד",
    ar: "اطلب مباشرة من طاولتك بنقرات قليلة فقط",
    ru: "Заказывайте прямо со своего стола всего несколькими нажатиями",
    yi: "באשטעל גלייך פון דיין טיש מיט נאר אַ ביסל טאַפּס",
    am: "በጥቂት ንክኪዎች ብቻ ከጠረጴዛዎ በቀጥታ ይዘዙ",
    fr: "Commandez directement depuis votre table en quelques clics",
    es: "Ordena directamente desde tu mesa con solo unos toques",
    de: "Bestellen Sie direkt von Ihrem Tisch mit nur wenigen Berührungen"
  },
  quickService: {
    en: "Quick Service",
    he: "שירות מהיר",
    ar: "خدمة سريعة",
    ru: "Быстрое обслуживание",
    yi: "גיך דינסט",
    am: "ፈጣን አገልግሎት",
    fr: "Service rapide",
    es: "Servicio rápido",
    de: "Schneller Service"
  },
  quickServiceDesc: {
    en: "Your order goes directly to the kitchen for fast preparation",
    he: "ההזמנה שלך עוברת ישירות למטבח להכנה מהירה",
    ar: "يذهب طلبك مباشرة إلى المطبخ للتحضير السريع",
    ru: "Ваш заказ поступает прямо на кухню для быстрого приготовления",
    yi: "דיין באשטעלונג גייט גלייך צו דער קיך פֿאַר גיך צוגרייטונג",
    am: "ትዕዛዝዎ ለፈጣን ዝግጅት በቀጥታ ወደ ኩሽና ይሄዳል",
    fr: "Votre commande va directement en cuisine pour une préparation rapide",
    es: "Tu pedido va directamente a la cocina para una preparación rápida",
    de: "Ihre Bestellung geht direkt in die Küche für eine schnelle Zubereitung"
  },
  multiLanguage: {
    en: "Multi-Language",
    he: "רב-לשוני",
    ar: "متعدد اللغات",
    ru: "Многоязычный",
    yi: "מערערע שפּראַכן",
    am: "ባለብዙ ቋንቋ",
    fr: "Multilingue",
    es: "Multiidioma",
    de: "Mehrsprachig"
  },
  multiLanguageDesc: {
    en: "Available in 9 languages with full RTL support",
    he: "זמין ב-9 שפות עם תמיכה מלאה ב-RTL",
    ar: "متوفر بـ 9 لغات مع دعم كامل للكتابة من اليمين إلى اليسار",
    ru: "Доступно на 9 языках с полной поддержкой RTL",
    yi: "בנימצא אין 9 שפּראַכן מיט פול RTL שטיצן",
    am: "ከሙሉ RTL ድጋፍ ጋር በ9 ቋንቋዎች ይገኛል",
    fr: "Disponible en 9 langues avec prise en charge complète RTL",
    es: "Disponible en 9 idiomas con soporte completo RTL",
    de: "Verfügbar in 9 Sprachen mit vollständiger RTL-Unterstützung"
  },
  required: {
    en: 'Required',
    he: 'נדרש',
    ar: 'مطلوب',
    ru: 'Обязательно',
    yi: 'פאַרלאַנגט',
    am: 'ያስፈልጋል',
    fr: 'Obligatoire',
    es: 'Requerido',
    de: 'Erforderlich'
  },
  customize: {
    en: 'Customize',
    he: 'התאמה אישית',
    ar: 'تخصيص',
    ru: 'Настроить',
    yi: 'קאַסטאַמייז',
    am: 'ባህሪያት ይቀይሩ',
    fr: 'Personnaliser',
    es: 'Personalizar',
    de: 'Anpassen'
  }
};

export const isRTL = (language: Language): boolean => {
  return language === 'he' || language === 'ar';
};

export const getDirection = (language: Language): 'ltr' | 'rtl' => {
  return isRTL(language) ? 'rtl' : 'ltr';
};