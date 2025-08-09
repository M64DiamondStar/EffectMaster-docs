---
description: Spawns a pulsing light source for a set duration.
hide_title: true
---

<DocHeading
icon="mdi:lightbulb-on"
title="Light Pulse"
description="Spawns a pulsing light source for a set duration.">
</DocHeading>

## Parameters

| Parameter         | Description                                                                       | Example                |
|-------------------|-----------------------------------------------------------------------------------|------------------------|
| **Location**      | The location where the light source should appear. Format: <br />`world, x, y, z` | `world, 196, 64, -381` |
| **MaxLightLevel** | The light level, this must be a value between `0` and `15`                        | `15`                   |
| **MinLightLevel** | The light level, this must be a value between `0` and `15`                        | `1`                    |
| **WaveLength**    | Time it takes for the light to turn on and back off in ticks.                     | `20`                   |
| **Duration**      | How long this effect should stay active.                                          | `100`                  |
| **Delay**         | Number of ticks to wait after the show starts before activating the effect.       | `40`                   |

<details>
<summary>YML Preset</summary>

```yaml
'1':
  Type: LIGHT_PULSE
  Location: world, 0, 0, 0
  MaxLightLevel: 15
  MinLightLevel: 1
  WaveLength: 20
  Duration: 200
  Delay: 0
```

</details>
