import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Skandage Docs',
  tagline: 'The Professional Operating System for Singapore Agents',
  url: 'https://docs.skandage.com', 
  baseUrl: '/',
  favicon: 'img/favicon.ico',

  // THE MISSING ENGINE: This tells Docusaurus how to render pages and docs
  presets: [
    [
      '@docusaurus/preset-classic', // <--- CHANGED THIS from 'classic'
      {
        docs: {
          sidebarPath: './sidebars.ts',
          routeBasePath: '/docs', 
        },
        blog: false, // Disabled to keep your docs lean
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],
  themes: [
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      {
        hashed: true, // Appends a hash to the index file for cache busting
        indexDocs: true,
        indexBlog: false, // We disabled the blog, so no need to index it
        indexPages: false, 
        docsRouteBasePath: "/docs", 
        searchBarShortcut: true, // Enables the Cmd+K shortcut
        searchBarShortcutHint: false, // Keeps the UI clean and minimalist
      },
    ],
  ],

  themeConfig: {
    colorMode: {
      defaultMode: 'dark',
      disableSwitch: true, // Removes the sun/moon toggle
      respectPrefersColorScheme: false, // Forces dark mode regardless of user OS
    },
    navbar: {
      title: 'SKANDAGE',
      logo: {
        alt: 'Skandage Logo',
        src: 'img/new-logo.png', 
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'websiteSidebar',
          position: 'left',
          label: 'Website Suite',
        },
        {
          type: 'docSidebar',
          sidebarId: 'insuranceSidebar',
          position: 'left',
          label: 'Insurance Suite',
        },
        {
          href: 'https://github.com/LakshanSivakumar/skandage-docs',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Suites',
          items: [
            { label: 'Website Suite', to: '/docs/website/intro' },
            { label: 'Insurance Suite', to: '/docs/insurance/intro' },
          ],
        },
        {
          title: 'Contact',
          items: [
            { label: 'WhatsApp', href: 'https://wa.me/6591387135' },
            { label: 'Email Support', href: 'mailto:support@skandage.com' },
          ],
        },
      ],
      copyright: `© ${new Date().getFullYear()} Skandage Technologies. Built in Singapore.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;