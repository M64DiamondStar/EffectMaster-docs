---
description: Can't figure out why something isn't working? This page may have the solution!
hide_title: true
---

<DocHeading 
    icon="mingcute:warning-line" 
    title="Troubleshooting" 
    description="Can't figure out why something isn't working? This page may have the solution!">
</DocHeading>

---

## Common pitfalls

#### The plugin spams my chat with a weird message

* Valid for a message like "[Server] EffectMaster is the coolest plugin!"
* This is likely a [Console Command](effects/console-command.md) effect that hasn't been properly configured. Check your
  show’s effects for any console commands and remove them if they are not needed.

#### Can the plugin do ...? / How to do ...?

* The plugin can do a lot of things, but it cannot do everything. If you are looking for a specific feature, check the
  [Effects](./effects.md) page to see if it is supported. If it isn't, you can request it on our [Discord](https://discord.com/invite/Scv9afJwXp) server.

#### My firework effect isn't always visible

* Firework effects are only visible to players within 64 blocks horizontally. Sadly there isn't really anything you can do about it except for a client-side mod that increases the render distance of fireworks.

#### My fountain isn’t going in the right direction

* Make sure your `Velocity` parameter is set correctly.
* If it is, check whether the effect’s spawn location is touching another block.
  Keep in mind: the hitbox of a falling block is **always** a full block, regardless of the material.

#### "The value entered is not possible"

* This often happens when certain mods or plugins (e.g., chat decoration plugins) modify the player’s message before it
  reaches the plugin.
* If this is the case, try using the **enter command** instead:

  ```
  /em enter <value...>
  ```
  
#### I accidentally placed a repeating command block playing the show over and over
- You can [lock the show](./settings/show-locking.md) to prevent it from being played any longer.

---

## Can't find the answer here?

1. **Check your server software build.**
   You don’t need the latest Minecraft version, but make sure your server software (Paper, Spigot, Purpur, etc.) is
   running the **latest build** for your version.
2. **Review the documentation.**
   Many issues come from a misunderstanding of how the plugin works. Skim through the relevant sections of the docs to
   ensure you’re setting things up correctly.

---

Still stuck?
Join our [Discord](https://discord.com/invite/Scv9afJwXp) server and ask for help — we’re happy to assist!

