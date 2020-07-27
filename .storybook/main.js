module.exports = {
  stories: ['../src/**/*.stories.ts'],
  presets: [
    {
      name: "@ergosign/storybook-addon-pseudo-states-angular/preset-postcss",
      options: {
        postCssLoaderOptions: {
          //prefix: 'pseudo-sates--', // default for angular
          blacklist: [':nth-child', ':nth-of-type']
        }
      }
    }
  ],
  addons: ['@storybook/addon-actions', '@storybook/addon-links', '@storybook/addon-notes'],
};
