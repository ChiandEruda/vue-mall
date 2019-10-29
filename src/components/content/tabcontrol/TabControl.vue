<template>
  <div id="tab-control">
      <div class='control-item' v-for="(item, index) in titles" :key='item.index' :class="{active: index === currentIndex}" @click="itemClick(index)">
          <span>{{ item }}</span>
      </div>
  </div>
</template>

<script>
export default {
    props: {
        titles: {
            type: Array,
            default() {
                return []
            }
        }
    },
    data() {
        return {
            currentIndex: 0,
        }
    },
    methods: {
        itemClick(index) {
            this.currentIndex = index
            this.$emit('tabClick', index)
        }
    }
}
</script>

<style scoped>
    #tab-control {
        display: flex;
        text-align: center;
        font-size: 15px;
        height: 40px;
        line-height: 40px;
        background-color: #fff;
        z-index: 1;
    }

    .control-item {
        flex: 1;
    }

    .control-item span {
        padding: 5px;
    }

    .active {
        color: var(--color-hight-text);
    }

    .active span {
        border-bottom: 3px solid var(--color-tint);
    }
</style>