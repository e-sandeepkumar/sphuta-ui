Project template notes

This repository includes a small, reusable front-end template (React + Vite + Tailwind) with a ready-made header, footer, layout, and common CSS utilities that you can reuse in other projects.

What I changed/added

- `src/components/Layout.jsx` — a small Layout wrapper that composes `Header`, `main` (single scroll container) and `Footer`. Use this to consistently wrap your app's pages.
- `src/App.jsx` — now uses `Layout` and keeps routing focused on the page content.
- `src/index.css` — appended a small set of reusable utilities:
  - `.site-container` — max-width container with responsive padding
  - `.sr-only` — an accessible visually-hidden utility
  - `.focus-ring` — small focus ring helper
- The project already contains `src/components/Header.jsx` and `src/components/Footer.jsx` which expose a responsive header with:
  - desktop navigation with a moving underline that follows hover/focus and the active page
  - an accessible Features submenu (keyboard and mouse friendly)
  - a mobile menu that animates open/close

Why this is reusable

- Layout isolates header/footer and the main scrollable region so other apps can reuse the header and keep a single scroll container.
- The header's underline is implemented via a single absolutely-positioned `<span>` inside the nav; JavaScript positions the underline under the text of each nav label. This prevents layout shifts and lets you animate left/width/opacity smoothly.
- The CSS utilities are small, framework-agnostic helpers useful across pages.

How to use

1. Pages/components
   - Create new pages under `src/pages/` (the repo already has `Home`, `Projects`, `Contact`, `Pricing`, etc.).
   - The top-level `App.jsx` already uses `<Layout>...routes...</Layout>` so new routes will inherit the header and footer automatically.

2. Reusing the layout elsewhere
   - You can import `Layout` directly:

     import Layout from './components/Layout'

     export default function MyApp(){
       return (
         <Layout>
           <MyPageContent />
         </Layout>
       )
     }

3. Customizing the header nav
   - Links use `.nav-link` and a child `.nav-label` element. The underline positioning code prefers `.nav-label` when present.
   - The underline element is the absolutely-positioned `span` inside the nav. It is controlled by `Header.jsx` using getBoundingClientRect to calculate left, width and top. This keeps styling and animations in CSS while JS only sets geometry.

4. Accessibility notes
   - The Features submenu supports keyboard focus and Escape to close. Mobile menu uses native `details`/`summary` for nested items and a simple toggle for the global mobile menu.
   - `.sr-only` utility is in `src/index.css` for hiding content visually while keeping it available to screen readers.

Run the development server

Make sure dependencies are installed and run Vite dev server:

```bash
# macOS / zsh
npm install
npm run dev
```

Next steps you might want

- Add a theme toggle control and persist preference (Header already has theme state stored in localStorage but the UI is hidden).
- Extract the nav items to a data file if you expect multiple projects to alter menu structure.
- Add unit tests and storybook entries for `Header` and `Layout`.

If you'd like I can:
- Add a `README.md` focused on this template with screenshots and usage examples.
- Add a small example page that demonstrates the header underline and submenu keyboard interaction.
- Turn the header into a more configurable component (pass menu items as props).


