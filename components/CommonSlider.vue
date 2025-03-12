<template>
  <div class="slider-wrap">
    <transition name="fade">
      <div v-if="mainStore.highlight === 'slider'" class="highlight">
        {{ mainStore.themeSize.slider }}
      </div>
    </transition>
    <Swiper :modules="[SwiperAutoplay, SwiperEffectCreative, SwiperPagination]" :pagination="true" :slides-per-view="1"
      :loop="true" :autoplay="{
        delay: 8000,
        disableOnInteraction: true,
      }">
      <swiper-slide v-for="(slide, index) in slides" :key="index">
        <img :src="slide.image" class="ele-slider-img" />
      </swiper-slide>
    </Swiper>
  </div>
</template>

<script setup>
import { useMainStore } from '@/stores/main';
const mainStore = useMainStore();

const slides = ref([
  { image: `${mainStore.imageBasePath}/image/${mainStore.themeColor}/event01.png` },
  { image: `${mainStore.imageBasePath}/image/${mainStore.themeColor}/event02.png` },
  { image: `${mainStore.imageBasePath}/image/${mainStore.themeColor}/event03.png` },
  { image: `${mainStore.imageBasePath}/image/${mainStore.themeColor}/event04.png` }
]);
</script>