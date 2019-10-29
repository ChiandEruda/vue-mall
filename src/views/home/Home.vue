<template>
  <div id="home">
    <nav-bar class="home-nav"><div slot='center'>商店</div></nav-bar>
    <home-swiper :banners='banners'></home-swiper>
    <recommend-view :recommends='recommends'></recommend-view>
    <feature-view></feature-view>
    <tab-control class="tab-control" :titles="['游戏', '软件', '硬件']" @tabClick='tabClick'></tab-control>
    <goods-list :goods="goods[currentType].list"></goods-list>
    <ul>
      <li>test</li>
      <li>test</li>
      <li>test</li>
      <li>test</li>
      <li>test</li>
      <li>test</li>
      <li>test</li>
      <li>test</li>
      <li>test</li>
      <li>test</li>
      <li>test</li>
      <li>test</li>
      <li>test</li>
      <li>test</li>
      <li>test</li>
      <li>test</li>
      <li>test</li>
      <li>test</li>
      <li>test</li>
      <li>test</li>
      <li>test</li>
      <li>test</li>
      <li>test</li>
      <li>test</li>
      <li>test</li>
      <li>test</li>
      <li>test</li>
      <li>test</li>
      <li>test</li>
      <li>test</li>
      <li>test</li>
      <li>test</li>
      <li>test</li>
      <li>test</li>
      <li>test</li>
      <li>test</li>
      <li>test</li>
      <li>test</li>
      <li>test</li>
      <li>test</li>
    </ul>
  </div>
</template>

<script>
import HomeSwiper from './childComps/HomeSwiper'
import RecommendView from './childComps/RecommendView'
import FeatureView from './childComps/FeatureView'

import NavBar from 'components/common/navbar/NavBar'
import TabControl from 'components/content/tabcontrol/TabControl'
import GoodsList from 'components/content/goods/GoodsList'

import {getHomeMultidata, getHomeGoods} from 'network/home'

export default {
  components: {
    HomeSwiper,
    RecommendView,
    FeatureView,
    NavBar,
    TabControl,
    GoodsList,
  },
  data() {
    return {
      banners: [],
      recommends: [],
      goods: {
        'game': {
          page: 0,
          list: [],
        },
        'software': {
          page: 0,
          list: [],
        },
        'hardware': {
          page: 0,
          list: [],
        },
      },
      currentType: 'game',
    }
  },
  methods: {
    // 点击监听
    tabClick(index) {
      switch(index) {
        case 0:
          this.currentType = 'game'
          break
        case 1:
          this.currentType = 'software'
          break
        case 2:
          this.currentType = 'hardware'
      }
    },

    // 数据请求方法
    getHomeMultidata() {
      getHomeMultidata().then(res => {
        this.banners = res.data.banner
        this.recommends = res.data.recommend
      })
    },
    getHomeGoods(type) {
      const page = this.goods[type].page + 1
      getHomeGoods(type, page).then(res => {
          console.log(res.good.list)
          this.goods[type].list.push(...res.good.list)
          this.goods[type].page += 1
      })
    }
  },
  created() {
    this.getHomeMultidata()
    this.getHomeGoods('game')
    this.getHomeGoods('software')
    this.getHomeGoods('hardware')
  },
}
</script>

<style scoped>
  #home {
    padding-top: 44px;
  }
  .home-nav {
    background-color: var(--color-tint);
    color: #ddd;

    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    z-index: 1;
  }
  .tab-control {
    position: sticky;
    top: 44px;
  }
</style>