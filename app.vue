<script setup lang="ts">
import { UToaster } from "#components";
</script>

<template>
  <UApp>
    <NuxtLayout>
      <UToaster position="bottom-right" />
      <NuxtPage />
    </NuxtLayout>
  </UApp>
</template>
