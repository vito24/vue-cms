<template>
	<div class="sidebar">
        <Menu
            theme="dark"
            :active-name="curSidebar"
            width="auto"
            @on-select="routeTo">
            <template v-for="first in sidebarData">
                <Submenu :name="first.path" v-if="first.children">
                    <template slot="title">
                        <Icon type="ios-navigate"></Icon>
                        {{first.name}}
                    </template>
                    <Menu-item
                        v-for="(second, index) in first.children"
                        :name="second.path"
                        :class="curSidebar === second.path ? 'ivu-menu-item-active ivu-menu-item-selected is-active' : ''"
                        :key="second.path">
                        {{second.name}}
                    </Menu-item>
                </Submenu>
                <Menu-item
                    :name="first.path"
                    :class="curSidebar === first.path ? 'ivu-menu-item-active ivu-menu-item-selected is-active' : ''"
                    v-else>
                    {{first.name}}
                </Menu-item>
            </template>
        </Menu>
	</div>
</template>

<script>
    import sideBars from '@/router/sidebar'
	export default{
        name: 'sidebar',
		data () {
			return {

			}
		},
        methods: {
            routeTo (e) {
                this.$router.push(e);
            }
        },
        computed: {
            curSidebar () {
                return this.$route.path;
            },
            sidebarData () {
                const moudule = this.$route.path.split('/')[1];
                return sideBars[moudule];
            }
        }
	}
</script>

<style scoped>
    .sidebar {
        width: 230px;
        display: block;
        position: absolute;
        top: 60px;
        bottom: 10px;
        left: 10px;
        background: #2e363f;
        padding: 2px;
        border-radius: 5px;
    }
    .ivu-menu-dark.ivu-menu-vertical .ivu-menu-item-active:not(.ivu-menu-submenu),
    .ivu-menu-dark.ivu-menu-vertical .ivu-menu-submenu-title-active:not(.ivu-menu-submenu) {
        border-right: 3px solid #39f;
    }
</style>
