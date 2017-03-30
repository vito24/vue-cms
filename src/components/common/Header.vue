<template>
	<div class="header">
		<el-menu
			theme="dark"
			default-active="home"
			class="el-menu-demo"
			mode="horizontal"
			@select="handleSelect"
			router>
			<div class="logo">BOSS</div>
			<el-menu-item index="home">首页</el-menu-item>
			<el-menu-item index="product-list">商品</el-menu-item>
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
		methods: {
			handleSelect(key, keyPath) {
				console.log(key, keyPath);
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
