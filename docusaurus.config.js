import {themes as prismThemes} from 'prism-react-renderer';

require('dotenv').config()

/** @type {import('@docusaurus/types').Config} */
const config = {
    title: 'EffectMaster',
    tagline: 'Create beautiful visuals for your Minecraft Server',
    favicon: '/img/favicon.ico',
    future: {v4: true},
    url: 'https://effectmaster.m64.dev/',
    baseUrl: '/',
    organizationName: 'M64DiamondStar',
    projectName: 'EffectMaster-docs',
    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',
    i18n: {defaultLocale: 'en', locales: ['en']},

    presets: [
        [
            'classic',
            ({
                docs: {
                    lastVersion: 'current',
                    versions: {
                        current: {
                            label: '1.5.0',
                            path: '1.5.0',
                        },
                    },
                    sidebarPath: './sidebars.js',
                    editUrl: 'https://github.com/M64DiamondStar/EffectMaster-docs/tree/master/',
                },
                theme: {customCss: './src/css/custom.css'},
            }),
        ],
    ],

    themeConfig: {
        image: 'img/effectmaster-social-card.png',
        navbar: {
            title: 'EffectMaster',
            logo: {alt: 'EffectMaster logo', src: 'img/logo.png'},
            items: [
                {
                    type: 'docSidebar',
                    sidebarId: 'sidebar',
                    position: 'left',
                    label: 'Documentation',
                    autoCollapseCategories: false,
                    hideable: true,
                },
                {
                    href: 'https://github.com/M64DiamondStar/EffectMaster-docs/',
                    label: 'GitHub',
                    position: 'right'
                },
                {
                    type: 'docsVersionDropdown',
                    versions: ['current'],
                    position: 'right'
                },
            ],
        },
        algolia: {
            appId: process.env.APPLICATION_ID,
            apiKey: process.env.SEARCH_API_KEY,
            indexName: 'EffectMaster Documentation',

        },
        colorMode: {
            defaultMode: 'dark',
            disableSwitch: true,
            respectPrefersColorScheme: false,
        },
        prism: {
            theme: prismThemes.github,
            darkTheme: prismThemes.dracula,
            additionalLanguages: ['java'],
        },
    },
};

export default config;
