# selfcare.tech

A repository of self-care resources for developers & others, built with Astro and Tailwind CSS.

## Development

```sh
npm install
npm run dev
```

## Building

```sh
npm run build
```

## Deployment to GitHub Pages

This project is configured to deploy to GitHub Pages using the gh-pages branch method:

1. **First time setup**: Make sure GitHub Pages is configured to use the gh-pages branch as the source in your repository settings.

2. **Deploy**: After making changes, commit them to your main branch and run:
   ```sh
   npm run deploy
   ```

3. **What the deploy script does**:
   - Builds the project (`npm run build`)
   - Switches to or creates a `gh-pages` branch
   - Copies the build output to the root of the gh-pages branch
   - Commits and pushes the changes
   - Switches back to your original branch

4. **Site URL**: https://jenniferlynparsons.github.io/selfcaretech/

## Project Structure

Built with:
- Astro 5.x
- Tailwind CSS 3.x
- TypeScript

> 🧑‍🚀 **Seasoned astronaut?** Delete this file. Have fun!

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
├── src/
│   └── pages/
│       └── index.astro
└── package.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).
