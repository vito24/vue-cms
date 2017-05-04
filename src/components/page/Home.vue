<template>
    <vi-article>
        <div>
            <Breadcrumb>
                <Breadcrumb-item>首页</Breadcrumb-item>
                <Breadcrumb-item>概况</Breadcrumb-item>
            </Breadcrumb>
            <Row type="flex" justify="space-around" class="mt20">
                <i-col span="5">
                    <Card>
                        <p slot="title">商品</p>
                        <p class="count">{{data.productCount}}</p>
                        <router-link to="/product/product-list">
                            <Row type="flex" align="middle">
                                <i-col span="12">
                                    更多
                                </i-col>
                                <i-col span="12" class="text-right">
                                    <Icon type="chevron-right"></Icon>
                                </i-col>
                            </Row>
                        </router-link>
                    </Card>
                </i-col>
                <i-col span="5">
                    <Card>
                        <p slot="title">套装</p>
                        <p class="count">{{data.suitCount}}</p>
                        <Row type="flex" align="middle">
                            <i-col span="12">
                                更多
                            </i-col>
                            <i-col span="12" class="text-right">
                                <Icon type="chevron-right"></Icon>
                            </i-col>
                        </Row>
                    </Card>
                </i-col>
                <i-col span="5">
                    <Card>
                        <p slot="title">订单</p>
                        <p class="count">{{data.orderCount}}</p>
                        <Row type="flex" align="middle">
                            <i-col span="12">
                                更多
                            </i-col>
                            <i-col span="12" class="text-right">
                                <Icon type="chevron-right"></Icon>
                            </i-col>
                        </Row>
                    </Card>
                </i-col>
                <i-col span="5">
                    <Card>
                        <p slot="title">意见反馈</p>
                        <p class="count">{{data.adviceCount}}</p>
                        <Row type="flex" align="middle">
                            <i-col span="12">
                                更多
                            </i-col>
                            <i-col span="12" class="text-right">
                                <Icon type="chevron-right"></Icon>
                            </i-col>
                        </Row>
                    </Card>
                </i-col>
            </Row>
        </div>
    </vi-article>
</template>

<script>
    import ViArticle from '../common/MainLayout'
	export default {
		name: 'hello',
		data () {
			return {
				data: {}
			}
		},
        components: {
            ViArticle
        },
        mounted () {
            this.$http({
                method: 'post',
                url: '/admin/home/',
                data: {}
            }).then(response => {
                this.data = response.data.obj;
            });
        }
	}
</script>

<style scoped>
    .count {
        font-size: 20px;
        margin-bottom: 10px;
    }
    .text-right {
        text-align: right;
    }
</style>
