<template>
	<div class="header">
        <Menu mode="horizontal" theme="dark" :active-name="curActive" @on-select="routeTo">
            <div class="layout-logo"></div>
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
		<!--<el-menu-->
			<!--theme="dark"-->
			<!--:default-active="curActive"-->
			<!--class="el-menu-demo"-->
			<!--mode="horizontal"-->
			<!--router>-->
			<!--<div class="logo">BOSS</div>-->
			<!--<el-menu-item index="/home">首页</el-menu-item>-->
			<!--<el-menu-item index="/product">商品</el-menu-item>-->
		<!--</el-menu>-->
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
    .layout-logo{
        width: 100px;
        height: 30px;
        background: #5b6270;
        border-radius: 3px;
        float: left;
        position: relative;
        top: 15px;
        left: 20px;
    }
    .layout-nav{
        width: 420px;
        margin: 0 auto;
    }
</style>
