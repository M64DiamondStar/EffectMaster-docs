
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
          id: 'effects/activator'
        },
        {
          type: 'doc',
          label: 'Animatronic',
          id: 'effects/animatronic'
        },
        {
          type: 'doc',
          label: 'Animatronic Group',
          id: 'effects/animatronic-group'
        },
        {
          type: 'doc',
          label: 'Block Line',
          id: 'effects/block-line'
        },
        {
          type: 'doc',
          label: 'Block Path',
          id: 'effects/block-path'
        },
        {
          type: 'doc',
          label: 'Console Command',
          id: 'effects/console-command'
        },
        {
          type: 'doc',
          label: 'Falling Block',
          id: 'effects/falling-block'
        },
        {
          type: 'doc',
          label: 'Fill Block',
          id: 'effects/fill-block'
        },
        {
          type: 'doc',
          label: 'Firework',
          id: 'effects/firework'
        },
        {
          type: 'doc',
          label: 'Fountain',
          id: 'effects/fountain'
        },
        {
          type: 'doc',
          label: 'Fountain Bloom',
          id: 'effects/fountain-bloom'
        },
        {
          type: 'doc',
          label: 'Fountain Dancing',
          id: 'effects/fountain-dancing'
        },
        {
          type: 'doc',
          label: 'Fountain Line',
          id: 'effects/fountain-line'
        },
        {
          type: 'doc',
          label: 'Fountain Path',
          id: 'effects/fountain-path'
        },
        {
          type: 'doc',
          label: 'Item Fountain',
          id: 'effects/item-fountain'
        },
        {
          type: 'doc',
          label: 'Item Fountain Line',
          id: 'effects/item-fountain-line'
        },
        {
          type: 'doc',
          label: 'Item Fountain Path',
          id: 'effects/item-fountain-path'
        },
        {
          type: 'doc',
          label: 'Light',
          id: 'effects/light'
        },
        {
          type: 'doc',
          label: 'Light Flicker',
          id: 'effects/light-flicker'
        },
        {
          type: 'doc',
          label: 'Light Pulse',
          id: 'effects/light-pulse'
        },
        {
          type: 'doc',
          label: 'Particle',
          id: 'effects/particle'
        },
        {
          type: 'doc',
          label: 'Particle Emitter',
          id: 'effects/particle-emitter'
        },
        {
          type: 'doc',
          label: 'Particle Line',
          id: 'effects/particle-line'
        },
        {
          type: 'doc',
          label: 'Particle Path',
          id: 'effects/particle-path'
        },
        {
          type: 'doc',
          label: 'Replace Fill',
          id: 'effects/replace-fill'
        },
        {
          type: 'doc',
          label: 'Set Block',
          id: 'effects/set-block'
        },
        {
          type: 'doc',
          label: 'Snow Launcher',
          id: 'effects/snow-launcher'
        },
        {
          type: 'doc',
          label: 'Sound Effect',
          id: 'effects/sound-effect'
        },
        {
          type: 'doc',
          label: 'Sound Emitter',
          id: 'effects/sound-emitter'
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
        },
        {
          type: 'doc',
          label: 'Relative Shows',
          id: 'settings/relative-shows',
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
        },
        {
          type: 'doc',
          label: 'Creating a Custom Effect',
          id: 'developer-api/creating-a-custom-effect',
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
