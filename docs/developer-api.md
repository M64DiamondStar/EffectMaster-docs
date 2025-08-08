---
hide_title: true
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<DocHeading
icon="mdi:paint-outline"
title="Developer API"
description="If you're not a nerd, get outta here!">
</DocHeading>

## 📦 Repository

<Tabs groupId="build-automation-tools">
  <TabItem value="gradle-groovy" label="Gradle (Groovy)" default>

```groovy
repositories {
    mavenCentral()
    maven { url 'https://jitpack.io' }
}
```

  </TabItem>
  <TabItem value="gradle-kotlin" label="Gradle (Kotlin)">

```kotlin
repositories {
    mavenCentral()
    maven { url = uri("https://jitpack.io") }
}
```

  </TabItem>
  <TabItem value="maven" label="Maven">

```xml
<repositories>
    <repository>
        <id>jitpack.io</id>
        <url>https://jitpack.io</url>
    </repository>
</repositories>
```

  </TabItem>
</Tabs>

---

## 🔗 Dependency

<Tabs groupId="build-automation-tools">
  <TabItem value="gradle-groovy" label="Gradle (Groovy)" default>

```groovy
dependencies {
    implementation 'com.github.M64DiamondStar:EffectMaster:1.4.9'
}
```

  </TabItem>
  <TabItem value="gradle-kotlin" label="Gradle (Kotlin)">

```kotlin
dependencies {
    implementation("com.github.M64DiamondStar:EffectMaster:1.4.9")
}
```

  </TabItem>
  <TabItem value="maven" label="Maven">

```xml
<dependencies>
    <dependency>
        <groupId>com.github.M64DiamondStar</groupId>
        <artifactId>EffectMaster</artifactId>
        <version>1.4.9</version>
    </dependency>
</dependencies>
```

  </TabItem>
</Tabs>

---

## ⚠️ Java or Kotlin?

:::danger Java or Kotlin?
While you **can** use Java to interact with EffectMaster, it is **highly recommended** to use **Kotlin** if you're
familiar with it.
EffectMaster is written in Kotlin, making API interactions more seamless and idiomatic in Kotlin.
:::

---

## 🚀 Using the API

Please select one of the following guides to get started:

* [Starting a Show](./developer-api/starting-a-show.md)
* [Creating a Custom Effect](./developer-api/creating-a-custom-effect.md)