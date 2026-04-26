# SiteBuild Jekyll Gallery

This repository is now a Jekyll-based static website designed for GitHub Pages.

## Run locally
1. Install Ruby dependencies:
   ```bash
   bundle install
   ```
2. Start the local Jekyll server:
   ```bash
   bundle exec jekyll serve
   ```
3. Open `http://localhost:4000/sitebuild/` in your browser.

## Build for GitHub Pages
```bash
bundle exec jekyll build
```

The generated site is output to the `_site` folder.

## Notes
- `baseurl` is set to `/sitebuild` in `_config.yml`, which is suitable for GitHub Pages project sites.
- To publish to a repository site with a different path, update `baseurl` accordingly.
# Next.js Static Gallery (GitHub Pages Compatible)

This repository is configured for GitHub Pages deployment using a fully static Next.js export.

## Available pages
- `/` — Home page
- `/gallery` — Gallery listing page
- `/gallery/[slug]` — Individual static gallery item pages

## GitHub Pages deployment
1. Install dependencies:
   ```bash
   npm install
   ```
2. Build and export the site:
   ```bash
   npm run deploy
   ```
3. In your repository settings, set GitHub Pages source to `docs/` on the `main` branch.

## Notes
- The static output is generated into the `docs/` folder.
- `public/.nojekyll` is included so GitHub Pages serves the exported files correctly.
- Links are written using relative routes so the site works on GitHub Pages project sites.

## Run locally
1. Install dependencies:
   ```bash
   npm install
   ```
2. Start the development server:
   ```bash
   npm run dev
   ```
3. Open `http://localhost:3000` in your browser.

## Build locally
```bash
npm run build
```

## Export static site
```bash
npm run export
```

## Deploy locally to GitHub Pages
```bash
npm run deploy
```
