# Content guide

Where each piece of site content lives, and what needs real details before the link goes to property managers.

## Before sharing the site

| Item | Where | Current state |
|---|---|---|
| Contact email | `NEXT_PUBLIC_CONTACT_EMAIL` (Vercel env / GitHub secret `CONTACT_EMAIL`) | Unset: email card hidden, form opens a blank mail draft |
| Phone | `NEXT_PUBLIC_CONTACT_PHONE` (GitHub secret `CONTACT_PHONE`) | Unset: header call button and phone card hidden |
| Form endpoint | `NEXT_PUBLIC_FORM_ENDPOINT` (GitHub secret `FORM_ENDPOINT`) | Unset: form falls back to mailto |
| Insurance / WorkSafeBC status | `complianceInPlace` in `lib/site.ts` | `false`: copy says "being finalized for January 2027 starts" |
| Lead partner bio | `leadPartner` in `lib/site.ts` | `null`: "Who you'll work with" block hidden |
| Credentials (BCLNA, Red Seal, etc.) | `credentials` in `lib/site.ts` | Empty: badges hidden |

Nothing on the site falls back to a placeholder. If a value is missing, that element is hidden.

### `lib/site.ts` example once details are real

```ts
export const leadPartner = {
  name: "Firstname Lastname",
  role: "Lead partner, on site",
  bio: "Maintained commercial and strata grounds in <city> for <n> years before co-founding Happy Bee.",
  photo: "/partner.jpg", // put the file in /public
};

export const credentials = ["BCLNA member", "WorkSafeBC registered"];

export const complianceInPlace = true;
```

Only state experience and credentials that a property manager could verify.

## Promises the copy makes (confirm these match how you operate)

- **Photo log after every visit** (hero, Why Us, Services)
- **Same crew each visit** (hero)
- **Owner-run:** one partner on site, the other the single contact for scheduling, reports and invoices (Why Us)
- **Written annual package**, with out-of-scope work approved in writing first (FAQ)
- **Termination clause with a notice period** written into the scope (FAQ)
- **Snow priced separately** (Services, FAQ)
- **Limited number of Vancouver sites for January 2027 starts** (property manager section)
- **Vendor package contents:** insurance certificate naming the strata, WorkSafeBC letter, sample scope, sample visit report (property manager section). Have these documents ready to attach when requests arrive.

If any of these stops being true, edit the copy rather than leaving the promise up.

## Where the copy lives

| Section | File |
|---|---|
| Sticky header (logo, nav, call and vendor-package buttons) | `components/Header.tsx` |
| Hero, 2027 timing line, proof points | `components/Hero.tsx` |
| Who we serve | `components/WhoWeServe.tsx` |
| Services | `components/Services.tsx` |
| Why us, lead partner, credentials | `components/WhyUs.tsx` |
| Property manager onboarding steps and vendor package | `components/ForPropertyManagers.tsx` |
| Service area | `components/ServiceArea.tsx` |
| FAQ | `components/FAQ.tsx` |
| Contact form and "what happens next" | `components/Contact.tsx` |
| Footer | `components/Footer.tsx` |
| Page title, description, Open Graph | `app/layout.tsx` |
| Logo mark / favicon | `components/Logo.tsx`, `app/icon.svg` |

## Voice

Write for a property manager deciding whether you're a safe vendor to put in front of their council.

- Specific and checkable ("strata named as additional insured") beats adjectives ("fully insured").
- No invented testimonials, client logos, awards, review counts or years in Vancouver.
- No residential-yard language.
- Keep internal business-plan language (cash flow, route density, cluster strategy) off the site. Translate it into customer benefit.
- Scarcity and deadlines must be real (the 2027 budget cycle is; a countdown timer isn't).

## Worth adding when available

- Real photos of your truck, crew and equipment (not stock).
- A downloadable one-page capability PDF property managers can forward to council.
- A sample visit report image or PDF linked from the vendor package section.
- Testimonials from real clients, with permission, once you have them.
