module.exports = {
  serverCmd: 'pnpm dlx serve storybook-static -l 6006',
  serverTimeout: 120000,
  serverOptions: {
    useCwd: true,
  },
  waitFor: 'body',
  capture: {
    viewport: {
      width: 1200,
      height: 800,
    },
    delay: 2000,
    waitFor: 'networkidle2',
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
      '--disable-web-security',
      '--disable-features=VizDisplayCompositor',
    ],
  },
  outDir: '__screenshots__',
  flat: false,
  include: ['**/*'],
  exclude: [],
  silent: false,
  verbose: true,
};