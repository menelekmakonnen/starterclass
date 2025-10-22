# Starterclass landing page

This project ships the ICUNI Starterclass marketing page as a static build that can be deployed on Vercel.

## Local development

```bash
npm install
npm run build
npm run serve # or use any static file server to host ./public
```

The build step transpiles `starterclass.jsx` into `public/app.js`, which the HTML page loads at runtime.
