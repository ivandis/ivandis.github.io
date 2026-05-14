# Ivandis Website

A clean, responsive single-page site for Ivandis Enterprises Pvt Ltd.

## Files

```
ivandis/
├── index.html             ← the page
├── styles.css             ← the look
├── script.js              ← interactions (nav, scroll-to-top, animations)
└── images/
    ├── logo.png           ← logo with Pure Excellence / Deep Care
    ├── favicon.png        ← browser tab icon
    └── photos/            ← service photos and hero
```

## Deploy to GitHub Pages

1. **Back up your current site.** In your repo, download a ZIP of what's there.
2. **Upload these files.** On github.com → your repo → Add file → Upload files → drag everything inside `ivandis/`.
3. **Commit.** Add a message like "New website design" → Commit changes.
4. **Wait a minute.** GitHub Pages rebuilds; refresh ivandis.com.

**Important:** after deploying, do a hard refresh in your browser (Cmd+Shift+R on Mac, Ctrl+Shift+R on Windows) so cached old files are replaced.

## Customising text

All wording is in `index.html`. Open in any text editor.

- Phone/email/address appear in 3 places: hero badges, contact channel cards, footer.
- The WhatsApp link is pre-filled with "Hi Ivandis, I'd like a quote for..." — your visitors can edit before sending.

## Customising images

To swap a service photo, replace the file in `images/photos/` keeping the same filename.
