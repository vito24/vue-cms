<template>
    <Menu theme="dark" mode="horizontal" :active-name="currentActiveKey" @on-select="handleSelect">
        <router-link to="/">
            <img src="./../../assets/aijia-logo.png" class="logo">
        </router-link>
        <div class="nav-wrapper">
            <Menu-item name="home">
                <Icon type="ios-navigate"></Icon>
                首页
            </Menu-item>
            <Menu-item name="product">
                <Icon type="ios-keypad"></Icon>
                商品
            </Menu-item>
        </div>
    </Menu>
</template>

<script>
    import siderbar from '@/config/sidebar';

    export default {
        name: 'header',
        data () {
            return {
                currentActiveKey: this.activeKey
            };
        },
        props: {
            activeKey: String
        },
        watch: {
            activeKey (val) {
                this.currentActiveKey = val;
            }
        },
        methods: {
            handleSelect (type) {
                if (siderbar[type][0].children) {
                    this.$router.push(siderbar[type][0].children[0].path);
                } else {
                    this.$router.push(siderbar[type][0].path);
                }
                this.$nextTick(() => {
                    this.updateActiveNav(type);
                });
            },
            updateActiveNav (type) {
                this.currentActiveKey = type;
            }
        }
    };
</script>

<style>
    .logo {
        float: left;
        height: 30px;
        margin-top: 10px;
        margin-left: 10px;
    }
    .nav-wrapper {
        display: flex;
        justify-content: flex-end;
    }
</style>
