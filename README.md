## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## The issue

With `@react-pdf/renderer@latest`, re-rendering a `View`/`Text` conditionally after an initial render errors out, while with `@react-pdf/renderer@3.4.4` it works.
