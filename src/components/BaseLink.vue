<script setup lang="ts">
import SvgIcon from './SvgIcon.vue';

interface Props {
  icon?: string
  content?: string
}

const props = defineProps<Props>();
</script>

<template>
  <a>
    <SvgIcon
      v-if="props.icon"
      :id="props.icon"
      w-1em
      h-1em
      inline-block
      align-sub
    />
    <span>{{ content }}</span>
  </a>
</template>
