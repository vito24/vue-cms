<template>
	<div>
		<el-menu 
			default-active="2" 
			class="el-menu-vertical-demo sidebar" 
			@open="handleOpen" 
			@close="handleClose" 
			theme="dark"
			router>
			<el-submenu index="1">
				<template slot="title">商品管理</template>
				<el-menu-item index="product-list">所有商品</el-menu-item>
				<el-menu-item index="product-draft-list">草稿箱</el-menu-item>
			</el-submenu>
			<el-menu-item index="2">货物分类</el-menu-item>
			<el-menu-item index="3">货物管理</el-menu-item>
		</el-menu>
	</div>
</template>
<style scoped>
	.sidebar {
		width: 250px;
		display: block;
		position: absolute;
		top: 60px;
		bottom: 0;
		left: 0;
		background: #2e363f;
	}
	.el-menu {
		border-radius: 0;
	}
</style>
<script>
	export default{
		data () {
			return {
				activeIndex: '1'
			}
		},
		methods: {
			handleOpen(key, keyPath) {
				console.log(key, keyPath);
			},
			handleClose(key, keyPath) {
				console.log(key, keyPath);
			}
		},
	}
</script>
