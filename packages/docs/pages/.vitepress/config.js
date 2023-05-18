import { defineConfig } from 'vitepress';
import { createWriteStream } from 'fs';
import { resolve } from 'path';
import { SitemapStream } from 'sitemap';
import * as dotenv from 'dotenv';

dotenv.config();

const BASE = process.env.BASE_URL || '/docs';

const links = [];
const PROD_BASE_URL = 'https://automatisch.io/docs';

export default defineConfig({
  base: BASE,
  lang: 'en-US',
  title: 'Automatisch Docs',
  description:
    'Build workflow automation without spending time and money. No code is required.',
  ignoreDeadLinks: true,
  themeConfig: {
    siteTitle: 'Automatisch',
    nav: [
      {
        text: 'Guide',
        link: '/',
        activeMatch: '^/$|^/guide/',
      },
      {
        text: 'Apps',
        link: '/apps/deepl/actions',
        activeMatch: '/apps/',
      },
    ],
    sidebar: {
      '/apps/': [
        {
          text: 'DeepL',
          collapsible: true,
          collapsed: true,
          items: [
            { text: 'Actions', link: '/apps/deepl/actions' },
            { text: 'Connection', link: '/apps/deepl/connection' },
          ],
        },
        {
          text: 'Delay',
          collapsible: true,
          collapsed: true,
          items: [
            { text: 'Actions', link: '/apps/delay/actions' },
            { text: 'Connection', link: '/apps/delay/connection' },
          ],
        },
        {
          text: 'Discord',
          collapsible: true,
          collapsed: true,
          items: [
            { text: 'Actions', link: '/apps/discord/actions' },
            { text: 'Connection', link: '/apps/discord/connection' },
          ],
        },
        {
          text: 'Dropbox',
          collapsible: true,
          collapsed: true,
          items: [
            { text: 'Actions', link: '/apps/dropbox/actions' },
            { text: 'Connection', link: '/apps/dropbox/connection' },
          ],
        },
        {
          text: 'Flickr',
          collapsible: true,
          collapsed: true,
          items: [
            { text: 'Triggers', link: '/apps/flickr/triggers' },
            { text: 'Connection', link: '/apps/flickr/connection' },
          ],
        },
        {
          text: 'Github',
          collapsible: true,
          collapsed: true,
          items: [
            { text: 'Triggers', link: '/apps/github/triggers' },
            { text: 'Actions', link: '/apps/github/actions' },
            { text: 'Connection', link: '/apps/github/connection' },
          ],
        },
        {
          text: 'Google Drive',
          collapsible: true,
          collapsed: true,
          items: [
            { text: 'Triggers', link: '/apps/google-drive/triggers' },
            { text: 'Connection', link: '/apps/google-drive/connection' },
          ],
        },
        {
          text: 'Google Forms',
          collapsible: true,
          collapsed: true,
          items: [
            { text: 'Triggers', link: '/apps/google-forms/triggers' },
            { text: 'Connection', link: '/apps/google-forms/connection' },
          ],
        },
        {
          text: 'Google Sheets',
          collapsible: true,
          collapsed: true,
          items: [
            { text: 'Triggers', link: '/apps/google-sheets/triggers' },
            { text: 'Connection', link: '/apps/google-sheets/connection' },
          ],
        },
        {
          text: 'HTTP Request',
          collapsible: true,
          collapsed: true,
          items: [
            { text: 'Actions', link: '/apps/http-request/actions' },
            { text: 'Connection', link: '/apps/http-request/connection' },
          ],
        },
        {
          text: 'Ntfy',
          collapsible: true,
          collapsed: true,
          items: [
            { text: 'Actions', link: '/apps/ntfy/actions' },
            { text: 'Connection', link: '/apps/ntfy/connection' },
          ],
        },
        {
          text: 'OpenAI',
          collapsible: true,
          collapsed: true,
          items: [
            { text: 'Actions', link: '/apps/openai/actions' },
            { text: 'Connection', link: '/apps/openai/connection' },
          ],
        },
        {
          text: 'RSS',
          collapsible: true,
          collapsed: true,
          items: [
            { text: 'Triggers', link: '/apps/rss/triggers' },
            { text: 'Connection', link: '/apps/rss/connection' },
          ],
        },
        {
          text: 'Salesforce',
          collapsible: true,
          collapsed: true,
          items: [
            { text: 'Triggers', link: '/apps/salesforce/triggers' },
            { text: 'Actions', link: '/apps/salesforce/actions' },
            { text: 'Connection', link: '/apps/salesforce/connection' },
          ],
        },
        {
          text: 'Scheduler',
          collapsible: true,
          collapsed: true,
          items: [
            { text: 'Triggers', link: '/apps/scheduler/triggers' },
            { text: 'Connection', link: '/apps/scheduler/connection' },
          ],
        },
        {
          text: 'SignalWire',
          collapsible: true,
          collapsed: true,
          items: [
            { text: 'Triggers', link: '/apps/signalwire/triggers' },
            { text: 'Actions', link: '/apps/signalwire/actions' },
            { text: 'Connection', link: '/apps/signalwire/connection' },
          ],
        },
        {
          text: 'Slack',
          collapsible: true,
          collapsed: true,
          items: [
            { text: 'Actions', link: '/apps/slack/actions' },
            { text: 'Connection', link: '/apps/slack/connection' },
          ],
        },
        {
          text: 'SMTP',
          collapsible: true,
          collapsed: true,
          items: [
            { text: 'Actions', link: '/apps/smtp/actions' },
            { text: 'Connection', link: '/apps/smtp/connection' },
          ],
        },
        {
          text: 'Spotify',
          collapsible: true,
          collapsed: true,
          items: [
            { text: 'Actions', link: '/apps/spotify/actions' },
            { text: 'Connection', link: '/apps/spotify/connection' },
          ],
        },
        {
          text: 'Strava',
          collapsible: true,
          collapsed: true,
          items: [
            { text: 'Actions', link: '/apps/strava/actions' },
            { text: 'Connection', link: '/apps/strava/connection' },
          ],
        },
        {
          text: 'Stripe',
          collapsible: true,
          collapsed: true,
          items: [
            { text: 'Triggers', link: '/apps/stripe/triggers' },
            { text: 'Connection', link: '/apps/stripe/connection' },
          ],
        },
        {
          text: 'Telegram',
          collapsible: true,
          collapsed: true,
          items: [
            { text: 'Actions', link: '/apps/telegram-bot/actions' },
            { text: 'Connection', link: '/apps/telegram-bot/connection' },
          ],
        },
        {
          text: 'Todoist',
          collapsible: true,
          collapsed: true,
          items: [
            { text: 'Triggers', link: '/apps/todoist/triggers' },
            { text: 'Actions', link: '/apps/todoist/actions' },
            { text: 'Connection', link: '/apps/todoist/connection' },
          ],
        },
        {
          text: 'Twilio',
          collapsible: true,
          collapsed: true,
          items: [
            { text: 'Triggers', link: '/apps/twilio/triggers' },
            { text: 'Actions', link: '/apps/twilio/actions' },
            { text: 'Connection', link: '/apps/twilio/connection' },
          ],
        },
        {
          text: 'Twitter',
          collapsible: true,
          collapsed: true,
          items: [
            { text: 'Triggers', link: '/apps/twitter/triggers' },
            { text: 'Actions', link: '/apps/twitter/actions' },
            { text: 'Connection', link: '/apps/twitter/connection' },
          ],
        },
        {
          text: 'Typeform',
          collapsible: true,
          collapsed: true,
          items: [
            { text: 'Triggers', link: '/apps/typeform/triggers' },
            { text: 'Connection', link: '/apps/typeform/connection' },
          ],
        },
        {
          text: 'Webhooks',
          collapsible: true,
          collapsed: true,
          items: [
            { text: 'Triggers', link: '/apps/webhooks/triggers' },
            { text: 'Connection', link: '/apps/webhooks/connection' },
          ],
        },
      ],
      '/': [
        {
          text: 'Getting Started',
          collapsible: true,
          items: [
            {
              text: 'What is Automatisch?',
              link: '/',
              activeMatch: '/',
            },
            { text: 'Installation', link: '/guide/installation' },
            { text: 'Key concepts', link: '/guide/key-concepts' },
            { text: 'Create flow', link: '/guide/create-flow' },
          ],
        },
        {
          text: 'Integrations',
          collapsible: true,
          items: [
            { text: 'Available apps', link: '/guide/available-apps' },
            {
              text: 'Request integration',
              link: '/guide/request-integration',
            },
          ],
        },
        {
          text: 'Advanced',
          collapsible: true,
          items: [
            { text: 'Configuration', link: '/advanced/configuration' },
            { text: 'Credentials', link: '/advanced/credentials' },
            { text: 'Telemetry', link: '/advanced/telemetry' },
          ],
        },
        {
          text: 'Contributing',
          collapsible: true,
          items: [
            {
              text: 'Contribution guide',
              link: '/contributing/contribution-guide',
            },
            {
              text: 'Development setup',
              link: '/contributing/development-setup',
            },
            {
              text: 'Repository structure',
              link: '/contributing/repository-structure',
            },
          ],
        },
        {
          text: 'Build Integrations',
          collapsible: true,
          items: [
            {
              text: 'Folder structure',
              link: '/build-integrations/folder-structure',
            },
            {
              text: 'App',
              link: '/build-integrations/app',
            },
            {
              text: 'Global variable',
              link: '/build-integrations/global-variable',
            },
            {
              text: 'Auth',
              link: '/build-integrations/auth',
            },
            {
              text: 'Triggers',
              link: '/build-integrations/triggers',
            },
            {
              text: 'Actions',
              link: '/build-integrations/actions',
            },
            {
              text: 'Examples',
              link: '/build-integrations/examples',
            },
          ],
        },
        {
          text: 'Other',
          collapsible: true,
          items: [
            { text: 'License', link: '/other/license' },
            { text: 'Community', link: '/other/community' },
          ],
        },
      ],
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/automatisch/automatisch' },
      { icon: 'twitter', link: 'https://twitter.com/automatischio' },
      { icon: 'discord', link: 'https://discord.gg/dJSah9CVrC' },
    ],
    editLink: {
      pattern:
        'https://github.com/automatisch/automatisch/edit/main/packages/docs/pages/:path',
      text: 'Edit this page on GitHub',
    },
    footer: {
      copyright: 'Copyright © 2022 Automatisch. All rights reserved.',
    },
  },

  async transformHead(ctx) {
    if (ctx.pageData.relativePath === '') return; // Skip 404 page.

    const isHomepage = ctx.pageData.relativePath === 'index.md';
    let canonicalUrl = PROD_BASE_URL;

    if (!isHomepage) {
      canonicalUrl =
        `${canonicalUrl}/` + ctx.pageData.relativePath.replace('.md', '');
    }

    // Added for logging purposes to check if there is something
    // wrong with the canonical URL in the deployment pipeline.
    console.log('');
    console.log('File path: ', ctx.pageData.relativePath);
    console.log('Canonical URL: ', canonicalUrl);

    return [
      [
        'link',
        {
          rel: 'canonical',
          href: canonicalUrl,
        },
      ],
    ];
  },

  async transformHtml(_, id, { pageData }) {
    if (!/[\\/]404\.html$/.test(id)) {
      let url = pageData.relativePath.replace(/((^|\/)index)?\.md$/, '$2');

      const isHomepage = url === '';

      if (isHomepage) {
        url = '/docs';
      }

      links.push({
        url,
        lastmod: pageData.lastUpdated,
      });
    }
  },

  async buildEnd({ outDir }) {
    const sitemap = new SitemapStream({
      hostname: `${PROD_BASE_URL}/`,
    });

    const writeStream = createWriteStream(resolve(outDir, 'sitemap.xml'));
    sitemap.pipe(writeStream);
    links.forEach((link) => sitemap.write(link));
    sitemap.end();
  },
});
