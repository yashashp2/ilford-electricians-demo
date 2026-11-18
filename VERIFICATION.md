# Verification — 18 November 2026

- Production build: passed (Next.js 16.4.6); homepage and robots.txt prerendered.
- TypeScript check: passed.
- Dependency audit: install audit and production audit reported zero vulnerabilities.
- Browser checks: nine applicable scenarios passed across desktop Chrome and mobile Chromium emulation. The width-matrix scenario runs once, on the desktop project; its duplicate mobile entry is intentionally skipped.
- Widths covered: 320, 390, 768, 1024 and 1440 CSS pixels. No horizontal document overflow.
- Hero/supporting images loaded; no page JavaScript errors observed.
- Telephone and email link destinations checked without initiating calls or sending mail.
- Desktop section navigation, mobile menu, Escape dismissal and keyboard FAQ expansion passed.
- Invalid form submission flagged six fields and focused the first error.
- Valid sample entries showed the explicit no-send confirmation and were cleared.
- No form submission requests, localStorage entries, sessionStorage entries or cookies were observed.
- Without JavaScript, inputs and the submit button remained disabled and the fallback explanation was visible.
- Desktop and mobile screenshots visually reviewed.

GitHub Pages preparation: static export and TypeScript checks passed. All nine applicable browser scenarios also passed against the exported site at `/ilford-electricians-demo/`, including asset loading and no-send form behaviour. One duplicate mobile width-matrix test is intentionally skipped. The deployment workflow builds and publishes `out/` on pushes to `main`.

Limits: mobile tests use Chromium emulation, not a physical iPhone or Safari. No live enquiry was sent. Automated checks and visual review are not a formal accessibility certification.
