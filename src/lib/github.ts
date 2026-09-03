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
      'User-Agent': 'canercakal-dev-site',
      'X-GitHub-Api-Version': '2022-11-28',
    };
    if (TOKEN) headers.Authorization = `Bearer ${TOKEN}`;

    const res = await fetch(`https://api.github.com/repos/${repo}`, { headers });

    if (!res.ok) {
      const body = await res.text().catch(() => '');
      console.warn(
        `[github] ${repo} → ${res.status} | kalan: ${res.headers.get('x-ratelimit-remaining')} | ${body.slice(0, 160)}`
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

export interface ProfileData {
  publicRepos: number;
  totalStars: number;
  topLanguage: string | null;
}

export async function fetchProfile(
  username: string,
  repos: string[],
): Promise<ProfileData | null> {
  try {
    const headers: Record<string, string> = {
      Accept: 'application/vnd.github+json',
      'User-Agent': 'canercakal-dev-site',
      'X-GitHub-Api-Version': '2022-11-28',
    };
    if (TOKEN) headers.Authorization = `Bearer ${TOKEN}`;

    const res = await fetch(`https://api.github.com/users/${username}`, { headers });
    if (!res.ok) {
      console.warn(`[github] profil ${username} → ${res.status}`);
      return null;
    }
    const user = await res.json();

    const results = await Promise.all(repos.map((r) => fetchRepo(r)));
    const ok = results.filter((r): r is RepoData => r !== null);

    const totalStars = ok.reduce((sum, r) => sum + r.stars, 0);

    const counts = new Map<string, number>();
    for (const r of ok) {
      if (r.language) counts.set(r.language, (counts.get(r.language) ?? 0) + 1);
    }
    const topLanguage =
      [...counts.entries()].sort((a, b) => b[1] - a[1])[0]?.[0] ?? null;

    return {
      publicRepos: user.public_repos,
      totalStars,
      topLanguage,
    };
  } catch (err) {
    console.warn('[github] profil isteği başarısız', err);
    return null;
  }
}