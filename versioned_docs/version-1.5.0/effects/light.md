---
description: Spawns a light source for a set duration.
hide_title: true
---

<DocHeading
icon="mdi:lightbulb-on-20"
title="Light"
description="Spawns a light source for a set duration.">
</DocHeading>

## Parameters

| Parameter      | Description                                                                       | Example                |
|----------------|-----------------------------------------------------------------------------------|------------------------|
| **Location**   | The location where the light source should appear. Format: <br />`world, x, y, z` | `world, 196, 64, -381` |
| **LightLevel** | The light level, this must be a value between `1` and `15`                        | `8`                    |
| **Duration**   | Duration in ticks for how long the light stays.                                   | `100`                  |
| **Delay**      | Number of ticks to wait after the show starts before activating the effect.       | `40`                   |

<details>
<summary>YML Preset</summary>

```yaml
'1':
  Type: LIGHT
  Location: world, 0, 0, 0
  LightLevel: 15
  Duration: 100
  Delay: 0
```

</details>
