Place your WOFF2 font files in this folder to self-host fonts for the site.

Recommended filenames (used by the CSS in src/fonts.css):

- InterTight-Regular.woff2
- InterTight-600.woff2
- InterTight-800.woff2

How to get them:
- On Google Fonts, select the family, choose "Download family", then convert TTF/OTF to WOFF2 using a trusted tool (e.g., FontTools, Transfonter, or an online converter).

Why self-host:
- Better control over caching and privacy
- Avoid third-party requests and potential render-blocking
- Use `preload` and `font-display: swap` for best loading UX

After placing the files, run the dev server or build. The project already includes preload tags in index.html to prioritize the critical font files.
