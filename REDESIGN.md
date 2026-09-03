# Redesign v2

Referans: Lightswind UI tabanlı bir portfolyo şablonu.
Alınan şey layout kararları; estetik aurora dark kalıyor.

Yapı kararı: çok sayfa korunuyor. Ana sayfa tek-sayfa akışını
taklit ediyor, /projects, /writing, /about derinlik veriyor.
Case study sayfaları (/projects/[id]) olduğu gibi kalıyor.

## Alınmayanlar ve nedenleri

- Yüzde bazlı skill barları — ölçülemez sayı. Yerine GitHub dil dağılımı.
- Testimonials — müşteri yok.
- İletişim formu — statik çıktı korunuyor, mail adresi yeterli.
- Light/dark toggle — dark-only bilinçli karar.

## Fazlar

- [ ] R1 — Token'lar, dock nav, header pill
- [ ] R2 — Hero: durum pill'i, CTA, GitHub verisiyle ID kartı
- [ ] R3 — Ana sayfa gövdesi: domain kartları, stat kartları
- [ ] R4 — Timeline: orta çizgili düzen
- [ ] R5 — Eğitim ve topluluk şeridi
- [ ] R6 — Projeler ve yazılar: kart ritmini kır, grid
- [ ] R7 — Hakkımda düzeni
- [ ] R8 — Cila: mobil, reduced-motion, Lighthouse

## Merge notu

Squash merge KULLANMA. Merge commit kullan — commit tarihleri korunmalı.