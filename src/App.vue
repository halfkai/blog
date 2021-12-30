<script setup lang="ts">
import { onMounted } from 'vue';

onMounted(() => {
  document.documentElement.className = 'w-full h-full';
  document.body.className = 'w-full h-full';
  (document.querySelector('#app') as HTMLElement).className =
    'flex flex-col absolute top-0 right-0 bottom-0 left-0';
});
</script>

<template>
  <router-view></router-view>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
