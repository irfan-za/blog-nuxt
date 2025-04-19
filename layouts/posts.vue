<template>
    <Header/>
    <div class="flex-1">
      <h1 class="text-lg font-bold text-center">Here is Blog Posts</h1>
      <slot />
    </div>
  </template>
  <script setup>
  definePageMeta({ layout: 'posts' })
  </script>