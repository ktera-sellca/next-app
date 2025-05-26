module.exports = {
  serverCmd: 'pnpm dlx http-server storybook-static -p 6006 -s',
  serverTimeout: 60000,
  capture: {
    viewport: {
      width: 1200,
      height: 800,
    },
    delay: 1000,
    waitFor: 'body',
    include: ['**/*'],
    exclude: [],
  },
  puppeteerLaunchConfig: {
    headless: 'new',
    args: [
      '--no-sandbox',
      '--disable-setuid-sandbox',
      '--disable-dev-shm-usage',
      '--disable-gpu',
      '--no-first-run',
      '--no-default-browser-check',
      '--disable-default-apps',
    ],
  },
  outDir: '__screenshots__',
  flat: false,
  include: ['**/*'],
  exclude: [],
};