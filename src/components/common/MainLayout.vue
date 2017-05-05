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
        height: 50px;
    }
    .vi-sidebar {
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
        overflow-y: auto;
        position: absolute;
    }
</style>
