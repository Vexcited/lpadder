# lpadder: Play Launchpad covers directly from your browser.

![GitHub - Social Banner](https://user-images.githubusercontent.com/59152884/162007722-4f9df4b9-b293-4ae2-bcfa-4b4b8e25ce70.png)

`lpadder` (pronounced `el padder` or `launchpadder`) is a web
application - **still in development** - that lets you play
Launchpad covers directly from your web browser.

This is currently a work in progress. You can still
preview the latest release version by going to <https://lpadder.vercel.app>.

If you have any feature to add, head on the [issues](https://github.com/Vexcited/lpadder/issues) and
create a new issue with the `feature request` template.

## Explaining the lpadder project structure

Each covers is bundled into a `.zip` file that contains a single `cover.json` file.
This file contains the project's global configuration and data.

You can see its interface (`ProjectStructure`) in the [`Project.ts`](./src/types/Project.ts) file.

## Development

This app was made using [Vite](https://vitejs.dev), [SolidJS](https://solidjs.com) and [TypeScript](https://www.typescriptlang.org).
To provide API routes, I use [vite-plugin-mix](https://github.com/egoist/vite-plugin-mix).
Deployment is powered with [Vercel](https://vercel.com).
I also use [PNPm](https://pnpm.io/) as my main package manager.
Database comes from [MongoDB Atlas](https://www.mongodb.com/atlas/database) and file hosting from my own Raspberry PI server.

- `pnpm dev`: Starts the Vite development server on port 3000.
  - Note: if you use a reverse proxy to access the development server, you'll need to create a `.env.local` file based on `.env.sample` and modify `CLIENT_PORT` from `3000` to the port you're using in your reverse proxy. This will make Vite HMR work.
- `pnpm build`: Builds the app into `dist` directory and functions for Vercel.
  - Note: when running `pnpm build --local`, it will not create functions for Vercel but bundles the server in `build` folder. There, you can run `pnpm serve`.
- `pnpm serve`: Runs the server built using `pnpm build --local`.
- `pnpm lint`: Runs `eslint` and `tsc`.
- `pnpm release`: Runs `pnpm lint`, bumps the `version` in `package.json`, commits the changes and tag, then creates a GitHub Release.
  - Note: the published GitHub release will trigger a GitHub Action that will run a Vercel build. On successful deploy, it will update the published GitHub Release and append `Deployment URL: <VERCEL_DEPLOY_URL>\n\n` at the top of the release body.

If you want to contribute, please check [the roadmap](https://github.com/Vexcited/lpadder/projects/1).

## Resources

- Launchpad Pro MK2: [Programmer Documentation](https://d2xhy469pqj8rc.cloudfront.net/sites/default/files/novation/downloads/10598/launchpad-pro-programmers-reference-guide_0.pdf)
- Launchpad Pro MK3: [Programmer Documentation](https://fael-downloads-prod.focusrite.com/customer/prod/s3fs-public/downloads/LPP3_prog_ref_guide_200415.pdf)
