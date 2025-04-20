<template>
  <div class="mx-auto text-center space-y-4">
    <h1 class="text-4xl font-bold text-blue-700">Login Page</h1>
    <UForm
      :schema="schema"
      :state="state"
      class="space-y-4 flex flex-col items-center"
      @submit="onSubmit"
    >
      <UFormField label="Email" name="email">
        <UInput v-model="state.email" />
      </UFormField>

      <UFormField label="Password" name="password">
        <UInput v-model="state.password" type="password" />
      </UFormField>

      <UButton type="submit"> Login </UButton>
    </UForm>
  </div>
</template>
<script setup lang="ts">
import * as z from "zod";
import type { FormSubmitEvent } from "@nuxt/ui";
import axios from "axios";

const schema = z.object({
  email: z.string().email("Invalid email"),
  password: z.string().min(6, "Must be at least 6 characters"),
});

type Schema = z.output<typeof schema>;

const state = reactive<Partial<Schema>>({
  email: undefined,
  password: undefined,
});

const toast = useToast();
async function onSubmit(event: FormSubmitEvent<Schema>) {
  event.preventDefault();

  const { data } = await axios.post("/api/auth/login", {
    email: event.data.email,
    password: event.data.password,
  });
  if (data.error) {
    toast.add({
      title: "Error",
      description: data.error,
      color: "error",
    });
    return;
  }
  toast.add({
    title: "Success",
    description: "Login successful. Welcome back!",
    color: "success",
  });

  navigateTo("/posts/create");
}
</script>
