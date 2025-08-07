<template>
  <div class="border rounded-lg overflow-hidden shadow hover:shadow-lg transition">
    <img :src="image" :alt="title" class="w-full h-48 object-cover" />
    <div class="p-4">
      <h3 class="font-bold text-lg mb-2">{{ title }}</h3>
      <p class="text-sm text-gray-600 mb-2">{{ description }}</p>
      <a :href="link" target="_blank" class="text-blue-500 hover:underline text-sm">View Project</a>
    </div>
  </div>
</template>

<script setup>
defineProps({
  title: String,
  description: String,
  image: String,
  link: String
})
</script>