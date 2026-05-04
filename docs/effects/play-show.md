---
title: Play Show
description: Plays a show from within a show.
hide_title: true
---

<DocHeading
icon="heroicons:play"
title="Play Show"
description="Plays a show from within a show.">
</DocHeading>

## Parameters

| Parameter    | Description                                                                        | Example      |
|--------------|------------------------------------------------------------------------------------|--------------|
| **Category** | The category the show belongs to.                                                  | `my_category` |
| **Show**     | The name of the show to play.                                                      | `my_show`    |
| **From**     | The effect ID the show should start from.                                          | `1`          |
| **Delay**    | The amount of ticks this effect waits after the show starts before its activation. | `40`         |

<details>

<summary>YML Preset</summary>

```yaml
'1':
  Type: PLAY_SHOW
  Category: 'my_category'
  Show: 'my_show'
  From: 1
  Delay: 0
```

</details>