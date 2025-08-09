---
description: Emits falling blocks like the Fountain effect, but follows a path.
hide_title: true
---

<DocHeading
icon="tabler:fountain-filled"
title="Fountain Path"
description="Emits falling blocks of which the base location follows a specified path.">
</DocHeading>

## Parameters

| Parameter      | Description                                                                                                                                                                                                                                      | Example                                                          |
|----------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------|
| **Path**       | The path the fountain’s origin follows, formatted as `world, x1, y1, z1; x2, y2, z2; x3, y3, z3`. Separate multiple locations with a semicolon (`;`).                                                                                            | `world, 196.3, 64, -381.8; 199.3, 65, -375.8; 205.8, 61, -361.8` |
| **Velocity**   | Sets the velocity of the falling blocks to launch them in a specific direction. Keep values reasonable (around a max of 10). Format is `x, y, z`.                                                                                                | `1, 1.5, 0`                                                      |
| **Block**      | The [Minecraft block](https://hub.spigotmc.org/javadocs/bukkit/org/bukkit/Material.html) used as the falling block. Items are not supported.                                                                                                     | `BLUE_STAINED_GLASS`                                             |
| **BlockData**  | Optional block state data (e.g., open gate, rotated stair). Use `[]` for none. See [block states](https://minecraft.wiki/w/Block_states) for details.                                                                                            | `[open=true]`                                                    |
| **Randomizer** | Adds random variation to the velocity. Values between `0` and `1` are recommended for natural effects.                                                                                                                                           | `0.5`                                                            |
| **Speed**      | Speed at which the origin moves along the path, measured in blocks per second.                                                                                                                                                                   | `5`                                                              |
| **Frequency**  | When speed is high, gaps can appear between spawned entities or particles. Frequency controls how many entities/particles spawn per block to fill these gaps. This activates only if the default spawn rate is lower than the frequency setting. | `5`                                                              |
| **SplineType** | The spline type which will be used for the path. This can be `POLY_CHAIN` for straight lines, `BEZIER` for extremely smooth lines which don't go over the exact points or `CATMULL_ROM` for smooth lines which do go over the points.            | `CATMULL_ROM`                                                    |
| **Delay**      | Number of ticks to wait after the show starts before activating the effect.                                                                                                                                                                      | `40`                                                             |

> ### Frequency details
> 
> Minecraft spawns a new entity or particle every tick. At very high speeds, this can cause visible gaps between entities or particles. The frequency parameter ensures more entities/particles spawn per block to maintain a continuous appearance.
> 
> For example, a particle moving 10 blocks with a speed of 1 and frequency 5 will not trigger frequency because the spawn density is already high (20 particles per block). At speed 10, only 2 particles per block spawn normally, so frequency kicks in to add more and fill gaps.

<details>
<summary>YML Preset</summary>

```yaml
'1':
  Type: FOUNTAIN_PATH
  Path: 'world, 0, 0, 0; 3, 3, 3'
  Velocity: 0, 0, 0
  Block: BLUE_STAINED_GLASS
  BlockData: []
  Randomizer: 0
  Speed: 1
  Frequency: 5
  Smooth: true
  Delay: 0
```

</details>

---

## Preview

![Fountain Path Preview](../assets/previews/fountain_path.gif)

---

## Youtube Tutorial

This video is not done yet \:sad:

