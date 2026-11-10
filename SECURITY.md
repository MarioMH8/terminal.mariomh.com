# Security policy

## Supported versions

Security fixes land on `develop` and reach the latest release on `main`. Older releases are not supported.

## Reporting a vulnerability

Do not open a public issue, discussion or pull request for a security problem.

Report it privately through GitHub's private vulnerability reporting:

<https://github.com/MarioMH8/terminal.mariomh.com/security/advisories/new>

Please include:

- the affected version or commit;
- the steps to reproduce the issue, or a proof of concept;
- the impact you expect;
- any fix you have in mind.

You can expect an initial response within seven days. Please give me a reasonable window to ship a fix before disclosing the issue publicly.

## Scope

This policy covers the static Astro and Preact site and its build. The site has no backend or user accounts; the most relevant risks are dependency vulnerabilities, the service worker and anything that could expose the private packages it consumes.
