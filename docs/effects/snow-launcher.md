---
description: Emits snow particles with spread over a specific time span.
hide_title: true
---

<DocHeading
icon="mingcute:snow-line"
title="Snow Launcher"
description="Emits snow particles with spread over a specified timespan.">
</DocHeading>

## Parameters

| Parameter     | Description                                                                                        | Example                |
|---------------|----------------------------------------------------------------------------------------------------|------------------------|
| **Location**  | The location where the snow particles will be emitted. Format: <br />`world, x, y, z`              | `world, 196, 64, -381` |
| **Velocity**  | The direction and speed in which the snow particles are launched. Format: <br />`x, y, z`          | `0, 1, 0`              |
| **Amount**    | The number of particles spawned per shot.                                                          | `5`                    |
| **Spread**    | Randomizes the particle direction slightly to create spread. Keep values low for better effect.    | `0.3`                  |
| **Force**     | If `true`, particles are forcibly rendered by players regardless of distance or visibility.        | `false`                |
| **Duration**  | Total duration in ticks that the effect runs for.                                                  | `40`                   |
| **Interval**  | How often (in ticks) the effect shoots particles. For example, `5` means every 5 ticks.            | `5`                    |
| **StartUp**   | Time in ticks for ramping up to the full amount of particles per shot. Set `0` to disable ramp-up. | `20`                   |
| **Delay**     | Ticks to wait after the show starts before activating the effect.                                  | `40`                   |

<details>
<summary>YML Preset</summary>

```yaml
'1':
  Type: SNOW_LAUNCHER
  Location: world, 0, 0, 0
  Velocity: 0, 1, 0
  Amount: 3
  Force: false
  Duration: 100
  Interval: 1
  StartUp: 0
  Delay: 0
```

</details>