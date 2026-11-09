# Conventions

## Runtime and package management

Use Bun 1.4.4 for installation, scripts and builds. The lockfile is `bun.lock`. The repository is a single private Bun package.

## Package names

The private site package is `terminal.mariomh.com` and is never published. The site consumes `@mariomh8/resume` from GitHub Packages.

## TypeScript

The repository uses TypeScript 6.0.3 with `@hexadrop/tsconfig` 0.0.5. The root `tsconfig.json`:

- Extends `@hexadrop/tsconfig`.
- Uses the Preact JSX runtime (`jsxImportSource: "preact"`).
- Maps the site aliases (`@commands`, `@components`, `@fn`, `@hints`, `@history`, `@info`, `@layout`, `@locale`, `@package`, `@prompt`, `@rerender`, `@styles`, `@theme`).
- Enables `allowImportingTsExtensions`.
- Loads the `@astrojs/ts-plugin` plugin.

## Linting

ESLint 10.14.0 runs with `@hexadrop/eslint-config` 1.3.1 in flat config. `eslint.config.js` awaits `hexadrop(...)`, passes the root TypeScript project and configures `@typescript-eslint/parser` for `.cjs`, `.js` and `.mjs`.

Use `bun run lint:fix` while working and `bun run lint:ci` to validate without writing. The lint script uses the content-based ESLint cache.

## Comments

Write code that explains itself. Add a comment only for a non-obvious constraint, workaround or external behavior that names, types and tests cannot express. Do not narrate what the code does. Put design rationale in a task guide, not inline.

## Repository configuration

`package.json` is the source of truth for scripts and dependencies. Keep `bun.lock` updated with Bun when dependencies change. Commit messages follow Conventional Commits through `commitlint.config.ts`.

`.idea/` is tracked in this repository and must stay tracked. Do not remove or ignore it.

## Registry and dependencies

The repository `.npmrc` only declares the `@mariomh8` scope; never commit a token. The site pins `@mariomh8/resume` to a published version.

Authentication rules:

- Local development uses a classic personal access token with `read:packages`.
- CI uses the `PACKAGES_TOKEN` Actions secret.
- Renovate uses the `RENOVATE_PACKAGES_TOKEN` secret from its own `renovate.json` configuration, not from GitHub Actions.

See [Development](development.md) for the local authentication steps.
