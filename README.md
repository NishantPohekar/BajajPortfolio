# Bajaj Auto — motorcycles and heritage

A beginner-friendly, single-page website made with HTML, CSS, vanilla JavaScript and Bootstrap 5.3.3. No build step, package manager, animation library, account or API key is needed.

## Run the website

1. Extract the ZIP first. Do not open HTML from inside the ZIP preview.
2. Open the `bajaj-portfolio` folder.
3. Double-click `index.html` to open it in a modern browser.
4. Scroll down slowly through the hero, then scroll up to reverse the sequence.

Bootstrap, the logo, motorcycle pictures and all 120 frames are included locally. The website works offline; the official Bajaj links need internet access.

Optional: use VS Code Live Server. Alternatively, if Python is installed, open a terminal inside this folder, run `python3 -m http.server 8000`, and visit http://localhost:8000. On Windows, `py -m http.server 8000` may be the appropriate command. Stop the server with Ctrl+C.

## Files and their jobs

- `index.html`: the content, navigation, hero image, six bike cards, About section and Contact form.
- `style.css`: colours, typography, sticky hero, responsive spacing, hover effects and reduced-motion rules.
- `script.js`: scroll-to-frame calculation, image loading, mobile menu closing and demo form feedback.
- `assets/frames/frame-001.jpg` through `frame-120.jpg`: the video sequence.
- `assets/images/`: locally saved Bajaj logo and six optimised WebP images.
- `assets/vendor/`: Bootstrap CSS and its bundled JavaScript. These are third-party files; you do not need to explain their internal code.
- `assets/image-sources.json`: exact official image source URLs.
- `TESTING.md`: checks completed and limitations.

## How to explain the HTML to a trainer

"I divided the page into sections with IDs: home, bikes, about and contact. Navigation links point to those IDs. I used semantic elements such as nav, main, section, article and footer. Each bike has a Bootstrap card."

Bootstrap uses a 12-column layout. `row` groups the cards; `col-md-6` uses half the row from 768px, and `col-lg-4` uses one third from 992px. Therefore there is one card per row on phones, two on medium screens and three on large screens. `g-4` adds gaps. `h-100` makes cards in a row equal in height. `navbar-expand-md` shows a collapsed menu below 768px. Its button uses `data-bs-toggle="collapse"` and `data-bs-target="#navigation"` to control the matching element.

The form has real labels, required fields and an email input. The browser checks missing values and email format. This is a demo, so there is no backend, no email delivery and no storage.

## How to explain the CSS

"I put shared colours in variables inside :root. I use classes to style groups of elements. The hero section is tall, while its inner scene uses position: sticky and top: 0. That keeps the picture on screen as the outer section scrolls."

- `object-fit: cover` fills the hero, cropping its edges when necessary.
- `object-fit: contain` shows the complete bike image inside a card.
- A transparent gradient makes white hero text readable.
- `:hover` lifts a card using `translateY` and enlarges its image using `scale`.
- `transition` makes those changes gradual.
- The phone media query changes spacing and text size.
- The reduced-motion media query removes motion and shortens the hero.
- Focus outlines and a keyboard skip link improve accessibility.

## How the scroll animation works

The supplied video is 10 seconds long at 24 frames per second, with 240 original frames. The package contains 120 evenly sampled frames, including the first and last, at 960 × 540 pixels. JPEG quality is 78. This is approximately 12 frames per source second. The MP4 is not required at runtime and is omitted to keep the download smaller. The supplied AI-generated clip changes from a scooter to a motorcycle; the site preserves that footage.

1. `framePath(1)` creates `assets/frames/frame-001.jpg` using `padStart`.
2. `preloadFrame` loads the images sequentially in the background.
3. A scroll event asks `requestAnimationFrame` to update the scene before the next screen refresh.
4. The scrollable hero distance equals its height minus the window height.
5. `getBoundingClientRect().top` tells us where the section is relative to the screen. Its negative value is the distance travelled through the section.
6. Divide travelled distance by available distance to get progress.
7. `Math.max` and `Math.min` keep progress between 0 and 1.
8. Multiply progress by 119 and round it to get an array index from 0 to 119.
9. Swap the image only when it has loaded. If it is not ready, retain the previous image to avoid blank flashes.
10. Update the progress line and frame label. Scrolling upward naturally selects earlier frames.

Example: at 50% progress, `Math.round(0.5 * 119)` is 60, so the chosen image is frame 61 (arrays start at zero, filenames start at one).

Loading is deliberately simple. A very fast scroll on a slow connection may temporarily show an older frame while the requested image loads. Reduced-motion users see a still image. Without JavaScript, the first image and all page content remain available.

## Form and menu JavaScript

`addEventListener` attaches a function to an event. `preventDefault()` stops the form from reloading the page. `textContent` displays a safe plain-text demo confirmation. No form data is transmitted. Bootstrap's `Collapse` component closes the phone menu after a navigation link is chosen.

## Suggested trainer demonstration

1. Show the three source files and their comments.
2. Open the website and scroll down and back up through the film.
3. Point out the changing frame number.
4. Hover over a motorcycle card.
5. Resize the browser to demonstrate three, two and one column layouts.
6. Open and close the phone navigation.
7. Submit an empty form to demonstrate required-field validation, then enter sample details to show the demo response.
8. Explain the progress-to-frame calculation above.

## Easy changes

Change headings or card descriptions directly in `index.html`. Change the colour variables at the top of `style.css`. Change `.hero-scroll` height to adjust the scrolling distance. To replace the film, export the same 120 filenames or update `frameCount` and the displayed total in the HTML and JavaScript together. Never remove the assets folder when sharing the project.

## Credits

Independent showcase, not an official Bajaj Auto website. Bajaj names, logo and imagery belong to their respective owners. Bike descriptions are qualitative; no prices or numerical specifications are claimed. Some images are family-level illustrations and may show a different variant. Verify current details on https://www.bajajauto.com/bikes. Image URLs are recorded in `assets/image-sources.json`. Hero frames come from the user-supplied `gemini_generated_video_2a78b537.mp4`.

Bootstrap 5.3.3 is distributed under the MIT license: https://github.com/twbs/bootstrap/blob/v5.3.3/LICENSE. Copyright 2011–2024 The Bootstrap Authors. The bundled CSS and JS retain their license notices. No custom project dependency installation is required.


## Company story and leadership

The second hero button links to #history. It uses the same simple anchor navigation as the other sections. The history section contains static Bootstrap cards, local portraits, an ordered-list timeline and three company branches. No extra JavaScript or library is needed. The roles and source links were checked on 16 November 2026; update these if leadership changes. The overview covers the three 2008 demerger companies plus Finance and Housing Finance, with context about the wider group. Portrait URLs are recorded in assets/image-sources.json. The website uses motorcycles and heritage branding.


## Alternating foundation path

The four foundation profiles are an ordered list with class `foundation-path`. CSS `::before` draws the central vertical line. Each list item draws its short connector and round dot using `::before` and `::after`. The selector `:nth-child(even)` moves the second and fourth cards to the right. A media query puts all cards to the right of a single left-side path on phones.

The JavaScript function `revealFoundationCards()` checks each card’s position with `getBoundingClientRect().top`. When it reaches the visible screen, the function adds `is-visible`. A CSS transition changes opacity from 0 to 1 and moves the card upward by 25px. Each card reveals once. Without JavaScript, cards remain visible; reduced-motion preferences disable the effect. No extra library is used.


## Hover styling across the website

The final CSS section adds shared hover feedback to the navigation, buttons, bike and portrait cards, foundation dots, company branches, history rows, links and form fields. `transition` softens a change; `:hover` selects the element under the pointer. `@media (hover: hover) and (pointer: fine)` applies the new motion effects to mouse-like pointers. Focus outlines remain available for keyboard users, and the reduced-motion query removes hover movement. No JavaScript is needed for these effects.
