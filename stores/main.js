import { defineStore } from 'pinia';
import { ref, reactive, nextTick } from 'vue';

export const useMainStore = defineStore('main', () => {
  const { apiData } = useApiData();

  // 獲取配置
  const config = useRuntimeConfig();
  const imageBasePath = config.public.imageBasePath;

  // 使用 runtimeConfig 的值初始化 themeMode 和 themeColor
  const themeMode = ref(config.public.themeMode);
  const themeColor = ref(config.public.themeColor);
  const themeSize = reactive({
    logo: null,
    slider: null,
  });
  const highlight = ref(null);

  // 動態給元素添加高亮 class
  const getHighlightClass = (type) => {
    return highlight.value === type ? 'highlight' : '';
  };

  // 初始化 logo 和 slider 的尺寸
  const initializeSizeThemes = () => {
    if (typeof window !== 'undefined') {
      // 獲取 .ele-logo-img
      const logoImg = document.querySelector('.ele-logo-img');
      if (logoImg) {
        // 如果是 SVG，使用 getBoundingClientRect
        if (logoImg.tagName.toLowerCase() === 'svg') {
          const logoRect = logoImg.getBoundingClientRect();
          themeSize.logo = `${Math.round(logoRect.width)}x${Math.round(logoRect.height)}`;
        } 
        // 如果是圖片，使用原始尺寸
        else if (logoImg.tagName.toLowerCase() === 'img') {
          // 如果圖片已經加載完成
          if (logoImg.complete) {
            themeSize.logo = `${logoImg.naturalWidth}x${logoImg.naturalHeight}`;
          } else {
            // 如果圖片還在加載中，等待加載完成
            logoImg.onload = () => {
              themeSize.logo = `${logoImg.naturalWidth}x${logoImg.naturalHeight}`;
            };
          }
        }
      }

      // 獲取 .ele-slider-img
      const sliderImg = document.querySelector('.ele-slider-img');
      if (sliderImg) {
        themeSize.slider = `${sliderImg.naturalWidth}x${sliderImg.naturalHeight}`;
      }
    }
  };

  // 登錄狀態的管理
  const isLoggedIn = ref(false);
  const updateLoginStatus = (status) => {
    isLoggedIn.value = status;
    if (typeof window !== 'undefined') {
      localStorage.setItem('isLoggedIn', status.toString());
    }
  };

  // 更新主題模式
  const updateThemeMode = (mode) => {
    themeMode.value = mode;
  };

  // 更新主題顏色
  const updateThemeColor = (color) => {
    themeColor.value = color;
  };

  // changeColor 替換Logo
  const previewLogo = ref(null);

  // 初始化时从 localStorage 获取保存的 Logo
  if (process.client) {
    try {
      const templateName = config.public.NUXT_APP_TITLE || 'default';
      const savedLogo = localStorage.getItem(`savedLogo_${templateName}`);
      if (savedLogo) {
        // 確保在組件掛載前就設置值
        nextTick(() => {
          previewLogo.value = savedLogo;
        });
      }
    } catch (error) {
      console.error('Error loading logo from localStorage:', error);
    }
  }

  const setPreviewLogo = (url) => {
    previewLogo.value = url;
    // 保存到 localStorage，使用模板名称作为key的一部分
    if (process.client) {
      try {
        const templateName = config.public.NUXT_APP_TITLE || 'default';
        if (url) {
          localStorage.setItem(`savedLogo_${templateName}`, url);
        } else {
          localStorage.removeItem(`savedLogo_${templateName}`);
        }
      } catch (error) {
        console.error('Error saving logo to localStorage:', error);
      }
    }
  };

  return {
    config,
    imageBasePath,
    apiData,
    themeMode,
    themeColor,
    themeSize,
    highlight,
    getHighlightClass,
    initializeSizeThemes,
    isLoggedIn,
    updateLoginStatus,
    updateThemeMode,
    updateThemeColor,
    previewLogo,
    setPreviewLogo,
  };
});