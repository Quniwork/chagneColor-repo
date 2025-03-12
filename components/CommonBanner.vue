<template>
  <div class="banner-block">
    <div class="banner-wrap" :style="backgroundStyle"></div>
    <CommonNews />
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router'
import { useMainStore } from '@/stores/main';
const route = useRoute()
const mainStore = useMainStore();

const backgroundStyle = computed(() => {
  const { type } = route.params
  let backgroundSrc = ''
  switch (type) {
    case 'ball':
      backgroundSrc = `${mainStore.imageBasePath}/image/${mainStore.themeColor}/lang/zh-cn/title_sport.png`
      break
    case 'card':
      backgroundSrc = `${mainStore.imageBasePath}/image/${mainStore.themeColor}/lang/zh-cn/title_card.png`
      break
    case 'game':
      backgroundSrc = `${mainStore.imageBasePath}/image/${mainStore.themeColor}/lang/zh-cn/title_game.png`
      break
    case 'live':
      backgroundSrc = `${mainStore.imageBasePath}/image/${mainStore.themeColor}/lang/zh-cn/title_live.png`
      break
    case 'lottery':
      backgroundSrc = `${mainStore.imageBasePath}/image/${mainStore.themeColor}/lang/zh-cn/title_lottery.png`
      break
    case 'promotion':
      backgroundSrc = `${mainStore.imageBasePath}/image/${mainStore.themeColor}/lang/zh-cn/title_promotion.png`
      break
    default:
      backgroundSrc = `${mainStore.imageBasePath}/image/${mainStore.themeColor}/lang/zh-cn/title_welcome.png` // 預設情況下顯示 welcome
  }

  // 返回正確的 CSS 樣式
  return {
    backgroundImage: backgroundSrc ? `url(${backgroundSrc})` : ''
  }
})
</script>

