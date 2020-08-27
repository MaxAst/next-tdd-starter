This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app). In addition to the basic setup, this project includes useful packages and commands to help you follow a test-driven development approach and keep your codebase clean by linting and formatting on every commit.

## Getting Started

First, install all packages:

```bash
npm install
# or
yarn
```

To start the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

## Testing

### Static Analysis

We use TypeScript, ESLint, and Prettier to keep our codebase clean and catch bugs before your program even runs. We use a husky precommit hook, which runs the TypeScript compiler for type checking, ESLint for linting, and Prettier for formatting so that no bugs or messy code ever reach our git history. Having a precommit hook also decreases the burden on your CI/CD service, which is cost-effective and less likely to be a bottleneck for larger teams. To run a complete static analysis:

```bash
npm run validate
# or
yarn validate
```

### Unit Tests

We use Jest and @testing-library to write unit and integration tests. To run your tests:

```bash
npm run test
# or
yarn test
```

The `is-ci-cli` package will either run Jest in watch mode or Jest with a test coverage report depending on whether the test script is run locally or in your CI.

### E2E Tests

We use Cypress for e2e testing. Cypress is a powerful tool for writing meaningful e2e tests that help us test entire user flows. Run

```bash
npx cypress open
```

to open the Cypress application and run your e2e tests.
