<template>
    <swiper>
      <swiper-item v-for="item in banners" :key="item.img">
        <img :src="item.img" alt="">
      </swiper-item>
    </swiper>
</template>

<script>
import {Swiper, SwiperItem} from 'components/common/swiper'

export default {
    components: {
        Swiper,
        SwiperItem,
    },
    props: {
        banners: {
            type: Array,
            default() {
                return []
            }
        }
    }
}
</script>

<style>

</style>