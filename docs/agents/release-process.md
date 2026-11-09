# Release process

This repository does not publish a package. It deploys a static site.

## Daily development

1. Create a work branch from `develop`.
2. Open a pull request into `develop`.
3. Merge it with a **squash merge** once checks are green.

## Deploy

`deploy.yml` deploys the site automatically after the `Continuous integration` workflow succeeds on `main`. It also supports `workflow_dispatch` for manual redeploys.

The deploy checks out the commit that passed CI, installs dependencies with `PACKAGES_TOKEN`, builds the site and publishes `dist` to Cloudflare Pages project `terminal-mariomh`.

## Promote `develop` to `main`

There is no release pull request because the repository does not publish a package. When `develop` is ready:

1. Open a pull request from `develop` to `main` with the `release` label.
2. Wait for green checks.
3. Merge it with a **merge commit** so `main` keeps the full history from `develop`.
4. The merge triggers CI on `main`, then the automatic deploy.

## Sync back to develop

After a pull request merges into `main`, `sync-to-develop.yml` opens or updates the pull request `internal/sync-from-main-to-develop` targeting `develop`. Merge it with a **merge commit**.

## Hotfixes

Create `hotfix/*` from `main`, open a pull request into `main` and merge it with a **squash merge**. Then merge the sync pull request back into `develop`.
