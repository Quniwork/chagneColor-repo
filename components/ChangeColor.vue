<template>
  <div ref="changeColorBlock" class="changeColor-block" v-show="!saveImage">
    <div class="instructions-wrap" v-show="isQuestion">
      <div class="instructions-container">
        <button class="instructions-close-btn" @click="toggleQuestionMode">
          <svg xmlns="http://www.w3.org/2000/svg" class="fa-icon-edit" viewBox="0 0 24 24">
            <path fill="currentColor"
              d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12z">
            </path>
          </svg>
        </button>
        <div class="instructions-img">
          <img :src="`${mainStore.imageBasePath}/instructions.jpg`">
        </div>
      </div>
    </div>
    <div class="changeColor-edit" v-show="!isEdit">
      <button @click="toggleEditMode" class="changeColor-edit-btn">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="fa-icon-edit">
          <g fill="none">
            <path
              d="m12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z">
            </path>
            <path fill="currentColor"
              d="M20.626 2.483a1.094 1.094 0 0 1 1.39 1.39l-.165.471l-.26.696l-.163.415l-.185.452l-.205.482l-.224.505l-.12.258c-.677 1.455-1.61 3.156-2.727 4.33c-1.065 1.12-2.673 2.153-3.96 2.886a5 5 0 0 1-1.36 4.557c-2.27 2.27-4.807 2.27-6.694 1.71c-1.43-.426-2.605-1.198-3.729-2.148a.394.394 0 0 1 .027-.624l.332-.237c.728-.53 1.479-1.182 1.658-2.08c.034-.166.055-.334.073-.502l.05-.507a6 6 0 0 1 .074-.504c.138-.689.43-1.471 1.137-2.18a5 5 0 0 1 4.557-1.36c.733-1.287 1.765-2.895 2.886-3.96c1.174-1.116 2.875-2.05 4.33-2.728l.513-.233l.25-.11l.482-.205l.664-.27l.576-.22l.59-.213zm-7.915 7.62c-.259.395-.505.798-.732 1.19a5 5 0 0 1 1.228 1.228c.392-.227.795-.473 1.19-.732l-.03-.067a3.3 3.3 0 0 0-.66-.93a3.4 3.4 0 0 0-.817-.603zm6.71-5.025c-.383.159-.799.34-1.228.54c-1.41.657-2.867 1.48-3.797 2.364a8 8 0 0 0-.47.493c.362.2.782.49 1.195.904c.414.413.704.833.904 1.195a8 8 0 0 0 .493-.47c.884-.93 1.707-2.388 2.364-3.797c.2-.43.38-.846.54-1.229M6 1a1 1 0 0 1 .898.56l.048.117l.13.378a3 3 0 0 0 1.684 1.8l.185.07l.378.129a1 1 0 0 1 .117 1.844l-.117.048l-.378.13a3 3 0 0 0-1.8 1.684l-.07.185l-.129.378a1 1 0 0 1-1.844.117l-.048-.117l-.13-.378a3 3 0 0 0-1.684-1.8l-.185-.07l-.378-.129a1 1 0 0 1-.117-1.844l.117-.048l.378-.13a3 3 0 0 0 1.8-1.684l.07-.185l.129-.378A1 1 0 0 1 6 1">
            </path>
          </g>
        </svg>
        编辑
      </button>
    </div>
    <div class="changeColor-wrap" v-show="isEdit">
      <div class="changeColor-area-wrap changeColor-edit-wrap">
        <div class="changeColor-edit-content" v-show="isEdit">
          <div @click="toggleQuestionMode" class="changeColor-question-btn">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="-0.5 -0.5 24 24" fill="currentColor"
              id="Question--Streamline-Phosphor" height="24" width="24" class="fa-icon-question">
              <path
                d="M12.800380468750001 17.135c0 1.0010390624999999 -1.0836503906250001 1.6266839843749998 -1.950570703125 1.1261644531250001 -0.866929296875 -0.5005195312499999 -0.866929296875 -1.7518093750000001 0 -2.2523289062500003 0.19768320312499998 -0.1141375 0.42192421875 -0.174225 0.650190234375 -0.174225 0.718183984375 0 1.30038046875 0.58220546875 1.30038046875 1.300389453125ZM11.5 5.4315398437499995c-2.39054453125 0 -4.33461953125 1.7501023437499998 -4.33461953125 3.9011503906250002v0.43346015625c0 0.667359375 0.722442578125 1.0844589843749999 1.300389453125 0.750779296875 0.268228515625 -0.1548546875 0.43346015625 -0.44105195312499995 0.43346015625 -0.750779296875v-0.43346015625c0 -1.192019921875 1.167097265625 -2.167309765625 2.600769921875 -2.167309765625s2.600769921875 0.9752898437499999 2.600769921875 2.167309765625S12.93367265625 11.5 11.5 11.5c-0.478804296875 -0.00001796875 -0.8669203125 0.388116015625 -0.8669203125 0.8669203125v0.866929296875c0 0.667350390625 0.72243359375 1.08445 1.30038046875 0.7507703125 0.268228515625 -0.1548546875 0.43346015625 -0.44105195312499995 0.43346015625 -0.7507703125v-0.078029296875c1.976589453125 -0.36302265625 3.467690234375 -1.939735546875 3.467690234375 -3.823130078125 0 -2.151048046875 -1.944075 -3.9011503906250002 -4.334610546875 -3.9011503906250002ZM22.77 11.5c0 8.67565390625 -9.391663671875 14.097930859375 -16.905 9.76010390625 -7.513336328125 -4.337826953125 -7.513336328125 -15.18238984375 0 -19.5202078125C7.578257421875 0.7507433593749999 9.521703515625 0.23 11.5 0.23c6.221526953125 0.0065765625 11.263432421875 5.048473046874999 11.27 11.27Zm-1.733849609375 0c0 -7.3409351562500005 -7.9467875 -11.929021875000002 -14.304230078125 -8.258554296875 -6.35743359375 3.6704675781250002 -6.35743359375 12.846641015625 0 16.51710859375 1.4496828125 0.83696640625 3.0941378906250003 1.27759609375 4.7680796875 1.27759609375 5.264196875 -0.0059656250000000004 9.530184765625 -4.2719535156249995 9.536150390625 -9.536150390625Z"
                stroke-width="1"></path>
            </svg>
            操作说明
          </div>
          <button @click="toggleEditMode" class="changeColor-close-btn">
            <svg xmlns="http://www.w3.org/2000/svg" class="fa-icon-edit" viewBox="0 0 24 24">
              <path fill="currentColor"
                d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12z">
              </path>
            </svg>
            离开编辑</button>
        </div>
      </div>
      <div class="changeColor-area-wrap changeColor-size-wrap">
        <div class="changeColor-area-content">
          <ul class="changeColor-size-info">
            <li @mouseenter="mainStore.highlight = 'logo'" @mouseleave="mainStore.highlight = null">
              <label>Logo</label>
              <span>{{ mainStore.themeSize.logo }}</span>
              <input
                type="file"
                accept=".jpg,.jpeg,.png,.gif"
                @change="handleLogoUpload"
                ref="logoInput"
              >
              <div class="changeColor-size-tips">點擊上傳Logo示意</div>
            </li>
            <li @mouseenter="mainStore.highlight = 'slider'" @mouseleave="mainStore.highlight = null">
              <label>轮播图</label>
              <span>{{ mainStore.themeSize.slider }}</span>
            </li>
          </ul>
        </div>
      </div>
      <div class="changeColor-area-wrap changeColor-platform-wrap">
        <div class="changeColor-area-content">
          <div class="changeColor-platform-title">主题</div>
          <div class="changeColor-platform-content">
            <label>
              <input type="radio" name="platform" value="live">
              <span>视讯</span>
            </label>
            <label>
              <input type="radio" name="platform" value="casino" checked>
              <span>机率</span>
            </label>
            <label>
              <input type="radio" name="platform" value="sport" disabled>
              <span>体育</span>
            </label>
          </div>
        </div>
      </div>
      <div class="changeColor-area-wrap">
        <div class="changeColor-area-content">
          <div class="changeColor-theme-wrap">
            <div class="changeColor-theme-title">预设配色</div>
            <div class="changeColor-theme-content">
              <div class="changeColor-theme-color">
                <button v-for="(theme, index) in collectionTheme" :key="theme.themeName" @click="changeTheme(index)"
                  class="changeColor-theme-btn" :class="{ 'active': currentThemeIndex === index }">
                  <span
                    :style="{ '--themeColorStyle1': theme.themeColor[0].split(', ')[0], '--themeColorStyle2': theme.themeColor[0].split(', ')[1] }"></span>
                </button>
              </div>
              <button class="changeColor-reset-btn" :disabled="isResetDisabled" @click="resetTheme($event)">重置</button>
            </div>
          </div>
          <div class="changeColor-main-wrap">
            <div class="currentColor-item-wrap">
              <div v-for="(item, index) in colorVariables" :key="index" class="currentColor-item">
                <label class="currentColor-title">
                  <div class="tips" @mouseenter="showTips(index)" @mouseleave="hideTips(index)">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14px" viewBox="0 0 24 24" fill="currentColor"><path
                    d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM11 11V17H13V11H11ZM11 7V9H13V7H11Z"></path></svg>
                    <transition name="fadeIn" appear>
                      <div class="tips-img" v-if="hoveredTips === index">
                        <a :href="`${mainStore.imageBasePath}/tips0${(index % 5) + 1}.jpg`" target="_blank">
                          <span><svg xmlns="http://www.w3.org/2000/svg" width="14px" viewBox="0 0 24 24" fill="currentColor"> <path
                          d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM11 11V17H13V11H11ZM11 7V9H13V7H11Z"></path></svg>点击图片，可以另开显示异动范围示意图。</span>
                          <img :src="`${mainStore.imageBasePath}/tips0${(index % 5) + 1}.jpg`">
                        </a>
                      </div>
                    </transition>
                  </div>
                  <div class="title" @mouseenter="showTips(index)" @mouseleave="hideTips(index)">{{ item.label }}</div>
                </label>
                <div class="currentColor-item-pick" @click="toggleColorPicker(index)">
                  <ClientOnly>
                    <Suspense>
                      <Vue3ColorPicker
                        v-if="activePickerIndex === index"
                        theme="light"
                        v-model="currentHexColors[item.varName]"
                        mode="solid"
                        type="HEX"
                        :showEyeDrop="true"
                        :showAlpha="false"
                        :showInputMenu="false"
                        :showPickerMode="false"
                        @click.stop
                        @update:modelValue="handleColorChange(item.varName, $event)"
                      />
                      <template #fallback>
                        <div class="loading-picker">Loading...</div>
                      </template>
                    </Suspense>
                  </ClientOnly>
                  <span class="currentColor-item-color"
                    :style="{ backgroundColor: currentHexColors[item.varName] }"></span>
                  <input type="text" :value="currentHexColors[item.varName]" class="currentColor-item-input"
                    @input="handleInputChange(item.varName, $event.target.value)"
                    @blur="handleInputBlur(item.varName, $event.target.value)">
                  <button @click.stop="resetSingleColor(item.varName)" class="changeColor-resetSingleColor-type"
                    :disabled="!isColorModified(item.varName)">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                      <path
                        d="M22 12C22 17.5228 17.5229 22 12 22C6.4772 22 2 17.5228 2 12C2 6.47715 6.4772 2 12 2V4C7.5817 4 4 7.58172 4 12C4 16.4183 7.5817 20 12 20C16.4183 20 20 16.4183 20 12C20 9.25022 18.6127 6.82447 16.4998 5.38451L16.5 8H14.5V2L20.5 2V4L18.0008 3.99989C20.4293 5.82434 22 8.72873 22 12Z">
                      </path>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div class="changeColor-tools-btn-wrap">
            <button @click="saveColorVar" class="changeColor-importColor-btn">汇出配色</button>
            <label class="changeColor-importColor-label">
              <input type="file" @change="handleFileUpload" class="changeColor-importColor-input" />
              <span>汇入配色</span>
            </label>
          </div>
        </div>
      </div>
      <div class="changeColor-area-wrap changeColor-button-wrap">
        <div class="changeColor-submit-btn-wrap">
          <button @click="saveImageAndCss" class="changeColor-submit">保存示意图</button>
          <!-- <button @click="savePackage" class="changeColor-submit" v-if="showSavePackage">保存封包</button> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, watch, onMounted, onUnmounted, computed } from 'vue';
import { useMainStore } from '@/stores/main';
import { Vue3ColorPicker } from '@cyhnkckali/vue3-color-picker';
import '@cyhnkckali/vue3-color-picker/dist/style.css';
import { toBlob } from 'html-to-image';
import JSZip from 'jszip';

const route = useRoute();
const mainStore = useMainStore();

const isEdit = ref(false);
const isQuestion = ref(false);
const collectionTheme = ref([]);
const currentThemeIndex = ref(0);
const currentColors = reactive({});
const currentHexColors = reactive({});
const isResetDisabled = ref(true);
const activePickerIndex = ref(null);
const saveImage = ref(false);
const hoveredTips = ref(null);
const previewLogo = ref(null);
const logoInput = ref(null);
let hideTimeout = null;

const colorDatabase = ref({
  colorNames: {
    "--color-primary": { id: 1, name: "主要颜色" },
    "--color-secondary": { id: 2, name: "輔助颜色" },
    "--color-tertiary": { id: 3, name: "次輔助颜色" },
    "--color-primary-bg": { id: 4, name: "主背景颜色" },
    "--color-secondary-bg": { id: 5, name: "辅助背景颜色" },
    "--color-tertiary-bg": { id: 6, name: "次辅助背景颜色" },
    "--color-primary-text": { id: 7, name: "主文字颜色" },
    "--color-secondary-text": { id: 8, name: "辅助文字颜色" },
    "--color-tertiary-text": { id: 9, name: "次辅助文字颜色" }
  },
  customers: [
    {
      template: "test_yuna",
      customerCode: "@hh",
      customerName: "银河娱乐城",
      themeColors: ["#0e74ff", "#000013", "#f8f8f8", "#ffffff", "#a7a7a7"],
      themeColorKeys: [1, 2, 4, 7, 8]
    },
    {
      template: "test_rita",
      customerCode: "@b9",
      customerName: "博九",
      themeColors: ["#ebf0f5", "#d9dffa", "#99a6de", "#425181", "#7a4cb4"],
      themeColorKeys: [4, 5, 6, 7, 8]
    },
    {
      template: "test_adosa",
      customerCode: "@jz",
      customerName: "九州娱乐在线",
      themeColors: ["#3673fe", "#2c2c2c", "#f8f8f8", "#ffffff", "#a7a7a7"],
      themeColorKeys: [1, 4, 5, 7, 8]
    }
  ]
});

const colorVariables = mainStore.apiData.colorVariables.map(id => {
  const colorName = Object.keys(colorDatabase.value.colorNames).find(key => colorDatabase.value.colorNames[key].id === id);
  return {
    varName: colorName,
    label: colorDatabase.value.colorNames[colorName].name
  };
});

const showSavePackage = computed(() => route.path === '/first');

const toggleEditMode = () => {
  isEdit.value = !isEdit.value;
  document.body.classList.toggle('isEdit', isEdit.value);
};

const toggleQuestionMode = () => isQuestion.value = !isQuestion.value;

const showTips = (index) => {
  clearTimeout(hideTimeout);
  hoveredTips.value = index;
};

const hideTips = (index) => {
  hideTimeout = setTimeout(() => {
    if (hoveredTips.value === index) {
      hoveredTips.value = null;
    }
  }, 500);
};

const rgbToHex = (r, g, b) => `#${[r || 0, g || 0, b || 0].map(c => c.toString(16).padStart(2, '0')).join('')}`;
const hexToRgb = (hex) => [(parseInt(hex.slice(1), 16) >> 16) & 255, (parseInt(hex.slice(1), 16) >> 8) & 255, parseInt(hex.slice(1), 16) & 255].join(' ');

const loadThemeValues = async () => {
  collectionTheme.value = mainStore.apiData.colorThemes;
  collectionTheme.value.forEach((theme) => {
    theme.value = getThemeStyles(theme.themeName);
    theme.modifiedColors = {};
    theme.isModified = false;
  });

  // 从 localStorage 加载保存的颜色
  const savedColors = localStorage.getItem('savedColors');
  if (savedColors) {
    const parsedColors = JSON.parse(savedColors);
    Object.keys(parsedColors).forEach(key => {
      currentColors[key] = parsedColors[key];
      currentHexColors[key] = rgbToHex(...parsedColors[key].split(' ').map(Number));
      document.documentElement.style.setProperty(key, parsedColors[key]);
    });
    checkThemeModified();
  }
};

const toggleColorPicker = index => activePickerIndex.value = activePickerIndex.value === index ? null : index;

const handleClickOutside = (event) => {
  if (!event.target.closest('.currentColor-item-pick')) {
    activePickerIndex.value = null;
  }
};

const getThemeStyles = (themeName) => {
  document.documentElement.setAttribute('data-theme', themeName);
  const rootStyles = getComputedStyle(document.documentElement);
  const themeStyles = colorVariables.reduce((acc, item) => {
    acc[item.varName] = rootStyles.getPropertyValue(item.varName).trim();
    return acc;
  }, {});
  document.documentElement.removeAttribute('data-theme');
  return themeStyles;
};

const handleColorChange = (varName, newValue) => {
  currentColors[varName] = newValue.startsWith('#') ? hexToRgb(newValue) : newValue;
  currentHexColors[varName] = newValue;
  checkThemeModified();
};

const handleInputChange = (varName, newValue) => {
  currentHexColors[varName] = newValue;
};

const handleInputBlur = (varName, newValue) => {
  if (newValue.startsWith('#') && (newValue.length === 4 || newValue.length === 7)) {
    currentColors[varName] = hexToRgb(newValue);
  } else if (newValue === '') {
    currentColors[varName] = '';
  } else {
    currentColors[varName] = newValue;
  }
  if (currentColors[varName] !== '') {
    document.documentElement.style.setProperty(varName, currentColors[varName]);
  }
  checkThemeModified();
};

const isColorModified = (varName) => {
  const selectedTheme = collectionTheme.value[currentThemeIndex.value];
  return (
    selectedTheme &&
    currentColors[varName]?.toLowerCase() !== selectedTheme.value[varName]?.toLowerCase()
  );
};

const checkThemeModified = () => {
  const selectedTheme = collectionTheme.value[currentThemeIndex.value];
  let isModified = false;
  
  // 确保 selectedTheme 和 selectedTheme.value 存在
  if (!selectedTheme || !selectedTheme.value) {
    return false;
  }
  
  Object.keys(currentColors).forEach(key => {
    // 检查两个值是否都存在
    if (currentColors[key] && selectedTheme.value[key]) {
      if (currentColors[key].toLowerCase() !== selectedTheme.value[key].toLowerCase()) {
        selectedTheme.modifiedColors[key] = currentColors[key];
        isModified = true;
      }
    } else if (currentColors[key] || selectedTheme.value[key]) {
      // 如果其中一个存在而另一个不存在，它们是不同的
      selectedTheme.modifiedColors[key] = currentColors[key] || '';
      isModified = true;
    }
  });
  
  selectedTheme.isModified = isModified;
  isResetDisabled.value = !isModified;
  return isModified;
};

const resetSingleColor = (varName) => {
  const selectedTheme = collectionTheme.value[currentThemeIndex.value];
  if (selectedTheme && !isColorModified(varName)) {
    return;
  }
  if (selectedTheme && selectedTheme.value[varName]) {
    currentHexColors[varName] = selectedTheme.value[varName];
    document.documentElement.style.setProperty(varName, selectedTheme.value[varName]);
    currentColors[varName] = selectedTheme.value[varName];
    checkThemeModified();
  }
};

const resetTheme = () => {
  const confirmed = window.confirm("您确定要重置当前主题的配色吗？");
  if (confirmed) {
    const selectedTheme = collectionTheme.value[currentThemeIndex.value];
    Object.assign(currentColors, selectedTheme.value);
    selectedTheme.modifiedColors = {};
    selectedTheme.isModified = false;
    isResetDisabled.value = true;
    // 清除保存的颜色
    localStorage.removeItem('savedColors');
  }
};

watch(
  () => currentColors,
  () => {
    const html = document.documentElement;
    Object.keys(currentColors).forEach((key) => {
      html.style.setProperty(key, currentColors[key]);
      const [r, g, b] = currentColors[key].split(' ').map(Number);
      currentHexColors[key] = rgbToHex(r, g, b);
    });
    // 保存颜色到 localStorage
    localStorage.setItem('savedColors', JSON.stringify(currentColors));
  },
  { deep: true }
);

const changeTheme = index => {
  currentThemeIndex.value = index;
  const selectedTheme = collectionTheme.value[index];
  const themeMode = selectedTheme.themeMode;
  const themeColor = selectedTheme.themeName;
  const themePlatform = selectedTheme.themePlatform;

  document.documentElement.setAttribute('data-theme', `${themeMode} ${themeColor}`);
  Object.keys(selectedTheme.value).forEach(key => {
    currentColors[key] = selectedTheme.modifiedColors[key] || selectedTheme.value[key];
  });
  checkThemeModified();
};

const handleBeforeUnload = (event) => {
  const hasModified = checkThemeModified();
  if (hasModified) {
    event.preventDefault();
    event.returnValue = '要离开网站吗？系统可能不会储存你所做的变更。';
  }
};

onMounted(() => {
  mainStore.initializeSizeThemes();
  loadThemeValues();
  changeTheme(0);
  window.addEventListener('click', handleClickOutside);
  window.addEventListener('beforeunload', handleBeforeUnload);
});

onUnmounted(() => {
  window.removeEventListener('click', handleClickOutside);
  window.removeEventListener('beforeunload', handleBeforeUnload);
  if (mainStore.previewLogo && !mainStore.previewLogo.startsWith('data:')) {
    URL.revokeObjectURL(mainStore.previewLogo);
  }
});

const getNuxtAppTitle = () => {
  return mainStore.config.public.NUXT_APP_TITLE || 'changeColor Template';
};

const calculateColorDifference = (hex1, hex2) => {
  const hexToRgb = (hex) => {
    const bigint = parseInt(hex.slice(1), 16);
    return [(bigint >> 16) & 255, (bigint >> 8) & 255, bigint & 255];
  };
  const [r1, g1, b1] = hexToRgb(hex1);
  const [r2, g2, b2] = hexToRgb(hex2);
  return Math.sqrt(
    Math.pow(r1 - r2, 2) +
    Math.pow(g1 - g2, 2) +
    Math.pow(b1 - b2, 2)
  );
};

const checkSameColors = () => {
  if (!colorDatabase.value) return false;

  const databaseCustomers = colorDatabase.value.customers;
  const threshold = 20;
  const thresholdSpecial = 30;
  const importantKeys = [1, 2, 3, 4];
  let foundColors = [];

  const currentTemplate = getNuxtAppTitle();

  for (const customer of databaseCustomers) {
    if (customer.template !== currentTemplate) continue;

    const databaseColors = customer.themeColors;
    const databaseColorKeys = customer.themeColorKeys;

    for (let i = 0; i < databaseColors.length; i++) {
      const colorId = databaseColorKeys[i];

      if (!importantKeys.includes(colorId)) continue;

      const cssVarName = Object.keys(colorDatabase.value.colorNames).find(
        key => colorDatabase.value.colorNames[key].id === colorId
      );

      if (!cssVarName) continue;

      const currentColor = currentHexColors[cssVarName];
      if (!currentColor) continue;

      const colorDifference = calculateColorDifference(currentColor, databaseColors[i]);

      const diffToBlack = calculateColorDifference(currentColor, "#000000");
      const diffToWhite = calculateColorDifference(currentColor, "#ffffff");

      const databaseDiffToBlack = calculateColorDifference(databaseColors[i], "#000000");
      const databaseDiffToWhite = calculateColorDifference(databaseColors[i], "#ffffff");

      if ((diffToBlack < thresholdSpecial && databaseDiffToBlack < thresholdSpecial) ||
          (diffToWhite < thresholdSpecial && databaseDiffToWhite < thresholdSpecial)) {
        continue;
      }

      if (colorDifference < threshold) {
        foundColors.push(colorDatabase.value.colorNames[cssVarName].name);
      }
    }
  }

  if (foundColors.length > 0) {
    return `「${foundColors.join("、")}」已有其他厅主采用，请问您是否仍要继续提交？`;
  }

  return false;
};

const generateColorVar = () => {
  return colorVariables.map(item => `/* ${item.label} */\n${item.varName}: ${currentHexColors[item.varName]};`).join('\n\n');
};

const importColorVar = (fileContent) => {
  const templateRegex = /\/\*\s*Template number:\s*(.+?)\s*\*\//;
  const matchTemplate = fileContent.match(templateRegex);

  if (!matchTemplate) {
    alert('无法找到模板版本资讯，请确认档案格式是否正确');
    return;
  }

  const templateNumber = matchTemplate[1].trim();
  const currentTemplate = getNuxtAppTitle().trim();

  if (templateNumber !== currentTemplate) {
    alert(`版型号不相符\n当前模板: ${currentTemplate}\n汇入模板: ${templateNumber}`);
    return;
  }

  const newColors = {};
  const regex = /--([\w-]+):\s*#([\w\d]+);/g;
  let match;

  while ((match = regex.exec(fileContent)) !== null) {
    const variableName = `--${match[1]}`;
    const hexValue = `#${match[2]}`;

    if (colorVariables.some(color => color.varName === variableName)) {
      const rgbValue = hexToRgb(hexValue);
      newColors[variableName] = { hexValue, rgbValue };
    }
  }

  const warningMessage = checkSameColors(newColors);
  if (warningMessage && !confirm(warningMessage)) {
    return;
  }

  colorVariables.forEach((color) => {
    if (newColors[color.varName]) {
      const { rgbValue, hexValue } = newColors[color.varName];

      document.documentElement.style.setProperty(color.varName, rgbValue);
      currentHexColors[color.varName] = hexValue;
      currentColors[color.varName] = rgbValue;
    }
  });

  alert('模板配色汇入完成');
};

const handleFileUpload = (event) => {
  const file = event.target.files[0];
  const reader = new FileReader();

  reader.onload = (e) => {
    const fileContent = e.target.result;
    importColorVar(fileContent);
    event.target.value = '';
  };

  if (file) {
    reader.readAsText(file);
  }
};

const captureScreenshot = async (zip) => {
  const pageWrapElement = document.querySelector('.page-wrap');
  if (!pageWrapElement) {
    alert('未找到示意图的范围');
    return;
  }

  try {
    const blob = await toBlob(pageWrapElement);
    zip.file(`${getNuxtAppTitle()}示意图.png`, blob);
  } catch (err) {
    console.error('生成示意图失败', err);
  }
};

const captureSvgAsPng = async (zip) => {
  const svgElement = document.querySelector('.ele-logo-img');
  if (!svgElement) {
    alert('未找到 .ele-logo-img 元素');
    return;
  }

  try {
    const rootStyle = getComputedStyle(document.documentElement);
    const primaryColor = rootStyle.getPropertyValue('--color-primary') || '255 255 255';
    const rgbColor = `rgb(${primaryColor.trim()})`;

    const clonedSvg = svgElement.cloneNode(true);
    const paths = clonedSvg.querySelectorAll('path');

    paths.forEach((path) => {
      if (path.getAttribute('fill') === 'currentColor') {
        path.setAttribute('fill', rgbColor);
      }
    });

    const svgData = new XMLSerializer().serializeToString(clonedSvg);
    const svgBlob = new Blob([svgData], { type: 'image/svg+xml;charset=utf-8' });
    const svgUrl = URL.createObjectURL(svgBlob);

    const img = new Image();
    img.src = svgUrl;

    await new Promise((resolve, reject) => {
      img.onload = () => {
        const canvas = document.createElement('canvas');
        canvas.width = svgElement.clientWidth || 200;
        canvas.height = svgElement.clientHeight || 114;
        const ctx = canvas.getContext('2d');
        ctx.drawImage(img, 0, 0);

        canvas.toBlob((blob) => {
          if (blob) {
            zip.file(`image/logo.png`, blob);
            resolve();
          } else {
            reject(new Error('SVG 转换 PNG 失败'));
          }
        });
      };
      img.onerror = (err) => {
        console.error('图片加载失败', err);
        reject(err);
      };
    });

    URL.revokeObjectURL(svgUrl);
  } catch (err) {
    console.error('生成 PNG 图片失败', err);
  }
};

const addCssToZip = (zip) => {
  const colorVarTips = `/* ※注意 - Template number 汇入配色时会判断是否同一个版型，请勿删除 */\n`;
  const colorVarInfo = `/* Template number: ${getNuxtAppTitle()} */\n\n`;
  const colorVarContent = colorVarTips + colorVarInfo + generateColorVar();
  zip.file(`${getNuxtAppTitle()}配色.css`, colorVarContent);
};

const captureHtmlAndResources = async (zip) => {
  let htmlContent = document.documentElement.outerHTML;
  const parser = new DOMParser();
  const doc = parser.parseFromString(htmlContent, 'text/html');

  const imgTags = doc.querySelectorAll('img');
  const elementsWithBackground = doc.querySelectorAll('*[style*="background-image"]');
  const promises = [];

  const svgLogo = doc.querySelector('.ele-logo-img');
  if (svgLogo && svgLogo.tagName.toLowerCase() === 'svg') {
    const parent = svgLogo.parentElement;

    const imgElement = doc.createElement('img');
    imgElement.src = 'image/logo.png';
    imgElement.className = 'ele-logo-img';
    imgElement.width = svgLogo.getAttribute('width') || 200;
    imgElement.height = svgLogo.getAttribute('height') || 114;
    parent.replaceChild(imgElement, svgLogo);
  }

  imgTags.forEach((img) => {
    const imgUrl = img.src;

    if (img.src === 'logo.png') {
      return;
    }

    const imgFilename = imgUrl.substring(imgUrl.lastIndexOf('/') + 1);
    img.src = `image/${imgFilename}`;

    const promise = fetch(imgUrl)
      .then((response) => response.blob())
      .then((blob) => {
        zip.file(`image/${imgFilename}`, blob);
      });
    promises.push(promise);
  });

  elementsWithBackground.forEach((element) => {
    const style = element.getAttribute('style');
    const urlMatch = style.match(/url\(["']?(.*?)["']?\)/);

    if (urlMatch && urlMatch[1]) {
      const backgroundImageUrl = urlMatch[1];
      const imgFilename = backgroundImageUrl.substring(backgroundImageUrl.lastIndexOf('/') + 1);

      const newStyle = style.replace(backgroundImageUrl, `image/${imgFilename}`);
      element.setAttribute('style', newStyle);

      const promise = fetch(backgroundImageUrl)
        .then((response) => response.blob())
        .then((blob) => {
          zip.file(`image/${imgFilename}`, blob);
        });
      promises.push(promise);
    }
  });

  await Promise.all(promises);
  htmlContent = doc.documentElement.outerHTML;
  zip.file('index.html', htmlContent);
};

const saveColorVar = () => {
  const warningMessage = checkSameColors();
  if (warningMessage) {
    if (!confirm(warningMessage)) {
      return;
    }
  }

  const colorVarTips = `/* ※注意 - Template number 汇入配色时会判断是否同一个版型，请勿删除 */\n`;
  const colorVarInfo = `/* Template number: ${getNuxtAppTitle()} */\n\n`;
  const colorVarContent = colorVarTips + colorVarInfo + generateColorVar();

  const blob = new Blob([colorVarContent], { type: 'text/css' });
  const link = document.createElement('a');
  link.href = URL.createObjectURL(blob);
  link.download = `${getNuxtAppTitle()}.css`;
  link.click();
  URL.revokeObjectURL(link.href);
};

const saveImageAndCss = async () => {
  const warningMessage = checkSameColors();
  if (warningMessage) {
    if (!confirm(warningMessage)) {
      return;
    }
  }

  const zip = new JSZip();
  toggleEditMode();
  saveImage.value = true;

  await captureScreenshot(zip);
  addCssToZip(zip);

  toggleEditMode();
  saveImage.value = false;

  zip.generateAsync({ type: 'blob' }).then((content) => {
    const link = document.createElement('a');
    link.href = URL.createObjectURL(content);
    link.download = `${getNuxtAppTitle()}.zip`;
    link.click();
    URL.revokeObjectURL(link.href);
  });
};

const savePackage = async () => {
  const warningMessage = checkSameColors();
  if (warningMessage) {
    if (!confirm(warningMessage)) {
      return;
    }
  }

  const zip = new JSZip();
  toggleEditMode();
  saveImage.value = true;

  await captureScreenshot(zip);
  await captureSvgAsPng(zip);
  addCssToZip(zip);
  await captureHtmlAndResources(zip);

  toggleEditMode();
  saveImage.value = false;

  zip.generateAsync({ type: 'blob' }).then((content) => {
    const link = document.createElement('a');
    link.href = URL.createObjectURL(content);
    link.download = `${getNuxtAppTitle()}.zip`;
    link.click();
    URL.revokeObjectURL(link.href);
  });
};

const handleLogoUpload = (event) => {
  const file = event.target.files[0];
  if (!file) return;

  const validTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/gif'];
  if (!validTypes.includes(file.type)) {
    alert('请上传 JPG、PNG 或 GIF 格式的图片');
    event.target.value = '';
    return;
  }

  const img = new Image();
  const objectUrl = URL.createObjectURL(file);

  img.onload = () => {
    const [expectedWidth, expectedHeight] = mainStore.themeSize.logo
      .split('x')
      .map(Number);

    if (img.width !== expectedWidth || img.height !== expectedHeight) {
      alert(`Logo 图片尺寸必须为 ${mainStore.themeSize.logo} px`);
      URL.revokeObjectURL(objectUrl);
      event.target.value = '';
      return;
    }

    const reader = new FileReader();
    reader.onload = (e) => {
      const base64Data = e.target.result;
      if (mainStore.previewLogo && !mainStore.previewLogo.startsWith('data:')) {
        URL.revokeObjectURL(mainStore.previewLogo);
      }
      mainStore.setPreviewLogo(base64Data);
      URL.revokeObjectURL(objectUrl);
      event.target.value = '';
    };
    reader.readAsDataURL(file);
  };

  img.onerror = () => {
    alert('图片加载失败');
    URL.revokeObjectURL(objectUrl);
    event.target.value = '';
  };

  img.src = objectUrl;
};
</script>