<template>
	<div id="app">
		<vi-header></vi-header>
        <router-view name="sidebar" :sidebarData="sidebarData"></router-view>
		<router-view class="content"></router-view>
	</div>
</template>

<script>
	import ViHeader from './components/common/Header'
	export default {
		name: 'app',
		data () {
		    return {
		        sideBars: {
                    productList: [
                        {
                            index: 2,
                            title: '货物分类'
                        }, {
                            index: 3,
                            title: '货物管理'
                        }
                    ],
                    home: [
                        {
                            index: 1,
                            title: '首页1'
                        }, {
                            index: 2,
                            title: '首页2'
                        }
                    ]
                }
            }
        },
		components: {
			ViHeader
		},
        computed: {
            sidebarData () {
                return this.sideBars[this.$route.name]
            }
        },
        watch: {
            $route (newRoute, oldRoute) {
                const routeName = newRoute.name;
                if (this.sideBars[this.$route.name]) {
                    this.sidebarData = this.sideBars[this.$route.name];
                }
                console.log(999, routeName)
            }
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
