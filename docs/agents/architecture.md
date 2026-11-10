# Architecture

## Surfaces

- `src/` is the Astro + Preact site deployed to `https://terminal.mariomh.com`.
- `.github/` contains the shared CI, deploy, label and sync workflows.
- `docs/` contains the agent and repository documentation.

The root package is private and is not published.

## Runtime

The site uses Astro 7 with the Preact integration. It consumes `@mariomh8/resume` from GitHub Packages for the CV data and the web manifest metadata.

## Registry

The site installs `@mariomh8/resume` from GitHub Packages. The repository `.npmrc` only declares the scope and never contains a token.

CI uses the `PACKAGES_TOKEN` Actions secret because the package is published from `resume.mariomh.com`; Renovate uses `RENOVATE_PACKAGES_TOKEN`.

## Deploy

The site builds to `dist/` and deploys to Cloudflare Pages with the project `terminal-mariomh`.

`deploy.yml` runs:

- Automatically after the `Continuous integration` workflow succeeds on `main`.
- Manually with `workflow_dispatch`.

It checks out `github.event.workflow_run.head_sha` when it runs automatically and only deploys when `head_branch` is `main`.

## Workflows

| Workflow | Purpose |
| --- | --- |
| `ci.yml` | Shared check workflow on pushes and pull requests to `main` and `develop`. |
| `deploy.yml` | Deploys the site to Cloudflare Pages. |
| `pr-validate.yml` | Checks issue linkage and labels. |
| `pr-labeler.yml` | Applies scope labels from changed paths. |
| `merge-audit.yml` | Audits the merge method after a pull request closes. |
| `sync-to-develop.yml` | Opens `main` → `develop` sync pull requests. |

`merge-command.yml` is reserved for when the `hexabot` GitHub App secret is configured.
