<template>
  <header class="bg-white shadow-sm sticky top-0 z-50">
    <div class="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
      <NuxtLink to="/" class="text-2xl font-bold text-blue-600"
        >NuxtBlog</NuxtLink
      >
      <nav class="space-x-6 text-gray-700 font-medium">
        <NuxtLink
          v-if="isLoggedIn"
          to="/posts/create"
          class="hover:text-blue-600"
          >Create Post</NuxtLink
        >
        <NuxtLink v-else to="/login" class="hover:text-blue-600"
          >Login</NuxtLink
        >
        <NuxtLink to="/" class="hover:text-blue-600">Home</NuxtLink>
        <NuxtLink to="/posts" class="hover:text-blue-600">Posts</NuxtLink>
      </nav>
    </div>
  </header>
</template>
<script setup lang="ts">
const accessToken = useCookie("access_token");
const isLoggedIn = computed(() => {
  return !!accessToken.value;
});
</script>
