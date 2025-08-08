---
description: Do you have a show you want to automatically start every x ticks? You can do that with show loops!
---

# Show Looping

## How to Edit Show Looping

1. Open the show editor by running the command:

   ```
   /em editor <category> <name>
   ```
2. Click the **Settings** button.
3. On the settings page, you can:
    * Enable or disable show looping
    * Edit the looping delay
    * Edit the looping interval

---

## How Does Show Looping Work?

When the server starts, EffectMaster automatically registers all shows with looping enabled. Once the server has fully
started, EffectMaster creates a recurring task that checks every tick whether a show needs to be played again.

### Looping Delay

The **looping delay** is the number of ticks to wait after server startup before the show plays for the first time.

### Looping Interval

After the initial play, the show will repeat according to the **looping interval** — the number of ticks between each
loop.

EffectMaster determines whether to run the show by checking if:

```
(current tick count - looping delay) % looping interval == 0
```

> Note: If you change looping settings while the server is running, it may sometimes seem like looping doesn’t trigger
immediately, but it is functioning correctly based on the tick calculations.
