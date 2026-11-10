# Pull requests

## Issue-first workflow

Every pull request needs an issue unless it is internal tooling covered by `internal:no-issue`.

1. Open an issue with the [Bug Report](https://github.com/MarioMH8/terminal.mariomh.com/issues/new?template=bug_report.yml) or [Feature Request](https://github.com/MarioMH8/terminal.mariomh.com/issues/new?template=feature-request.yml) template.
2. Wait for a maintainer to add `status:approved`. The issue must stay open.
3. Comment on the issue before starting work.
4. Open a pull request with `Closes #<number>`, `Fixes #<number>` or `Resolves #<number>` in the body.

`.github/workflows/pr-validate.yml` runs `hexadrop/validate-pr-action@v1.0.1` with the keywords `closes,fixes,resolves`. It verifies the linked issue, its approval and open state, and exactly one `type:*` label. Changesets are not required because the repository does not publish a package.

## Labels

Add exactly one `type:*` label. Scope labels are applied automatically by `.github/workflows/pr-labeler.yml` from the changed paths.

| Group | Labels |
| --- | --- |
| Type | `type:bug`, `type:chore`, `type:docs`, `type:feature`, `type:refactor`, `type:breaking-change` |
| Status | `status:approved`, `status:blocked`, `status:in-progress`, `status:needs-review`, `status:wont-fix` |
| Scope | `scope:site`, `scope:docs`, `scope:ci` |
| Release and automation | `release`, `dependencies`, `renovate`, `internal:no-issue`, `internal:sync` |

## Validation

`.github/workflows/ci.yml` runs the shared `hexadrop/github-workflows` check workflow at `v1.13.0`:

- `bun run lint:ci`
- `bun run typecheck`
- `bun run typecheck:astro`
- `bun run build`

A pull request is ready when these checks and the pull request validation are green.

The `Protected branches` ruleset on `develop` and `main` requires a pull request, blocks force pushes and deletions, and requires the `Pull Request: Validate` and `Check` workflows. It allows zero approving reviews; administrators and the Hexadrop app can bypass it.

## Merge methods

| Pull request | Branches | Merge method | Why |
| --- | --- | --- | --- |
| Feature, fix, chore, docs, refactor, Renovate | Work branch → `develop` | **Squash merge** | One clean commit per pull request and a linear `develop`. |
| Hotfix | `hotfix/*` → `main` | **Squash merge** | The branch comes from `main` and does not need its own history. |
| Promote | `develop` → `main` | **Merge commit** | Keeps the full history of `develop` and prevents divergence. |
| Sync | `internal/sync-from-main-to-develop` → `develop` | **Merge commit** | Brings the released `main` history back into `develop`. |

## Pull request checklist

The repository template asks for:

- [ ] `bun run lint:ci`
- [ ] `bun run typecheck`
- [ ] `bun run typecheck:astro`
- [ ] `bun run build`
- [ ] Exactly one `type:*` label
- [ ] `Closes #<number>`

Use a Conventional Commits title, the same format as commit messages. See [Branches and commits](branches-and-commits.md) for the branch and commit conventions.
