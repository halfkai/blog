<script setup lang="ts">
import { ref, watch } from 'vue';
import { getContent } from '@/apis';

const props = defineProps<{
  path: string;
}>();

const menu = ref();

const getData = (path: string) =>
  getContent(path).then(async (res) => {
    if (res.status === 200) {
      const data = await res.json();
      if (data instanceof Object && data.type === 'file') {
        // if typeof data is file, goto preview
        window.location.href = `/blog/${data.path.split(/\.[^.]*$/)[0]}`;
      } else {
        menu.value = data;
      }
    }
  });

watch(
  () => props.path,
  (v) => {
    getData(v);
  },
  {
    immediate: true,
  }
);

const filePath = ref();
const handleClick = (path: string, type: string) => {
  if (type === 'file') {
    filePath.value = `${
      import.meta.env.MODE === 'development' && 'https://halfkai.github.io'
    }/blog/${path.replace(/\..*$/, '')}`;
  }
};
</script>

<template>
  <div class="flex flex-col w-full h-full">
    <ul v-if="menu?.length" class="p-5">
      <li v-for="li in menu" :key="li.sha">
        <a @click="handleClick(li.path, li.type)">{{ li.name }}</a>
      </li>
    </ul>
    <iframe
      v-if="filePath"
      class="flex-1"
      :src="filePath"
      frameborder="0"></iframe>
  </div>
</template>
