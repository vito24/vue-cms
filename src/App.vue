<template>
	<div id="app">
		<vi-header></vi-header>
		<vi-sidebar></vi-sidebar>
		<router-view class="content"></router-view>
	</div>
</template>

<script>
	import ViHeader from './components/common/Header'
	import ViSidebar from './components/common/Sidebar'
	export default {
		name: 'app',
		components: {
			ViHeader,
			ViSidebar
		}
		
	}
</script>

<style>
	html, body, #app {
		width: 100%;
		height: 100%;
		overflow: hidden;
	}
	#app {
		font-family: 'Avenir', Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		color: #2c3e50;
	}
	.content {
		position: absolute;
		left: 250px;
		bottom: 0;
		right: 0;
		top: 60px;
		padding: 40px;
		width: auto;
	}
</style>
