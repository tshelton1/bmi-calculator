# Living Healthier — BMI Calculator Suite

Four calculators: BMI, BMR, Calorie Needs (TDEE), Body Fat %.
Built for deployment at `livinghealthier.net`.

## Local setup

```bash
npm install
npm run dev
```

Visit http://localhost:3000

## Before deploying

1. **Affiliate links**: `src/components/AffiliateSlot.tsx` has 4 placeholder
   units (one per calculator) with `href: "#"`. Replace each with your real
   affiliate link once programs are approved.
2. **Contact email**:    `src/app/contact/page.tsx` references `support@livinghealthier.net`
   — update if you're using a different address.
3. **Google Analytics**: not wired up yet. Add your GA4 measurement ID via
   a script in `src/app/layout.tsx` (same pattern as MortgageIQ) or via the
   `@next/third-parties` package.
4. **AdSense**: once you have an ad client ID, add the AdSense script tag
   to `src/app/layout.tsx` and replace/supplement the AffiliateSlot units
   with actual `<ins class="adsbygoogle">` ad units.

## Deploying

```bash
npx vercel --prod
```

Then in the Vercel dashboard for this project:
Settings → Domains → Add `livinghealthier.net`
(DNS CNAME record already configured in GoHighLevel, pointing to
`cname.vercel-dns.com` — Vercel should auto-verify.)

## Project structure

- `src/lib/calculations.ts` — all formulas (BMI, BMR, TDEE, body fat) in one
  place, no duplication across calculators.
- `src/components/MeasurementStrip.tsx` — the shared "signature" visual: a
  range bar showing where a result falls among category labels. Used by
  BMI and Body Fat pages.
- `src/components/tools/` — the four interactive client-side calculator
  components.
- `src/app/*/page.tsx` — each calculator's standalone page, with its own
  metadata, SEO content, and affiliate slot.
- `src/components/AffiliateSlot.tsx` — single source of truth for affiliate
  unit copy/links per placement.
