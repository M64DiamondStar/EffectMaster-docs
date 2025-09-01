---
description: The list of EffectMaster's commands
hide_title: true
---

<DocHeading
icon="heroicons:command-line"
title="Effects"
description="The list of EffectMaster's commands">
</DocHeading>

---

## 🧭 Commands

### `/em cancel`

**Cancels the current effect editing session.**

Useful if your chat is blocked, intercepted by another plugin, or if you're building a custom input system.

* **Permission**: `effectmaster.command.cancel`

---

### `/em create <category> <name>`

**Creates a new show** with the given category and name.

* **Permission**: `effectmaster.command.create`

---

### `/em edit <category> <show>` *(subcommands)*

Manages effects in a show. Includes creating, editing, and deleting effects.

#### ➕ Create an effect

```bash
/em edit <category> <show> create <effect type>
```

Creates a new effect of the specified type.

* **Permission**: `effectmaster.command.edit`

#### ❌ Delete an effect

```bash
/em edit <category> <show> delete <effect ID>
```

Deletes an effect with the specified ID.

* **Permission**: `effectmaster.command.edit`

#### ✏️ Edit an effect

```bash
/em edit <category> <show> edit <effect ID> <parameter> <value...>
```

Directly sets a parameter value for the specified effect.

* **Permission**: `effectmaster.command.edit`

---

### `/em editor <category> <show> [id]`

Opens the GUI editor for the specified show or effect.

* **Optional**: `[id]` — open a specific effect directly.

* **Permission**: `effectmaster.command.editor`

---

### `/em enter <value...>`

Manually enters a value for a parameter during editing (for players without chat access or with custom editing systems).

* **Permission**: `effectmaster.command.enter`

---

### `/em help`

Displays the plugin’s help page.

* **Permission**: `effectmaster.command.help`

---

### `/em location`

Returns various useful coordinates:

* Your current location.

* A location 2 blocks above you.

* Your block coordinates.

* The block you’re looking at.

* **Permission**: `effectmaster.command.location`

---

### `/em play <category> <show>` *(and variants)*

Plays a show.

* **Permission**: `effectmaster.command.play`

#### ▶️ Play from a specific effect

```bash
/em play <category> <show> from <effect ID>
```

Starts the show from a given effect ID.

#### 🎯 Play only a specific effect

```bash
/em play <category> <show> only <effect ID>
```

Plays only one effect from the show.

---

### `/em privateplay <category> <show> <selector>`

Plays a show privately for specific players using a selector (e.g. `@a[distance=..10]`).

* **Permission**: `effectmaster.command.privateplay`

---

### `/em playat <category> <show> <world> <x> <y> <z>`

Plays a show at a specific world location.

* **Permission**: `effectmaster.command.playat`

---

### `/em reload`

Reloads the `config.yml`. Show configurations are reloaded automatically.

* **Permission**: `effectmaster.command.reload`

---

### `/em stop` *(and variants)*

Stops active shows.

```bash
/em stop all
/em stop category <category>
/em stop show <category> <show>
```

* **Permission**: `effectmaster.command.reload`

---

### `/em rename <category> <show> <new name>`

Renames a show to a new name.

* **Permission**: `effectmaster.command.rename`

---

### `/em wiki`

Opens the wiki in your browser.

* **Permission**: `effectmaster.command.wiki`

---

### `/em version`

Retrieves the current plugin version.

* **Permission**: `effectmaster.command.version`