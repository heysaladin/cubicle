import type { Preview } from '@storybook/react-vite';
import React, { useEffect } from 'react';
import { useDarkMode } from 'storybook-dark-mode';
import '../src/index.css';

// Syncs storybook-dark-mode state with .dark class on <html>
const DarkModeSync = ({ children }: { children: React.ReactNode }) => {
  const isDark = useDarkMode();
  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
      document.body.style.backgroundColor = 'var(--background)';
    } else {
      document.documentElement.classList.remove('dark');
      document.body.style.backgroundColor = 'var(--background)';
    }
  }, [isDark]);
  return <>{children}</>;
};

const withDarkMode = (Story: React.ComponentType) => (
  <DarkModeSync>
    <Story />
  </DarkModeSync>
);

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    darkMode: {
      dark: { class: 'dark' },
      light: { class: '' },
      classTarget: 'html',
      stylePreview: true,
    },
    backgrounds: { disabled: true },
  },
  decorators: [withDarkMode],
};

export default preview;
