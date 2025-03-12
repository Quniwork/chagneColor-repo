<template>
  <div class="page-layout">
    <ChangeColor :apiData="mainStore.apiData" />
    <div class="page-wrap">
      <CommonHeader :apiData="mainStore.apiData" />
      <Transition name="fade" mode="out-in">
        <main class="page-container-wrap">
          <NuxtPage :apiData="mainStore.apiData" />
        </main>
      </Transition>
      <CommonFooter :apiData="mainStore.apiData" />
    </div>
  </div>
</template>

<script setup>
import { onMounted, watch } from 'vue';
import { useRoute } from 'vue-router'
import { useMainStore } from '@/stores/main';
const route = useRoute()
const mainStore = useMainStore();

useHead({
  htmlAttrs: {
    'data-theme': `${mainStore.themeMode} ${mainStore.themeColor}`,
  },
});

const isHomePage = computed(() => route.path === '/' || route.path === '/first');
const updateBodyClass = () => {
  if (process.client && mainStore.apiData?.navItems) {
    const currentPath = route.path.replace('/', '');
    let matchedClass = 'default';

    if (currentPath === '' || currentPath === 'first') {
      matchedClass = 'first';
    } else if (currentPath === 'article') {
      matchedClass = 'article at1';
    } else {
      const matchedNavItem = mainStore.apiData.navItems.find(item => item.link === currentPath);
      if (matchedNavItem) {
        matchedClass = matchedNavItem.class;
      }
    }

    const isEdit = document.body.classList.contains('isEdit');
    document.body.className = matchedClass;
    if (isEdit) {
      document.body.classList.add('isEdit');
    }
  }
};

onMounted(() => {
  const htmlElement = document.documentElement;

  const observer = new MutationObserver(() => {
    const themeData = htmlElement.getAttribute('data-theme');
    const [mode, color] = themeData ? themeData.split(' ') : [config.public.themeMode, config.public.themeColor];
    mainStore.themeMode = mode;
    mainStore.themeColor = color;
  });

  observer.observe(htmlElement, { attributes: true, attributeFilter: ['data-theme'] });

  // 初始化時設置 Vue 狀態
  const initialThemeData = htmlElement.getAttribute('data-theme');
  const [initialMode, initialColor] = initialThemeData ? initialThemeData.split(' ') : [config.public.themeMode, config.public.themeColor];
  mainStore.themeMode = initialMode;
  mainStore.themeColor = initialColor;

  watch(
    () => route.path,
    () => updateBodyClass(),
    { immediate: true }
  );

  onBeforeUnmount(() => {
    observer.disconnect();
  });

  // console.log(`Current theme mode: ${mainStore.themeMode}, Current theme color: ${mainStore.themeColor}`);
});
</script>
