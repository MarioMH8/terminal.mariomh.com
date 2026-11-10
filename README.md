<h1 align="center">
  terminal.mariomh.com
</h1>

<p align="center">
  A terminal-style portfolio that runs in the browser.
</p>

<p align="center">
  <a href="https://terminal.mariomh.com"><img src="https://img.shields.io/badge/live-terminal.mariomh.com-blue?style=flat-square" alt="Live site"></a>
  <a href="LICENSE"><img src="https://img.shields.io/badge/license-MIT-green?style=flat-square" alt="License"></a>
</p>

![terminal.mariomh.com](docs/terminal.mriomh.com.webp)

## Table of contents

- [Features](#features)
- [Tech stack](#tech-stack)
- [Lighthouse score](#lighthouse-score)
- [Requirements](#requirements)
- [Running locally](#running-locally)
- [Commands](#commands)
- [Deploying the site](#deploying-the-site)
- [Project structure](#project-structure)
- [Contributing](#contributing)
- [Security](#security)
- [License](#license)
- [Inspiration and credits](#inspiration-and-credits)

## Features

- 📱 Responsive design.
- 🎨 Multiple themes.
- ✨ Autocomplete with `Tab` or `Ctrl + I`.
- ⬆️ Previous and next command history.
- 📖 View the command history.
- 🔥 PWA and offline support.
- 🇬🇧 English and 🇪🇸 Spanish support.

## Tech stack

- **Runtime and package manager** - [Bun](https://bun.sh) 1.4.4
- **Frontend** - [Astro](https://astro.build) and [Preact](https://preactjs.com)
- **Styling** - Plain CSS
- **State management** - [nanostores](https://github.com/nanostores/nanostores)
- **Language** - [TypeScript](https://www.typescriptlang.org)
- **Deployment** - [Cloudflare Pages](https://pages.cloudflare.com)

## Lighthouse score

![Lighthouse result](docs/lighthouse-result.svg)

## Requirements

- Bun 1.4.4
- Git
- A GitHub personal access token with `read:packages` to install `@mariomh8/resume`

## Running locally

Clone the repository and install the dependencies:

```bash
git clone https://github.com/MarioMH8/terminal.mariomh.com.git
cd terminal.mariomh.com
bun install
```

Start the development server:

```bash
bun run dev
```

The site consumes the private `@mariomh8/resume` package. Add the scope and your token to your user-level npm configuration:

```ini
//npm.pkg.github.com/:_authToken=${NPM_TOKEN}
@mariomh8:registry=https://npm.pkg.github.com/
```

Export `NPM_TOKEN` with a classic GitHub personal access token that has the `read:packages` permission. In CI the check workflow uses `GITHUB_TOKEN` with `packages: read`.

## Commands

| Task | Command |
| --- | --- |
| Run the development server | `bun run dev` |
| Build the site | `bun run build` |
| Preview the build | `bun run start` |
| Type-check | `bun run typecheck` |
| Type-check the Astro sources | `bun run typecheck:astro` |
| Lint without writing changes | `bun run lint:ci` |
| Lint and fix | `bun run lint:fix` |

## Deploying the site

The site deploys automatically after the `Continuous integration` workflow succeeds on `main`. You can also run the [Deploy](https://github.com/MarioMH8/terminal.mariomh.com/actions/workflows/deploy.yml) workflow manually with `workflow_dispatch`.

## Project structure

```text
src/               Astro and Preact site: components, commands, layouts, pages and styles
public/            Static files, icons and the web app manifest
docs/              Screenshots, the Lighthouse result and the agent guides
.github/           Workflows, issue templates and CODEOWNERS
```

## Contributing

Read [CONTRIBUTING.md](CONTRIBUTING.md) before opening an issue or a pull request. The project follows an issue-first workflow, Conventional Commits and GitFlow with `develop` as the integration branch and `main` for stable releases.

- [AGENTS.md](AGENTS.md): entry point for the repository guides.
- [docs/agents/](docs/agents/): architecture, conventions, development, releases, pull requests and branches.

## Security

Do not report vulnerabilities in a public issue. Follow [SECURITY.md](SECURITY.md) and use GitHub's private vulnerability reporting.

## License

The source code is licensed under the [MIT License](LICENSE).

The terminal messages, translations, images and documentation prose are **all rights reserved**. See [CONTENT-LICENSE.md](CONTENT-LICENSE.md) for the exact scope.

## Inspiration and credits

Some features and interactions are inspired by these terminal sites. All the code is written from scratch.

- [Terminal Portfolio by Sat Naing](https://terminal.satnaing.dev/)
- [term m4tt72](https://term.m4tt72.com/)
- [Forrest](https://fkcodes.com/)
