---
description: Lock shows to prevent crashes or worse...
hide_title: true
---

<DocHeading icon="at-icons:lock"
title="Show Locking"
description="Lock shows to prevent crashes or worse...">
</DocHeading>

### Why?
Imagine you've placed a repeating command block which fires your beautiful fountain effect every tick. Problem is that that effect spawns 50.000 entities every...
That's where show locking saves the day! Instead of having to find that command block and remove it through all the lag, just lock the show.

Locked shows can not be played in any way, and will display a message saying the show is locked in most instances.

### Locking through the settings
First way is through the editor UI. Head to settings and you'll see an option to toggle the locked status of the show.

### Locking through commands
To lock a show, use:
```
/em lock <category> <show>
```

To unlock a show, use:
```
/em unlock <category> <show>
```