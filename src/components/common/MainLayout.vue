<template>
    <div class="wrapper">
        <div class="vi-header">
            <vi-header :active-key="activeKey"></vi-header>
        </div>
        <div class="vi-sidebar">
            <vi-sidebar :type="activeKey"></vi-sidebar>
        </div>
        <div class="vi-content">
            <slot></slot>
        </div>
        <Back-top></Back-top>
    </div>
</template>

<script>
    import ViHeader from './Header'
    import ViSidebar from './Sidebar'
    export default {
        data () {
            return {
                activeKey: ''
            }
        },
        components: {
            ViHeader,
            ViSidebar
        },
        methods: {
            updateActiveNav () {
                this.activeKey = this.$route.path.split('/')[1];
            }
        },
        mounted () {
            this.updateActiveNav();
        }
    }
</script>

<style scoped>
    .vi-header {
        width: 100%;
        height: 50px;
        position: fixed;
        z-index: 4;
    }
    .vi-sidebar {
        width: 16%;
        height: 100%;
        position: fixed;
        top: 50px;
    }
    .vi-content {
        margin-left: 16%;
        padding: 70px 20px 20px;
    }
</style>
