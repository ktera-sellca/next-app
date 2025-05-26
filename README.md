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

This project includes comprehensive Visual Regression Testing using [reg-actions](https://github.com/reg-viz/reg-actions) and Storybook to automatically detect visual changes in UI components.

### Overview

VRT automatically captures screenshots of Storybook stories and compares them against baseline images to catch unintended visual changes. This ensures design consistency and prevents visual regressions.

### Quick Start

```bash
# Run VRT locally
pnpm vrt:local

# Generate only screenshots
pnpm ci:screenshot

# Update baseline images (after approving changes)
pnpm vrt:update-baseline

# Clean VRT artifacts
pnpm vrt:clean

# Serve VRT report in browser
pnpm vrt:serve-report
```

### Available Scripts

| Script | Description |
|--------|-------------|
| `pnpm ci:screenshot` | Generate screenshots from Storybook stories |
| `pnpm vrt:local` | Run complete VRT workflow locally |
| `pnpm vrt:update-baseline` | Update baseline images |
| `pnpm vrt:clean` | Remove generated VRT files |
| `pnpm vrt:serve-report` | Serve HTML reports in browser |
| `pnpm vrt:debug` | Run with debug logging |

### GitHub Actions Workflows

VRT runs automatically on:
- Push to `main` or `develop` branches
- Pull requests targeting `main` or `develop`
- Manual dispatch with custom options

**Available workflows:**
- `ci.yml` - Standard VRT workflow
- `vrt-advanced.yml` - Multi-viewport testing with change detection

### Configuration

VRT behavior is customized in `.vrt.config.js`:

```javascript
module.exports = {
  comparison: {
    matchingThreshold: 0.05,  // Pixel sensitivity (0-1)
    thresholdRate: 0.02,      // % of different pixels
  },
  screenshot: {
    viewport: { width: 1200, height: 800 },
    delay: 1000,
  },
};
```

### Multi-Viewport Testing

The advanced workflow tests across multiple screen sizes:
- **Desktop**: 1200x800px
- **Tablet**: 768x1024px  
- **Mobile**: 375x667px

### Best Practices

1. **Deterministic Stories**: Avoid random data, animations, or current dates
2. **Comprehensive Coverage**: Test all component states (hover, disabled, etc.)
3. **Review Changes**: Always review visual diffs before approving
4. **Update Baselines**: Use `pnpm vrt:update-baseline` for intentional changes

### Troubleshooting

**Common issues:**
- **No screenshots**: Check Storybook build with `pnpm build-storybook`
- **Timeout errors**: Increase `serverTimeout` in storycap config
- **Permission errors**: Ensure GitHub Actions has write permissions
- **Flaky tests**: Increase `delay` or use `waitFor: 'networkidle2'`

### Documentation

For detailed information, see:
- [VRT Guide](./docs/VRT_GUIDE.md) - Comprehensive documentation
- [Storybook Stories](./stories/) - Component examples
- [GitHub Actions](./.github/workflows/) - Workflow configurations

### Results

VRT results are automatically:
- Posted as PR comments with visual diffs
- Included in workflow summaries
- Stored as downloadable artifacts
- Displayed in multiple viewport formats
