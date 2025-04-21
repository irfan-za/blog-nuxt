export const usePostsStore = defineStore("posts", {
  state: () => ({
    posts: [] as any[],
  }),
  getters: {
    getPosts: (state) => state.posts,
    getPostBySlug: (state) => {
      return (slug: string) => state.posts.find((post) => post.slug === slug);
    },
  },
  actions: {
    addPost(post: any) {
      this.posts.push(post);
    },
    setPosts(posts: any[]) {
      this.posts = posts;
    },
    clearPosts() {
      this.posts = [];
    },
  },
});
