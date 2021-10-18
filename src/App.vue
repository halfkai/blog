<template>
  <router-view></router-view>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';

if (process.env.NODE_ENV === 'development') {
  const link = document.createElement('link');
  link.rel = 'stylesheet';
  link.type = 'text/css';
  link.href =
    'https://cdnjs.cloudflare.com/ajax/libs/tailwindcss/2.2.14/tailwind.min.css';
  document.body.appendChild(link);
}
onMounted(() => {
  document.documentElement.className = 'w-full h-full';
  document.body.className = 'w-full h-full';
  (document.querySelector('#app') as HTMLElement).className =
    'flex flex-col absolute top-0 right-0 bottom-0 left-0';
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
