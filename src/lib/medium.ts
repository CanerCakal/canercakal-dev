import { XMLParser } from 'fast-xml-parser';

export interface Article {
  title: string;
  url: string;
  date: Date;
  tags: string[];
  excerpt: string;
}

const FEED_URL = 'https://medium.com/feed/@canercakalofficial';

function stripHtml(html: string): string {
  return html
    .replace(/<[^>]*>/g, ' ')
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/\s+/g, ' ')
    .trim();
}

export async function fetchArticles(): Promise<Article[]> {
  try {
    const res = await fetch(FEED_URL);
    if (!res.ok) return [];
    const xml = await res.text();

    const parser = new XMLParser();
    const feed = parser.parse(xml);
    const items = feed?.rss?.channel?.item ?? [];
    const list = Array.isArray(items) ? items : [items];

    return list.map((item: any) => {
      const rawTags = item.category ?? [];
      const tags = Array.isArray(rawTags) ? rawTags : [rawTags];
      const content = item['content:encoded'] ?? item.description ?? '';
      const text = stripHtml(String(content));

      return {
        title: String(item.title ?? ''),
        url: String(item.link ?? '').split('?')[0], // tracking parametrelerini at
        date: new Date(item.pubDate),
        tags: tags.map(String).slice(0, 3),
        excerpt: text.length > 180 ? text.slice(0, 180).trimEnd() + '…' : text,
      };
    });
  } catch {
    return []; // Medium erişilemezse site yine de build olur
  }
}