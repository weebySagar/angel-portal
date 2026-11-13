# Ascencia Malta — static UI

A three-page React site for the Ascencia Malta frontend assignment: Home, About, and Contact. This branch is the waterline design: the school name is cut by a red band. The other looks are on `design/rising-mark` and `design/editorial`. Colours come from the school logo (ink `#191913`, red `#cd0732`). Wording and photographs are taken from the existing Ascencia Malta site.

The live site was returning Cloudflare error 522 while this was built, so the pages were read from the Internet Archive.

## Pages

- `/` Home
- `/about` About
- `/contact` Contact

The contact form checks the fields in the browser and then shows a confirmation. It does not send email. There is no backend.

## Setup

Requires Node.js 20 or newer.

```bash
npm install
npm run dev
```

Open the URL Vite prints, usually http://localhost:5173.

```bash
npm run build
npm run preview
```

`npm run build` writes the static site to `dist/`.
