<template>
  <header class="page-header">
    <div id="header-fixed" class="header-fixed-wrap">
      <div class="ele-fixed-container">
        <div class="ele-fixed-inner">
          <div class="header-wrap">
            <div class="header-logo">
              <CommonLogo />
            </div>
            <div class="header-right">
              <div class="header-right-top">
                <CommonEstTiming />
                <div class="top-link-wrap">
                  <CommonCustomLink />
                </div>
                <CommonLang />
                <CommonHeaderMem :apiData="mainStore.apiData" />
              </div>
              <div class="header-right-bottom">
                <CommonHeaderNav :apiData="mainStore.apiData" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <CommonBanner v-if="shouldShowBanner" />
  </header>
</template>

<script setup>
import { useRoute } from 'vue-router'
import { useMainStore } from '@/stores/main';
const route = useRoute()
const mainStore = useMainStore();

const shouldShowBanner = computed(() => route.path !== '/first')
</script>
