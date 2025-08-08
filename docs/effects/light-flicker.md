---
description: Spawns a flickering light source for a set duration.
---

# Light

| Parameter         | Information                                                                       | Example                |
|-------------------|-----------------------------------------------------------------------------------|------------------------|
| **Location**      | The location where the light source should appear. Format: <br />`world, x, y, z` | `world, 196, 64, -381` |
| **MaxLightLevel** | The light level, this must be a value between `0` and `15`                        | `15`                   |
| **MinLightLevel** | The light level, this must be a value between `0` and `15`                        | `0`                    |
| **TimeOn**        | For how long the lights will stay on.                                             | `100`                  |
| **TimeOff**       | For how long the lights will stay off.                                            | `100`                  |
| **Duration**      | How long this effect should stay active.                                          | `100`                  |
| **Delay**         | Number of ticks to wait after the show starts before activating the effect.       | `40`                   |

<details>
<summary>YML Preset</summary>

```yaml
'1':
  Type: LIGHT_FLICKER
  Location: world, 0, 0, 0
  MaxLightLevel: 15
  MinLightLevel: 0
  TimeOn: 20
  TimeOff: 20
  Duration: 200
  Delay: 0
```

</details>
