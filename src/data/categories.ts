// Category definitions for the Spanish grammar reference.
// Used by GrammarLayout (for category titles/descriptions) and the homepage
// (for the sorted category list).

export interface Category {
  key: string;
  titleUk: string;
  titleEs: string;
  description: string;
  order: number;
}

export const categories: Category[] = [
  {
    key: 'fundamentals',
    titleUk: 'Основи',
    titleEs: 'Fundamentos',
    description:
      'Абетка, вимова, правила читання, дата/час/числа.',
    order: 1,
  },
  {
    key: 'nouns',
    titleUk: 'Іменники',
    titleEs: 'Sustantivos',
    description:
      'Рід, число, неправильні plural, присвійні конструкції.',
    order: 2,
  },
  {
    key: 'articles',
    titleUk: 'Артиклі',
    titleEs: 'Artículos',
    description:
      'Означений і неозначений артикль, нульовий артикль, нейтральне lo, особливі випадки.',
    order: 3,
  },
  {
    key: 'adjectives',
    titleUk: 'Прикметники',
    titleEs: 'Adjetivos',
    description:
      'Узгодження, порядок, зміна значення, ступені порівняння.',
    order: 4,
  },
  {
    key: 'adverbs',
    titleUk: 'Прислівники',
    titleEs: 'Adverbios',
    description:
      'Типи, утворення -mente, позиція, частотність, час/місце/способ/кількість.',
    order: 5,
  },
  {
    key: 'pronouns',
    titleUk: 'Займенники',
    titleEs: 'Pronombres',
    description:
      'Особові, додаткові, присвійні,-demonstrative, indefinite, relative та інші.',
    order: 6,
  },
  {
    key: 'prepositions',
    titleUk: 'Прийменники',
    titleEs: 'Preposiciones',
    description:
      'Основні прийменники, por/para, місце, час, дієслова з прийменниками.',
    order: 7,
  },
  {
    key: 'conjunctions',
    titleUk: 'Сполучники',
    titleEs: 'Conjunciones',
    description:
      'Координатні, підпорядковуючі, que/de que, сполучники з subjuntivo.',
    order: 8,
  },
  {
    key: 'verbs',
    titleUk: 'Дієслова',
    titleEs: 'Verbos',
    description:
      'Конʼюгація, регулярні/нерегулярні, reflexives, gustar, personal a, ser/estar.',
    order: 9,
  },
  {
    key: 'tenses',
    titleUk: 'Часи',
    titleEs: 'Tiempos',
    description:
      'Індикативні часи: present, perfecto, indefinido, imperfecto, pluscuamperfecto та інші.',
    order: 10,
  },
  {
    key: 'moods',
    titleUk: 'Способи',
    titleEs: 'Modos',
    description:
      'Індикатив vs subjuntivo, imperative, способи та їх використання.',
    order: 11,
  },
  {
    key: 'periphrases',
    titleUk: 'Дієслівні конструкції',
    titleEs: 'Perífrasis verbales',
    description:
      'Tener que, hay que, poder, soler, acabar de, volver a, estar + gerundio та інші.',
    order: 12,
  },
  {
    key: 'sentence-structure',
    titleUk: 'Структура речення',
    titleEs: 'Estructura de la oración',
    description:
      'Порядок слів, запитання, заперечення, подвійне заперечення, пасив, reported speech.',
    order: 13,
  },
  {
    key: 'word-formation',
    titleUk: 'Словотвір',
    titleEs: 'Formación de palabras',
    description:
      'Префікси, суфікси, зменшувально-пестливі, збільшувальні форми.',
    order: 14,
  },
  {
    key: 'spelling',
    titleUk: 'Орфографія',
    titleEs: 'Ortografía',
    description:
      'Наголос, знаки наголосу, b/v, c/z/s, g/j, h, y/ll, написання в конʼюгації.',
    order: 15,
  },
  {
    key: 'regional',
    titleUk: 'Регіональні варіанти',
    titleEs: 'Variantes regionales',
    description:
      'Іспанія vs Латинська Америка, voseo, leísmo/laísmo/loísmo, вимовні відмінності.',
    order: 16,
  },
];

export function getCategory(key: string): Category | undefined {
  return categories.find((c) => c.key === key);
}

export const sortedCategories: Category[] = [...categories].sort(
  (a, b) => a.order - b.order
);
