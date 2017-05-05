<template>
	<div id="app">
        <router-view></router-view>
	</div>
</template>

<script>
	export default {
		name: 'app',
		data () {
		    return {

            }
        },
        methods: {
		    checkLogin () {
		        //检查是否登录
                if (!window.localStorage.aijiaUserdata) {
                    this.$router.push('/login')
                }
            }
        },
        watch: {
		    $route () {
                this.checkLogin();
            }
        },
        mounted() {
            this.checkLogin();
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
</style>
