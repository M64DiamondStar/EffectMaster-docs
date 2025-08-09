
const sidebars = {
  sidebar: [
    {
      type: 'html',
      value: 'EffectMaster',
      className: 'separator',
    },


    {
      type: 'doc',
      label: 'Home',
      id: 'home',
      customProps: {
        icon: 'heroicons-outline:home',
      }
    },


  /*
    GETTING STARTED
   */
    {
      type: 'category',
      label: 'Getting Started',
      link: {type:'doc', id: 'getting-started'},
      customProps: {
        icon: 'tabler:flag-filled',
      },
      items: [
        {
          type: 'doc',
          label: 'Creating Your First Show',
          id: 'getting-started/creating-your-first-show',
          customProps: {
            icon: 'ph:plant-fill',
          },
        },
      ],
    },


    /*
      EFFECTS
    */
    {
      type: 'category',
      label: 'Effects',
      link: {type:'doc', id: 'effects'},
      customProps: {
        icon: 'fluent:sparkle-16-regular',
      },
      items: [
        {
          type: 'doc',
          label: 'Activator',
          id: 'effects/activator',
          customProps: {
            icon: 'line-md:switch',
          },
        },
        {
          type: 'doc',
          label: 'Animatronic',
          id: 'effects/animatronic',
          customProps: {
            icon: 'ri:walk-fill',
          },
        },
        {
          type: 'doc',
          label: 'Animatronic Group',
          id: 'effects/animatronic-group',
          customProps: {
            icon: 'ic:sharp-people',
          },
        },
        {
          type: 'doc',
          label: 'Block Line',
          id: 'effects/block-line',
          customProps: {
            icon: 'icon-park-solid:block-five',
          },
        },
        {
          type: 'doc',
          label: 'Block Path',
          id: 'effects/block-path',
          customProps: {
            icon: 'icon-park-solid:block-one',
          },
        },
        {
          type: 'doc',
          label: 'Console Command',
          id: 'effects/console-command',
          customProps: {
            icon: 'heroicons:command-line',
          },
        },
        {
          type: 'doc',
          label: 'Falling Block',
          id: 'effects/falling-block',
          customProps: {
            icon: 'fluent:cube-quick-28-regular',
          },
        },
        {
          type: 'doc',
          label: 'Fill Block',
          id: 'effects/fill-block',
          customProps: {
            icon: 'fa6-solid:bucket',
          },
        },
        {
          type: 'doc',
          label: 'Firework',
          id: 'effects/firework',
          customProps: {
            icon: 'streamline:fireworks-rocket',
          },
        },
        {
          type: 'doc',
          label: 'Fountain',
          id: 'effects/fountain',
          customProps: {
            icon: 'mdi:fountain',
          },
        },
        {
          type: 'doc',
          label: 'Fountain Bloom',
          id: 'effects/fountain-bloom',
          customProps: {
            icon: 'icon-park-outline:bloom',
          },
        },
        {
          type: 'doc',
          label: 'Fountain Dancing',
          id: 'effects/fountain-dancing',
          customProps: {
            icon: 'typcn:waves-outline',
          },
        },
        {
          type: 'doc',
          label: 'Fountain Line',
          id: 'effects/fountain-line',
          customProps: {
            icon: 'tabler:fountain',
          },
        },
        {
          type: 'doc',
          label: 'Fountain Path',
          id: 'effects/fountain-path',
          customProps: {
            icon: 'tabler:fountain-filled',
          },
        },
        {
          type: 'doc',
          label: 'Item Fountain',
          id: 'effects/item-fountain',
          customProps: {
            icon: 'hugeicons:ice-cubes',
          },
        },
        {
          type: 'doc',
          label: 'Item Fountain Line',
          id: 'effects/item-fountain-line',
          customProps: {
            icon: 'fa6-solid:cubes-stacked',
          },
        },
        {
          type: 'doc',
          label: 'Item Fountain Path',
          id: 'effects/item-fountain-path',
          customProps: {
            icon: 'fa7-solid:cubes-stacked',
          },
        },
        {
          type: 'doc',
          label: 'Light',
          id: 'effects/light',
          customProps: {
            icon: 'mdi:lightbulb-on-20',
          },
        },
        {
          type: 'doc',
          label: 'Light Flicker',
          id: 'effects/light-flicker',
          customProps: {
            icon: 'mdi:lightbulb-on-60',
          },
        },
        {
          type: 'doc',
          label: 'Light Pulse',
          id: 'effects/light-pulse',
          customProps: {
            icon: 'mdi:lightbulb-on',
          },
        },
        {
          type: 'doc',
          label: 'Particle',
          id: 'effects/particle',
          customProps: {
            icon: 'octicon:sparkle-fill-16',
          },
        },
        {
          type: 'doc',
          label: 'Particle Emitter',
          id: 'effects/particle-emitter',
          customProps: {
            icon: 'ph:sparkle-fill',
          },
        },
        {
          type: 'doc',
          label: 'Particle Line',
          id: 'effects/particle-line',
          customProps: {
            icon: 'fluent:sparkle-action-16-filled',
          },
        },
        {
          type: 'doc',
          label: 'Particle Path',
          id: 'effects/particle-path',
          customProps: {
            icon: 'fluent:arrow-trending-sparkle-24-filled',
          },
        },
        {
          type: 'doc',
          label: 'Replace Fill',
          id: 'effects/replace-fill',
          customProps: {
            icon: 'pepicons-pop:color-picker',
          },
        },
        {
          type: 'doc',
          label: 'Set Block',
          id: 'effects/set-block',
          customProps: {
            icon: 'mdi:cube',
          },
        },
        {
          type: 'doc',
          label: 'Snow Launcher',
          id: 'effects/snow-launcher',
          customProps: {
            icon: 'mingcute:snow-line',
          },
        },
        {
          type: 'doc',
          label: 'Sound Effect',
          id: 'effects/sound-effect',
          customProps: {
            icon: 'lets-icons:sound-fill',
          },
        },
        {
          type: 'doc',
          label: 'Sound Emitter',
          id: 'effects/sound-emitter',
          customProps: {
            icon: 'icon-park-outline:sound',
          },
        },
      ]
    },


    /*
      COMMANDS
    */
    {
      type: 'doc',
      label: 'Commands',
      id: 'commands',
      customProps: {
        icon: 'heroicons:command-line',
      },
    },


    /*
      SETTINGS
    */
    {
      type: 'category',
      label: 'Settings',
      link: {type: 'doc', id: 'settings'},
      customProps: {
        icon: 'tabler:adjustments',
      },
      items: [
        {
          type: 'doc',
          label: 'Show Looping',
          id: 'settings/show-looping',
          customProps: {
            icon: 'line-md:cog-loop',
          },
        },
        {
          type: 'doc',
          label: 'Relative Shows',
          id: 'settings/relative-shows',
          customProps: {
            icon: 'line-md:my-location-loop',
          },
        },
      ],
    },


    /*
      WANDS
    */
    {
      type: 'category',
      label: 'Wands',
      link: {type: 'doc', id: 'wands'},
      customProps: {
        icon: 'tabler:wand',
      },
      items: [
        {
          type: 'doc',
          label: 'Path Wand',
          id: 'wands/path-wand',
          customProps: {
            icon: 'lsicon:path-filled',
          },
        },
      ],
    },


    /*
      PLUGIN INTEGRATIONS
    */
    {
      type: 'category',
      label: 'Plugin Integrations',
      link: {type: 'doc', id: 'plugin-integrations'},
      customProps: {
        icon: 'lucide:book-copy',
      },
      items: [
        {
          type: 'doc',
          label: 'Animatronics',
          id: 'plugin-integrations/animatronics',
          customProps: {
            icon: 'ri:walk-line',
          },
        },
        {
          type: 'doc',
          label: 'ProtocolLib',
          id: 'plugin-integrations/protocollib',
          customProps: {
            icon: 'mdi:cube',
          },
        },
        {
          type: 'doc',
          label: 'TrainCarts',
          id: 'plugin-integrations/traincarts',
          customProps: {
            icon: 'lucide:train-track',
          },
        },
        {
          type: 'doc',
          label: 'WorldGuard',
          id: 'plugin-integrations/worldguard',
          customProps: {
            icon: 'material-symbols:shield-outline',
          },
        },
      ],
    },


    /*
      VIDEOS AND TUTORIALS
    */
    {
      type: 'doc',
      label: 'Videos and Tutorials',
      id: 'videos-and-tutorials',
      customProps: {
        icon: 'mdi:youtube',
      },
    },


    /*
      CREATIONS
    */
    {
      type: 'doc',
      label: 'Creations',
      id: 'creations',
      customProps: {
        icon: 'mdi:paint-outline',
      },
    },


    /*
      DEVELOPER API
    */
    {
      type: 'category',
      label: 'Developer API',
      link: {type: 'doc', id: 'developer-api'},
      customProps: {
        icon: 'heroicons-solid:code',
      },
      items: [
        {
          type: 'doc',
          label: 'Starting a Show',
          id: 'developer-api/starting-a-show',
          customProps: {
            icon: 'lets-icons:on-button-fill',
          },
        },
        {
          type: 'doc',
          label: 'Creating a Custom Effect',
          id: 'developer-api/creating-a-custom-effect',
          customProps: {
            icon: 'fluent:sparkle-16-regular',
          },
        },
      ],
    },


    /*
      TROUBLESHOOTING
    */
    {
      type: 'doc',
      label: 'Troubleshooting',
      id: 'troubleshooting',
      customProps: {
        icon: 'mingcute:warning-line',
      },
    },


    /*
      DONATION
    */
    {
      type: 'doc',
      label: 'Donation',
      id: 'donation',
      customProps: {
        icon: 'iconoir:donate',
      },
    },


    /*
      NEED A SERVER?
    */
    {
      type: 'doc',
      label: 'Need a server?',
      id: 'need-a-server',
      customProps: {
        icon: 'solar:server-bold',
      },
    },


    /*
      EXTERNAL LINKS
    */
    {
      type: 'html',
      value: 'Links',
      className: 'separator',
    },
    {
      type: 'link',
      label: 'Download',
      href: 'https://modrinth.com/plugin/effectmaster',
      customProps: {
        icon: 'gravity-ui:arrow-shape-down-to-line',
      }
    },
    {
      type: 'link',
      label: 'Github',
      href: 'https://github.com/M64DiamondStar/EffectMaster',
      customProps: {
        icon: 'mdi:github',
      }
    },
    {
      type: 'link',
      label: 'Discord',
      href: 'https://discord.com/invite/Scv9afJwXp',
      customProps: {
        icon: 'ic:baseline-discord',
      }
    },
    {
      type: 'link',
      label: 'M64\'s Portfolio',
      href: 'https://m64.dev/',
      customProps: {
        icon: 'material-symbols:person-outline-rounded',
      }
    },
  ],

};

export default sidebars;
