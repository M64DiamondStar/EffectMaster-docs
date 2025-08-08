---
description: The best plugin to create awesome rides with!
---

# TrainCarts

## General Sign

Do you want to immerse your players even more in the fantastic world of rides? You can use the `playshow` traincarts sign
to start shows when activated by a train!

Here's the format of the sign:

```
[train]
playshow
<category>
<name>
```

## Only play with passengers

Do you want the show to only be played when there are passengers in the train? No problem! Add the `-p` parameter
to the sign like this:

```
[train]
playshow -p
<category>
<name>
```

## OpenAudioMc Fix

:::warning
If you're using OpenAudioMC, you'll probably notice that the sign does not work for EffectMaster shows. This can be
easily fixed by using `emshow` instead of `playshow`!
:::

Of course, you'll also need [TrainCarts](https://www.spigotmc.org/resources/traincarts.39592/) and its
dependency [BKCommonLib](https://www.spigotmc.org/resources/bkcommonlib.39590/).