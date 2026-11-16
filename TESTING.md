# Verification

Completed checks:

- Original video opened successfully: 240 frames, 24 FPS, 10 seconds.
- Exactly 120 JPEG frames exported at 960 × 540; first and last included.
- JavaScript syntax checked with Node.
- Website served successfully through a local HTTP preview.
- Desktop preview checked at a requested 1440 × 900 viewport.
- Phone layout checked using a requested 390 × 844 viewport override (the in-app browser reported a 538px CSS viewport).
- Scroll sequence advanced to frame 120 and reversed to frame 1; an intermediate frame was observed.
- All six cards present; card layout and images visually inspected in the preview.
- Phone menu expanded and collapsed after choosing Motorcycles.
- Contact form with sample values displayed its no-send confirmation.
- A phone horizontal overflow caused by large Bootstrap gutters was found, fixed, and rechecked: document width equalled viewport width.
- No browser console errors observed during interaction checks.
- Local references, image decoding and ZIP integrity checked after packaging.

Limitations: browser interaction testing used the in-app browser, not a physical phone or every browser. Reduced-motion and no-JavaScript fallbacks were reviewed in the source, not tested with browser settings. Offline opening is supported by local relative assets; browser interaction tests used HTTP. External product pages may change. Contact is a front-end demo and does not deliver messages.


## History update — 16 November 2026

- Removed the former training-project wording from the visible page.
- Verified the new hero button navigates to #history.
- Confirmed four historical profiles and seven current leadership profiles.
- Downloaded all portraits locally and verified their image files.
- Checked the history section visually on desktop.
- Checked the hero at a 390px CSS viewport: both buttons fit and are vertically stacked; no horizontal overflow.
- Checked local file references and ZIP integrity again.
- Leadership details include links to official sources and a verification date.


## Foundation path update

- Verified four profiles alternate left/right on desktop, with visible connecting lines and dots.
- Observed the first two cards gain `is-visible` as they enter the screen, while later cards remain pending.
- Checked the 390px phone layout: all four cards share the same left edge, with no horizontal overflow.
- JavaScript syntax and refreshed ZIP integrity passed.


## Shared hover update

Added CSS feedback across navigation, buttons, portrait cards, company branches, timeline rows, links and inputs. Browser check confirmed an active portrait hover, blue border, card shadow and no horizontal overflow. New pointer motion is limited to hover-capable devices; reduced-motion overrides were reviewed in CSS. ZIP integrity passed.
