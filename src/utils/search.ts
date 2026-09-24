export interface SearchTopic {
  id: string;
  slug: string;
  titleUk: string;
  titleEs: string;
  titleEn: string;
  summary: string;
  keywords: string[];
  category: string;
  code: string;
  cefr?: string;
  popular: boolean;
  href: string;
}

export interface SearchHit {
  topic: SearchTopic;
  score: number;
  reason: string;
}

function fold(value: string): string {
  return value
    .toLocaleLowerCase('uk')
    .normalize('NFD')
    .replace(/\p{M}/gu, '')
    .replace(/[-’'`]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

function tokens(value: string): string[] {
  return fold(value).split(' ').filter((token) => token.length > 0);
}

export function searchTopics(query: string, catalog: SearchTopic[], limit = 30): SearchHit[] {
  const q = fold(query);
  if (!q) return [];
  const qTokens = tokens(query);
  const hits: SearchHit[] = [];

  for (const topic of catalog) {
    const titleUk = fold(topic.titleUk);
    const titleEs = fold(topic.titleEs);
    const titleEn = fold(topic.titleEn);
    const id = fold(topic.id);
    const slug = fold(topic.slug);
    const summary = fold(topic.summary);
    const aliases = topic.keywords.map(fold);

    let score = 0;
    let reason = topic.summary;

    if (titleUk === q || titleEs === q || titleEn === q || id === q) {
      score = 100; reason = 'Точна назва';
    } else if (titleUk.startsWith(q) || titleEs.startsWith(q) || titleEn.startsWith(q)) {
      score = 88; reason = topic.titleEs;
    } else if (aliases.some((alias) => alias === q || alias.startsWith(q))) {
      score = 84; reason = 'Ключове слово';
    } else if (titleUk.includes(q) || titleEs.includes(q) || titleEn.includes(q)) {
      score = 76; reason = topic.titleEs;
    } else if (aliases.some((alias) => alias.includes(q))) {
      score = 64; reason = 'Ключове слово';
    } else if (id.includes(q) || slug.includes(q)) {
      score = 60; reason = topic.titleEs;
    } else if (summary.includes(q)) {
      score = 48; reason = topic.summary;
    } else {
      const blob = [titleUk, titleEs, titleEn, id, slug, summary, ...aliases].join(' ');
      const matched = qTokens.filter((token) => token.length > 1 && blob.includes(token)).length;
      if (matched === 0) continue;
      score = 30 + matched * 8; reason = topic.summary;
    }

    if (topic.popular) score += 2;
    hits.push({ topic, score, reason });
  }

  hits.sort((a, b) => b.score - a.score || a.topic.titleUk.localeCompare(b.topic.titleUk, 'uk'));
  return hits.slice(0, limit);
}
