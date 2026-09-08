// Category taxonomy for Spanish grammar.
// This is the single source of truth for section ordering, labels and icons.
// Keys are used as the `category` field in content frontmatter.

export interface Category {
  key: string;
  titleUk: string;
  titleEs: string;
  titleEn: string;
  description: string;
  icon: string; // simple emoji-free glyph name mapped in CSS
  order: number;
}

export const categories: Category[] = [
  {
    key: 'fundamentals',
    titleUk: 'Основи',
    titleEs: 'Fundamentos',
    titleEn: 'Fundamentals',
    description:
      'Абетка, вимова, наголос, рід і число — база, з якої починається розуміння іспанської граматики.',
    icon: 'fundamentals',
    order: 1,
  },
  {
    key: 'nouns',
    titleUk: 'Іменники',
    titleEs: 'Sustantivos',
    titleEn: 'Nouns',
    description: 'Рід і число іменників, утворення множини, особливі випадки.',
    icon: 'nouns',
    order: 2,
  },
  {
    key: 'articles',
    titleUk: 'Артиклі',
    titleEs: 'Artículos',
    titleEn: 'Articles',
    description:
      'Означений і неозначений артикль, відсутність артикля, скорочення. В українській артиклів немає — тут це окрема тема.',
    icon: 'articles',
    order: 3,
  },
  {
    key: 'adjectives',
    titleUk: 'Прикметники',
    titleEs: 'Adjetivos',
    titleEn: 'Adjectives',
    description: 'Узгодження прикметників, порівняльні ступені, позиція перед і після іменника.',
    icon: 'adjectives',
    order: 4,
  },
  {
    key: 'adverbs',
    titleUk: 'Прислівники',
    titleEs: 'Adverbios',
    titleEn: 'Adverbs',
    description: 'Утворення прислівників на -mente, позиція в реченні, ступені порівняння.',
    icon: 'adverbs',
    order: 5,
  },
  {
    key: 'pronouns',
    titleUk: 'Займенники',
    titleEs: 'Pronombres',
    titleEn: 'Pronouns',
    description:
      'Особові, присвійні, вказівні, зворотні займенники, позиція об'єктних займенників, особисте a.',
    icon: 'pronouns',
    order: 6,
  },
  {
    key: 'prepositions',
    titleUk: 'Прийменники',
    titleEs: 'Preposiciones',
    titleEn: 'Prepositions',
    description: 'Прості й складні прийменники, керування дієслів, por і para.',
    icon: 'prepositions',
    order: 7,
  },
  {
    key: 'conjunctions',
    titleUk: 'Сполучники',
    titleEs: 'Conjunciones',
    titleEn: 'Conjunctions',
    description: 'Сполучники сурядності й підрядності, зв'язки в складному реченні.',
    icon: 'conjunctions',
    order: 8,
  },
  {
    key: 'verbs',
    titleUk: 'Дієслова',
    titleEs: 'Verbos',
    titleEn: 'Verbs',
    description:
      'Дієвідміни, неправильні дієслова, ser і estar, зворотні дієслова, безособові форми.',
    icon: 'verbs',
    order: 9,
  },
  {
    key: 'tenses',
    titleUk: 'Часи',
    titleEs: 'Tiempos verbales',
    titleEn: 'Tenses',
    description:
      'Теперішній, минулі й майбутні часи. Різниця між pretérito і imperfecto — найважче для українців.',
    icon: 'tenses',
    order: 10,
  },
  {
    key: 'moods',
    titleUk: 'Способи',
    titleEs: 'Modos verbales',
    titleEn: 'Moods',
    description:
      'Індикатив, субхунтив, умовний спосіб, наказовий спосіб. Субхунтив — тема, якої немає в українській.',
    icon: 'moods',
    order: 11,
  },
  {
    key: 'periphrases',
    titleUk: 'Дієслівні конструкції',
    titleEs: 'Perífrasis verbales',
    titleEn: 'Verbal periphrases',
    description: 'Конструкції з інфінітивом, герундієм і дієприкметником (ir a, estar + gerundio...).',
    icon: 'periphrases',
    order: 12,
  },
  {
    key: 'sentence-structure',
    titleUk: 'Структура речення',
    titleEs: 'Estructura de la oración',
    titleEn: 'Sentence structure',
    description: 'Порядок слів, заперечення, питання, безособові речення, узгодження часів.',
    icon: 'sentence',
    order: 13,
  },
  {
    key: 'word-formation',
    titleUk: 'Словотвір',
    titleEs: 'Formación de palabras',
    titleEn: 'Word formation',
    description: 'Суфікси, префікси, зменшувальні форми, утворення слів.',
    icon: 'word',
    order: 14,
  },
  {
    key: 'spelling',
    titleUk: 'Орфографія',
    titleEs: 'Ortografía',
    titleEn: 'Spelling & orthography',
    description: 'Правила наголосу, розділові знаки, використання ñ, h, b/v, написання слів.',
    icon: 'spelling',
    order: 15,
  },
  {
    key: 'regional',
    titleUk: 'Регіональні варіанти',
    titleEs: 'Variedades regionales',
    titleEn: 'Regional varieties',
    description:
      'Іспанія, Латинська Америка, Ріо-де-ла-Плата, Мексика, Кариби. Voseo, seseo, leísmo та інші варіанти.',
    icon: 'regional',
    order: 16,
  },
];

export function getCategory(key: string): Category | undefined {
  return categories.find((c) => c.key === key);
}

export const sortedCategories = [...categories].sort((a, b) => a.order - b.order);