import { posts } from "~/constants";
import { createExcerpt, createSlug } from "~/lib/utils";

export default defineEventHandler(async (event) => {
  await new Promise((resolve) => setTimeout(resolve, 3000));
  const method = getMethod(event);
  if (method === "GET") {
    return {
      success: true,
      message: "List of blog posts",
      data: posts,
    };
  }
  if (method === "POST") {
    const body = await readBody(event);

    if (!body.title || !body.content) {
      return sendError(
        event,
        createError({
          statusCode: 400,
          statusMessage: "Title and content are required",
        })
      );
    }
    const newPost = {
      id: posts.length + 1,
      title: body.title,
      slug: createSlug(body.title),
      excerpt: createExcerpt(body.content),
      content: body.content,
      author: body.author || "Admin",
      createdAt: new Date().toISOString().split("T")[0],
    };
    posts.push(newPost);

    return {
      success: true,
      message: "Post created successfully",
      data: newPost,
    };
  }

  return sendError(
    event,
    createError({
      statusCode: 405,
      statusMessage: "Method Not Allowed",
    })
  );
});
