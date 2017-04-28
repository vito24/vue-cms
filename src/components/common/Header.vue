<template>
    <Menu theme="dark" mode="horizontal" :active-name="currentActiveKey" @on-select="handleSelect">
        <Menu-item name="home">
            <Icon type="ios-navigate"></Icon>
            首页
        </Menu-item>
        <Menu-item name="product">
            <Icon type="ios-keypad"></Icon>
            商品
        </Menu-item>
    </Menu>
</template>

<script>
    import navigate from './navigate';

    export default {
        props: {
            activeKey: String
        },
        data () {
            return {
                search: '',
                navigateList: [],
                liveDot: false,
                currentActiveKey: this.activeKey
            };
        },
        watch: {
            activeKey (val) {
                this.currentActiveKey = val;
            },
            currentActiveKey (val) {
                this.$emit('on-change', val);
            }
        },
        methods: {
            handleSelect (type) {
                this.$router.push(navigate[type][0].path);
                this.$nextTick(() => {
                    this.updateActiveNav(type);
                });
            },
            updateActiveNav (type) {
                this.currentActiveKey = type;
            }
        },
        created () {
            let list = [];
            for (let i = 0; i < navigate.components.length; i++) {
                for (let j = 0; j < navigate.components[i].list.length; j++) {
                    list.push(navigate.components[i].list[j]);
                }
            }
            this.navigateList = list;
        }
    };
</script>

<style>

</style>
