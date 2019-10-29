<template>
  <div id="goods">
      <goods-list-item v-for="good in goods" :key="good.index" :good='good'></goods-list-item>
  </div>
</template>

<script>
import GoodsListItem from './GoodsListItem'

export default {
    components: {
        GoodsListItem,
    },
    props: {
        goods: {
            type: Array,
            default() {
                return []
            }
        }
    }
}
</script>

<style>
    #goods {
        display: flex;
        flex-wrap: wrap;
        text-align: center;
    }
</style>