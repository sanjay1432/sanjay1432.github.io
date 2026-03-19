# Sanjay Kumar — Personal Website

A professional personal website built with Next.js (App Router), Tailwind CSS, and static export for GitHub Pages deployment.

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS 3
- **Language**: TypeScript
- **Output**: Static HTML (`next export`)
- **Hosting**: GitHub Pages compatible

## Local Development

### Prerequisites

- Node.js 18 or later
- npm (included with Node.js)

### Setup

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Build

```bash
npm run build
```

The static site will be generated in the `out/` directory.

## GitHub Pages Deployment

### Option 1: User Site (`<username>.github.io`)

1. Create a repository named `<username>.github.io`
2. No changes to `next.config.js` needed (basePath stays empty)
3. Build the project:
   ```bash
   npm run build
   ```
4. Push the contents of the `out/` directory to the repository's main branch

### Option 2: Project Site (`<username>.github.io/<repo-name>`)

1. Set the base path environment variable before building:
   ```bash
   # PowerShell
   $env:NEXT_PUBLIC_BASE_PATH="/<repo-name>"; npm run build

   # Bash / Linux / macOS
   NEXT_PUBLIC_BASE_PATH=/<repo-name> npm run build
   ```
2. Push the contents of the `out/` directory to the `gh-pages` branch

### Using GitHub Actions (Recommended)

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: "pages"
  cancel-in-progress: false

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: npm
      - run: npm ci
      - run: npm run build
      - uses: actions/upload-pages-artifact@v3
        with:
          path: out

  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    needs: build
    steps:
      - id: deployment
        uses: actions/deploy-pages@v4
```

> **Note**: If deploying to a project site (not `<username>.github.io`), add the `NEXT_PUBLIC_BASE_PATH` environment variable to the build step:
> ```yaml
> - run: npm run build
>   env:
>     NEXT_PUBLIC_BASE_PATH: /<repo-name>
> ```

## Updating Content

### Personal Information

| What | Where |
|---|---|
| Email address | `src/app/contact/page.tsx` |
| LinkedIn URL | `src/app/contact/page.tsx` |
| GitHub URL | `src/app/contact/page.tsx`, `src/components/Footer.tsx` |
| Name / Title | `src/app/layout.tsx`, `src/components/Header.tsx`, `src/components/Footer.tsx` |

### Page Content

| Page | File |
|---|---|
| Home — strengths cards | `src/app/page.tsx` → `strengths` array |
| About — philosophy items | `src/app/about/page.tsx` → `philosophy` array |
| Services — service list | `src/app/services/page.tsx` → `services` array |
| Experience — case studies | `src/app/experience/page.tsx` → `caseStudies` array |

### Adding or Removing Pages

1. Create or delete the corresponding folder under `src/app/`
2. Update the `navigation` array in `src/components/Header.tsx`

## Project Structure

```
src/
├── app/
│   ├── globals.css          # Global styles (Tailwind directives)
│   ├── layout.tsx           # Root layout (metadata, font, header, footer)
│   ├── page.tsx             # Home page
│   ├── about/page.tsx       # About page
│   ├── services/page.tsx    # Services page
│   ├── experience/page.tsx  # Experience / Case Studies page
│   └── contact/page.tsx     # Contact page
└── components/
    ├── Header.tsx            # Site header with navigation
    └── Footer.tsx            # Site footer
```

## License

All rights reserved.
