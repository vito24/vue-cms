<template>
	<div id="app">
		<vi-header></vi-header>
        <vi-sidebar></vi-sidebar>
        <div class="wrapper">
            <router-view class="content"></router-view>
        </div>
	</div>
</template>

<script>
	import ViHeader from './components/common/Header'
    import ViSidebar from './components/common/Sidebar'
	export default {
		name: 'app',
		data () {
		    return {

            }
        },
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
        background-color: #eee;
	}
	.wrapper {
		position: absolute;
		left: 250px;
		bottom: 10px;
		right: 0;
		top: 70px;
		width: auto;
        overflow-x: auto;
        border-radius: 5px;
	}
    .content {
        min-height: 100%;
        padding: 20px;
        background-color: #fff;
        border-radius: 5px;
    }
</style>
