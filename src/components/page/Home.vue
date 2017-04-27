<template>
	<div class="hello">
        <Breadcrumb>
            <Breadcrumb-item>首页</Breadcrumb-item>
            <Breadcrumb-item>概况</Breadcrumb-item>
        </Breadcrumb>
	</div>
</template>

<script>
	export default {
		name: 'hello',
		data () {
			return {
				msg: 'Home Page'
			}
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
