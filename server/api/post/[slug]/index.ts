import { posts } from "~/constants";
export default defineEventHandler(async (event) => {
  //  delay to simulate a network request
  await new Promise((resolve) => setTimeout(resolve, 3000));
  const slug = getRouterParam(event, "slug");
  const post = posts.find((post) => post.slug === slug);

  return {
    success: true,
    message: "Get post success",
    data: post,
  };
});
