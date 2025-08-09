---
description: Use the EffectMaster API to start a show!
hide_title: true
---

<DocHeading
icon="lets-icons:on-button-fill"
title="Starting a Show"
description="Start EffectMaster shows with ease!">
</DocHeading>

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs groupId="programming-language">
  <TabItem value="kotlin" label="Kotlin" default>

```kotlin
val show = Show("category", "name") // Get a show instance
show.play() // The general start option
show.playFrom(1) // Start a show from a specific effect ID
show.playOnly(1) // Only play one effect from a show
```

  </TabItem>

  <TabItem value="java" label="Java">
        
```java
Show show = new Show("category", "name"); // Get a show instance
show.play(); // The general start option
show.playFrom(1); // Start a show from a specific effect ID
show.playOnly(1); // Only play one effect from a show
``` 

  </TabItem>
</Tabs>
