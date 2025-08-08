---
description: Use the EffectMaster API to start a show!
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Starting a show

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
