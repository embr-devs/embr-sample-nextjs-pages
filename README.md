# Embr × Next.js — Pages Router sample

A minimal Next.js 15 **Pages Router** sample for
[Embr](https://github.com/coreai-microsoft/embr), proving classic SSR works
alongside the App Router flavor.

Exercises:

- **Request-time SSR** via `getServerSideProps`
- **Client-side hydration** via a `useState` counter
- **ISR** via `getStaticProps` + `revalidate: 30`
- A dedicated **`/api/health`** API route for Embr's health check

See the companion [App Router sample](https://github.com/seligj95/embr-sample-nextjs-app-router) for
React Server Components and Suspense-streamed SSR.

## Deploy to Embr

```bash
npm install -g @coreai-microsoft/embr-cli
embr login
embr quickstart deploy <your-user>/embr-sample-nextjs-pages
```

## `embr.yaml`

```yaml
platform: nodejs
platformVersion: "20"
buildCommand: "npm ci && npm run build"
run:
  port: 3000
  startCommand: "npm start"          # package.json → "next start -p ${PORT:-3000}"
healthCheck:
  path: "/api/health"                 # must be a backend route, not a page
  expectedStatusCode: 200
```

The runtime contract is identical to the App Router recipe — `.next/` is the
same build output, and Embr auto-extracts `.next/static/` to CDN either way.

## Local dev

```bash
npm install
npm run dev
```
