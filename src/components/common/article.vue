<template>
    <div class="wrapper">
        <div class="vi-header">
            <nav-menu :active-key="activeKey" @on-change="handleNavMenuChange"></nav-menu>
        </div>
        <div class="vi-navigate">
            <Navigate :type="activeKey"></Navigate>
        </div>
        <div class="vi-content">
            <slot></slot>
        </div>
    </div>
</template>

<script>
    import NavMenu from './Header'
    import Navigate from './Sidebar'
    export default {
        data () {
            return {
                donate: false,
                ask: false,
                activeKey: ''
            }
        },
        components: {
            NavMenu,
            Navigate
        },
        methods: {
            updateActiveNav () {
                this.activeKey = this.$route.path.split('/')[1];
            },
            handleNavMenuChange (val) {
                this.activeKey = val;
            }
        },
        mounted () {
            this.updateActiveNav();
        }
    }
</script>

<style scoped>
    .vi-header {
        height: 50px;
    }
    .vi-navigate {
        width: 18%;
        height: 100%;
        position: absolute;
    }
    .vi-content {
        width: 82%;
        padding: 20px;
        left: 18%;
        bottom: 0;
        top: 50px;
        background-color: #fff;
        border-radius: 5px;
        overflow-y: auto;
        position: absolute;
    }
</style>
