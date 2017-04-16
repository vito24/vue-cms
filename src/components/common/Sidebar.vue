<template>
	<div class="sidebar">
        <Menu
            theme="dark"
            :active-name="curSidebar"
            width="auto"
            :open-names="['product']"
            @on-select="routeTo">
            <template v-for="first in sidebarData">
                <Submenu name="product" v-if="first.children">
                    <template slot="title">
                        <Icon type="ios-navigate"></Icon>
                        {{first.name}}
                    </template>
                    <Menu-item
                        v-for="(second, index) in first.children"
                        :name="second.index"
                        :class="curSidebar === second.index ? 'ivu-menu-item-active ivu-menu-item-selected is-active' : ''"
                        :key="index">
                        {{second.name}}
                    </Menu-item>
                </Submenu>
                <Menu-item
                    :name="first.index"
                    :class="curSidebar === first.index ? 'ivu-menu-item-active ivu-menu-item-selected is-active' : ''"
                    v-else>
                    {{first.name}}
                </Menu-item>
            </template>
        </Menu>
	</div>
</template>
<style scoped>
	.sidebar {
		width: 230px;
		display: block;
		position: absolute;
		top: 60px;
		bottom: 0;
		left: 0;
		background: #2e363f;
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
        methods: {
            routeTo (e) {
                this.$router.push(e);
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
