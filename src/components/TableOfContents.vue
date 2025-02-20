<script setup lang="ts">
import tableOfContens from '../generates/tableOfContens';
</script>

<template>
  <ul>
    <li v-for="[path, name] of tableOfContens" :key="path">
      <a :href="path"> {{ name }}</a>
    </li>
  </ul>
</template>

<style scoped></style>
