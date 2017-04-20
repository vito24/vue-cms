<template>
	<div class="header">
        <Menu mode="horizontal" theme="dark" :active-name="curActive" @on-select="routeTo">
            <div class="layout-nav">
                <Menu-item name="/home">
                    <Icon type="ios-navigate"></Icon>
                    首页
                </Menu-item>
                <Menu-item name="/product">
                    <Icon type="ios-keypad"></Icon>
                    商品
                </Menu-item>
            </div>
        </Menu>
	</div>
</template>

<script>
	export default {
		name: 'header',
		data () {
			return {

			}
		},
        computed: {
            curActive () {
                const module = this.$route.path.split('/')[1];
                return `/${module}`;
            }
        },
        methods: {
            routeTo (e) {
                this.$router.push(e);
            }
        }
	}
</script>

<style scoped>
    .header .ivu-menu-dark {
        background: #2e363f;
    }
    .layout-nav{
        display: flex;
        justify-content: flex-end;
    }
</style>
