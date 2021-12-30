<script setup lang="ts">
import SiteHeader from '@/components/layout/SiteHeader.vue';
</script>

<template>
  <SiteHeader class="bg-blue-100"></SiteHeader>
  <main class="flex-1">
    <router-view></router-view>
  </main>
</template>
