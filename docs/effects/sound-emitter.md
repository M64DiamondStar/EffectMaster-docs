---
description: Emit sounds for a specific duration with an optional interval
---

# Sound Emitter

| Parameter       | Information                                                                                                                                                  | Example                        |
|-----------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------|--------------------------------|
| **Location**    | The location to play the Sound Effect at. Format: <br />`world, x, y, z`                                                                                     | `world, 196.3, 64, -381.8`     |
| **Selector**    | The selection of players who are able to hear the sound. The `@e` and `@s` selectors do NOT work.                                                            | `@a[distance..5]`              |
| **Sound**       | The sound to play. Can be a Minecraft built-in sound or a custom resource pack sound.                                                                        | `minecraft:entity.pig.ambient` |
| **SoundSource** | The category of the sound. Valid values include: <br />`AMBIENT`, `BLOCKS`, `HOSTILE`, `MASTER`, `MUSIC`, `NUTRAL`, `PLAYERS`, `RECORDS`, `VOICE`, `WEATHER` | `MASTER`                       |
| **Volume**      | The volume of the sound. Must be greater than `0.0`.                                                                                                         | `2.0`                          |
| **Pitch**       | The pitch of the sound, must be between `0.0` and `2.0`.                                                                                                     | `0.5`                          |
| **Duration**    | The total duration (in ticks) the effect should last.                                                                                                        | `40`                           |
| **Interval**    | How often (in ticks) the sound should be played during the duration. For example, `5` means every 5 ticks.                                                   | `1`                            |
| **Delay**       | The amount of ticks to wait after the show starts before activating the effect.                                                                              | `40`                           |

<details>
<summary>YML Preset</summary>

```yaml
'1':
  Type: SOUND_EMITTER
  Location: world, 0, 0, 0
  Selector: 'null'
  Sound: minecraft:entity.pig.ambient
  SoundSource: AMBIENT
  Volume: 1.0
  Pitch: 1.0
  Duration: 40
  Interval: 1
  Delay: 0
```

</details>

## Youtube Tutorial

Hopefully coming soon...?
