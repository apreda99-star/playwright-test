const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
  testDir: './tests',
  reporter: [['html', { outputFolder: 'playwright-report', open: 'never' }]],
  use: {
    // Screenshot e video:
    // 'only-on-failure' = solo quando fallisce; 'on' = sempre
    screenshot: 'on',
    video: 'on',
    // Tracce (timeline interattiva) - utile per debug
    trace: 'on-first-retry'
  },
  // Tutti gli output (screenshot, video, traces) finiranno qui:
  outputDir: 'test-results'
});
