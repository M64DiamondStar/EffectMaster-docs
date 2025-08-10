---
description: Can't figure out why something isn't working? This page may have the solution!
hide_title: true
---

<DocHeading 
    icon="mingcute:warning-line" 
    title="Troubleshooting" 
    description="Can't figure out why something isn't working? This page may have the solution!">
</DocHeading>

## Before you start...

Before diving into specific fixes, go through this quick checklist — it might save you time:

1. **Check your server software build.**
   You don’t need the latest Minecraft version, but make sure your server software (Paper, Spigot, Purpur, etc.) is
   running the **latest build** for your version.
2. **Review the documentation.**
   Many issues come from a misunderstanding of how the plugin works. Skim through the relevant sections of the docs to
   ensure you’re setting things up correctly.

---

## Common pitfalls

### My fountain isn’t going in the right direction!

* Make sure your `Velocity` parameter is set correctly.
* If it is, check whether the effect’s spawn location is touching another block.
  Keep in mind: the hitbox of a falling block is **always** a full block, regardless of the material.

### "The value entered is not possible"

* This often happens when certain mods or plugins (e.g., chat decoration plugins) modify the player’s message before it
  reaches the plugin.
* If this is the case, try using the **enter command** instead:

  ```
  /em enter <value...>
  ```

---

Still stuck?
Join our [Discord](https://discord.com/invite/Scv9afJwXp) server and ask for help — we’re happy to assist!

