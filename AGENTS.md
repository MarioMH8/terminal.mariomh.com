# Agent guide for terminal.mariomh.com

Private Astro + Preact terminal portfolio. `develop` is the default branch; `main` holds stable releases.

- **Package manager:** Bun 1.4.4 (`bun`)
- **Build:** `bun run build`
- **Dev server:** `bun run dev`
- **Type-check:** `bun run typecheck`
- **Astro type-check:** `bun run typecheck:astro`
- **Lint:** `bun run lint:fix`

Site code lives in `src/`. The site consumes `@mariomh8/resume` from GitHub Packages and does not publish a package.

## Task guides

- [Architecture](docs/agents/architecture.md) — site, registry and deploy.
- [Conventions](docs/agents/conventions.md) — Bun, TypeScript, lint and registry rules.
- [Development](docs/agents/development.md) — commands, authentication and development.
- [Release process](docs/agents/release-process.md) — branches, deploy and sync.
- [Pull requests](docs/agents/pull-requests.md) — issue-first policy, labels and merge methods.
- [Branches and commits](docs/agents/branches-and-commits.md) — GitFlow branches, naming, Conventional Commits and hooks.
