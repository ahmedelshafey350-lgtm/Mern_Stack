# Ahmed Elshafey: MERN Stack Developer Portfolio

Dark futuristic portfolio built with React, Vite, Tailwind CSS, Framer Motion and Lucide icons.

## Run locally
```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build in /dist
npm run preview  # serve the production build
```
Requires Node.js 18+.

## Routes
`/`, `/about`, `/skills`, `/projects`, `/projects/:slug`, `/experience`, `/education`, `/contact`, `/404` (any unknown URL).

## Add a project (publication system)
Complete records go in `projects` in `src/data/projects.js` (template in the file); unfinished slots live in `src/data/drafts.js` and are never rendered. A project is public only if `publication: 'Published'` **and** it has a real title, a description (40+ characters), a valid category and status, technologies, at least one feature, and a real image with alt text that no other project reuses. Draft, Ready and Archived projects, and any unpublished URL, never appear (direct links show the 404 page). Put images in `public/images/`; mark conceptual artwork with `kind: 'concept'` so it is labelled as not a screenshot. In dev, the console warns about Published/Ready projects that are incomplete.

## Design tokens
All colors, radius and shadow are CSS variables at the top of `src/index.css` (light and dark). They are a provisional neutral palette until values are sampled from the reference site.

## Customize (everything lives in `src/data/site.js`)
- **Contact:** the form opens the visitor's mail app addressed to the email in `site.js`; phone, WhatsApp and email links are real.
- **CV:** put your PDF in `public/` and set `cvUrl: '/your-cv.pdf'`. If empty, the button downloads a text CV generated from your profile data.
- **Education / goals:** `education` and `goals` in `site.js` (goals were not provided, so that section is empty).
- **Experience & education:** add `{ heading, period, note }` items to the `background` groups. Nothing is invented.

## Structure
```
src/
  pages/       Home, About, Projects, ProjectDetail, Simple (Skills, Experience, Education, Contact)
  components/  Navbar, Footer, Hero, ProjectCard, Skills, Journey, Contact, Loader, NotFound, BackToTop
  hooks/       useTheme, useActiveSection
  data/        site.js
```

## Deploy
Vercel and Netlify work out of the box (`vercel.json` and `public/_redirects` handle SPA routing and the custom 404 page). Build command `npm run build`, output `dist`.

## Project images
The SVGs in `public/images/` are conceptual artwork (labelled on the site), not screenshots. To use a real screenshot, save it in `public/images/` and change that project's image `src` and `kind: 'screenshot'` in `src/data/projects.js`.
