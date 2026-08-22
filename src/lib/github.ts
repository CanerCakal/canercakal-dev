export interface RepoData {
  stars: number;
  language: string | null;
  pushedAt: string;
  url: string;
}

// Cloudflare build ortamı process.env kullanır; .env dosyaları import.meta.env.
// İkisini de deneyip hangisi doluysa onu kullanıyoruz.
const TOKEN =
  import.meta.env.GITHUB_TOKEN ??
  (globalThis as any).process?.env?.GITHUB_TOKEN ??
  undefined;

export async function fetchRepo(repo: string): Promise<RepoData | null> {
  try {
    const headers: Record<string, string> = {
      Accept: 'application/vnd.github+json',
    };
    if (TOKEN) headers.Authorization = `Bearer ${TOKEN}`;

    const res = await fetch(`https://api.github.com/repos/${repo}`, { headers });

    if (!res.ok) {
      console.warn(
        `[github] ${repo} → ${res.status} ${res.statusText} (token: ${TOKEN ? 'var' : 'yok'})`
      );
      return null;
    }

    const data = await res.json();
    return {
      stars: data.stargazers_count,
      language: data.language,
      pushedAt: data.pushed_at,
      url: data.html_url,
    };
  } catch (err) {
    console.warn(`[github] ${repo} → istek başarısız`, err);
    return null;
  }
}