<template>
  <div class="page-container">
    <section class="first-section-wrap section1">
      <div class="section-wrap">
        <div class="first-top-wrap">
          <div class="first-slider-wrap">
            <CommonSlider />
            <div class="first-promotion-warp">
              <a v-for="index in [1, 2]" :key="index" href="#" class="first-promotion-promotion"
                @mouseover="promotionHover = index" @mouseout="promotionHover = null">
                <img
                  :src="`${mainStore.imageBasePath}/image/${mainStore.themeColor}/lang/zh-cn/btn0${index}${promotionHover === index ? '_hover' : ''}.png`"
                  :alt="`Promotion ${index}`" />
              </a>
            </div>
          </div>
          <CommonNews class="isFirst" />
        </div>
        <CommonHotGame />
      </div>
    </section>
    <section class="first-section-wrap section2">
      <div class="section-wrap">
        <div class="first-casino-wrap">
          <div class="casino-tab-wrap">
            <button v-for="(tab, key) in firstGame" :key="key" class="tab" :class="{ active: activeTab === key }"
              @click="activeTab = key">
              <span>{{ tab.label }}</span>
            </button>
          </div>
          <transition name="fade" mode="out-in">
            <div class="casino-wrap" v-if="firstGame[activeTab]?.game?.length">
              <a href="#" class="game-item" v-for="(game, index) in firstGame[activeTab].game" :key="index">
                <div class="item-img">
                  <button class="item-btn">Play</button>
                  <img :src="`${mainStore.imageBasePath}/image/game_${activeTab}/${game.image}`" />
                </div>
                <div class="item-name">
                  <div class="name">{{ game.name }}</div>
                  <div v-if="game.hot" class="hot">HOT</div>
                </div>
                <div class="item-platform">{{ game.platform }}</div>
              </a>
            </div>
          </transition>
        </div>
      </div>
    </section>
    <section class="first-section-wrap section3">
      <div class="section-wrap">
        <div class="first-live-wrap">
          <div class="live-wrap">
            <a href="#" class="live-item">
              <div class="live-item-top">
                <button class="item-btn">进入游戏</button>
                <div class="item-text">
                  <div class="title">BB视讯</div>
                  <div class="description">
                    <p>全球最佳视讯直播平台，真人荷官在线发牌，画面真实高清，给您亲临赌场的真实爽快感受！</p>
                    <p class="text-red">包桌百家乐・经典百家乐・竟咪百家乐</p>
                  </div>
                </div>
                <img :src="`${mainStore.imageBasePath}/image/${mainStore.themeColor}/btn_live01.png`">
              </div>
              <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="579px"
                height="271px">
                <path fill-rule="evenodd" fill="currentColor"
                  d="M20.000,49.1000 L559.000,0.000 C570.046,0.000 578.1000,8.954 578.1000,19.1000 L578.1000,251.000 C578.1000,262.046 570.046,270.1000 559.000,270.1000 L20.000,270.1000 C8.954,270.1000 0.000,262.046 0.000,251.000 L0.000,70.000 C0.000,58.954 8.954,49.1000 20.000,49.1000 Z" />
              </svg>
            </a>
            <a href="#" class="live-item" :style="{
              backgroundImage: `url(${mainStore.imageBasePath}/image/${mainStore.themeColor}/btn_live02.png)`,
              '--color-first-live-line': '#02AC63'
              }">
              <button class="item-btn">Play</button>
              <div class="item-text">
                <div class="title">AG视讯</div>
                <div class="description">
                  <p>实体赌场真人荷官现场发牌</p>
                </div>
              </div>
            </a>
            <a href="#" class="live-item" :style="{
              backgroundImage: `url(${mainStore.imageBasePath}/image/${mainStore.themeColor}/btn_live03.png)`,
              '--color-first-live-line': '#F5B443'
              }">
              <button class="item-btn">Play</button>
              <div class="item-text">
                <div class="title">DB视讯</div>
                <div class="description">
                  <p>网上体验亲临赌场的刺激</p>
                </div>
              </div>
            </a>
            <a href="#" class="live-item" :style="{
              backgroundImage: `url(${mainStore.imageBasePath}/image/${mainStore.themeColor}/btn_live04.png)`,
              '--color-first-live-line': '#3E56E1'
              }">
              <button class="item-btn">Play</button>
              <div class="item-text">
                <div class="title">MG视讯</div>
                <div class="description">
                  <p>给你身临其境的真实感受</p>
                </div>
              </div>
            </a>
            <a href="#" class="live-item" :style="{
              backgroundImage: `url(${mainStore.imageBasePath}/image/${mainStore.themeColor}/btn_live05.png)`,
              '--color-first-live-line': '#45DDF6'
              }">
              <button class="item-btn">Play</button>
              <div class="item-text">
                <div class="title">BG视讯</div>
                <div class="description">
                  <p>最美荷官在线互动</p>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
    <section class="first-section-wrap section4">
      <div class="section-wrap">
        <div class="first-mob-wrap">
          <div class="mob-left-wrap">
            <div class="title">
              体验极致 手机投注APP
            </div>
            <div class="description">
              原生APP，便捷登录、操作简单、界面一目了然、游戏畅通无阻、丰富的游戏品类、24小时多平台无缝应用体验。指尖App无处不在，带您开启掌上精彩！
            </div>
            <div class="download">
              <div class="download-qrcode">
                <img :src="mainStore.isLoggedIn
                      ? `${mainStore.imageBasePath}/image/not-use/qrcode.jpg` 
                      : `${mainStore.imageBasePath}/image/not-use/lang/zh-cn/qrcode_d.png`" class="img img-qrcode" />
                <p>扫码下载App<br>iOS & Android</p>
              </div>
              <div class="download-h5">
                <svg xmlns="http://www.w3.org/2000/svg" width="107.743" height="122.708" viewBox="0 0 107.743 122.708">
                  <path id="Path_15" data-name="Path 15"
                    d="M21.169,22.78h69L88.842,36.913H37.466L38.63,50.049H87.512L84.02,91.616,55.088,99.929,27.322,91.783l-2-20.951H39.295l1.164,9.312L55.088,84.8l15.461-4.654.832-16.129H24.5ZM.552.5,11.359,110.4l43.564,12.8,44.56-13.3L108.295.5Z"
                    transform="translate(-0.552 -0.5)" fill="currentColor" />
                </svg>
                <p>无需下载，扫码直接访问<br><span class="text-primary">web.bbinpartner.com</span></p>
              </div>
            </div>
          </div>
          <div class="mob-right-wrap">
            <img :src="`${mainStore.imageBasePath}/image/${mainStore.themeColor}/bg_mobile.png`">
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { useMainStore } from '@/stores/main';
const mainStore = useMainStore();

// 優惠圖切換 hover
const promotionHover = ref(null);

// 熱門遊戲
const hotGames = ref([
  { "nameTop": "真人百家樂", "nameBottom": "Live Casino", "number": "243,062" },
  { "nameTop": "麻將胡了", "nameBottom": "Casino", "number": "158,772" },
  { "nameTop": "糖果派對", "nameBottom": "Casino", "number": "128,772" },
  { "nameTop": "六合彩", "nameBottom": "Lottery", "number": "98,772" },
  { "nameTop": "捕魚遊戲", "nameBottom": "Fish Game", "number": "56,772" },
  { "nameTop": "牛牛", "nameBottom": "Card game", "number": "43,062" },
  { "nameTop": "英雄联盟", "nameBottom": "E-sports", "number": "28,772" },
  { "nameTop": "足球联赛", "nameBottom": "Sports", "number": "18,772" },
  { "nameTop": "3D彩", "nameBottom": "Lottery", "number": "9,772" },
  { "nameTop": "连环夺宝", "nameBottom": "Casino", "number": "6,772" }
]);
const isActive = ref(1);
const transformStyle = ref('transform: translateX(0);');

function setTransform(translateX, btnIndex) {
  transformStyle.value = `transform: translateX(${translateX}%);`;
  isActive.value = btnIndex;
}

let startX = 0;
let initialTransform = 0;
let dragging = false;

function onMouseDown(event) {
  startX = event.clientX;
  initialTransform = isActive.value === 1 ? 0 : -50;
  dragging = true;

  window.addEventListener('mousemove', onMouseMove);
  window.addEventListener('mouseup', onMouseUp);
}

function onMouseMove(event) {
  if (!dragging) return;
  const deltaX = event.clientX - startX;
  const newTransform = initialTransform + (deltaX / window.innerWidth) * 100;
  transformStyle.value = `transform: translateX(${newTransform}%);`;
}

function onMouseUp(event) {
  if (!dragging) return;
  dragging = false;
  const deltaX = event.clientX - startX;

  if (deltaX < -50) {
    setTransform(-50, 2);
  } else if (deltaX > 50) {
    setTransform(0, 1);
  } else {
    setTransform(initialTransform, isActive.value);
  }

  window.removeEventListener('mousemove', onMouseMove);
  window.removeEventListener('mouseup', onMouseUp);
}

onBeforeUnmount(() => {
  window.removeEventListener('mousemove', onMouseMove);
  window.removeEventListener('mouseup', onMouseUp);
});


// 首頁遊戲
const activeTab = ref('casino');
const firstGame = ref({
  casino: {
    label: 'Casino',
    game: [
      {"name": "糖果派對", "platform": "BB電子", "image": "5902.png", "hot": true},
      {"name": "賞金女王", "platform": "PG電子", "image": "58069.png", "hot": true},
      {"name": "聚寶消消樂", "platform": "BB電子", "image": "5231.jpg", "hot": false},
      {"name": "麻將胡了", "platform": "PG電子", "image": "58045.png", "hot": true},
      {"name": "發財神2", "platform": "CQ9電子", "image": "52177.png", "hot": false},
      {"name": "阿斯加德之火", "platform": "MG電子", "image": "82497.png", "hot": false},
      {"name": "糖果派對2", "platform": "BB電子", "image": "5908.png", "hot": false},
      {"name": "冰球突破", "platform": "MG電子", "image": "82033.png", "hot": false}
    ]
  },
  fishing: {
    label: 'Fishing',
    game: [
      { "name": "五龙捕鱼", "platform": "JDB电子", "image": "39099.png", "hot": true },
      { "name": "龙王捕鱼", "platform": "JDB电子", "image": "39047.png", "hot": true },
      { "name": "捕鱼王3D", "platform": "AG电子", "image": "40116.png", "hot": false },
      { "name": "捕鱼乐园", "platform": "AG电子", "image": "40186.png", "hot": true },
      { "name": "财神捕鱼", "platform": "JDB电子", "image": "39064.png", "hot": false },
      { "name": "猎龙传说", "platform": "BB电子", "image": "30594.png", "hot": false },
      { "name": "捕鱼大师", "platform": "BB电子", "image": "38001.png", "hot": false },
      { "name": "魔鬼克星", "platform": "BB电子", "image": "30592.png", "hot": false }
    ]
  },
  card: {
    label: 'Card game',
    game: [
      { "name": "火箭鸟", "platform": "WG棋牌", "image": "151037.png", "hot": false },
      { "name": "财神发发发", "platform": "开元棋牌", "image": "49965.png", "hot": false },
      { "name": "21点百家乐", "platform": "BB棋牌", "image": "66104.png", "hot": false },
      { "name": "玛雅神殿", "platform": "WG棋牌", "image": "151038.png", "hot": false },
      { "name": "炸财神", "platform": "开元棋牌", "image": "49964.png", "hot": false },
      { "name": "红黑大战", "platform": "BB棋牌", "image": "66078.png", "hot": false },
      { "name": "捕鱼高手", "platform": "BB棋牌", "image": "66068.png", "hot": false },
      { "name": "抢庄牌九", "platform": "TP棋牌", "image": "140009.png", "hot": false }
    ]
  }
});
</script>
