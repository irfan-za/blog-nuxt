<template>
  <h3 class="font-bold text-xl mt-6 mb-2">Create New Blog</h3>
  <UForm :schema="schema" :state="state" class="space-y-4" @submit="onSubmit">
    <UFormField label="Title" name="title">
      <UInput v-model="state.title" />
    </UFormField>

    <UFormField label="Content" name="content">
      <UTextarea v-model="state.content" />
    </UFormField>

    <UButton type="submit"> Submit </UButton>
  </UForm>
</template>

<script setup lang="ts">
import * as z from "zod";
import type { FormSubmitEvent } from "@nuxt/ui";
import axios from "axios";

const schema = z.object({
  title: z.string().min(1, "Title is required"),
  content: z.string().min(1, "Content is required"),
});

type Schema = z.output<typeof schema>;

const state = reactive<Partial<Schema>>({
  title: undefined,
  content: undefined,
});

const toast = useToast();

async function onSubmit(event: FormSubmitEvent<Schema>) {
  const isValid = await schema.safeParseAsync(event.data);
  if (!isValid.success) {
    toast.add({
      title: "Error",
      description: "Please fill in all required fields.",
      color: "error",
    });
    return;
  }
  const { title, content } = event.data;
  try {
    const res = await axios.post("/api/post", { title, content });

    if (!res.data.success) {
      toast.add({
        title: "Error",
        description: "Failed to create the post.",
        color: "error",
      });
      return;
    }

    toast.add({
      title: "Success",
      description: "The form has been submitted.",
      color: "success",
    });
    state.title = undefined;
    state.content = undefined;
  } catch (error: any) {
    if (error.response) {
      // The request was made and the server responded with a status code
      toast.add({
        title: "Error",
        description: `Server responded with an error: ${error.response.status}`,
        color: "error",
      });
    } else if (error.request) {
      // The request was made but no response was received
      // `error.request` is an instance of XMLHttpRequest in the browser and an instance of http.ClientRequest in node.js
      toast.add({
        title: "Error",
        description: "No response received from the server.",
        color: "error",
      });
    } else {
      // Something happened in setting up the request that triggered an Error
      toast.add({
        title: "Error",
        description: `Error: ${error.message}`,
        color: "error",
      });
    }
  }
}
</script>
