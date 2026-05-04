---
title: Fountain Fan
description: A fan-shaped fountain. Multiple jets are spread across a configurable arc, with full control over direction, rotation, and spread over time.
hide_title: true
---

<DocHeading
icon="mingcute:fan-2-line"
title="Fountain Fan"
description="A fan-shaped fountain of which you can control the direction, rotation, and spread overtime.">
</DocHeading>

## Parameters

| Parameter               | Description                                                                                                                                                                                                                                                                                                       | Example                                                                                                                                            |
|-------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------|
| **Location**            | The origin of the fountain in the format `world, x, y, z`.                                                                                                                                                                                                                                                        | `world, 196.3, 64, -381.8`                                                                                                                         |
| **DirectionSequencer**  | Edit the center direction and speed of the fan over time. Format: `ticks: width, height, depth`. The vector's magnitude determines launch speed; its direction determines where the center jet points. Multiple values separated by semicolons are supported. See the hint below for automatic values and changing materials. | `0: 0.0, 0.0, 0.0; 25: 0.0, 0.75, 0.0; 50: 0.3, 0.75, 0.0; 75: 0.0, 0.75, 0.0; 100: -0.3, 0.75, 0.0; 125: 0.0, 0.75, 0.0`                      |
| **RotationSequencer**   | Rotates the fan around its own pointing direction over time, like spinning a pinwheel. Format: `ticks: angle`. The angle is in degrees. Multiple values separated by semicolons are supported.                                                                                                                     | `0: 0.0; 25: 90.0; 50: 180.0; 75: 270.0; 100: 360.0`                                                                                              |
| **SpreadSequencer**     | Edit the arc angle and number of jets of the fan over time. Format: `ticks: arc angle, jet count`. The arc angle is the total angular width of the fan in degrees (e.g. `180` is a semicircle). The jet count is the number of jets spread evenly across that arc. Multiple values separated by semicolons are supported. | `0: 30.0, 6;`                                                                                                                                      |
| **Block**               | The [block](https://hub.spigotmc.org/javadocs/bukkit/org/bukkit/Material.html) to use as falling block (items won't work).                                                                                                                                                                                         | `BLUE_STAINED_GLASS`                                                                                                                               |
| **BlockData**           | The [block data](https://minecraft.wiki/w/Block_states) of the block (if it has any), e.g. an open gate or rotated stair. Use `[]` to set none.                                                                                                                                                                    | `[open=true]`                                                                                                                                      |
| **Duration**            | The duration of the effect in ticks.                                                                                                                                                                                                                                                                               | `125`                                                                                                                                              |
| **Amount**              | The number of blocks each individual jet spawns per tick. Increase this to make jets look denser without changing the fan shape.                                                                                                                                                                                   | `1`                                                                                                                                                |
| **Randomizer**          | Randomizes velocity values slightly. Higher values create more variation. Recommended range: `0` to `1`.                                                                                                                                                                                                           | `0.5`                                                                                                                                              |
| **Brightness**          | The brightness of the spawned blocks. Set to `-1` to use natural lighting. Valid range: `-1` to `15`.                                                                                                                                                                                                              | `-1`                                                                                                                                               |
| **Rotate**              | Whether the falling blocks should automatically rotate while airborne.                                                                                                                                                                                                                                             | `false`                                                                                                                                            |
| **RotateSpeed**         | Multiplier for the rotational speed of the falling blocks. Only used when `Rotate` is `true`. At `1.0`, blocks rotate at a random rate between `-0.1` and `0.1` rad/tick.                                                                                                                                         | `1.0`                                                                                                                                              |
| **Delay**               | Number of ticks the effect waits after the show starts before activation.                                                                                                                                                                                                                                          | `40`                                                                                                                                               |

<details>
<summary>YML Preset</summary>

```yaml
'1':
  Type: FOUNTAIN_FAN
  Location: 'world, 0, 0, 0'
  DirectionSequencer: '0: 0.0, 0.0, 0.0; 25: 0.0, 0.75, 0.0; 50: 0.3, 0.75, 0.0; 75: 0.0, 0.75, 0.0; 100: -0.3, 0.75, 0.0; 125: 0.0, 0.75, 0.0'
  RotationSequencer: '0: 0.0; 25: 90.0; 50: 180.0; 75: 270.0; 100: 360.0'
  SpreadSequencer: '0: 30.0, 6;'
  Block: BLUE_STAINED_GLASS
  BlockData: []
  Duration: 125
  Amount: 1
  Randomizer: 0
  Brightness: -1
  Rotate: false
  RotateSpeed: 1.0
  Delay: 0
```

</details>

---

<details>
<summary>DirectionSequencer Additional Information</summary>
:::info

### DirectionSequencer Additional Information

The sequencer format is:

```
tick: width, height, depth; tick: width, height, depth; ...
```

The direction vector (`width, height, depth`) defines both the **pointing direction** and the **launch speed** of the
center jet. The other jets are fanned out symmetrically around it, always perpendicular to the direction regardless of
where it points.

**Advanced usage:**

* **Automatic values:** Use `~` to let the plugin calculate the value automatically.

  Example:

  ```
  0: 0.0, 0.0, 0.0;
  50: ~, 0.75, 0.2;
  100: 0.3, ~, -0.2;
  ```

* **Changing materials:** Add a material name as a fourth value to change the block used at that tick.

  Example:

  ```
  0: 0.0, 0.0, 0.0, RED_WOOL;
  50: ~, ~, ~, YELLOW_WOOL;
  100: 0.3, 0.75, 0.3, ORANGE_WOOL;
  ```

:::
</details>