# Explore World

A small, responsive React gallery for exploring the things that inspire us: nature, travel, fashion, technology, food, and photography.

The gallery uses a lightweight ChromaGrid effect to reveal color and accent details as you move across each card. Images are stored locally, so the project works without an external image service.

## Features

- Responsive card grid for desktop, tablet, and mobile
- Spotlight color reveal on pointer movement
- Reduced-motion support
- Lazy-loaded images with descriptive alt text
- Clean Vite + React setup

## Run locally

You need Node.js 20 or newer.

```bash
git clone https://github.com/vikasprajapati-01/Explore-World.git
cd Explore-World
npm install
npm run dev
```

Open the local URL shown by Vite, usually `http://localhost:5173`.

## Other commands

```bash
npm run lint    # Check the code
npm run build   # Create a production build
npm run preview # Preview the production build locally
```

## Project structure

```text
public/                 Gallery images
src/App.jsx             Gallery content and layout
src/App.css             Page-level styles
src/component/          Reusable ChromaGrid component
src/index.css           Global styles
```

## Customize the gallery

Update the `items` array in `src/App.jsx` to add or edit cards. Each item supports an image path, title, subtitle, and accent color.

## License

This project is available under the MIT License.
