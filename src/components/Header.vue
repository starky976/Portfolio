<template>
  <header class="bg-gray-800 text-white">
    <nav class="container mx-auto flex justify-between items-center px-4 py-4">
      <h1 class="text-lg font-bold">My Portfolio</h1>
      <ul class="flex space-x-4">
        <li><router-link to="/" class="hover:text-gray-300">Home</router-link></li>
        <li><router-link to="/about" class="hover:text-gray-300">About</router-link></li>
        <li><router-link to="/works" class="hover:text-gray-300">Works</router-link></li>
        <li><router-link to="/contact" class="hover:text-gray-300">Contact</router-link></li>
      </ul>
    </nav>
  </header>
</template>