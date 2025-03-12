<template>
  <div class="first-hotgame-warp">
    <div class="hotgame-title">
      热门游戏<span>Hot Games</span>
    </div>
    <div class="hotgame-warp">
      <Swiper
        :modules="[SwiperAutoplay, SwiperEffectCreative, SwiperPagination]"
        :pagination="true"
        :slides-per-view="1"
        :autoplay="{
          delay: 8000,
          disableOnInteraction: true,
        }"
      >
        <swiper-slide>
          <div class="hotgame-item-warp">
            <div
              class="hotgame-item"
              v-for="(game, index) in hotGames.slice(0, 5)"
              :key="index"
            >
              <div class="hotgame-rank">
                <img
                  :src="`${mainStore.imageBasePath}/image/ic_crown0${index + 1}.png`"
                  :title="`top${index + 1}`"
                  v-if="index + 1 <= 3"
                />
                <span v-else>{{ index + 1 }}</span>
              </div>
              <div class="hotgame-icon">
                <img
                  :src="`${mainStore.imageBasePath}/image/hotgame_icon${String(
                    index + 1
                  ).padStart(2, '0')}.png`"
                />
              </div>
              <div class="hotgame-name">
                <div class="hotgame-name-top">{{ game.nameTop }}</div>
                <div class="hotgame-name-bottom">{{ game.nameBottom }}</div>
              </div>
              <div class="hotgame-number">
                <span>{{ game.number }}</span>
              </div>
            </div>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="hotgame-item-warp">
            <div
              class="hotgame-item"
              v-for="(game, index) in hotGames.slice(5, 10)"
              :key="index + 5"
            >
              <div class="hotgame-rank">
                <img
                  :src="`${mainStore.imageBasePath}/image/ic_crown0${index + 6}.png`"
                  :title="`top${index + 6}`"
                  v-if="index + 6 <= 3"
                />
                <span v-else>{{ index + 6 }}</span>
              </div>
              <div class="hotgame-icon">
                <img
                  :src="`${mainStore.imageBasePath}/image/hotgame_icon${String(
                    index + 6
                  ).padStart(2, '0')}.png`"
                />
              </div>
              <div class="hotgame-name">
                <div class="hotgame-name-top">{{ game.nameTop }}</div>
                <div class="hotgame-name-bottom">{{ game.nameBottom }}</div>
              </div>
              <div class="hotgame-number">
                <span>{{ game.number }}</span>
              </div>
            </div>
          </div>
        </swiper-slide>
      </Swiper>
    </div>
  </div>
</template>

<script setup>
import { useMainStore } from '@/stores/main';
const mainStore = useMainStore();

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
</script>