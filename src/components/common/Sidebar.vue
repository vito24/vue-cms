<template>
    <Menu
        theme="dark"
        :active-name="activeSidebar"
        :open-names="openNames"
        width="auto"
        @on-select="routeTo">
        <template v-for="first in sidebarData">
            <Submenu :name="first.path" v-if="first.children">
                <template slot="title">
                    <Icon type="ios-navigate"></Icon>
                    {{first.name}}
                </template>
                <Menu-item
                    v-for="second in first.children"
                    :name="second.path"
                    :key="second.path">
                    {{second.name}}
                </Menu-item>
            </Submenu>
            <Menu-item
                :name="first.path"
                v-else>
                {{first.name}}
            </Menu-item>
        </template>
    </Menu>
</template>

<script>
    import sideBars from '@/config/sidebar'
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
            activeSidebar () {
                return this.$route.path;
            },
            sidebarData () {
                const moudule = this.$route.path.split('/')[1];
                return sideBars[moudule];
            },
            openNames () {
                const path = this.$route.path;
                if (path === '/product/product-list' || path === '/product/product-draft-manage') {
                    return ['productManage']
                }
                return [];
            }
        }
	}
</script>

<style scoped>
    .ivu-menu-vertical {
        height: 100%;
    }
</style>
