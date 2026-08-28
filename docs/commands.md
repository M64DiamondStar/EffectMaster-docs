---
description: The list of EffectMaster's commands
hide_title: true
---

<DocHeading
icon="heroicons:command-line"
title="Commands"
description="The list of EffectMaster's commands">
</DocHeading>

---

## Commands

### `/em cancel`

Cancels the current effect editing session.

Useful if your chat is blocked, intercepted by another plugin, or if you're building a custom input system.

**Permission:** `effectmaster.command.cancel`

---

### `/em create <category> <name>`

Creates a new show with the given category and name.

**Permission:** `effectmaster.command.create`

---

### `/em delete <category> <name>`

Deletes an existing show with the given category and name.

**Permission:** `effectmaster.command.delete`

---

### `/em edit <category> <show>`

Manages effects within a show. Includes creating, editing, and deleting effects.

**Permission:** `effectmaster.command.edit`

#### Create an effect

```bash
/em edit <category> <show> create <effect type>
```

Creates a new effect of the specified type.

#### Delete an effect

```bash
/em edit <category> <show> delete <effect ID>
```

Deletes the effect with the specified ID.

#### Edit an effect

```bash
/em edit <category> <show> edit <effect ID> <parameter> <value...>
```

Directly sets a parameter value for the specified effect.

---

### `/em editor <category> <show> [id]`

Opens the GUI editor for the specified show. Optionally, provide an effect `[id]` to open that effect directly.

**Permission:** `effectmaster.command.editor`

---

### `/em enter <value...>`

Manually enters a value for a parameter during an active editing session. Intended for players without chat access or
with a custom editing system.

**Permission:** `effectmaster.command.enter`

---

### `/em help`

Displays the plugin's help page.

**Permission:** `effectmaster.command.help`

---

### `/em location`

Returns a set of useful coordinates:

- Your current location.
- A location 2 blocks above you.
- Your block coordinates.
- The block you are looking at.

**Permission:** `effectmaster.command.location`

---

### `/em play <category> <show>`

Plays a show.

**Permission:** `effectmaster.command.play`

#### Play from a specific effect

```bash
/em play <category> <show> from <effect ID>
```

Starts the show from the given effect ID.

#### Play only a specific effect

```bash
/em play <category> <show> only <effect ID>
```

Plays only the specified effect from the show.

---

### `/em privateplay <category> <show> <selector>`

Plays a show privately for specific players using a selector (e.g. `@a[distance=..10]`).

**Permission:** `effectmaster.command.privateplay`

---

### `/em playat <category> <show> <world> <x> <y> <z>`

Plays a show at a specific location in the world.

**Permission:** `effectmaster.command.playat`

---

### `/em reload`

Reloads the `config.yml`. Show configurations are reloaded automatically.

**Permission:** `effectmaster.command.reload`

---

### `/em stop`

Stops active shows.

```bash
/em stop all
/em stop category <category>
/em stop show <category> <show>
```

| Flag | Description |
|--------|-------------|
| `--deep` | Also stops all child shows started by this show, for example via the [Play Show](./effects/play-show.md) effect. |

**Permission:** `effectmaster.command.stop`

---

### `/em lock <category> <show>`

Locks a show. See [show locking](./settings/show-locking.md).

**Permission:** `effectmaster.command.lock`

---

### `/em unlock <category> <show>`

Unlocks a show. See [show locking](./settings/show-locking.md).

**Permission:** `effectmaster.command.unlock`

---

### `/em rename <category> <show> <new name>`

Renames a show to the given name.

**Permission:** `effectmaster.command.rename`

---

### `/em debug [on/off/list/clear]`

When debug mode is active for you, you will receive EffectMaster error messages in chat, saying where they come from. Useful when effects aren't working like they should.
- Use `on/off` or just `/em debug` to toggle
- Use `list` to see all reported errors
- Use `clear` to clear the list of reported errors

**Permission:** `effectmaster.command.debug`

---

### `/em wiki`

Opens the wiki in your browser.

**Permission:** `effectmaster.command.wiki`

---

### `/em version`

Displays the current plugin version.

**Permission:** `effectmaster.command.version`