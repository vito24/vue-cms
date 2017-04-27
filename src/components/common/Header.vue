<template>
    <Menu mode="horizontal" theme="dark" :active-name="curActive" @on-select="routeTo">
        <router-link to="/" class="nav-logo">
            <img src="./../../assets/aijia-logo.png">
        </router-link>
        <div class="layout-nav">
            <Menu-item name="/home">
                <Icon type="ios-navigate"></Icon>
                首页
            </Menu-item>
            <Menu-item name="/product">
                <Icon type="ios-keypad"></Icon>
                商品
            </Menu-item>
        </div>
    </Menu>
</template>

<script>
	export default {
		name: 'header',
		data () {
			return {

			}
		},
        computed: {
            curActive () {
                const module = this.$route.path.split('/')[1];
                return `/${module}`;
            }
        },
        methods: {
            routeTo (e) {
                this.$router.push(e);
            }
        }
	}
</script>

<style scoped>
    .nav-logo {
        height: 30px;
        margin-top: 10px;
        margin-left: 20px;
        float: left;
    }
    .nav-logo img {
        height: 30px;
    }
    .layout-nav{
        display: flex;
        justify-content: flex-end;
    }
</style>
