// web-test-runner.config.js
const { vite } = require('vite-web-test-runner-plugin');

export default {
  nodeResolve: true,
  coverage: true,
  files: ['test/**/*.test.js'],
  rootDir: '.',
  plugins: [vite()],
  browsers: [
    {
      chromium: {
        launchOptions: {
          headless: 'new',
        },
      },
    },
  ],
};