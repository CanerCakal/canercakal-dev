export interface RepoData {
  stars: number;
  language: string | null;
  pushedAt: string;
  url: string;
}

export async function fetchRepo(repo: string): Promise<RepoData | null> {
  try {
    const headers: Record<string, string> = {
      Accept: 'application/vnd.github+json',
    };
    if (import.meta.env.GITHUB_TOKEN) {
      headers.Authorization = `Bearer ${import.meta.env.GITHUB_TOKEN}`;
    }
    const res = await fetch(`https://api.github.com/repos/${repo}`, { headers });
    if (!res.ok) return null;
    const data = await res.json();
    return {
      stars: data.stargazers_count,
      language: data.language,
      pushedAt: data.pushed_at,
      url: data.html_url,
    };
  } catch {
    return null;
  }
}