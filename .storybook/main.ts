import type { StorybookConfig } from '@storybook/react-vite';

const config: StorybookConfig = {
  stories: [
    '../src/**/*.mdx',
    '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)',
  ],
  addons: [
    '@storybook/addon-docs',
    '@storybook/addon-a11y',
    'storybook-dark-mode',
  ],
  framework: '@storybook/react-vite',
  managerHead: (head) => `
    ${head}
    <script>
      (function () {
        var _desc = Object.getOwnPropertyDescriptor(Document.prototype, 'title');
        Object.defineProperty(document, 'title', {
          get: function () { return _desc.get.call(this); },
          set: function (v) { _desc.set.call(this, v.replace(/Storybook/g, 'Cubicle')); },
        });
      })();
    </script>
  `,
};

export default config;
