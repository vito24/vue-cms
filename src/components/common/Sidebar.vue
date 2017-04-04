<template>
	<div>
        <el-menu
            :default-active="curSidebar"
            class="el-menu-vertical-demo sidebar"
            theme="dark"
            router>
            <template
                v-for="first in sidebarData">
                <el-submenu :index="first.index" v-if="first.children">
                    <template slot="title">{{first.name}}</template>
                    <el-menu-item
                        v-for="(second, index) in first.children"
                        :index="second.index"
                        :class="curSidebar === second.index ? 'is-active' : ''"
                        :key="index">
                        {{second.name}}
                    </el-menu-item>
                </el-submenu>
                <el-menu-item
                    :index="first.index"
                    :class="curSidebar === first.index ? 'is-active' : ''"
                    v-else>
                    {{first.name}}
                </el-menu-item>
            </template>
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
    import sideBars from '@/router/sidebar'
	export default{
        name: 'sidebar',
		data () {
			return {
                curSidebar: this.$route.path
			}
		},
        computed: {
            sidebarData () {
                const moudule = this.$route.path.split('/')[1];
                return sideBars[moudule];
            }
        },
        watch: {
            $route (newRoute, oldRoute) {
                const module = newRoute.path.split('/')[1];
                this.sidebarData = sideBars[module];
                this.curSidebar = newRoute.path;
            }
        }
	}
</script>
