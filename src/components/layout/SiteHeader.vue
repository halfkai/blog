<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { getContent } from '@/apis';

const menu = ref([] as any[]);

const getMenu = (path: string) => {
  return getContent(path).then(async (res) => {
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
};
getMenu('docs');

const router = useRouter();
const handleClick = (path: string) => {
  router.push(`/blog/explorer?path=${path}`);
};
</script>

<template>
  <header class="flex items-center">
    <h1 class="flex items-center m-3">
      <img src="/favicon.svg" alt="Toms Blog" class="mr-4" />
      <span class="hidden xl:block">Toms Blog</span>
    </h1>
    <nav class="justify-start hidden lg:flex">
      <div
        v-for="(item, index) in menu"
        :key="item.sha || index"
        class="mx-5 my-3 p-px text-center">
        <a
          rel="noopener noreferrer"
          class="cursor-pointer border-transparent border-b-2 hover:border-blue-300"
          @click="handleClick(item.path)"
          >{{ item.name }}</a
        >
      </div>
    </nav>
  </header>
</template>
