This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

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

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Visual Regression Testing (VRT)

This project uses [reg-actions](https://github.com/reg-viz/reg-actions) for automated visual regression testing with GitHub Actions.

### How it works

1. **Storybook Stories**: Components are documented and tested through Storybook stories
2. **Screenshot Generation**: [storycap](https://github.com/reg-viz/storycap) captures screenshots of all stories
3. **Visual Comparison**: Screenshots are compared against baseline images using reg-actions
4. **Automated Reports**: Visual differences are reported in PR comments and workflow summaries

### Local Development

To run visual regression tests locally:

```bash
# Generate screenshots from current stories
pnpm ci:screenshot

# Run visual regression test (requires baseline images)
pnpm test:vrt

# Complete local VRT workflow
pnpm vrt:local
```

### GitHub Actions Workflow

The VRT workflow automatically runs on:
- Push to `main` or `develop` branches
- Pull requests targeting `main` or `develop`

The workflow will:
1. Build Storybook
2. Generate screenshots with storycap
3. Compare against baseline images
4. Post results as PR comments
5. Upload artifacts for manual review

### Configuration

- **storycap**: Configure screenshot generation in `.storycaprc.js`
- **reg-actions**: Adjust thresholds and settings in `.github/workflows/reg_action.yml`
- **Viewport**: Default is 1200x800px, configurable in storycap settings

### Best Practices

1. **Stable Stories**: Ensure stories render consistently (avoid random data, animations)
2. **Baseline Management**: Approve changes carefully as they become new baselines
3. **Threshold Tuning**: Adjust `matching-threshold` and `threshold-rate` based on your needs
4. **CI Performance**: Consider limiting screenshot generation to changed components for large projects
