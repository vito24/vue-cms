<template>
    <vi-article>
        <Breadcrumb>
            <Breadcrumb-item>首页</Breadcrumb-item>
            <Breadcrumb-item>用户反馈</Breadcrumb-item>
        </Breadcrumb>
        <Table border :context="self" :columns="columns" :data="feedbackData.list" class="mt20"></Table>
        <Page
            class="vi-pagnation"
            :total="feedbackData.totalRecords"
            :page-size="pageSize"
            show-total
            show-elevator
            @on-change="handlePageChange">
        </Page>
    </vi-article>
</template>

<script>
    import ViArticle from '@/components/common/MainLayout'
    export default {
        data () {
            return {
                self: this,
                pageNo: 1,
                pageSize: 10,
                columns: [
                    {
                        title: '编号',
                        key: 'id',
                        align: 'center',
                        width: 80
                    }, {
                        title: '内容',
                        key: 'content',
                        width: 400
                    }, {
                        title: '用户',
                        key: 'userName',
                        align: 'center'
                    }, {
                        title: '电话',
                        key: 'phoneNumber',
                        align: 'center'
                    }, {
                        title: '类型',
                        key: 'type',
                        align: 'center',
                        width: 80
                    }, {
                        title: '时间',
                        key: 'feedbackTime',
                        align: 'center'
                    }
                ],
                feedbackData: {}
            }
        },
        components: {
            ViArticle
        },
        methods: {
            handlePageChange (pageNo) {
                this.pageNo = pageNo;
                this.queryFeedback();
            },
            queryFeedback () {
                let formData = new FormData();
                formData.append('pageNo', this.pageNo);
                formData.append('pageSize', this.pageSize);
                this.$http({
                    method: 'post',
                    url: '/feedback/query/',
                    data: formData
                }).then(response => {
                    this.feedbackData = response.data.obj;
                });
            }
        },
        mounted () {
            this.queryFeedback();
        }
    }
</script>

<style scoped>

</style>
