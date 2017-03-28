<template>
	<div class="header">
		<el-menu 
			theme="dark" 
			:default-active="activeIndex" 
			class="el-menu-demo" 
			mode="horizontal" 
			@select="handleSelect"
			router>
			<div class="logo">BOSS</div>
			<el-menu-item index="1">首页</el-menu-item>
			<el-menu-item index="2">商品</el-menu-item>
			<el-submenu index="3">
				<template slot="title">产品中心</template>
				<el-menu-item index="3-1">选项1</el-menu-item>
				<el-menu-item index="3-2">选项2</el-menu-item>
				<el-menu-item index="3-3">选项3</el-menu-item>
			</el-submenu>
		</el-menu>
	</div>
</template>

<script>
	export default {
		name: 'header',
		data () {
			return {
				activeIndex: '2'
			}
		},
		methods: {
			handleSelect(key, keyPath) {
				console.log(key, keyPath);
			}
		},
		mounted () {
			console.log('=========', this.$route)
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
