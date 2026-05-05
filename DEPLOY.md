# Deploy guide — Alejandro PM Portfolio

This is a step-by-step deployment guide for the GitHub + Vercel web UI path. No terminal commands required after the optional local check.

## 1. (Optional, recommended) Verify locally one more time

If you have Node.js installed, open this folder in a terminal and run:

```
npm install
npm run build
```

If the build succeeds, you're good. If not, copy the error and send it back.

## 2. Create a free Vercel account

1. Go to https://vercel.com/signup
2. Click **Continue with GitHub**. This is the smoothest path because Vercel will need GitHub access anyway in step 4.
3. Authorize Vercel on the GitHub permissions screen.
4. On your Vercel dashboard, you'll be asked to pick a plan — choose **Hobby (Free)**.

## 3. Put the project on GitHub

Vercel deploys from a GitHub repo. The easiest no-terminal path:

1. Go to https://github.com/new
2. **Repository name:** `alejandro-pm-portfolio` (or anything you like)
3. **Visibility:** Public (or Private — Vercel works with both)
4. Leave "Add a README" UNCHECKED (you already have one).
5. Leave "Add .gitignore" set to None (you already have one).
6. Click **Create repository**.

You'll land on an empty repo page with setup instructions. Ignore those — instead:

7. Click the link **uploading an existing file** (it appears in the empty-repo instructions, or use the **Add file → Upload files** button).
8. Open the project folder on your computer:
   `C:\Users\aleja\Downloads\alejandro-pm-portfolio-vercel\alejandro-pm-portfolio`
9. Select **everything inside** that folder — but **NOT** the `node_modules` folder and **NOT** the `dist` folder if it exists. Drag the rest into the GitHub upload zone.

   Files you should upload:
   - `public/` folder (with CV, profile photo, favicon)
   - `src/` folder
   - `.gitignore`
   - `index.html`
   - `package.json`
   - `package-lock.json`
   - `postcss.config.js`
   - `README.md`
   - `tailwind.config.js`
   - `vercel.json`
   - `vite.config.js`

10. Scroll down, type a commit message like `Initial commit`, click **Commit changes**.

## 4. Import into Vercel

1. Go to https://vercel.com/new
2. You'll see your GitHub repos listed. Find `alejandro-pm-portfolio` and click **Import**.
   - If the repo doesn't show up, click **Adjust GitHub App Permissions** and grant Vercel access to it.
3. On the import screen Vercel auto-detects:
   - **Framework Preset:** Vite
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
   - **Install Command:** `npm install`
   You don't need to change any of these — `vercel.json` already pins them.
4. **Environment variables:** none needed for this project.
5. Click **Deploy**.

The build runs and finishes in ~30–60 seconds. You'll see a confetti animation and a preview thumbnail.

## 5. Visit your live site

Vercel gives you a URL like `alejandro-pm-portfolio.vercel.app` (or with a random suffix if that name is taken). Click **Visit** or **Continue to Dashboard → Domains**.

## 6. (Optional) Custom domain

If you own a domain like `alejandrozarraga.com`:

1. From the project on Vercel, go to **Settings → Domains**.
2. Type your domain, click **Add**.
3. Vercel shows you the DNS records to set at your domain registrar (usually a CNAME or A record).
4. Wait 5–60 minutes for DNS to propagate.

## How updates work after this

Any time you push a change to GitHub (via the web UI's edit button or git), Vercel automatically rebuilds and redeploys. No manual step.

To update a case study, edit `src/App.jsx` on GitHub directly, commit, and Vercel ships it.

## If something fails

- **Vercel build fails on missing dependency:** make sure you uploaded `package.json` and `package-lock.json`. Don't upload `node_modules`.
- **Vercel build fails with a Tailwind error:** make sure you didn't accidentally upload an old `package.json` from a backup. The pinned versions are what fix it.
- **Site loads but is blank / white:** open the browser console (F12). Common cause is `vite.config.js` was missed — re-upload it.
- **CV download button 404s:** make sure `public/Alejandro_Zarraga_Flores_CV.pdf` was uploaded.
