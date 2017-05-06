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
        height: 100%;
    }
    input:-webkit-autofill {
        -webkit-box-shadow: 0 0 0 1000px #fff inset !important;
    }
</style>
