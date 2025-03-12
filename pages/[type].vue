<template>
  <GamePage :imageSrc="imageSrc" />
</template>

<script setup>
import { useRoute } from 'vue-router'
import { useMainStore } from '@/stores/main';
const route = useRoute()
const mainStore = useMainStore();

const imageSrc = computed(() => {
  const { type } = route.params
  if (type === 'promotion') {
    return mainStore.themeMode === 'dark'
      ? `${mainStore.imageBasePath}/image/not-use/hall/promotions_dark.png`
      : `${mainStore.imageBasePath}/image/not-use/hall/promotions_light.png`
  }

  switch (type) {
    case 'ball':
      return `${mainStore.imageBasePath}/image/not-use/hall/sport_1200.png`
    case 'card':
      return `${mainStore.imageBasePath}/image/not-use/hall/card_1200.png`
    case 'game':
      return `${mainStore.imageBasePath}/image/not-use/hall/casino_960.png`
    case 'live':
      return `${mainStore.imageBasePath}/image/not-use/hall/live_960.png`
    case 'lottery':
      return `${mainStore.imageBasePath}/image/not-use/hall/lottery_1200.jpg`
    default:
      return ''
  }
})
</script>
