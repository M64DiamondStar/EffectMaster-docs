---
title: Activator
description: Spawns a redstone torch at a given location for a (short) period of time.
hide_title: true
---

<DocHeading 
    icon="line-md:switch" 
    title="Activator" 
    description="Spawns a temporary redstone torch at a specified location for a short period of time.">
</DocHeading>

## Parameters

| Parameter    | Description                                                        | Example                |
|--------------|--------------------------------------------------------------------|------------------------|
| **Location** | The location to spawn the redstone torch. Format: `world, x, y, z` | `world, 196, 64, -381` |
| **Duration** | How long the redstone torch should stay in ticks.                  | `20`                   |
| **Delay**    | How many ticks to wait before activating this effect.              | `40`                   |

## YAML Preset

<details>
  <summary>Click to expand</summary>

```yaml
'1':
  Type: ACTIVATOR
  Location: world, 0, 0, 0
  Duration: 5
  Delay: 0
```
</details>