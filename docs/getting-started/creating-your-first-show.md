---
description: EffectMaster is a powerful plugin to create shows with—but how do you use it?
hide_title: true
---

<DocHeading
icon="ph:plant-fill"
title="Creating your First Show"
description="Create your very first show with the help of this short tutorial!">
</DocHeading>

---

## 🧠 Key Concepts to Remember

* Unlike most plugins, **EffectMaster uses both a *category* and a *show name*** to identify a show. You'll notice this
  pattern in many commands.
* **All timings are measured in Minecraft ticks**:
  `1 tick = 0.05 seconds` or `1/20 of a second`.

---

## 🎬 Creating a Show

### 🆕 Step 1: Create a New Show

Use the following command to create your first show:

```bash
/em create <category> <name>
```

* `<category>`: A group name for organizing your shows. This can be anything (e.g., `events`, `rides`, `holidays`).
* `<name>`: The name of your individual show.

---

### ✨ Step 2: Open the Editor & Add an Effect

Run:

```bash
/em editor <category> <name>
```

This opens the **in-game editor** for your show. Click on `New Effect` to begin. For this example, select the **Particle
** effect.

---

### 🛠️ Step 3: Edit the Effect

After creating an effect, you'll return to the main editor. Your new effect will appear in the list with an **ID** next
to it (this can be useful later).

Each paper item in the effect represents a **parameter**—a setting that controls how your effect behaves (e.g.,
location, duration, particle type).

* **Click a parameter** to see its description.
* **Type a value in chat** to set the parameter.
* Want to learn more about a specific effect? Visit the [Effects Overview »](../effects/)

---

## ▶️ Playing a Show

There are multiple ways to play your show depending on what you need:

1. **Test your effect quickly**
   Use the `Play` buttons in both the **effect editor** and **main show editor**.

2. **Play the entire show**

   ```bash
   /em play <category> <name>
   ```

3. **Start the show from a specific effect ID**

   ```bash
   /em play <category> <name> from <ID>
   ```

4. **Play a single effect only**

   ```bash
   /em play <category> <name> only <ID>
   ```

5. **Play a private show for selected players**

   ```bash
   /em privateplay <category> <name> <selector>
   ```

   Learn more about Minecraft selectors [here](https://minecraft.wiki/w/Target_selectors).
