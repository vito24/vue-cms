<template>
	<div id="app">
		<vi-header></vi-header>
        <Row class="vi-wrapper">
            <i-col span="4" class="vi-sidebar">
                <vi-sidebar></vi-sidebar>
            </i-col>
            <i-col span="20" class="vi-content">
                <router-view></router-view>
            </i-col>
        </Row>
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
    .vi-wrapper, .vi-sidebar, .vi-content {
        height: 100% !important;
    }
    .vi-content {
        padding: 20px;
        background-color: #fff;
        border-radius: 5px;
        overflow-y: auto;
    }
</style>
