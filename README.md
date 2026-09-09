# canercakal.dev

My personal site — projects, writing, and a short professional profile.
Live at **[canercakal.dev](https://canercakal.dev)**.

The content is in Turkish. This README is in English so the technical side is readable
without it.

---

## What it is

A static site built with [Astro](https://astro.build), written in strict TypeScript,
deployed to Cloudflare Workers. Four surfaces:

| Page        | What it does                                                             |
| ----------- | ------------------------------------------------------------------------ |
| `/`         | Intro, a draggable ID badge, current focus, work experience, tech marquee |
| `/projects` | Seven case studies, filtered by domain (iOS, Web, ML, Game)              |
| `/writing`  | Medium articles, pulled from the RSS feed at build time                  |
| `/about`    | Background, community timeline, contact                                  |

---

## Stack

- **Astro 7** — routing, content collections, static output
- **TypeScript** — `astro/tsconfigs/strict`, no `any` in the data layer
- **MDX** — project case studies live as content files, not hardcoded markup
- **Plain CSS** — no framework, no utility classes; design tokens + component-scoped styles
- **Cloudflare Workers** — deploy target via `@astrojs/cloudflare` and Wrangler
- **fast-xml-parser** — Medium RSS parsing
- **simple-icons** — brand marks for the tech marquee, inlined as SVG at build time
- **Fontsource** — Inter Variable and JetBrains Mono Variable, self-hosted

No React, Vue, or Svelte. No client-side router. No analytics scripts.

---

## How it's put together

### Everything resolves at build time

The site ships as static HTML. GitHub star counts, repository languages, and Medium
articles are fetched during the build and baked into the output — there are no runtime
API calls from the browser.

The trade-off: data goes stale between deploys. That's handled by a scheduled rebuild
(see below) rather than by moving the fetches client-side, because a portfolio doesn't
need live numbers and every removed request is one less thing that can fail in front of
a visitor.

Both data sources fail quietly. If the GitHub API rate-limits or the Medium feed is
unreachable, the fetch returns `null` / `[]` and the page renders without that section
instead of breaking the build.

### Content collections with a typed schema

Project pages aren't written as markup. Each one is an MDX file under
`src/content/projects/` with frontmatter validated by Zod:

```ts
schema: ({ image }) => z.object({
  title: z.string(),
  repo: z.string(),
  summary: z.string(),
  tags: z.array(z.string()).default([]),
  domain: z.enum(['ios', 'web', 'ml', 'game']),
  preview: image().optional(),
  order: z.number().default(99),
})
```

Adding a project means adding a file. A typo in `domain` fails the build rather than
rendering an empty filter chip. `image()` routes preview screenshots through Astro's
asset pipeline, so they get hashed filenames and generated dimensions.

### The GitHub data layer

`src/lib/github.ts` reads a fine-grained token from **both** `import.meta.env` and
`process.env` — Cloudflare's build environment exposes variables through `process.env`
while local `.env` files land in `import.meta.env`, and the same module runs in both.

Requests send a `User-Agent` header (GitHub returns 403 without one) and pin
`X-GitHub-Api-Version`. If the token is rejected with a 401, the request retries
unauthenticated: a lower rate limit is better than a site with no star counts.

### Interaction without a framework

The interactive parts are vanilla scripts inside `.astro` components:

- **ID badge** — pointer-driven pendulum physics with a spring-damped cord, running on
  `requestAnimationFrame`
- **Timeline** — scroll-driven progress rail on the about page
- **Tech marquee** — continuous transform loop, paused off-screen
- **Cursor lens** — a soft light that lerps toward the pointer, only on `pointer: fine`
  devices
- **Beams** — animated background gradient layer

Every one of them checks `prefers-reduced-motion: reduce` and either stops animating or
falls back to a static state. `IntersectionObserver` gates the loops so nothing runs
while it's out of view.

---

## Design system

`src/styles/global.css` is 186 lines and holds only tokens, a reset, and base type.
Everything else is component-scoped — Astro scopes styles per component by default, so
there's no cascade to fight and no naming convention to maintain.

```css
--accent:   #6d28d9;  /* violet-700 */
--accent-2: #2563eb;  /* blue-600   */
--accent-3: #0369a1;  /* sky-700    */
```

An analogous violet→blue arc rather than complementary colors — it reads as one hue
shifting instead of three colors competing. Headings are set in JetBrains Mono, body in
Inter. Colors, spacing, radii, easing curves, widths, and z-index layers all go through
tokens; no raw hex values in components.

**Light only.** The first version of this site was a dark theme with aurora gradients and
a 3D carousel. It looked like every other developer portfolio. The v2 rewrite went light,
dropped the carousel for a flat grid, and put the personality into the badge and the
motion instead of the palette. Dark mode isn't planned — supporting both would mean
every decision gets made twice, and one well-tuned theme beats two adequate ones.

---

## Deployment

Pushing to `main` triggers a Cloudflare build. `wrangler.jsonc` is committed to the repo
so the Worker config isn't only in the dashboard.

Two things worth writing down:

**`imageService: 'compile'` is required.** The Cloudflare adapter defaults to a runtime
image service, which broke images in production. Compiling images at build time removes
the runtime dependency entirely. The adapter is installed explicitly rather than
auto-installed during the build, because auto-install overwrites this setting.

**`package-lock.json` needs Linux optional dependencies.** Running `npm install` on macOS
omits Sharp's `@emnapi` platform packages, and `npm ci` then fails on Cloudflare's Linux
builders. A `pre-push` git hook catches it locally.

A GitHub Action (`.github/workflows/weekly-rebuild.yml`) hits a Cloudflare deploy hook
every Monday at 06:00 UTC, so star counts and new articles refresh without a commit.

---

## Structure

```
src/
├─ components/     Beams, DockNav, Events, Hero, TechStack, Timeline, Work
├─ content/
│  └─ projects/    seven .mdx case studies
├─ data/           community roles, events, social links
├─ layouts/
│  └─ BaseLayout   header, dock, meta tags, cursor lens, background
├─ lib/
│  ├─ github.ts    repo stats, token fallback
│  ├─ medium.ts    RSS parsing
│  └─ domains.ts   domain label map
├─ pages/          index, projects/[id], writing, about, 404
└─ styles/
   └─ global.css   tokens, reset, base type
```

---

## Performance and accessibility

Lighthouse on the production build: Performance 99, Accessibility 100, Best Practices 100.
No render-blocking JavaScript, fonts self-hosted and preloaded, images sized at build time.

Skip link, focus states, semantic landmarks, and reduced-motion support across every
animation.

---

## Notes

- SEO handled with `@astrojs/sitemap`, canonical URLs, OG tags, and `robots.txt`
- `REDESIGN.md` documents the v1 → v2 rewrite
- The code is here to read. The writing and images are mine.
