# Test assignment 1

## Development

1. Install dependencies with `yarn`
2. Run `yarn dev`

## Tech stack

- There is a [devcontainer](https://code.visualstudio.com/docs/devcontainers/containers) used in this project to isolate and unify development environment.

## Things which are not implemented

- There is no SSR, since this quiz is probably behind authentication so it doesn't really benefits from SSR, there would be a slight benefit from rendering speed, but it will complicate current setup.
- There will be no unit tests, because I was short on time, if I would need to add them, I would add Jest.
- There will be no e2e tests, because I was short on time, if I would need to add them, I would use Playwright or Cypress.
- There is no Code Splitting because app is small, but it's totally required in bigger apps.
- It would be also great to add dependabot.
- Since the app is so simple, we don't really need a router.

## Tods

- Add `format` step to CI
- Introduce `lint` step
- Add `lint` step to CI
- Add `build` command
- Deploy app somewhere (probably GitHub Page)
- Add loading simulation
