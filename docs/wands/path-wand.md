---
description: A wand to assist you in creating paths.
hide_title: true
---

<DocHeading
icon="lsicon:path-filled"
title="Path Wand"
description="A wand to assist you in creating paths.">
</DocHeading>

The **Path Wand** helps you visually and interactively define smooth paths for effects like particle trails, animatronic movements, or any sequence-based effect.

This wand is designed to make the creation of **spline-based paths** simple and intuitive — all from in-game.

---

## 🎯 Getting the Wand

Use the following command to get the wand:

```
/em wand path
```

This gives you a special item that lets you place and manage control points in the world.

---

## 🛠️ How to Use

:::important
Switch the wand mode by clicking **F** (switch offhand item key).
:::

The wand has four modes: 
- **Add Node** allows you to add new nodes.
  - **Right Click** on a location, or right-clicking in the air where the node will spawn at your feet.

- **Delete Node** allows you to delete existing nodes.
  - **Left Click** to select a single node.
  - **Shift + Left Click** to select multiple nodes.
  - **Double Left Click** to select all nodes.
  - **Right Click** to remove the selected nodes.\

- **Move Node** where you can select nodes by left-clicking and move them by right-clicking.
  - **Left Click** to select a single node.
  - **Right Click** to move the selected node in front of you.

- **Info** where you can preview the path and set the path parameter of an effect.
  - **Left Click** to get a message containing all the information about your path.
  - **Right Click** to switch the spline type of the preview.
  - **Shift + Right Click** to change the speed of the preview.

---

## 📐 Spline Types

You can choose how your path behaves by selecting a **spline type**. Available types:

* `BEZIER`: Path goes in an extremely smooth line but doesn't go over each point.
* `CATMULL_ROM`: Path goes from point to point in a curved line.
* `POLY`: Path goes from point to point in a straight line.

Each type affects how smoothly the path is interpolated between control points.

---

Need help or want to share your creations? Join our [Discord](https://discord.com/invite/Scv9afJwXp)!
