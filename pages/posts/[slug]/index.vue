<template>
  <main>
    <UContainer v-if="post" class="py-8">
      <!-- Post Header -->
      <div class="space-y-4 mb-8">
        <UBreadcrumb
          :items="[
            { label: 'Home', to: '/' },
            { label: 'Blog', to: '/posts' },
            { label: post.title, to: '#' },
          ]"
        />

        <h1 class="text-4xl font-bold tracking-tight sm:text-5xl">
          {{ post.title }}
        </h1>

        <div class="flex items-center gap-3">
          <UAvatar
            v-if="post.author?.avatar"
            :src="post.author.avatar"
            size="sm"
          />
          <span class="text-sm text-gray-500 dark:text-gray-400">
            {{ post.author?.name || "Anonymous" }} •
            {{ formatDate(post.publishedAt || post.createdAt) }}
          </span>
        </div>

        <div class="flex flex-wrap gap-2">
          <UBadge
            v-for="tag in post.tags"
            :key="tag"
            color="primary"
            variant="soft"
            >{{ tag }}</UBadge
          >
        </div>
      </div>

      <!-- Featured image -->
      <UCard v-if="post.image" class="mb-8 overflow-hidden p-0 border-0">
        <img
          :src="post.image"
          alt="Featured image"
          class="w-full h-auto object-cover rounded-lg max-h-96"
        />
      </UCard>

      <!-- Post content -->
      <MDC :value="post.content" class="prose dark:prose-invert max-w-none" />

      <!-- Comments and sharing section -->
      <div class="mt-10 border-t pt-8">
        <h2 class="text-2xl font-bold mb-6">Share this post</h2>
        <div class="flex gap-3">
          <UButton icon="i-heroicons-share" color="gray" variant="ghost"
            >Share</UButton
          >
          <UButton icon="i-heroicons-heart" color="red" variant="ghost"
            >Like</UButton
          >
          <UButton icon="i-heroicons-bookmark" color="blue" variant="ghost"
            >Save</UButton
          >
        </div>
      </div>

      <!-- Related posts -->
      <div class="mt-10 border-t pt-8" v-if="post.relatedPosts?.length">
        <h2 class="text-2xl font-bold mb-6">Related Posts</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <UCard
            v-for="relatedPost in post.relatedPosts"
            :key="relatedPost.id"
            :to="`/posts/${relatedPost.slug}`"
          >
            <template #header>
              <img
                v-if="relatedPost.image"
                :src="relatedPost.image"
                class="w-full h-48 object-cover"
              />
            </template>
            <h3 class="text-lg font-bold">{{ relatedPost.title }}</h3>
            <p class="line-clamp-2 text-gray-500 dark:text-gray-400">
              {{ relatedPost.excerpt }}
            </p>
          </UCard>
        </div>
      </div>
    </UContainer>

    <!-- Loading state -->
    <UContainer v-else-if="pending" class="py-20">
      <div class="flex flex-col items-center">
        <ULoader size="lg" />
        <p class="mt-4">Loading post...</p>
      </div>
    </UContainer>

    <!-- Error state -->
    <UContainer v-else class="py-20">
      <UAlert
        title="Post not found"
        description="We couldn't find the blog post you're looking for."
        icon="i-heroicons-exclamation-triangle"
        color="red"
      >
        <template #action>
          <UButton to="/posts" color="red" variant="ghost">
            Return to blog
          </UButton>
        </template>
      </UAlert>
    </UContainer>
  </main>
</template>

<script setup>
const route = useRoute();
const slug = route.params.slug;
const { posts, getPostBySlug, addPost } = usePostsStore();
const post = ref(null);
const pending = ref(true);
async function fetchPost() {
  pending.value = true;
  try {
    if (posts.length > 0) {
      post.value = getPostBySlug(slug);
    } else {
      const { data, error } = await useFetch(`/api/post/${slug}`);

      if (error.value) {
        toast.add({
          message: "Failed to load post",
          type: "error",
          duration: 3000,
        });
        return;
      }

      if (data.value && data.value.data) {
        post.value = data.value.data;
        addPost(data.value.data);
      }
    }
  } finally {
    pending.value = false;
  }
}

fetchPost();

watch(
  post,
  (newPost) => {
    if (newPost) {
      useSeoMeta({
        title: newPost.title,
        ogTitle: newPost.title,
        description: newPost.excerpt,
        ogDescription: newPost.excerpt,
        ogImage:
          "https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      });
    }
  },
  { immediate: true }
);

function formatDate(dateString) {
  if (!dateString) return "Unknown date";

  const date = new Date(dateString);
  return new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(date);
}
</script>

<style scoped>
:deep(.prose) {
  font-size: 1rem;
  line-height: 1.75;
}

:deep(.prose h2) {
  font-size: 1.5rem;
  font-weight: 700;
  margin-top: 2rem;
  margin-bottom: 1rem;
}

:deep(.prose h3) {
  font-size: 1.25rem;
  font-weight: 700;
  margin-top: 1.5rem;
  margin-bottom: 0.75rem;
}

:deep(.prose p) {
  margin-top: 1rem;
  margin-bottom: 1rem;
}

:deep(.prose img) {
  border-radius: 0.5rem;
}

:deep(.prose a) {
  color: rgb(37, 99, 235);
}

:deep(.prose a:hover) {
  color: rgb(29, 78, 216);
}

.dark :deep(.prose a) {
  color: rgb(96, 165, 250);
}

.dark :deep(.prose a:hover) {
  color: rgb(147, 197, 253);
}

:deep(.prose blockquote) {
  border-left-width: 4px;
  border-left-color: rgb(229, 231, 235);
  padding-left: 1rem;
  font-style: italic;
  color: rgb(75, 85, 99);
}

.dark :deep(.prose blockquote) {
  border-left-color: rgb(55, 65, 81);
  color: rgb(156, 163, 175);
}

:deep(.prose ul) {
  list-style-type: disc;
  padding-left: 1.5rem;
  margin-top: 1rem;
  margin-bottom: 1rem;
}

:deep(.prose ol) {
  list-style-type: decimal;
  padding-left: 1.5rem;
  margin-top: 1rem;
  margin-bottom: 1rem;
}
</style>
