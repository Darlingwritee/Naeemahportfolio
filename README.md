# Naeemah Kamaldeen — Portfolio

A React + Vite portfolio site for graphic designer and brand strategist Naeemah Kamaldeen.

## Getting started

Install dependencies:

```bash
npm install
```

Run the dev server:

```bash
npm run dev
```

This starts a local server (usually at `http://localhost:5173`) with hot reload.

Build for production:

```bash
npm run build
```

This outputs a static site to the `dist/` folder. Preview the production build locally with:

```bash
npm run preview
```

## Deploying

### GitHub Pages

This repo includes a GitHub Actions workflow at `.github/workflows/deploy.yml` that builds the site and deploys it automatically on every push to `main`.

To enable it:

1. Push this project to a GitHub repository.
2. In the repo, go to **Settings → Pages**, and under "Build and deployment" set **Source** to **GitHub Actions**.
3. Push to `main` (or run the workflow manually from the **Actions** tab). Once it finishes, your site will be live at `https://<your-username>.github.io/<repo-name>/`.

`vite.config.js` is already set with `base: './'`, so the built assets use relative paths and work correctly under a GitHub Pages subpath.

### Netlify

1. Create a new site on [Netlify](https://app.netlify.com/) and connect this repository (or drag-and-drop the `dist/` folder after running `npm run build` for a manual deploy).
2. If connecting the repo, set:
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
3. Deploy — Netlify will build and host the site automatically on every push.

## Project structure

```
src/
  main.jsx              Entry point
  App.jsx                Page layout / section order
  data/content.js         All site copy and content, in one place
  components/             One component per section
  styles/global.css        Global stylesheet (design tokens, layout, responsive rules)
```

Content — headings, paragraphs, case study details, testimonials, links — all lives in `src/data/content.js`, so copy can be edited without touching component code.
