<template>
    <vi-article>
        <div class="hello">
            <Breadcrumb>
                <Breadcrumb-item>首页</Breadcrumb-item>
                <Breadcrumb-item>概况</Breadcrumb-item>
            </Breadcrumb>
        </div>
    </vi-article>
</template>

<script>
    import ViArticle from '../common/MainLayout'
	export default {
		name: 'hello',
		data () {
			return {
				msg: 'Home Page'
			}
		},
        components: {
            ViArticle
        }
	}
</script>

<style scoped>
	h1, h2 {
		font-weight: normal;
	}

	ul {
		list-style-type: none;
		padding: 0;
	}

	li {
		display: inline-block;
		margin: 0 10px;
	}

	a {
		color: #42b983;
	}
</style>
