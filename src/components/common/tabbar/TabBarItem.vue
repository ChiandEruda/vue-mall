<template>
    <div class='tab-bar-item' @click="clickItem">
        <div v-if='!isActive'><slot name='item-icon'></slot></div>
        <div v-else><slot name='item-icon-active'></slot></div>
        <div :style='activeStyle'><slot name="item-text"></slot></div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            // isActive: false,
        }
    },
    props: {
        path: String,
        activeColor: {
            type: String,
            default: '#d81e06',
        }
    },
    methods: {
        clickItem() {
            this.$router.replace(this.path)
        }
    },
    computed: {
        isActive() {
            return !this.$route.path.indexOf(this.path)
        },
        activeStyle() {
            return this.isActive? {color: this.activeColor} : {}
        }
    }
}
</script>

<style>
    .tab-bar-item {
        flex: 1;
        text-align: center;
        height: 49px;
    }

    .tab-bar-item img {
        margin-top: 3px;
        vertical-align: middle;
        width: 24px;
        height: 24px;
    }

    /* .active {
        color: #d81e06;
    } */
</style>