<template>
   <div class="text-center py-20">
    <h1 class="text-4xl font-bold text-blue-700 mb-4">Welcome to NuxtBlog</h1>
    <p class="text-gray-600">Your modern blog built with Nuxt 3</p>
    <NuxtLink to="/posts" class="bg-green-500 rounded-md px-3 py-1 text-white mt-2">see posts</NuxtLink>
  </div>
</template>
<script setup>definePageMeta({layout:"default"});</script>