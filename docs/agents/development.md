# Development

## Requirements

- Bun 1.4.4
- Git
- A classic GitHub personal access token with `read:packages` for local installs

## Setup

```bash
git clone https://github.com/MarioMH8/terminal.mariomh.com.git
cd terminal.mariomh.com
bun install
```

`bun install` installs the dependencies, runs `astro sync` and activates the Husky hooks.

## GitHub Packages authentication

The repository `.npmrc` only declares the `@mariomh8` scope:

```
@mariomh8:registry=https://npm.pkg.github.com/
```

It does not contain a token, and it must stay that way. Keep the token in a user-level npm configuration:

```
//npm.pkg.github.com/:_authToken=${NPM_TOKEN}
@mariomh8:registry=https://npm.pkg.github.com/
```

Export `NPM_TOKEN` in your shell. A classic token is required.

CI uses the `PACKAGES_TOKEN` Actions secret because `@mariomh8/resume` is published from `resume.mariomh.com`. Renovate uses `RENOVATE_PACKAGES_TOKEN`, declared in `renovate.json`; that secret is not an Actions secret.

## Commands

| Task | Command |
| --- | --- |
| Install dependencies | `bun install` |
| Build | `bun run build` |
| Dev server | `bun run dev` |
| Preview the build | `bun run start` |
| Type-check | `bun run typecheck` |
| Astro type-check | `bun run typecheck:astro` |
| Lint without writing | `bun run lint:ci` |
| Lint and fix | `bun run lint:fix` |

## Continuous integration

`.github/workflows/ci.yml` calls the shared `hexadrop/github-workflows` `check.yml` workflow at `v1.13.0` on pushes and pull requests to `main` and `develop`. It passes `registry: github`, `registry-scope: '@mariomh8'` and the `PACKAGES_TOKEN` secret, then runs `lint:ci`, `typecheck`, `typecheck:astro` and `build`.

The deploy workflow calls the same check workflow with `ref` pinned to the commit that passed CI, then builds and deploys to Cloudflare Pages.

The `Protected branches` ruleset makes these checks required on `develop` and `main`, together with the `Pull Request: Validate` workflow. It allows zero approving reviews; administrators and the Hexadrop app can bypass it.
