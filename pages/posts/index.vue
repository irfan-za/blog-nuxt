<template>
  <div class="container mx-auto px-4 py-8">
    <h1 class="text-3xl font-bold mb-8">Blog Posts</h1>

    <!-- Loading state -->
    <div v-if="pending" class="flex justify-center items-center h-64">
      <div
        class="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gray-900"
      ></div>
    </div>

    <!-- Error state -->
    <div
      v-else-if="error"
      class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded"
    >
      <p>Failed to load posts: {{ error.message }}</p>
    </div>

    <!-- Posts grid -->
    <div v-else class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      <div
        v-for="post in posts.data"
        :key="post.id"
        class="bg-white rounded-lg overflow-hidden shadow-md transition-shadow hover:shadow-lg"
      >
        <div class="p-6">
          <div class="flex justify-between items-center mb-4">
            <span class="text-sm text-gray-500">{{ post.createdAt }}</span>
            <span class="text-sm text-gray-500">By {{ post.author }}</span>
          </div>
          <h2 class="text-xl font-semibold mb-2 hover:text-blue-600">
            <NuxtLink :to="`/posts/${post.slug}`">{{ post.title }}</NuxtLink>
          </h2>
          <p class="text-gray-600 mb-4">{{ post.excerpt }}</p>
          <NuxtLink
            :to="`/posts/${post.slug}`"
            class="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md transition-colors"
          >
            Read More
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
definePageMeta({ layout: "posts" });
useSeoMeta({
  title: "Posts",
  description: "Explore our latest blog posts.",
  keywords: "blog, posts, articles",
});
// Fetch blog posts
const { data: posts, pending, error } = await useFetch("/api/post");
</script>
