<template>
	<div class="header">
		<el-menu
			theme="dark"
			:default-active="curActive"
			class="el-menu-demo"
			mode="horizontal"
			router>
			<div class="logo">BOSS</div>
			<el-menu-item index="/home">首页</el-menu-item>
			<el-menu-item index="/product">商品</el-menu-item>
		</el-menu>
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
        }
	}
</script>

<style scoped>
	.logo {
		float: left;
		height: 60px;
		line-height: 60px;
		font-size: 20px;
		color: #FFF;
		margin-left: 10px;
	}
	.el-menu-demo {
		background-color: #242f42;
	}
	.el-menu {
		border-radius: 0;
	}
</style>
