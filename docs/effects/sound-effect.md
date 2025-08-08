---
description: Play a sound effect from a location or to a specific selection of players.
---

# Sound Effect

| Parameter       | Information                                                                                                                                   | Example                        |
|-----------------|-----------------------------------------------------------------------------------------------------------------------------------------------|--------------------------------|
| **Location**    | The location where the sound will be played. Format: <br />`world, x, y, z`                                                                   | `world, 196.3, 64, -381.8`     |
| **Selector**    | The players who can hear the sound. Selectors like `@e` and `@s` do NOT work here.                                                            | `@a[distance..5]`              |
| **Sound**       | The sound to play. Can be any Minecraft sound or a custom resource pack sound.                                                                | `minecraft:entity.pig.ambient` |
| **SoundSource** | The sound category. Valid values: <br />`AMBIENT`, `BLOCKS`, `HOSTILE`, `MASTER`, `MUSIC`, `NUTRAL`, `PLAYERS`, `RECORDS`, `VOICE`, `WEATHER` | `MASTER`                       |
| **Volume**      | Volume of the sound. Must be greater than `0.0`.                                                                                              | `2.0`                          |
| **Pitch**       | Pitch of the sound, between `0.0` and `2.0`.                                                                                                  | `0.5`                          |
| **Delay**       | The number of ticks to wait after the show starts before the effect activates.                                                                | `40`                           |

<details>
<summary>YML Preset</summary>

```yaml
'1':
  Type: SOUND_EFFECT
  Location: world, 0, 0, 0
  Selector: 'null'
  Sound: minecraft:entity.pig.ambient
  SoundSource: AMBIENT
  Volume: 1.0
  Pitch: 1.0
  Delay: 0
```

</details>

## Youtube Tutorial

Doesn't exist yet :(