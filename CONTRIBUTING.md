# Contributing to terminal.mariomh.com

This repository contains the terminal-style portfolio at [terminal.mariomh.com](https://terminal.mariomh.com). The source is public and the `@mariomh8/resume` package it consumes stays private in GitHub Packages. `develop` is the default branch and `main` holds stable releases.

For a quick orientation, read [AGENTS.md](AGENTS.md); for the detailed guides, see [docs/agents/](docs/agents/).

## Ways to help

- **Report a bug** with the [bug report template](.github/ISSUE_TEMPLATE/bug_report.yml).
- **Suggest a feature** with the [feature request template](.github/ISSUE_TEMPLATE/feature-request.yml).
- **Send a pull request** for a fix, a test or a documentation improvement.

Open an issue before building a large feature.

## Issue-first workflow

Every pull request needs an approved issue:

1. Open an issue with one of the templates above.
2. Wait for a maintainer to add `status:approved`. The issue must stay open.
3. Comment on the issue to claim it.
4. Open a pull request with `Closes #<number>`, `Fixes #<number>` or `Resolves #<number>`.

Repository tooling without a product issue can use the `internal:no-issue` label instead.

## Development setup

Requirements: Bun 1.4.4 and Git.

```bash
git clone https://github.com/MarioMH8/terminal.mariomh.com.git
cd terminal.mariomh.com
bun install
```

`bun install` installs the dependencies, runs `astro sync` and activates the Husky hooks through the `prepare` script.

## GitHub Packages authentication

The repository `.npmrc` only declares the `@mariomh8` scope:

```
@mariomh8:registry=https://npm.pkg.github.com/
```

It never contains a token. To install `@mariomh8/resume` locally, create a classic personal access token with `read:packages` and keep it in a user-level npm configuration:

```
//npm.pkg.github.com/:_authToken=${NPM_TOKEN}
@mariomh8:registry=https://npm.pkg.github.com/
```

Export `NPM_TOKEN` in your shell. CI uses the `PACKAGES_TOKEN` Actions secret; Renovate uses `RENOVATE_PACKAGES_TOKEN` from `renovate.json`.

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

## Branches and commits

Create work branches from `develop`. The branch name must match:

```
^(feat|fix|chore|docs|style|refactor|perf|test|build|ci|revert|release|hotfix)\/[a-z0-9._-]+$
```

Examples: `feat/command-palette`, `fix/print-layout`, `docs/agents-and-contributing`.

Commit messages follow Conventional Commits through `commitlint.config.ts`. Add `!` and a `BREAKING CHANGE:` footer for breaking changes.

## Pull request rules

- Link an approved, open issue and use a Conventional Commits title.
- Add exactly one `type:*` label. Scope labels are applied automatically.
- Run `bun run lint:ci`, `bun run typecheck`, `bun run typecheck:astro` and `bun run build` before opening the pull request.

The `Protected branches` ruleset on `develop` and `main` requires a pull request, blocks force pushes and deletions, and requires the `Pull Request: Validate` and `Check` workflows to pass. It allows zero approving reviews; administrators and the Hexadrop app can bypass it.

Use a **squash merge** for work branches into `develop` and for hotfixes into `main`. Use a **merge commit** for `internal/sync-from-main-to-develop` into `develop`.

## Deploy

The site deploys automatically after the `Continuous integration` workflow succeeds on `main`. You can also run the [Deploy](https://github.com/MarioMH8/terminal.mariomh.com/actions/workflows/deploy.yml) workflow manually with `workflow_dispatch`.

## Further reading

- [Agent guide](AGENTS.md) and [docs/agents/](docs/agents/).
- [Architecture](docs/agents/architecture.md), [conventions](docs/agents/conventions.md), [development](docs/agents/development.md), [release process](docs/agents/release-process.md), [pull requests](docs/agents/pull-requests.md) and [branches and commits](docs/agents/branches-and-commits.md).

## Code of conduct

This project follows the [Contributor Covenant](CODE_OF_CONDUCT.md). Be respectful: critique code, not people, be constructive in reviews and welcome newcomers. Report unacceptable behavior privately to the maintainer through GitHub.
