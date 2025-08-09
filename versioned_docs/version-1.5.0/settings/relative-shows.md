---
description: Play your shows at any location you want with the relative show options!
hide_title: true
---

<DocHeading
icon="line-md:my-location-loop"
title="Relative Shows"
description="Start the same show... at another location!">
</DocHeading>

## Center Location Setting

The **center location** determines the reference point for all relative positions in a show. When you use the `playat` command to play a show at a different location, all effects will be offset from this center point.

You can configure the center location in the **Settings Editor** of the show.

![Relative Shows](../assets/relative_shows.avif)

---

## `/em playat` Command

To play a show at a different location, use the `/em playat` command:

```
/em playat <category> <name> <world> <x> <y> <z>
```

This tells EffectMaster to use the provided coordinates as the **new center**, shifting all effects accordingly.

### Example

If your show is built around a central point and you want to replay it elsewhere, use:

```
/em playat fireworks celebration world 120 64 -300
```

This will reproduce the entire effect setup relative to the new location without needing to duplicate or modify the show
itself.
