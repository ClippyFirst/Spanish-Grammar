// Canonical category registry for the Spanish grammar reference.
// Keep this file as the single source of truth for category keys, labels, order and descriptions.

export interface Category {
  key: string;
  titleUk: string;
  titleEs: string;
  description: string;
  order: number;
}

export const categories: Category[] = [
  { key: 'fundamentals', titleUk: 'Основи', titleEs: 'Fundamentos', description: 'Абетка, вимова, правила читання, дата, час і числа.', order: 1 },
  { key: 'nouns', titleUk: 'Іменники', titleEs: 'Sustantivos', description: 'Рід, число, утворення множини та особливі випадки.', order: 2 },
  { key: 'articles', titleUk: 'Артиклі', titleEs: 'Artículos', description: 'Означений і неозначений артикль, нульовий артикль, нейтральне lo та особливі випадки.', order: 3 },
  { key: 'adjectives', titleUk: 'Прикметники', titleEs: 'Adjetivos', description: 'Узгодження, порядок, зміна значення та ступені порівняння.', order: 4 },
  { key: 'adverbs', titleUk: 'Прислівники', titleEs: 'Adverbios', description: 'Типи, утворення -mente, позиція та обставинні значення.', order: 5 },
  { key: 'pronouns', titleUk: 'Займенники', titleEs: 'Pronombres', description: 'Особові, додаткові, присвійні, вказівні, неозначені, відносні та інші займенники.', order: 6 },
  { key: 'prepositions', titleUk: 'Прийменники', titleEs: 'Preposiciones', description: 'Основні прийменники, por/para, місце, час і керування дієслів.', order: 7 },
  { key: 'conjunctions', titleUk: 'Сполучники', titleEs: 'Conjunciones', description: 'Сурядні й підрядні сполучники, que/de que та конструкції із subjuntivo.', order: 8 },
  { key: 'verbs', titleUk: 'Дієслова', titleEs: 'Verbos', description: 'Відмінювання, регулярні й нерегулярні дієслова, зворотні дієслова, gustar, personal a, ser/estar.', order: 9 },
  { key: 'tenses', titleUk: 'Часи', titleEs: 'Tiempos verbales', description: 'Часи indicativo та їхні значення й уживання.', order: 10 },
  { key: 'moods', titleUk: 'Способи', titleEs: 'Modos verbales', description: 'Indicativo, subjuntivo, imperativo та принципи їх уживання.', order: 11 },
  { key: 'periphrases', titleUk: 'Дієслівні конструкції', titleEs: 'Perífrasis verbales', description: 'Tener que, hay que, poder, soler, acabar de, volver a, estar + gerundio та інші конструкції.', order: 12 },
  { key: 'sentence-structure', titleUk: 'Структура речення', titleEs: 'Estructura de la oración', description: 'Порядок слів, питання, заперечення, пасив, узгодження часів і непряма мова.', order: 13 },
  { key: 'word-formation', titleUk: 'Словотвір', titleEs: 'Formación de palabras', description: 'Префікси, суфікси, зменшувальні та збільшувальні форми.', order: 14 },
  { key: 'spelling', titleUk: 'Орфографія', titleEs: 'Ortografía', description: 'Наголос, графічні акценти, b/v, c/z/s, g/j, h, y/ll та орфографічні зміни у формах.', order: 15 },
  { key: 'regional', titleUk: 'Регіональні варіанти', titleEs: 'Variantes regionales', description: 'Іспанія й Латинська Америка, voseo, leísmo/laísmo/loísmo та інші територіальні відмінності.', order: 16 },
  { key: 'micro-constructions', titleUk: 'Мікроконструкції', titleEs: 'Microconstrucciones', description: 'Високочастотні короткі граматичні моделі, які доцільно вивчати як цілісні конструкції.', order: 17 },
];

export const categoryKeys = categories.map((category) => category.key);

export function getCategory(key: string): Category | undefined {
  return categories.find((c) => c.key === key);
}

export const sortedCategories = [...categories].sort((a, b) => a.order - b.order);
