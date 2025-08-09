---
description: A beautiful fountain in the shape of a bloom.
hide_title: true
---

<DocHeading
icon="icon-park-outline:bloom"
title="Fountain Bloom"
description="A beautiful fountain in the shape of a bloom.">
</DocHeading>

## Parameters

| Parameters      | Description                                                                                                                                                                                                                                                               | Example                                    |
|-----------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------|
| **Location**    | The origin of the fountain in the format `world, x, y, z`.                                                                                                                                                                                                                | `world, 196.3, 64, -381.8`                 |
| **Sequencer**   | Edit the velocity of the fountain over time. Format: `ticks: width, height`. Multiple values separated by semicolons: `ticks1: width1, height1; ticks2: width2, height2; ...`. See additional info below for advanced usage with automatic values and changing materials. | `0: 0.1, 0.8; 50: 0.6, 0.8; 100: 0.1, 0.8` |
| **Block**       | The [block](https://hub.spigotmc.org/javadocs/bukkit/org/bukkit/Material.html) to use as falling block (items won't work).                                                                                                                                                | `BLUE_STAINED_GLASS`                       |
| **BlockData**   | The [block data](https://minecraft.wiki/w/Block_states) of the block (if applicable), e.g. an open gate or rotated stair. Use `[]` to set none.                                                                                                                           | `[open=true]`                              |
| **Duration**    | The duration of the effect in ticks.                                                                                                                                                                                                                                      | `20`                                       |
| **Amount**      | Number of falling blocks to spawn each tick.                                                                                                                                                                                                                              | `15`                                       |
| **Randomizer**  | Randomizes velocity values a bit. Higher values create more variation. Recommended range: `0` to `1`.                                                                                                                                                                     | `0.5`                                      |
| **Delay**       | Number of ticks the effect waits after the show starts before activation.                                                                                                                                                                                                 | `40`                                       |

<details>
<summary>YML Preset</summary>

```yaml
'1':
  Type: FOUNTAIN_BLOOM
  Location: 'world, 0, 0, 0'
  Sequencer: '0: 0.1, 0.8; 50: 0.6, 0.8; 100: 0.1, 0.8'
  Block: BLUE_STAINED_GLASS
  BlockData: []
  Duration: 20
  Amount: 15
  Randomizer: 0
  Delay: 0
```

</details>

## Preview

![Fountain Bloom Preview](../assets/previews/fountain_bloom.gif)

---

<details>
<summary>Sequencer Additional Information</summary>
:::info

### Sequencer Additional Information

The sequencer format is:

```
tick: width, height; tick: width, height; ...
```

**Advanced usage:**

* **Automatic values:** Use `~` to let the plugin calculate the value automatically.

  Example:

  ```
  0: 0.0, 0.0;
  50: ~, 0.75;
  100: 0.3, ~;
  ```

* **Changing materials:** Add a material name as a third value to change the block used at that tick.

  Example:

  ```
  0: 0.0, 0.0, RED_WOOL;
  50: ~, ~, YELLOW_WOOL;
  100: 0.3, 0.75, ORANGE_WOOL;
  ```

:::
</details>