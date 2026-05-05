# Alejandro Zarraga Flores PM Portfolio

A bilingual EN/ES one-page Product Manager portfolio built with React, Vite and Tailwind CSS.

## Includes

- Dark premium AI-inspired UI
- EN / ES language toggle
- Case study cards with modals
- Company and product links
- AI-enabled PM workflow section
- Product artifacts section
- Experience timeline
- Contact section with Gmail compose link
- Downloadable CV
- Profile photo asset

## Project structure

```text
alejandro-pm-portfolio/
├── public/
│   ├── Alejandro_Zarraga_Flores_CV.pdf
│   ├── profile.webp
│   └── favicon.svg
├── src/
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── index.html
├── package.json
├── postcss.config.js
├── tailwind.config.js
└── vite.config.js
```

## Run locally

```bash
npm install
npm run dev
```

Then open the local URL shown in terminal, usually:

```text
http://localhost:5173
```

## Build for production

```bash
npm run build
```

## Deploy to Vercel

1. Create a GitHub repository.
2. Upload this project folder to the repository.
3. Go to Vercel and choose **Add New Project**.
4. Import the GitHub repository.
5. Framework preset: **Vite**.
6. Build command: `npm run build`.
7. Output directory: `dist`.
8. Deploy.

## Update CV

Replace this file:

```text
public/Alejandro_Zarraga_Flores_CV.pdf
```

Keep the same filename so the download button continues working.

## Update profile photo

Replace this file:

```text
public/profile.webp
```

Keep the same filename so the site continues working.

## Update content

Most portfolio copy lives in:

```text
src/App.jsx
```

Update the `data` object for English and Spanish content.
