# Redesign v2

Reference: a Lightswind UI-based portfolio template.
We adopted its layout decisions, not its visual style.

Structure: multi-page layout retained. The home page mimics the
reference's single-page flow; /projects, /writing and /about provide
depth. Case study pages (/projects/[id]) stay as they are.

## Not adopted

- Percentage-based skill bars — unmeasurable numbers.
- Testimonials — no clients.
- Contact form — static output preserved; email address is enough.

## Phases

- [x] R1 — Light theme: palette, shadow system, aurora tuning
- [x] R2 — Dock navigation and floating pill header
- [x] R3 — Hero: status pill, CTAs, draggable lanyard badge
- [x] R4 — Tech marquee with brand logos
- [x] R5 — Home body: "Şu sıralar" grid, highlighted work card
- [x] R6 — Timeline: scroll-driven rail, card layout
- [x] R7 — Events grid, social icons in footer
- [x] R8 — Projects: cursor-following preview, light theme cards
- [x] R9 — Writing: numbered reading list
- [x] R10 — About: spec-style contact list
- [ ] R11 — Polish

## R11 checklist

- [ ] theme-color meta still set to the old dark value
- [ ] 404 page not reviewed since the theme switch
- [ ] Remove unused Cloudflare KV session binding
- [ ] Replace the broken GITHUB_TOKEN secret in Cloudflare
- [ ] Safari carousel jank (works fine in Chrome)
- [ ] Check case study line length at 64rem
- [ ] Regenerate og.png and