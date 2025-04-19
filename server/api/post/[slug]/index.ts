import { posts } from "~/constants";
export default defineEventHandler((event) => {
  const slug = getRouterParam(event, "slug");
  const post = posts.find((post) => post.slug === slug);

  return {
    success: true,
    message: "Get post success",
    data: post,
  };
});
