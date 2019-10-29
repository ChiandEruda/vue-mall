<template>
  <div class="recommend">
      <a href="" class="recommend-item" v-for="item in recommends" :key="item.img">
          <img :src="item.img" alt="">
          <div>{{ item.title }}</div>
      </a>
  </div>
</template>

<script>
export default {
    props: {
        recommends: {
            type: Array,
            default() {
                return []
            },
        }
    }
}
</script>

<style scoped>
    .recommend {
        display: flex;
        font-size: 14px;
        padding: 10px 0 20px;
        border-bottom: 8px solid #eee;
    }

    .recommend-item {
        flex: 1;
        text-align: center;
    }

    .recommend-item img{
        border-radius: 50%;
        margin-bottom: 10px;
    }
</style>