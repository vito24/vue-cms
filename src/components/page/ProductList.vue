<template>
	<div class="product-list">
		<el-breadcrumb separator="/">
			<el-breadcrumb-item>商品</el-breadcrumb-item>
			<el-breadcrumb-item>商品管理</el-breadcrumb-item>
			<el-breadcrumb-item>所有商品</el-breadcrumb-item>
		</el-breadcrumb>
		<div>
			<h1>{{ msg }}</h1>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'productList',
		data () {
			return {
				msg: 'product list'
			}
		}
	}
</script>

<style scoped>
	
</style>
