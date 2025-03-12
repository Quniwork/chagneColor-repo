<template>
  <footer class="page-footer">
    <div class="footer-wrap">
      <div class="footer-top-wrap">
        <div class="top-logo-wrap">
          <div class="title">游戏提供商</div>
          <img :src="`${mainStore.imageBasePath}/image/not-use/${footerLogos.logoBB}.png`" width="96px">
          <a href="#"><img :src="`${mainStore.imageBasePath}/image/not-use/ublogo/${footerLogos.logoUB}.png`" width="162px"></a>
          <img :src="`${mainStore.imageBasePath}/image/footer_img1.png`">
        </div>
        <div class="top-pay-wrap">
          <div class="title">支付渠道</div>
          <img :src="`${mainStore.imageBasePath}/image/footer_img2.png`">
        </div>
      </div>
      <div class="footer-middle-wrap">
        <div class="title">博彩牌照认证</div>
        <div class="middle-img">
          <img :src="`${mainStore.imageBasePath}/image/${mainStore.themeColor}/footer_img3.png`">
        </div>
        <div class="middle-text">
          <p>我们在越来越热的网络博彩市场中，不断地求新求变，寻找最新的创意，秉持最好的服务。以带给客户高品质的服务、产品、娱乐，是我们的企业永恒宗旨。</p>
        </div>
      </div>
      <div class="footer-bottom-wrap">
        <div class="copyright">Copyright © BBIN Reserved</div>
        <div class="bottom-link-wrap">
          <ul>
            <li v-for="(link, index) in mainStore.apiData.footerLinks" :key="index">
              <NuxtLink :to="link.link">
                {{ link.title }}
              </NuxtLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { useMainStore } from '@/stores/main';
const mainStore = useMainStore();
const colorThemes = mainStore.apiData.colorThemes;

const footerLogos = computed(() => {
  const currentTheme = colorThemes.find(theme => theme.themeName === mainStore.themeColor);

  if (currentTheme) {
    const [logoBB, logoUB] = currentTheme.footerLogo[0].split(', ').map(value => value.trim());
    return { logoBB, logoUB };
  }

  return { logoBB: 'default', logoUB: 'default' };
});
</script>
