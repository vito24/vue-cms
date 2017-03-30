<template>
	<div>
        <el-menu
            :default-active="$route.name"
            class="el-menu-vertical-demo sidebar"
            @open="handleOpen"
            @close="handleClose"
            theme="dark"
            router>
            <template
                v-for="first in sidebarData">
                <el-submenu :index="first.index" v-if="first.children">
                    <template slot="title">{{first.name}}</template>
                    <el-menu-item
                        v-for="(second, index) in first.children"
                        :index="second.index"
                        :key="index">
                        {{second.name}}
                    </el-menu-item>
                </el-submenu>
                <el-menu-item
                    :index="first.index"
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
    const sideBars = {
        productList: [
            {
                index: '1',
                name: '商品管理',
                children: [
                    {
                        index: 'product-list',
                        name: '所有商品'
                    }, {
                        index: '1-2',
                        name: '草稿箱'
                    }
                ]
            }, {
                index: '2',
                name: '货物分类'
            }, {
                index: '3',
                name: '货物管理'
            }
        ],
        home: [
            {
                index: 'home',
                name: '首页1'
            }, {
                index: 'home2',
                name: '首页2'
            }
        ]
    };
	export default{
		data () {
			return {
                sidebarData: sideBars[this.$route.name]
			}
		},
        methods: {
			handleOpen(key, keyPath) {
				console.log(key, keyPath);
			},
			handleClose(key, keyPath) {
				console.log(key, keyPath);
			}
		},
        watch: {
            $route (newRoute, oldRoute) {
                const routeName = newRoute.name;
                if (sideBars[routeName]) {
                    this.sidebarData = sideBars[routeName];
                }
            }
        }
	}
</script>
