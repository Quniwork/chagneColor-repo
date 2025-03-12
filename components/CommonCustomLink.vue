<template>
  <div class="ele-custom-link-wrap">
    <ul>
      <li class="ele-custom-link" v-for="(link, index) in mainStore.apiData.customLinks" :key="index">
        <a :href="link.link">{{ link.title }}</a>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { useMainStore } from '@/stores/main';
const mainStore = useMainStore();
</script>