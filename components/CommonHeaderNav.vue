<template>
  <div class="mainnav-wrap">
    <nav class="ele-navbar">
      <ul>
        <li
          v-for="(item, index) in filteredNavItems"
          @mouseleave="hoverIndex = null"
          :key="index"
          :class="['ele-navbar-link-wrap', 'ele-navbar-link-' + item.class]"
          @mouseover="hoverIndex = index"
        >
          <!-- 如果 link 為空，渲染靜態文本 -->
          <template v-if="!item.link">
            <span class="ele-navbar-link">
              <p class="ele-navbar-title">{{ item.title }}</p>
            </span>
          </template>
          <!-- 否则，渲染 router-link -->
          <template v-else>
            <router-link
              :to="item.link ? `/${item.link}` : '/'"
              class="ele-navbar-link"
              :class="{ active: isActive(item.link) }"
            >
              <p class="ele-navbar-title">{{ item.title }}</p>
            </router-link>
          </template>
          <transition name="fade" appear>
            <nav v-if="hoverIndex === index && subNavItems[item.link]" class="ele-subnav">
              <div class="ele-subnav-container">
                <img v-if="getSubNavImage(item.link)" :src="getSubNavImage(item.link)" class="ele-subnav-title" alt="Subnav Image">
                <ul>
                  <li v-for="(subItem, subIndex) in subNavItems[item.link]" :key="subIndex">
                    <a :href="`/${item.link}`" :title="subItem.pn_name" class="ele-navbar-sublink">
                      <span class="ele-subnab-icon" :style="{ backgroundImage: `url('https://web.bbinpartner.com/images/subnav/${item.link}/${subItem.pn_logo}')` }"></span>
                      <p class="ele-subnab-title">{{ subItem.pn_name }}</p>
                    </a>
                  </li>
                </ul>
              </div>
            </nav>
          </transition>
        </li>
      </ul>
      <ul class="ele-morenav">
        <li
          v-for="(item, index) in mainStore.apiData.navItems.filter(item => item.class === 'morenav')"
          :key="index"
          class="ele-morenav-link-wrap"
          @mouseover="showMoreNav = true"
          @mouseleave="showMoreNav = false"
        >
          <a href="#" class="ele-morenav-sublink-title">
            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="18" viewBox="0 0 15 18"><path d="M12,18H3a3,3,0,0,1-3-3V3A3,3,0,0,1,3,0h9a3,3,0,0,1,3,3V15A3,3,0,0,1,12,18ZM3.637,8a.556.556,0,0,0-.367.142A.694.694,0,0,0,3,8.679V8.69a.809.809,0,0,0,.112.391l3.8,3.889a.873.873,0,0,0,.565.247.886.886,0,0,0,.565-.247l3.8-3.892a.809.809,0,0,0,.113-.39V8.676a.7.7,0,0,0-.271-.535A.563.563,0,0,0,11.335,8H11.3a.986.986,0,0,0-.574.276l-3.16,3.167L4.231,8.28A.97.97,0,0,0,3.637,8Z" fill="currentcolor"></path></svg>
          </a>
          <transition name="fade">
            <ul v-if="showMoreNav" class="ele-morenav-container">
              <li v-for="(subItem, subIndex) in item.subItems" :key="subIndex">
                <a :href="subItem.link" class="ele-morenav-sublink">{{ subItem.title }}</a>
              </li>
            </ul>
          </transition>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script setup>
import axios from 'axios'
import { useRoute } from 'vue-router'
import { useMainStore } from '@/stores/main';
const route = useRoute()
const mainStore = useMainStore();

const hoverIndex = ref(null)
const showMoreNav = ref(false)
const isActive = (link) => route.path === `/${link}`

const getSubNavImage = (link) => {
  if (!link || !subNavItems.value[link] || !subNavItems.value[link].length) {
    return null;
  }
  return `${mainStore.imageBasePath}/image/not-use/subnav/zh-cn/subnav_${link}_title.png`;
};

const subNavItems = shallowRef({
  ball: [],
  live: [],
  game: [],
  lottery: [],
  card: []
})

const filteredNavItems = computed(() => {
  return mainStore.apiData.navItems.filter(item => item.class !== 'morenav')
})

// 添加請求緩存
const cache = new Map();

const fetchNavData = async () => {
  const cacheKey = 'navData';
  if (cache.has(cacheKey)) {
    return cache.get(cacheKey);
  }

  try {
    const response = await axios.get('https://wms.bbinpartner.com/api/navs');
    const data = response.data;
    cache.set(cacheKey, data);
    return data;
  } catch (error) {
    console.error('Error fetching nav data:', error);
    throw error;
  }
};

onMounted(() => {
  fetchNavData()
    .then((data) => {
      // 將 API 回應的資料重新組織，替換鍵名
      subNavItems.value.ball = data.balls
      subNavItems.value.live = data.lives
      subNavItems.value.game = data.games
      subNavItems.value.lottery = data.lotterys
      subNavItems.value.card = data.cards
      subNavItems.value.mores = data.mores

      // console.log('Fetched and renamed subNavItems:', subNavItems.value)
    })
    .catch((error) => {
      console.log('Error fetching data:', error)
    })
})
</script>
