![GitHub - Web App - Social Banner](https://user-images.githubusercontent.com/59152884/177166304-5c79187c-4e43-4b37-8df3-9bd5d5130603.png)

<p align="center">
  <a href="https://lpadder.vercel.app" target="_blank"><img src="https://img.shields.io/static/v1?&label=&message=go to lpadder&color=%231E293B&style=for-the-badge"/></a> 
  <a href="https://docs-lpadder.vercel.app" target="_blank"><img src="https://img.shields.io/static/v1?&label=&message=documentation&color=%231E293B&style=for-the-badge"/></a>
  <br />
  <a href="https://dsc.gg/lpadder" target="_blank"><img src="https://img.shields.io/discord/989809458907602977?color=%231E293B&label=discord&labelColor=%231E293B&style=for-the-badge"/></a>
</p>

---

# lpadder: web app.

## Explaining the "lpadder project file structure"

Each covers is bundled into a `.zip` file that contains a single `cover.json` file.
This file contains the project's global configuration and data.

You can see its interface (`ProjectStructure`) in the [`Project.ts`](./src/types/Project.ts) file.

## Development

lpadder was made using [Vite](https://vitejs.dev), [SolidJS](https://solidjs.com), <!--[solid-start](https://github.com/solidjs/solid-start), -->[TypeScript](https://www.typescriptlang.org) and [WindiCSS](https://windicss.org). Deployment is powered by [Vercel](https://vercel.com). [pnpm](https://pnpm.io/) is the main package manager. <!--Finally, [MongoDB Atlas](https://www.mongodb.com/atlas/database) is used to host the main database.-->

- `pnpm dev`: Starts Vite development server on port `3000`.
- `pnpm build`: Lints and builds the app.
- `pnpm lint`: Runs `eslint` and `tsc`.
- `pnpm release`: Runs `pnpm lint`, bumps the `version` in `package.json`, commits the changes and tag, then creates a GitHub Release.
  - Note: the published GitHub release will trigger a GitHub Action that will run a Vercel build. On successful deploy, it will update the published GitHub Release and append `Deployment URL: <VERCEL_DEPLOY_URL>\n\n` at the top of the release body.

## Contributing

Please check [the roadmap](https://github.com/Vexcited/lpadder/projects/1) (currently outdated, but will be later).

