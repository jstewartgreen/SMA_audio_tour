# San Miguel de Allende Audio Tour

A mobile-friendly website with a landing page and an interactive map of San Miguel de Allende, Mexico. Visitors tap a location pin to hear a brief audio description of that site, in English or Spanish.

## How to view the site locally

Double-click `index.html` to open it in your browser.

> **Note:** Some browsers (Chrome in particular) block local file loading when you open a file directly from your desktop. If the map loads but pins don't appear, use one of these instead:
> - **VS Code**: Install the [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) extension, right-click `index.html` → "Open with Live Server"
> - **Terminal**: Run `python3 -m http.server` in this folder, then visit `http://localhost:8000`

## How to add a new stop

1. **Edit `stops.js`** — copy an existing stop object and fill in:
   - `id` — a unique short name with no spaces (e.g., `"mercado"`)
   - `name_en` / `name_es` — the site name in each language
   - `description_en` / `description_es` — 2–4 sentence description
   - `lat` / `lng` — GPS coordinates (find these on Google Maps by right-clicking a location)
   - `audio_en` / `audio_es` — file paths to your audio files (see step 2)
   - `image` — file path to a photo (see step 3)

2. **Add audio files** to the `audio/` folder. Name them to match what you put in `stops.js` (e.g., `audio/mercado_en.mp3`). Accepted formats: `.mp3` (recommended), `.m4a`, `.ogg`.

3. **Add a photo** (optional) to the `images/` folder. JPEG format works best. Aim for roughly 800×500 pixels. Name it to match `stops.js` (e.g., `images/mercado.jpg`).

4. Reload the browser — the new stop will appear on the map automatically.

## File structure

```
index.html      Landing page — intro, stop previews, "Start Tour" button
map.html        Interactive map page
style.css       Visual design (colors, fonts, layout)
app.js          Map and audio player logic
landing.js      Landing page logic
stops.js        ← Edit this to add/remove/update stops
audio/          Audio files go here
images/         Photos go here
```

## Hosting (free)

1. Push this repository to GitHub.
2. In the repository settings on GitHub, go to **Pages** → set the source to the `main` branch → click Save.
3. GitHub will give you a free public URL (e.g., `https://yourusername.github.io/SMA_audio_tour`).

To use a custom domain (e.g., `smaaudiotour.com`), register one at [Namecheap](https://www.namecheap.com) (~$12/year) and follow GitHub's [custom domain instructions](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site).
