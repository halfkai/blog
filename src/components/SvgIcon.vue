<script setup lang="ts">
import { computed } from 'vue';

interface Props {
  fileUrl?: string
  id: string
}
const props = withDefaults(defineProps<Props>(), {
  fileUrl: '/icons.svg',
});

const imgURL = computed(() => new URL(`${props.fileUrl}#${props.id}`, import.meta.url).href);
</script>

<template>
  <svg>
    <use :xlink:href="imgURL" />
  </svg>
</template>
