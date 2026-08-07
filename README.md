# Website

A modern, responsive static website built with HTML, CSS, and JavaScript.

## Quick start

Open `index.html` in your browser, or run a local server:

```bash
# Python 3
python3 -m http.server 8000

# Then visit http://localhost:8000
```

## Project structure

```
website/
├── index.html      # Main page
├── css/
│   └── styles.css  # Styles
├── js/
│   └── main.js     # Interactivity
└── README.md
```

## Support Application Portal (`/apply`)

1. In [Supabase](https://supabase.com), create a project and run `supabase/schema.sql` in the SQL Editor.
2. Copy your project URL and anon key into `js/supabase-config.js`.
3. Assign `app_metadata.role = 'admin'` on staff accounts that need to read submissions.

Applications auto-save to `localStorage` as drafts. Submissions require consent and are never added to marketing lists.

## Customize

- Update copy and sections in `index.html`
- Change colors and fonts in `css/styles.css` (`:root` variables)
- Wire the contact form to a backend or service like [Formspree](https://formspree.io)

## Next steps

- Add more pages (`about.html`, `blog.html`, etc.)
- Install [Node.js](https://nodejs.org) and migrate to Vite, React, or Next.js
- Deploy to [Netlify](https://netlify.com), [Vercel](https://vercel.com), or GitHub Pages
