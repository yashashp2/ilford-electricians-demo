# Ilford Electricians — independent redesign demo

A complete responsive homepage built with Next.js App Router, TypeScript, Tailwind CSS 4, Manrope and Lucide. This is an unauthorised speculative concept, not the official business website.

Source repository: https://github.com/yashashp2/ilford-electricians-demo

GitHub Pages URL: https://yashashp2.github.io/ilford-electricians-demo/

## GitHub Pages hosting

`.github/workflows/deploy-pages.yml` builds and deploys every push to `main`. Repository Settings → Pages must use **GitHub Actions** as the source. The workflow can also be run manually from the Actions tab.

The Pages build uses a static export, the `/ilford-electricians-demo` base path and local image files. Preview that exact build with:

```powershell
npm run build:pages
npm run preview:pages
```

Open http://127.0.0.1:4173/ilford-electricians-demo/. The ordinary Next.js development and server commands below remain available.

Pages has no Next.js image-optimisation server or custom response headers. The export serves the compact local images directly and retains HTML noindex metadata. Its robots.txt is included under the repository subpath; only a domain-root robots.txt governs crawlers. The form remains browser-only and never sends enquiries.

## Run locally

Use Node.js 20.9 or newer (Node 24 recommended).

```powershell
npm ci
npm run dev
```

Open http://127.0.0.1:3000. For the production version:

```powershell
npm run build
npm run start
```

## Deploy the demo on Vercel

1. Push this folder to a GitHub repository, excluding files in `.gitignore`.
2. In Vercel, choose **Add New → Project**, import the repository and select **Next.js**.
3. Keep the default install/build settings (`npm install` / `npm run build`) and default output directory. No environment variables or database are required.
4. Deploy, then check the mobile menu, images, telephone/email links and demo form at the returned preview URL.
5. Retain the independent-concept disclosures, placeholder labels and noindex settings. Do not attach the business's official domain or present this as an authorised site.

Alternatively, from this directory, run `npx vercel` and follow the prompts to create a preview deployment. Vercel is an optional alternative; the requested hosting target is GitHub Pages.

Official deployment reference: https://vercel.com/docs/frameworks/full-stack/nextjs

## Edit the content

- `src/data/site.ts`: business details, navigation, services, image paths and FAQs.
- `src/app/page.tsx`: section structure and editorial copy.
- `src/app/globals.css`: responsive layouts, colour tokens and styling; Tailwind is configured and available throughout.
- `src/components/Header.tsx`: responsive navigation with Escape dismissal.
- `src/components/QuoteForm.tsx`: accessible client validation and demo confirmation.
- `public/images/`: locally served assets. Replace with approved photographs and update image descriptions and labels together.
- `src/app/layout.tsx`, `src/app/robots.ts`, `next.config.ts`: metadata and deliberate noindex safeguards.

## Demo and privacy boundaries

The form has no API route, server action, email service, analytics, database or browser-storage writes. It validates in the browser, clears successful entries and explicitly says no request was sent. Use sample details. Calls and email links open the visitor's own telephone/email app and address the actual business.

The layout includes semantic headings, a skip link, visible keyboard focus, labelled fields, linked error descriptions, a live confirmation, native keyboard-accessible FAQ disclosures and reduced-motion support. It uses responsive Next Image optimisation, a priority hero and lazy-loaded supporting images. Manrope is downloaded at build time and served locally by Next.js; initial builds therefore need internet access.

Search indexing is intentionally discouraged through noindex metadata. Next.js server hosting also supplies robots.txt and the X-Robots-Tag header; see the GitHub Pages limitations above. Do not remove these just to improve SEO for an unauthorised demo. The page still has useful title/description metadata and semantic structure. No business schema, fabricated reviews, credentials, guarantees, pricing or opening hours have been added.

The journey is proposed, not a verified business process. Nearby places are examples requiring confirmation. The area graphic is a decorative placeholder, not a geographic or coverage map. Images do not depict staff or completed projects.

## Verification

```powershell
npm run typecheck
npm run build
npm run test:e2e
```

Browser tests use installed Google Chrome and cover desktop/mobile layout, image loading, internal navigation, FAQ keyboard operation, invalid/valid form states, no submission requests and empty browser storage. If Chrome is unavailable, install it or change `channel` in `playwright.config.ts` to a Playwright-installed Chromium browser. Screenshots are written to `test-results/`.

## Facts and assets

Business source: https://ilford-electricians.co.uk/ — reviewed 18 November 2026. Contact details, general services, domestic/commercial scope and stated experience were checked against that page. Experience is attributed to the existing website, not independently certified. Other credentials appearing there are deliberately not reproduced.

See `ASSETS.md` for image provenance and the hero generation prompt.

Before any authorised production launch: confirm all facts and exact service coverage with the owner; obtain permission for brand use and photographs; define the actual quotation process; add a secure backend, privacy notice, retention rules, spam protection and delivery monitoring; review accessibility; replace the demo-only wording and indexing policy only with authorisation.
