---
description: Start shows by entering or exiting areas? You can do that with WorldGuard!
hide_title: true
---

<DocHeading 
    icon="material-symbols:shield-outline" 
    title="WorldGuard Integration" 
    description="Start shows by entering or exiting areas? You can do that with WorldGuard!">
</DocHeading>

---

## ✅ Requirements

To use WorldGuard support, you'll need the following plugins installed:

- [WorldGuard](https://modrinth.com/plugin/worldguard)
- [WorldEdit](https://modrinth.com/plugin/worldedit) (dependency of WorldGuard)

EffectMaster will automatically hook into WorldGuard if it’s available.

---

## 🚩 Available Flags

EffectMaster adds the following **custom WorldGuard flags**:

| Flag Name              | Trigger                       | Description                                                                                                                            |
|------------------------|-------------------------------|----------------------------------------------------------------------------------------------------------------------------------------|
| `em-enter`             | On region enter               | Instantly plays the defined show.                                                                                                      |
| `em-exit`              | On region exit                | Instantly plays the defined show.                                                                                                      |
| `em-first-enter`       | First player enters region    | Plays only when a region becomes occupied.                                                                                             |
| `em-last-exit`         | Last player leaves region     | Plays only when the region becomes empty.                                                                                              |
| `em-delay-enter`       | On region enter (delayed)     | Plays a show after a delay in milliseconds. When the player leaves the area before the show starts, it will get cancelled.             |
| `em-delay-exit`        | On region exit (delayed)      | Plays a show after a delay in milliseconds. When the player re-enters the area before the show starts, it will get cancelled.          |
| `em-delay-first-enter` | First player enters (delayed) | Plays only when region becomes occupied, after a delay. When the player leaves the area before the show starts, it will get cancelled. |
| `em-delay-last-exit`   | Last player leaves (delayed)  | Plays only when region becomes empty, after a delay. When the player re-enters the area before the show starts, it will get cancelled. |

---

## 📝 Flag Syntax

### 🎯 Instant Flags

For instant show flags like `effectmaster-enter`, use:

```
<show_category> <show_name>
```

**Example:**
```
mainhub welcome
```

> This will play the show located in the `mainhub` category with the name `welcome`.

---

### ⏱️ Delayed Flags

For delayed flags like `effectmaster-delay-enter`, use:

```

<show_category> <show_name> <delay_ticks>

```

**Example:**
```

mainhub welcome 20

```

> This plays the `mainhub:welcome` show **after 20 ticks (1 second)**.

---

## 🗂️ Region Setup Example

1. Select a region using WorldEdit:
```
//wand
[select area]
```

2. Define a region:
```
/rg define magic_room
```

3. Add a flag:
```
/rg flag magic_room em-enter mainhub welcome
```

4. (Optional) Add a delayed version:
```
/rg flag magic_room em-delay-exit mainhub goodbye 2000
```

---

## ⚠️ Notes

- Flags are **case-sensitive** — make sure your category and show names match exactly.
- Multiple regions with overlapping flags will **each trigger**.

---

Need help or have ideas for more triggers? Join our [Discord](https://discord.com/invite/Scv9afJwXp)!
